import React from 'react'
import './Navbar.css'
import {NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className='Navbar'>
        <div className='nav-ele'><NavLink to="/">Home</NavLink></div>
        <div className='nav-ele'><NavLink to="/demo">Demo</NavLink></div>
        <div className='nav-ele'><NavLink to="/dashboard">Dashboard</NavLink></div>
    </div>
  )
}

export default Navbar