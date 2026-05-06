// Serveur Node.js pour proxyfier les requêtes RSS (contourne le CORS)
const express = require('express')
const cors = require('cors')
const fetch = require('node-fetch') // Version 2 (compatible avec require)

const app = express()
const PORT = 3000

// Middleware
app.use(cors()) // Autorise les requêtes cross-origin
app.use(express.static('.')) // Sert les fichiers statiques (HTML, CSS, JS)

// Route pour proxyfier les flux RSS
app.get('/proxy-rss', async (req, res) => {
  const url = req.query.url
  if (!url) {
    return res.status(400).send('URL manquante / Missing URL')
  }

  try {
    console.log(`🔹 Récupération du flux : ${url}`)
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const xml = await response.text()
    res.type('application/xml')
    res.send(xml)
    console.log('✅ Flux retourné avec succès')
  } catch (error) {
    console.error('❌ Erreur proxy :', error)
    res
      .status(500)
      .send(`Erreur lors de la récupération du flux: ${error.message}`)
  }
})

// Démarre le serveur
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Serveur proxy démarré sur :`)
  console.log(`   - http://localhost:${PORT}`)
  console.log(`   - http://127.0.0.1:${PORT}`)
  console.log(`Appuyez sur Ctrl+C pour arrêter le serveur.`)
})
