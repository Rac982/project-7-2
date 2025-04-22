import React from 'react'
import Navbar from '../components/private/Navbar'
import { Outlet } from 'react-router-dom'

const Private = () => {
  return (
    <>
        <Navbar />
        <main>
            <Outlet />
        </main>
    </>
  )
}

export default Private