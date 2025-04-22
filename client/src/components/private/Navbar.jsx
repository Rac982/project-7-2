import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex gap-2 w-full'>
        <div>
            <Link to="/private">Home</Link>
        </div>
    </nav>
  )
}

export default Navbar