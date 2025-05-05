import React, { useState } from 'react'

const PopUp = ({ src, alt, description, title, price, onClick }) => {
    const [count, setCount] = useState(1)
    return (
        <>
            <div className="bg-white w-[313px] h-[627px] border-b border-b-gray-400 flex flex-col justify-center relative rounded-2xl">

                <div className=''>
                    <img crossOrigin="anonymous" src={src} alt={alt} className='h-[217px] rounded-2xl object-cover' />
                    <button onClick={onClick} className='absolute top-0 right-2'>X</button>
                </div>
                <div className="h-[410px] pl-5 pr-5">

                    <div className="h-[172px]">
                        <h1 className="font-bold text-[16px] mb-6 mt-6">{title}</h1>
                        <p className='text-[12px]'>{description}  <b className='text-[#818181]'>Read More</b></p>
                    </div>
                    <div className='mt-3 mb-3'>
                        <p>Filters</p>
                    </div>
                    <div>
                        <p className='text-[12px] text-[#B3ADAD]'>Aggiungi nota +</p>
                        <div className="flex justify-between items-center">
                            <p className="flex justify-between items-center gap-2 text-[13px]">
                                <span className='text-[12px]'>Prezzo :</span>{price}€
                            </p>
                            <div className="flex gap-3 items-center w-[94px]">
                                <img onClick={() => setCount(c => c - 1)} src="/images/MinusSign.png" alt="minus" className='w-[33px] h-[33px]' />
                                <span>{count}</span>
                                <img onClick={() => setCount(c => c + 1)} src="/images/PlusSign.png" alt="plus" className='w-[33px] h-[33px]' />
                            </div>
                        </div>
                    </div>

                    <button className='w-full bg-[#3BC8E1] h-[39px] rounded-3xl text-white text-[16px] flex items-center justify-center gap-2 mt-10'>
                        <img src=" /images/Pluswhite.svg" alt="plus" className='w-[20px] h-[20px]' />

                        Aggiungi all'ordine</button>

                </div>
            </div>

        </>
    )
}

export default PopUp