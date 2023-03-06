import React from 'react'
import './navbar.styles.css';
import { NavLink } from "react-router-dom";

function Navbar() {
  const NAV_PATH = [
    {
      option: "Add New",
      route: "/new"
    },
    {
      option: "Practise",
      route: "/practise"
    },
    {
      option: "Dashboard",
      route: "/dashboard"
    },
    {
      option: "About",
      route: "/about"
    },
  ]

  return (
    <div className='Navbar'>
      <NavLink to="/" className="logo">
        <p>AteltaAI</p>
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