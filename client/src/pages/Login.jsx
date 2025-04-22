import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
        <Link to="/private">
            <button>Login</button>
        </Link>
    </div>
  )
}

export default Login