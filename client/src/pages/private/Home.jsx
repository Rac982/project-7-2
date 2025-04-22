import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Link to="/">
        <button>Logout</button>
      </Link>
    </div>
  )
}

export default Home