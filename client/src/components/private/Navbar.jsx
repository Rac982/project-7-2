import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const { user } = useSelector((state) => state.auth);

    return (
        <nav className='flex gap-2 w-full'>
            <div>
                <Link to="/private">Home</Link>
            </div>
            <div>
                Welcome {user.first_name} {user.last_name}
            </div>
        </nav>
    )
}

export default Navbar