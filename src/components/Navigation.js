import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
  const clicLogo = (event) => {
    console.log('Lien cliqué')
  }

  return (
    <>
      {/* 👇️ react router link */}
      <NavLink onClick={clicLogo} to="/" className="logoClic">
        <img src="../logo1.svg" alt="logo principal Kaza" className="logo" />
      </NavLink>

      <div className="navigation">
        <ul>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? 'nav-active' : '')}
          >
            <li className="li__nav">Accueil</li>
          </NavLink>
          <NavLink
            to="/about"
            className={(nav) => (nav.isActive ? 'nav-active' : '')}
          >
            <li className="li__nav">A propos</li>
          </NavLink>
        </ul>
      </div>
    </>
  )
}

