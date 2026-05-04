// Initialise le drag-and-drop sur le conteneur des widgets
document.addEventListener('DOMContentLoaded', () => {
  const widgetsContainer = document.getElementById('widgets-container')
  new Sortable(widgetsContainer, {
    animation: 150, // Animation fluide
    ghostClass: 'sortable-ghost', // Classe CSS pour l'élément en cours de drag
    handle: '.widget-header', // Zone de drag (en-tête du widget)
    onEnd: () => {
      // Sauvegarder l'ordre des widgets (ex. : dans localStorage)
      saveWidgetsOrder()
      // Jouer un son de "glissade" (optionnel)
      playSound('drag-end.mp3')
    },
  })
})

// Sauvegarde l'ordre des widgets (ex. : dans localStorage)
function saveWidgetsOrder() {
  const widgets = document.querySelectorAll('.widget')
  const order = Array.from(widgets).map((widget) => widget.dataset.id)
  localStorage.setItem('widgetsOrder', JSON.stringify(order))
}

// Joue un son (optionnel)
function playSound(soundFile) {
  const audio = new Audio(`assets/sounds/${soundFile}`)
  audio.play().catch((e) => console.log('Son non chargé :', e))
}
