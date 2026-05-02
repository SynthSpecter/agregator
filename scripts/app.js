document.addEventListener('DOMContentLoaded', () => {
  const listingsContainer = document.getElementById('listings')
  const searchCity = document.getElementById('search-city')
  const typeFilter = document.getElementById('type-filter')
  const maxPrice = document.getElementById('max-price')
  const sortFilter = document.getElementById('sort-filter')
  const applyBtn = document.getElementById('apply-filters')

  // Restaure les filtres sauvegardés
  const savedFilters = getSavedFilters()
  if (savedFilters) {
    searchCity.value = savedFilters.city || ''
    typeFilter.value = savedFilters.type || 'all'
    maxPrice.value = savedFilters.price || ''
    sortFilter.value = savedFilters.sort || 'none'
  }

  function displayListings(data) {
    listingsContainer.innerHTML = ''
    if (data.length === 0) {
      listingsContainer.innerHTML = '<p>Aucune annonce trouvée.</p>'
      return
    }
    data.forEach((item) => {
      const card = document.createElement('div')
      card.classList.add('card')
      card.innerHTML = `
        <h3>${item.title}</h3>
        <p><strong>Ville :</strong> ${item.city}</p>
        <p><strong>Type :</strong> ${item.type}</p>
        <p><strong>Surface :</strong> ${item.surface} m²</p>
        <p class="price"><strong>${item.price} € / mois</strong></p>
        <p class="source">Source : ${item.source}</p>
      `
      listingsContainer.appendChild(card)
    })
  }

  function applyFilters() {
    const cityQuery = searchCity.value.toLowerCase()
    const selectedType = typeFilter.value
    const max = parseInt(maxPrice.value) || Infinity
    const sortType = sortFilter.value

    // Sauvegarde les filtres
    saveFiltersToLocalStorage({
      city: cityQuery,
      type: selectedType,
      price: maxPrice.value,
      sort: sortType,
    })

    // Applique les filtres
    let filtered = listingsData.filter((item) => {
      const matchesCity = item.city.toLowerCase().includes(cityQuery)
      const matchesType = selectedType === 'all' || item.type === selectedType
      const matchesPrice = item.price <= max
      return matchesCity && matchesType && matchesPrice
    })

    // Applique le tri
    if (sortType !== 'none') {
      filtered = sortListings(filtered, sortType)
    }

    displayListings(filtered)
  }

  applyBtn.addEventListener('click', applyFilters)

  // Affiche les annonces filtrées si filtres existants, sinon tout
  applyFilters()
})
