# 🌱 Nutrifit AI - Chat Nutrizionale Intelligente

Una moderna interfaccia web per chat con intelligenza artificiale specializzata in nutrizione e benessere.

## ✨ Caratteristiche

- **Chat AI Avanzata**: Conversazioni intelligenti con un nutrizionista digitale
- **Design Moderno**: Interfaccia accattivante con effetti dinamici e animazioni
- **Multilingue**: Supporto per italiano e inglese
- **Responsive**: Ottimizzata per desktop e mobile
- **Tema Dinamico**: Modalità chiara e scura
- **Effetti Speciali**: Particelle animate, gradienti dinamici e transizioni fluide

## 🚀 Demo Live

Visita la demo live: [Nutrifit AI](https://tuousername.github.io/nutrifit-ai/)

## 🛠️ Tecnologie

- HTML5
- CSS3 (Animazioni avanzate, Flexbox, Grid)
- JavaScript (ES6+)
- API OpenRouter per l'intelligenza artificiale
- Font Google (Poppins)

## 📱 Funzionalità

- **Chat Intelligente**: Consigli nutrizionali personalizzati
- **Pulizia Testo**: Rimozione automatica formattazioni Markdown
- **Indicatori Visivi**: Stato di digitazione e feedback utente
- **Persistenza**: Salvataggio preferenze tema e lingua
- **Accessibilità**: Design inclusivo e responsive

## 🔧 Configurazione

### ⚠️ Importante: Configurazione Chiave API

**Prima di utilizzare l'applicazione**, è necessario configurare la chiave API OpenRouter:

1. Apri il file `index.html`
2. Cerca la riga contenente `OPENROUTER_API_KEY`
3. Sostituisci `'your-api-key-here'` con la tua vera chiave API OpenRouter
4. Salva il file

```javascript
// Cerca questa riga nel file index.html:
const OPENROUTER_API_KEY = 'your-api-key-here'; // ⚠️ SOSTITUISCI CON LA TUA CHIAVE API
```

### 🔐 Nota sulla Sicurezza

**ATTENZIONE**: Questa è un'applicazione client-side, il che significa che la chiave API sarà visibile nel codice sorgente. Per un uso in produzione, si raccomanda di:

- Utilizzare un server backend come proxy per le chiamate API
- Non committare mai chiavi API reali in repository pubblici
- Considerare l'uso di variabili d'ambiente per deployment privati

### 🎨 Personalizzazione

1. **Colori**: Modifica le variabili CSS in `:root` per cambiare la palette colori
2. **Testi**: Aggiorna le traduzioni negli oggetti `translations`
3. **Stile**: Personalizza le animazioni e gli effetti CSS

## 🚀 Come Pubblicare su GitHub Pages

1. **Fork o Clone** questo repository
2. **Configura la chiave API** come descritto sopra
3. **Abilita GitHub Pages** nelle impostazioni del repository
4. **Seleziona** il branch `main` come sorgente
5. Il sito sarà disponibile su `https://tuousername.github.io/nutrifit-ai/`

## 📋 Installazione Locale

```bash
# Clona il repository
git clone https://github.com/tuousername/nutrifit-ai.git

# Naviga nella directory
cd nutrifit-ai

# Apri index.html nel browser
# Oppure usa un server locale:
python -m http.server 8000
# Poi visita http://localhost:8000
```

## 🌐 Browser Supportati

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## 📄 Licenza

Questo progetto è open source e disponibile sotto licenza MIT.

## 🤝 Contributi

I contributi sono benvenuti! Per contribuire:

1. Fork il progetto
2. Crea un branch per la tua feature (`git checkout -b feature/AmazingFeature`)
3. Commit le tue modifiche (`git commit -m 'Add some AmazingFeature'`)
4. Push al branch (`git push origin feature/AmazingFeature`)
5. Apri una Pull Request

## 📞 Supporto

Se hai domande o problemi:
- Apri un [Issue](https://github.com/tuousername/nutrifit-ai/issues)
- Contatta il team di sviluppo

## 🙏 Ringraziamenti

- OpenRouter per l'API AI
- Google Fonts per i font utilizzati
- La community open source per l'ispirazione

---

Creato con ❤️ per promuovere alimentazione sana e benessere

