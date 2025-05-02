import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import CustomImage from '../../components/shared/CustomImage';
import { Link } from 'react-router-dom';
import SearchInput from '../../components/shared/SearchInput';

const Categories = () => {
    const { all: categories } = useSelector((state) => state.categories);
    const [query, setQuery] = useState("");

    const handleSelectCategory = (category_id) => {

    }

    return (
        <div className="flex justify-center bg-background min-h-screen font-sans">
            <div>
                {/* Campo ricerca */}
                <div className="p-4">
                    <SearchInput value={query} onChange={(e) => setQuery(e.target.value)} />
                </div>

                {/* Categorie */}
                <div className="px-4 pb-4 space-y-3">
                    {categories.map((category) => (
                        <Link
                            to={`/private/products/${category._id}`}
                            key={category._id}
                            className="bg-card rounded-xl shadow-elevation p-3 flex items-center gap-3 transition-all active:scale-[0.98]"
                        >

                            <div className="flex flex-col">
                                <h4 className="text-md font-semibold text-text leading-tight">
                                    {category.name}
                                </h4>
                                <p className="text-sm text-muted leading-snug">
                                    {category.description}
                                </p>
                            </div>
                            <CustomImage
                                src={category.image}
                                alt={category.name}
                                className="w-20 h-20 object-cover rounded-xl flex-shrink-0"
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Categories