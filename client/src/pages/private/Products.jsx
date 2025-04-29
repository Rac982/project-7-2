import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import CustomImage from '../../components/shared/CustomImage';
import { useApi } from '../../hooks/useApi';
import { setProducts } from '../../store/slices/productSlice';

const Products = () => {
    const { get } = useApi();
    const params = useParams();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    const { all: products } = useSelector((state) => state.products);

    const fetchProducts = async () => {
        const products = await get(`/products/${params.category_id}`);
        dispatch(setProducts(products));
        setLoading(false);
    }

    useEffect(() => {
        if (products.length > 0 && products[0].category._id == params.category_id) {
            setLoading(false);
            return;
        }

        fetchProducts();
    }, [])

    return (
        <div className="flex flex-col gap-2">
            {
                !loading && products.map(product => (
                    <div key={product._id} className="bg-white w-full shadow rounded p-4 cursor-pointer">
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>{product.price}€</p>
                        <CustomImage src={product.image} alt={product.name} />
                    </div>
                ))
            }
        </div>
    )
}

export default Products