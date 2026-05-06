// Initialisation
document.addEventListener('DOMContentLoaded', () => {
  const dropZone = document.getElementById('drop-zone')
  const widgetsContainer = document.getElementById('widgets-container')
  const addManualBtn = document.getElementById('add-manual-btn')
  const modal = document.getElementById('manual-add-modal')
  const confirmAddBtn = document.getElementById('confirm-add-btn')
  const cancelBtn = document.getElementById('cancel-btn')
  const rssUrlInput = document.getElementById('rss-url-input')

  // Charge les widgets sauvegardés
  loadSavedWidgets()

  // Écouteurs pour la zone de drop
  dropZone.addEventListener('dragover', (e) => {
    e.preventDefault()
    dropZone.classList.add('drag-over')
  })

  dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('drag-over')
  })

  dropZone.addEventListener('drop', (e) => {
    e.preventDefault()
    dropZone.classList.remove('drag-over')

    // Récupérer l'URL glissée
    const url =
      e.dataTransfer.getData('text/uri-list') ||
      e.dataTransfer.getData('text/plain')
    if (url && isValidRSSUrl(url)) {
      addRSSWidget(url, getDomainName(url))
    } else {
      showError(
        "❌ L'URL glissée n'est pas valide. Essayez un flux RSS comme https://github.com/trending.rss",
      )
    }
  })

  // Écouteur pour le bouton "Ajouter manuellement"
  addManualBtn.addEventListener('click', () => {
    modal.classList.remove('hidden')
    rssUrlInput.focus()
  })

  // Écouteur pour la confirmation d'ajout manuel
  confirmAddBtn.addEventListener('click', () => {
    const url = rssUrlInput.value.trim()
    if (url && isValidRSSUrl(url)) {
      addRSSWidget(url, getDomainName(url))
      rssUrlInput.value = ''
      modal.classList.add('hidden')
    } else {
      showError(
        '❌ Veuillez entrer une URL valide (ex: https://github.com/trending.rss)',
      )
    }
  })

  // Écouteur pour annuler
  cancelBtn.addEventListener('click', () => {
    modal.classList.add('hidden')
    rssUrlInput.value = ''
  })

  // Fermer la modale en cliquant à l'extérieur
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('hidden')
      rssUrlInput.value = ''
    }
  })

  // Initialiser le drag-and-drop des widgets
  initDragAndDrop(widgetsContainer)
})

// Vérifie si une URL est potentiellement un flux RSS
function isValidRSSUrl(url) {
  try {
    const parsedUrl = new URL(url)
    return parsedUrl.protocol === 'http:' || parsedUrl.protocol === 'https:'
  } catch {
    return false
  }
}

// Extrait le nom de domaine d'une URL pour le titre du widget
function getDomainName(url) {
  try {
    const domain = new URL(url).hostname
    return domain
      .replace('www.', '')
      .replace('.com', '')
      .replace('.fr', '')
      .replace('.net', '')
      .replace('.org', '')
      .replace('.io', '')
  } catch {
    return 'Nouveau Flux / New Feed'
  }
}

// Affiche une erreur dans une alerte
function showError(message) {
  alert(message)
}
