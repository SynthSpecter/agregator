// Initialise le drag-and-drop sur le conteneur des widgets
function initDragAndDrop(container) {
  new Sortable(container, {
    animation: 150,
    ghostClass: 'sortable-ghost',
    handle: '.widget-header',
    onEnd: () => {
      saveWidgetsOrder()
    },
  })
}

// Sauvegarde l'ordre des widgets dans localStorage
function saveWidgetsOrder() {
  const widgets = document.querySelectorAll('.widget')
  const order = Array.from(widgets).map((widget) => ({
    id: widget.dataset.id,
    url: widget.dataset.url,
    title: widget.querySelector('.widget-title').textContent,
  }))
  localStorage.setItem('agregatorWidgets', JSON.stringify(order))
}
