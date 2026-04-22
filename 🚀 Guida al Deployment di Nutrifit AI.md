# 🚀 Guida al Deployment di Nutrifit AI

## 📋 Checklist Pre-Deployment

- [x] ✅ Repository Git locale creato
- [x] ✅ File preparati e committati
- [ ] ⏳ Repository GitHub creato
- [ ] ⏳ Remote origin configurato
- [ ] ⏳ Push su GitHub completato
- [ ] ⏳ GitHub Pages attivato
- [ ] ⏳ Chiave API configurata
- [ ] ⏳ Test funzionalità completato

## 🔧 Istruzioni Dettagliate

### 1. Creazione Repository GitHub

1. **Accedi a GitHub**: [github.com](https://github.com)
2. **Nuovo Repository**: Clicca "New" o "+" → "New repository"
3. **Configurazione**:
   - **Repository name**: `nutrifit-ai`
   - **Description**: `🌱 Chat AI per consigli nutrizionali - Interfaccia moderna e responsive`
   - **Visibility**: Public ✅
   - **Initialize**: NON selezionare README, .gitignore, o license
4. **Crea**: Clicca "Create repository"

### 2. Collegamento Repository Locale

```bash
# Naviga nella directory del progetto
cd /home/ubuntu/nutrifit-ai-github

# Aggiungi il remote (sostituisci TUO-USERNAME)
git remote add origin https://github.com/TUO-USERNAME/nutrifit-ai.git

# Verifica la configurazione
git remote -v

# Push iniziale
git push -u origin main
```

### 3. Attivazione GitHub Pages

1. **Settings**: Nel repository, clicca "Settings"
2. **Pages**: Menu laterale → "Pages"
3. **Source**: "Deploy from a branch"
4. **Branch**: Seleziona "main"
5. **Folder**: Seleziona "/ (root)"
6. **Save**: Clicca "Save"

### 4. Configurazione Chiave API

⚠️ **IMPORTANTE**: Prima di usare l'app, configura la chiave API:

1. **Ottieni chiave API**: Registrati su [OpenRouter](https://openrouter.ai/)
2. **Modifica index.html**: Cerca `OPENROUTER_API_KEY`
3. **Sostituisci**: `'your-api-key-here'` con la tua vera chiave
4. **Commit e Push**:
   ```bash
   git add index.html
   git commit -m "🔑 Configure API key"
   git push
   ```

### 5. Verifica Deployment

- **URL**: `https://TUO-USERNAME.github.io/nutrifit-ai/`
- **Tempo**: 5-10 minuti per l'attivazione
- **Test**: Prova chat, cambio lingua, tema

## 🔐 Sicurezza API Key

### ⚠️ Avvertenze Importanti

- La chiave API sarà **visibile** nel codice sorgente
- **NON** usare chiavi con accesso illimitato
- Considera un **backend proxy** per produzione
- Monitora l'**uso della chiave** regolarmente

### 🛡️ Raccomandazioni

1. **Limiti**: Imposta limiti di spesa su OpenRouter
2. **Monitoraggio**: Controlla l'uso regolarmente
3. **Rotazione**: Cambia la chiave periodicamente
4. **Backup**: Tieni una chiave di backup

## 🚨 Risoluzione Problemi

### Repository non trovato
```bash
# Verifica remote
git remote -v
# Se sbagliato, rimuovi e ri-aggiungi
git remote remove origin
git remote add origin https://github.com/TUO-USERNAME/nutrifit-ai.git
```

### GitHub Pages non funziona
- Aspetta 5-10 minuti
- Verifica che il repository sia pubblico
- Controlla che il branch sia "main"
- Verifica che index.html sia nella root

### API non funziona
- Controlla la chiave API in index.html
- Verifica i crediti su OpenRouter
- Apri Developer Tools per errori console

## 📞 Supporto

Se hai problemi:
1. Controlla questa guida
2. Verifica i log del browser (F12)
3. Controlla lo stato di GitHub Pages
4. Chiedi aiuto aprendo un issue

## 🎉 Congratulazioni!

Una volta completati tutti i passaggi, il tuo Nutrifit AI sarà live e accessibile a tutti! 🌟

