import React from 'react'
import CustomImage from './CustomImage';


const ProductItem = ({ onSelectProduct, product }) => {
    return (
        <>
            <div key={product._id} className=" bg-white w-[375px] h-[107px]  rounded  cursor-pointer flex space-between justify-center pr-6 pl-4" onClick={onSelectProduct}>
                <CustomImage src={product.image} alt={product.name} className="w-[90px] h-[90px] rounded-2xl object-cover" />
                <div className="pl-3 pr-5">
                    <h3 className="font-bold text-[16px]">{product.name}</h3>
                    <p className="text-[12px]">{product.description}</p>
                </div>
                <div className="flex flex-col  min-w-[26px] h-[80px] justify-between" >
                    <p className="text-sm">{product.price}€</p>
                    <div>
                        <img src=" /images/Plus.svg" alt='logo' className="w-[26px] h-[26px]" />
                    </div>
                </div>
            </div>
            <div className='flex w-[295px] border-b border-b-gray-400 ml-[40px] mb-4'></div>
        </>
    )
}

export default ProductItem