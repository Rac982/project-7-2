import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import CustomImage from '../../components/shared/CustomImage'
import { Link } from 'react-router-dom'
import SearchInput from '../../components/shared/SearchInput'

const Categories = () => {
    const { all: categories } = useSelector((state) => state.categories)
    const [query, setQuery] = useState("")
    const [filteredProducts, setFilteredProducts] = useState(null)

    const isSearching = query.trim().length > 0 && filteredProducts !== null

    return (
        <div className="flex justify-center bg-white mx-auto max-w-[23.4375rem] w-full font-sans">
            <div className="w-full max-w-md">
                {/* Campo ricerca */}
                <div className="p-4">
                    <SearchInput
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    categories={categories}
                    onResults={setFilteredProducts}
                    />
                </div>

                {/* Categorie */}
                <div className="px-5 py-4 space-y-3">
                    {categories.map((category) => (
                        <Link
                            to={`/private/products/${category._id}`}
                            key={category._id}
                            className="block relative bg-white rounded-3xl shadow-elevation-1 p-4 mb-[2.5rem] min-h-[5.9375rem] flex items-center justify-between transition-all active:scale-[0.98]"
                        >
                            <div className="max-w-[10.1875rem]">
                                <div className="flex-1 pr-3">
                                    <h4 className="text-base font-semibold text-text leading-tight">
                                        {category.name}
                                    </h4>
                                    <p className="text-xs text-muted mt-2 leading-snug">
                                        {category.description}
                                    </p>
                                </div>
                            </div>
                            <CustomImage
                                src={category.image}
                                alt={category.name}
                                className="absolute top-[-1.25rem] right-[1rem] w-[9.75rem] h-[9.75rem] sm:w-[8rem] sm:h-[8rem] object-contain z-10"
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Categories