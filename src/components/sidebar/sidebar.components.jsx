import React from 'react'

import './sidebar.styles.css';

const Sidebar = () => {



  return (
    <div className='thumbnail-sidebar'>
        <div className="sidebar-content">
        <img className='brg-nav' src="https://img.icons8.com/external-outline-stroke-bomsymbols-/91/null/external-burger-general-office-outline-outline-stroke-bomsymbols-.png" alt='brg-nav'/>
          <p>Choose from existing videos</p>
        </div>
        {[...Array(5)].map((thumb) => (
            <div className='thumb-nail'>
            </div>
        ))}
  
    </div>
  )
}

export default Sidebar;