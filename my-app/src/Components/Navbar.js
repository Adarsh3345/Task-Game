import React from 'react'
import './Home.css';
import { NavLink } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav className='nav'>
      <div className='logo'>
        <h3>KATSU</h3>
      </div>
      <div className='links'>
        <NavLink to="/" activeClassName="active" className='link'>Home</NavLink>
        <NavLink to="/new" activeClassName="active" className='link'>New</NavLink>
        <NavLink to="/login" activeClassName="active" className='link'>Login</NavLink>
        <NavLink to="/register" activeClassName="active" className='link'>Register</NavLink>
      </div>
      
    </nav>
  )
}
