// Variables globales
let draggedURL = null

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
  const dropZone = document.getElementById('drop-zone')
  const widgetsContainer = document.getElementById('widgets-container')
  const addManualBtn = document.getElementById('add-manual-btn')
  const modal = document.getElementById('manual-add-modal')
  const confirmAddBtn = document.getElementById('confirm-add-btn')
  const cancelBtn = document.getElementById('cancel-btn')
  const rssUrlInput = document.getElementById('rss-url-input')

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
    const url = e.dataTransfer.getData('text/uri-list')
    if (url && isValidRSSUrl(url)) {
      addRSSWidget(url, getDomainName(url))
    } else {
      alert(
        "❌ L'URL glissée n'est pas un flux RSS valide. / The dropped URL is not a valid RSS feed.",
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
      alert(
        '❌ Veuillez entrer une URL de flux RSS valide. / Please enter a valid RSS feed URL.',
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
  return url.startsWith('http://') || url.startsWith('https://')
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
  } catch {
    return 'Nouveau Flux / New Feed'
  }
}
