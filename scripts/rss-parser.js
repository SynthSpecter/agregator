// Importation de rss-parser (si tu utilises des modules ES6)
import Parser from 'rss-parser'
const parser = new Parser()

// Parse un flux RSS à partir d'une URL
async function parseRSS(url) {
  try {
    const feed = await parser.parseURL(url)
    return feed
  } catch (error) {
    console.error('Erreur de parsing RSS :', error)
    throw error
  }
}

// Expose la fonction pour les autres scripts
window.parseRSS = parseRSS
