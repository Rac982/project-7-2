import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import CustomImage from '../../components/shared/CustomImage';
import { useApi } from '../../hooks/useApi';
import { setProducts } from '../../store/slices/productSlice';
import PopUp from './PopUp';


const Products = () => {
    const { get } = useApi();
    const params = useParams();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [popup, setPopup] = useState(false)

    const { current: activeCategory } = useSelector((state) => state.categories);
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

    useEffect(() => {
        if (selectedProduct) {
            setPopup(true)
        }
    }, [selectedProduct]);



    return (
        <>
            <div className='flex flex-col items-center'>
                {
                    popup && selectedProduct &&
                    <div className='fixed inset-0 left-163 bg-black z-40 flex flex-col items-center justify-center w-[375px]'>
                        <div className='fixed left-1/2 top-100 transform -translate-x-1/2 -translate-y-1/2 z-10 rounded-2xl '>
                            <PopUp
                                src={selectedProduct.image}
                                alt={selectedProduct.name}
                                description={selectedProduct.description}
                                title={selectedProduct.name}
                                price={selectedProduct.price}
                                onClick={() => {
                                    setPopup(false);
                                    setSelectedProduct(null);
                                }}
                            />
                        </div>
                    </div>
                }

                <div className="flex pt-4 pl-4 pb-4 pr-3 items-center bg-white w-[375px] gap-4">
                    <img src="/images/Component1.svg" alt="arrow" className="" />
                    <h1 className="w-full font-semibold text-[18px]">{activeCategory ? activeCategory.name : "Categoria"}</h1>
                    <img src="/images/Slider.jpg" alt="slider" className="w-[26px] h-[26px]" />

                </div>

                <div className="flex flex-col gap-2  rounded-2xl p-2 bg-white w-[375px]" style={{ "boxShadow": "0px -15px 10px -14px rgba(0,0,0,0.1)" }} >

                    {
                        !loading && products.map(product => (

                            <>

                                <div key={product._id} className="bg-white w-[375px] h-[107px]  rounded  cursor-pointer flex space-between justify-center pr-6 pl-4" onClick={() => setSelectedProduct(product)}>
                                    <CustomImage src={product.image} alt={product.name} className="w-[90px] h-[90px] rounded-2xl object-cover" />
                                    <div className="pl-3 pr-5">
                                        <h3 className="font-bold text-[16px]">{product.name}</h3>
                                        <p className="text-[12px]">{product.description}</p>
                                    </div>
                                    <div className="flex flex-col  min-w-[26px] h-[80px] justify-between" >
                                        <p className="text-sm">{product.price}€</p>
                                        <img src=" /images/Plus.svg" alt='logo' className="w-[26px] h-[26px]" />
                                    </div>

                                </div>

                                <div className='flex w-[295px] border-b border-b-gray-400 ml-[40px] mb-4'></div>
                            </>
                        ))
                    }
                </div>

            </div>



        </>
    )
}

export default Products