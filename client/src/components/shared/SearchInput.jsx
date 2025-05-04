import React, { useEffect } from 'react'

const SearchInput = ({ value, onChange, categories, onResults }) => {
  // Esegue la ricerca nei prodotti ogni volta che cambia il valore
  useEffect(() => {
    const query = value.trim().toLowerCase()

    if (!query) {
      onResults(null) // stato iniziale
      return
    }

    const matches = []

    categories.forEach((category) => {
      category.products?.forEach((product) => {
        if (product.name.toLowerCase().includes(query)) {
          matches.push({
            ...product,
            categoryName: category.name,
            categoryId: category._id,
          })
        }
      })
    })

    onResults(matches)
  }, [value, categories, onResults])

  return (
    <div className="relative w-full">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Cerca i tuoi piatti preferiti"
        className="w-full pl-11 pr-4 py-3 rounded-full border border-gray-300 text-xs placeholder:text-muted text-text"
      />
      <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-muted text-base"></i>
    </div>
  );
};

export default SearchInput;