import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { useApi } from '../../hooks/useApi';
import { setCurrentProduct, setProducts } from '../../store/slices/productSlice';
import { useNavigate } from 'react-router-dom'
import ProductItem from '../../components/shared/ProductItem';

const Products = () => {
    const { get } = useApi();
    const params = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const { all: products } = useSelector((state) => state.products);
    const { current: activeCategory } = useSelector((state) => state.categories);

    const fetchProducts = async () => {
        const products = await get(`/products/${params.category_id}`);
        dispatch(setProducts(products));
        setLoading(false);
    }

    const selectCurrentProduct = (product) => {
        dispatch(setCurrentProduct(product));
    }

    useEffect(() => {
        if (products.length > 0 && products[0].category._id == params.category_id) {
            setLoading(false);
            return;
        }

        fetchProducts();
    }, [])

    return (
        <>
            <div className='flex flex-col items-center'>
                <div className="flex pt-4 pl-4 pb-4 pr-3 items-center bg-white w-[375px] gap-4">
                    <img className="cursor-pointer" src="/images/Component1.svg" alt="arrow" onClick={() => navigate("/private/categories")} />
                    <h1 className="w-full font-semibold text-[18px]">{activeCategory ? activeCategory.name : "Categoria"}</h1>
                    <img src="/images/Slider.jpg" alt="slider" className="w-[26px] h-[26px]" />
                </div>
                <div className="flex flex-col gap-2  rounded-2xl p-2 bg-white w-[375px]" style={{ "boxShadow": "0px -15px 10px -14px rgba(0,0,0,0.1)" }} >
                    {
                        !loading && products.map(product => (
                            <ProductItem key={product._id} onSelectProduct={() => selectCurrentProduct(product)} product={product} />
                        ))
                    }
                </div>

            </div>



        </>
    )
}

export default Products