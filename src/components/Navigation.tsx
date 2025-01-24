import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav style={{ marginBottom: '20px' }}>
      <Link to="/" style={{ marginRight: '20px' }}>Home</Link>
      <Link to="/about">About</Link>
    </nav>
  )
}

export default Navigation
