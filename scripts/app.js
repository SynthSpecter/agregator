// Initialise l'app au chargement
document.addEventListener('DOMContentLoaded', () => {
  // Charger les widgets sauvegardés (si existants)
  loadSavedWidgets()

  // Écouteur pour le bouton "Ajouter"
  document.getElementById('add-rss-btn').addEventListener('click', () => {
    const url = document.getElementById('rss-url-input').value.trim()
    if (url) {
      addRSSWidget(url, 'Nouveau Flux / New Feed')
      document.getElementById('rss-url-input').value = ''
    }
  })

  // Permettre d'ajouter un flux avec la touche Entrée
  document.getElementById('rss-url-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      document.getElementById('add-rss-btn').click()
    }
  })
})

// Charge les widgets sauvegardés (ex. : depuis localStorage)
function loadSavedWidgets() {
  // Exemple : Charger depuis localStorage
  const savedWidgets = JSON.parse(localStorage.getItem('widgets')) || []
  savedWidgets.forEach((widget) => {
    addRSSWidget(widget.url, widget.title)
  })
}
