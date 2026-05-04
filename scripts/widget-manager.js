// Ajoute un widget pour un flux RSS
function addRSSWidget(url, title = 'Nouveau Flux') {
  const widgetsContainer = document.getElementById('widgets-container')
  const widgetId = `widget-${Date.now()}` // ID unique

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
            <p>Chargement en cours... / Loading...</p>
        </div>
    `

  widgetsContainer.appendChild(widget)
  loadRSSFeed(widgetId, url) // Charge le flux RSS
}

// Supprime un widget
function deleteWidget(widgetId) {
  const widget = document.querySelector(`.widget[data-id="${widgetId}"]`)
  if (widget) {
    widget.remove()
    // Sauvegarder la suppression (optionnel)
    saveWidgetsOrder()
  }
}

// Charge un flux RSS et affiche son contenu
async function loadRSSFeed(widgetId, url) {
  try {
    const feed = await parseRSS(url) // Utilise rss-parser.js
    const contentElement = document.getElementById(`content-${widgetId}`)
    contentElement.innerHTML = ''

    feed.items.slice(0, 5).forEach((item) => {
      // Affiche les 5 premiers articles
      const article = document.createElement('div')
      article.className = 'rss-item'
      article.innerHTML = `
                <h3><a href="${item.link}" target="_blank" class="neon-link">${item.title}</a></h3>
                <p>${new Date(item.pubDate).toLocaleDateString('fr-FR')}</p>
            `
      contentElement.appendChild(article)
    })
  } catch (error) {
    console.error('Erreur lors du chargement du flux :', error)
    document.getElementById(`content-${widgetId}`).innerHTML = `
            <p style="color: var(--neon-pink);">❌ Erreur de chargement / Loading error</p>
        `
  }
}
