import React from 'react'
import { useSelector } from 'react-redux'
import CustomImage from '../../components/shared/CustomImage';
import { Link } from 'react-router-dom';

const Categories = () => {
    const { all: categories } = useSelector((state) => state.categories);

    const handleSelectCategory = (category_id) => {
        
    }

    return (
        <div className="flex flex-col gap-2">
            {
                categories.map(category => (
                    <Link to={`/private/products/${category._id}`} key={category._id} className="w-full cursor-pointer bg-white shadow p-4 rounded">
                        <h4>{category.name}</h4>
                        <p>{category.description}</p>
                        <CustomImage src={category.image} alt={category.name} />
                    </Link>
                ))
            }
        </div>
    )
}

export default Categories