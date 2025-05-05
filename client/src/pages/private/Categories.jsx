import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CustomImage from '../../components/shared/CustomImage'
import { Link } from 'react-router-dom'
import SearchInput from '../../components/shared/SearchInput'
import { clearSearchResult } from '../../store/slices/searchSlice'

const Categories = () => {
    const dispatch = useDispatch();
    const { all: categories } = useSelector((state) => state.categories);
    const { products: filteredProducts } = useSelector((state) => state.search);
    const [query, setQuery] = useState("")

    const isSearching = filteredProducts.length > 0;

    // Reset dei risultati quando la ricerca viene svuotata
    useEffect(() => {
        if (query.trim() === "") {
            dispatch(clearSearchResult())
        }
    }, [query])

    return (
        <div className="flex justify-center bg-white mx-auto max-w-[23.4375rem] w-full font-sans">
            <div className="w-full max-w-md">
                {/* Campo ricerca */}
                <div className="p-4">
                    <SearchInput
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </div>

                {/* Risultati ricerca o categorie */}
                <div className="px-5 py-4 space-y-3">
                    {isSearching ? (
                        filteredProducts?.map((product) => (
                            <Link
                                to={`/private/products/${product.categoryId}`}
                                key={product._id}
                                className="block relative bg-white rounded-3xl shadow-elevation-1 p-4 mb-[2.5rem] min-h-[5.9375rem] flex items-center justify-between transition-all active:scale-[0.98]"
                            >
                                <div className="max-w-[10.1875rem]">
                                    <div className="flex-1 pr-3">
                                        <h4 className="text-base font-semibold text-text leading-tight">
                                            {product.name}
                                        </h4>
                                        <p className="text-xs text-muted mt-2 leading-snug">
                                            {product.description}
                                        </p>
                                        <p className="text-[0.65rem] mt-1 text-muted italic">
                                            Categoria: {product.categoryName}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))
                    ) : (
                        categories.map((category) => (
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
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}

export default Categories