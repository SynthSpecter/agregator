const express = require('express')
const cors = require('cors')
const fetch = require('node-fetch')
const app = express()
const PORT = 3000

// Middleware pour autoriser les requêtes CORS
app.use(cors())
app.use(express.static('.')) // Sert les fichiers statiques (HTML, CSS, JS)

// Route pour proxyfier les requêtes RSS
app.get('/proxy-rss', async (req, res) => {
  const url = req.query.url
  if (!url) {
    return res.status(400).send('URL manquante / Missing URL')
  }

  try {
    const response = await fetch(url)
    const xml = await response.text()
    res.type('application/xml')
    res.send(xml)
  } catch (error) {
    console.error('Erreur proxy :', error)
    res
      .status(500)
      .send('Erreur lors de la récupération du flux / Error fetching feed')
  }
})

// Démarre le serveur
app.listen(PORT, () => {
  console.log(`Serveur proxy démarré sur http://localhost:${PORT}`)
})
