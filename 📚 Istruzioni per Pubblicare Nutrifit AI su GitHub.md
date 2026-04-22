# 📚 Istruzioni per Pubblicare Nutrifit AI su GitHub

## 🚀 Passo 1: Creare Repository su GitHub

1. **Vai su GitHub**: Apri [github.com](https://github.com) e accedi al tuo account
2. **Nuovo Repository**: Clicca su "New" o "+" → "New repository"
3. **Configurazione Repository**:
   - **Nome**: `nutrifit-ai` (o il nome che preferisci)
   - **Descrizione**: `🌱 Chat AI per consigli nutrizionali - Interfaccia moderna e responsive`
   - **Visibilità**: Pubblico (per GitHub Pages gratuito)
   - **NON** inizializzare con README (abbiamo già i nostri file)
4. **Crea Repository**: Clicca "Create repository"

## 📤 Passo 2: Caricare i File

Dopo aver creato il repository, GitHub ti mostrerà le istruzioni. Usa questi comandi nel terminale:

```bash
# Naviga nella directory del progetto
cd /home/ubuntu/nutrifit-ai-github

# Aggiungi il repository remoto (sostituisci USERNAME con il tuo username GitHub)
git remote add origin https://github.com/USERNAME/nutrifit-ai.git

# Rinomina il branch principale (opzionale, ma raccomandato)
git branch -M main

# Carica i file su GitHub
git push -u origin main
```

**⚠️ IMPORTANTE**: Sostituisci `USERNAME` con il tuo vero username GitHub!

## 🌐 Passo 3: Attivare GitHub Pages

1. **Vai nelle Impostazioni**: Nel tuo repository, clicca su "Settings"
2. **Trova Pages**: Scorri verso il basso fino a "Pages" nel menu laterale
3. **Configura Source**:
   - **Source**: Deploy from a branch
   - **Branch**: main (o master)
   - **Folder**: / (root)
4. **Salva**: Clicca "Save"

## ✅ Passo 4: Accedere al Sito

Dopo alcuni minuti, il tuo sito sarà disponibile all'indirizzo:
```
https://USERNAME.github.io/nutrifit-ai/
```

## 🔧 Aggiornamenti Futuri

Per aggiornare il sito:

```bash
# Modifica i file
# Poi:
git add .
git commit -m "Descrizione delle modifiche"
git push
```

## 🔑 Configurazione Chiave API

**IMPORTANTE**: Prima di usare il sito, ricordati di:
1. Aprire il file `index.html`
2. Trovare la riga con `OPENROUTER_API_KEY`
3. Sostituire con la tua vera chiave API OpenRouter

## 📱 Test

Testa il sito su:
- Desktop (Chrome, Firefox, Safari)
- Mobile (iOS Safari, Android Chrome)
- Diverse risoluzioni

## 🎉 Congratulazioni!

Il tuo sito Nutrifit AI è ora live su GitHub Pages! 🌟

