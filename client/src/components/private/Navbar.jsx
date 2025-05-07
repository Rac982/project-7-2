import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CustomImage from '../shared/CustomImage';
import Menu from '../shared/Menu';

const Navbar = () => {
    const { user } = useSelector((state) => state.auth);
    const [selectMenu, setSelectMenu] = useState(false)

    const toggleMenu = () => {
        setSelectMenu(p => !p)
    }

    return (
        <nav className='flex justify-center w-full h-[66px] '>
            <div className='flex items-center justify-between min-w-[375px]  bg-primary px-2'>
                <div>
                    <Link to="/private">
                        <CustomImage src="/images/logo-restaurant2.svg" alt="logo" />
                    </Link>
                </div>
                <div className='flex items-center gap-3'>
                    <div>
                        {/* //todo: switch links */}
                        <Link to="/private/categories">
                            <CustomImage src="/images/Vector.png" alt="cart" />
                        </Link>
                    </div>
                    <div className="cursor-pointer" onClick={toggleMenu}>

                        <CustomImage src="/images/Menu.png" alt="menu" />
                        {
                            selectMenu && <Menu />
                        }


                    </div>
                </div>

            </div>
        </nav>
    )
}

export default Navbar