const express = require('express');
const axios = require('axios');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// ─────────────────────────────────────────────────────────────
// Catalogo modelli supportati (chiave-logica → metadata)
// L'utente sceglie in chat via la chiave logica ('gemma'|'llama'|'qwen').
// Il server mappa poi sullo slug OpenRouter e sulla env key corrispondente.
// ─────────────────────────────────────────────────────────────
const MODELS = {
  gemma: {
    id:       'google/gemma-3-27b-it',
    label:    'Gemma 3 27B',
    sub:      '',
    envKey:   'OPENROUTER_API_KEY_GEMMA',
  },
  llama: {
    id:       'meta-llama/llama-3.3-70b-instruct',
    label:    'Llama 3.3 70B',
    sub:      '',
    envKey:   'OPENROUTER_API_KEY_LLAMA',
  },
  qwen: {
    id:       'qwen/qwen3-next-80b-a3b-instruct',
    label:    'Qwen3 80B',
    sub:      '',
    envKey:   'OPENROUTER_API_KEY_QWEN',
  },
};

const DEFAULT_MODEL = MODELS[(process.env.DEFAULT_MODEL || 'gemma').toLowerCase()]
  ? (process.env.DEFAULT_MODEL || 'gemma').toLowerCase()
  : 'gemma';

const SYSTEM_PROMPTS = {
  it: `Sei Nutrifit AI, un assistente virtuale specializzato in nutrizione e benessere.
Il tuo tono e' caldo, incoraggiante e mai giudicante.
Fornisci consigli alimentari pratici, piani di pasti equilibrati e idee di ricette sane.
Quando aiuta, usa elenchi puntati brevi ed emoji alimentari con moderazione (🥗 🥑 🍎 🥕 🌿).
Mantieni le risposte concise (max 6 frasi) salvo se l'utente chiede dettagli.
Rispondi SEMPRE in italiano.
Ricorda: non sostituisci un medico o un nutrizionista certificato; in caso di patologie, invita a consultare un professionista.`,

  en: `You are Nutrifit AI, a virtual assistant specialized in nutrition and wellness.
Your tone is warm, encouraging, and never judgmental.
Provide practical dietary advice, balanced meal plans, and healthy recipe ideas.
When helpful, use short bullet lists and food emojis sparingly (🥗 🥑 🍎 🥕 🌿).
Keep answers concise (max 6 sentences) unless the user asks for detail.
ALWAYS reply in English.
Remember: you don't replace a certified doctor or nutritionist; for medical conditions, advise consulting a professional.`,
};

app.use(cors());
app.use(express.json({ limit: '1mb' }));
app.use(express.static(path.join(__dirname)));

// ─────────────────────────────────────────────────────────────
// GET /api/models — catalogo esposto al frontend per il picker
// ─────────────────────────────────────────────────────────────
app.get('/api/models', (_req, res) => {
  const models = {};
  for (const [key, m] of Object.entries(MODELS)) {
    models[key] = {
      id:        m.id,
      label:     m.label,
      sub:       m.sub,
      available: !!(process.env[m.envKey] || process.env.OPENROUTER_API_KEY),
    };
  }
  res.json({ default: DEFAULT_MODEL, models });
});

// ─────────────────────────────────────────────────────────────
// POST /api/chat — inoltra i messaggi al modello scelto
// Body: { messages: [{role,content}], lang: 'it'|'en', model: 'gemma'|'llama'|'qwen' }
// ─────────────────────────────────────────────────────────────
app.post('/api/chat', async (req, res) => {
  const { messages, lang, model } = req.body || {};
  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: 'Campo "messages" obbligatorio.' });
  }

  const modelKey = MODELS[model] ? model : DEFAULT_MODEL;
  const modelDef = MODELS[modelKey];

  const apiKey = process.env[modelDef.envKey] || process.env.OPENROUTER_API_KEY;
  if (!apiKey || apiKey.startsWith('INSERISCI_')) {
    return res.status(500).json({
      error: `Chiave OpenRouter non configurata per ${modelDef.label}. Imposta ${modelDef.envKey} (o OPENROUTER_API_KEY) nel file .env e riavvia il server.`,
    });
  }

  const systemContent = SYSTEM_PROMPTS[lang] || SYSTEM_PROMPTS.it;
  const payload = {
    model: modelDef.id,
    messages: [{ role: 'system', content: systemContent }, ...messages],
    temperature: 0.7,
    max_tokens: 800,
  };

  try {
    const { data } = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      payload,
      {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': process.env.OPENROUTER_REFERER || `http://localhost:${PORT}`,
          'X-Title': 'Nutrifit AI',
        },
        timeout: 45000,
      }
    );
    const content = data?.choices?.[0]?.message?.content?.trim() || '';
    if (!content) {
      return res.status(502).json({ error: 'Il modello ha restituito una risposta vuota. Riprova.' });
    }
    res.json({ content, model: modelKey, modelLabel: modelDef.label });
  } catch (err) {
    const status = err.response?.status || 500;
    const detail = err.response?.data?.error?.message || err.message;
    console.error(`[chat][${modelKey}] OpenRouter error`, status, detail);
    const userMsg = status === 401
      ? `Chiave OpenRouter non valida per ${modelDef.label}.`
      : status === 429
      ? `Limite di richieste raggiunto per ${modelDef.label}. Riprova tra qualche minuto o cambia modello.`
      : status === 404
      ? `Modello ${modelDef.id} non piu' disponibile. Aggiorna MODELS in server.js.`
      : `Errore nel contattare ${modelDef.label}. Riprova tra poco.`;
    res.status(status).json({ error: userMsg, detail });
  }
});

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Nutrifit AI — server su http://localhost:${PORT}`);
  console.log(`Modello di default: ${DEFAULT_MODEL} (${MODELS[DEFAULT_MODEL].id})`);
  for (const [key, m] of Object.entries(MODELS)) {
    const ok = !!(process.env[m.envKey] || process.env.OPENROUTER_API_KEY);
    console.log(`  • ${key.padEnd(6)} ${ok ? '✓' : '✗ (chiave mancante)'}  ${m.id}`);
  }
});
