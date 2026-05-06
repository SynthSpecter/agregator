// Parse un flux RSS via le proxy local, avec parsing manuel du XML
async function parseRSS(url) {
  try {
    // Utilise le proxy local (port 3000)
    const proxyUrl = `http://localhost:3000/proxy-rss?url=${encodeURIComponent(url)}`
    const response = await fetch(proxyUrl)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const xmlString = await response.text()
    return parseXMLToFeed(xmlString) // Parse manuellement le XML
  } catch (error) {
    console.error('Erreur de parsing RSS :', error)
    throw error
  }
}

// Convertit du XML en objet feed (remplace rss-parser)
function parseXMLToFeed(xmlString) {
  const parser = new DOMParser()
  const xmlDoc = parser.parseFromString(xmlString, 'text/xml')

  const feed = {
    title:
      xmlDoc.querySelector('channel > title')?.textContent || 'Flux sans titre',
    description:
      xmlDoc.querySelector('channel > description')?.textContent || '',
    items: [],
  }

  // Récupère les articles (items)
  const items = xmlDoc.querySelectorAll('item')
  items.forEach((item) => {
    feed.items.push({
      title: item.querySelector('title')?.textContent || 'Sans titre',
      link: item.querySelector('link')?.textContent || '#',
      pubDate:
        item.querySelector('pubDate')?.textContent ||
        item.querySelector('dc\\:date')?.textContent ||
        item.querySelector('lastBuildDate')?.textContent ||
        '',
      description: item.querySelector('description')?.textContent || '',
    })
  })

  return feed
}

// Échappe les caractères HTML pour éviter les XSS
function escapeHtml(text) {
  const div = document.createElement('div')
  div.textContent = text
  return div.innerHTML
}

// Expose la fonction pour les autres scripts
window.parseRSS = parseRSS
window.escapeHtml = escapeHtml
