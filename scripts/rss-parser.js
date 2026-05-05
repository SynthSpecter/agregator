async function parseRSS(url) {
  try {
    // Utilise ton proxy local
    const proxyUrl = `http://localhost:3000/proxy-rss?url=${encodeURIComponent(url)}`
    const parser = new RSSParser()
    const feed = await parser.parseURL(proxyUrl)
    return feed
  } catch (error) {
    console.error('Erreur de parsing RSS :', error)
    throw error
  }
}

// Convertit un document XML en objet feed (similaire à rss-parser)ç
function parseXMLToFeed(xmlDoc) {
  const feed = {
    title:
      xmlDoc.querySelector('channel > title')?.textContent || 'Flux sans titre',
    description:
      xmlDoc.querySelector('channel > description')?.textContent || '',
    items: [],
  }

  const items = xmlDoc.querySelectorAll('item')
  items.forEach((item) => {
    feed.items.push({
      title: item.querySelector('title')?.textContent || 'Sans titre',
      link: item.querySelector('link')?.textContent || '#',
      pubDate: item.querySelector('pubDate')?.textContent || '',
      description: item.querySelector('description')?.textContent || '',
    })
  })

  return feed
}
