// Ajoute un widget pour un flux RSS
function addRSSWidget(url, title) {
  const widgetsContainer = document.getElementById('widgets-container')
  const widgetId = `widget-${Date.now()}`

  const widget = document.createElement('div')
  widget.className = 'widget'
  widget.dataset.id = widgetId
  widget.dataset.url = url

  widget.innerHTML = `
        <div class="widget-header">
            <span class="widget-title">${title}</span>
            <button class="widget-delete" onclick="deleteWidget('${widgetId}')">✕</button>
        </div>
        <div class="widget-content" id="content-${widgetId}">
            <p>⏳ Chargement en cours... / Loading...</p>
        </div>
    `

  widgetsContainer.appendChild(widget)
  loadRSSFeed(widgetId, url)
}

// Supprime un widget
function deleteWidget(widgetId) {
  const widget = document.querySelector(`.widget[data-id="${widgetId}"]`)
  if (widget) {
    widget.remove()
    saveWidgetsOrder()
  }
}

// Charge un flux RSS et affiche son contenu
async function loadRSSFeed(widgetId, url) {
  const contentElement = document.getElementById(`content-${widgetId}`)
  try {
    contentElement.innerHTML = '<p>⏳ Chargement... / Loading...</p>'
    const feed = await parseRSS(url)

    if (!feed.items || feed.items.length === 0) {
      contentElement.innerHTML =
        '<p>⚠️ Aucun article trouvé. / No articles found.</p>'
      return
    }

    contentElement.innerHTML = ''
    feed.items.slice(0, 5).forEach((item) => {
      const article = document.createElement('div')
      article.className = 'rss-item'
      article.innerHTML = `
                <h3><a href="${item.link}" target="_blank" class="neon-link">${item.title}</a></h3>
                <p>${formatDate(item.pubDate || item.isoDate)}</p>
            `
      contentElement.appendChild(article)
    })
  } catch (error) {
    console.error('Erreur lors du chargement du flux :', error)
    contentElement.innerHTML = `
            <p style="color: var(--neon-pink);">❌ Erreur de chargement. Vérifiez l'URL du flux. / Loading error. Check the feed URL.</p>
        `
  }
}

// Formate une date en français
function formatDate(dateString) {
  if (!dateString) return 'Date inconnue / Unknown date'
  try {
    const date = new Date(dateString)
    return date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    })
  } catch {
    return 'Date invalide / Invalid date'
  }
}
