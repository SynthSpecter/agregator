// --- Gestion du stockage local / Local Storage Management ---
function saveFiltersToLocalStorage(filters) {
  localStorage.setItem('synthimmo-filters', JSON.stringify(filters))
}

function getSavedFilters() {
  const saved = localStorage.getItem('synthimmo-filters')
  return saved ? JSON.parse(saved) : null
}

// --- Tri des résultats / Sorting utilities ---
function sortListings(data, sortType) {
  const sorted = [...data]
  switch (sortType) {
    case 'price-asc':
      sorted.sort((a, b) => a.price - b.price)
      break
    case 'price-desc':
      sorted.sort((a, b) => b.price - a.price)
      break
    case 'surface-asc':
      sorted.sort((a, b) => a.surface - b.surface)
      break
    case 'surface-desc':
      sorted.sort((a, b) => b.surface - a.surface)
      break
  }
  return sorted
}
