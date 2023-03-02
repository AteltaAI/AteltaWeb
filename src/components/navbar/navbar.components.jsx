import React from 'react'
import './navbar.styles.css';
import { NavLink } from "react-router-dom";

function Navbar() {
  const NAV_PATH = [
    {
      option: "Solutions",
      route: "/solutions"
    },
    {
      option: "Community",
      route: "/community"
    },
    {
      option: "Developers",
      route: "/developers"
    },
    {
      option: "Demo",
      route: "/demo"
    },
    {
      option: "Login | Sign Up",
      route: "/login"
    }
  ]

  return (
    <div className='Navbar'>
      <NavLink to="/" className="logo">
        <p>Atelta</p>
      </NavLink>
      <div className="nav-right">
        {
          NAV_PATH.map((nav) => <div className='nav-ele'><NavLink to={nav.route}>{nav.option}</NavLink></div>)
        }
      </div>
    </div>
  )
}

export default Navbar;