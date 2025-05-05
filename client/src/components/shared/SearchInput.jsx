import React, { useState } from 'react'
import Toast from '../../components/shared/Toast'

const SearchInput = ({ value, onChange, categories, onResults }) => {
  const [showToast, setShowToast] = useState(false)

  const handleSearch = () => {
    const query = value.trim().toLowerCase()

    if (!query) {
      onResults(null)
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

    if (matches.length === 0) {
      setShowToast(true)
      setTimeout(() => setShowToast(false), 3000)
      onResults(null)
    } else {
      onResults(matches)
    }
  }

  const isActive = value.trim().length > 0

  return (
    <div className="relative w-full">
      <input
        type="text"
        value={value}
        onChange={onChange}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault()
            handleSearch()
          }
        }}
        placeholder="Cerca i tuoi piatti preferiti"
        className="w-full pl-4 pr-11 py-3 rounded-full border border-gray-300 text-xs placeholder:text-muted text-text"
      />

      <button
        onClick={handleSearch}
        disabled={!isActive}
        className={`absolute right-4 top-1/2 -translate-y-1/2 text-muted transition-opacity ${isActive ? 'text-primary opacity-100 cursor-pointer' : 'text-muted opacity-50 cursor-default'
          }`}
      >
        <i className="fas fa-search"></i>
      </button>

      <Toast
        show={showToast}
        message="Nessun prodotto corrisponde alla ricerca."
        icon="fas fa-times-circle"
        type="error"
      />
    </div>
  )
}

export default SearchInput