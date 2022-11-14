import React from 'react'
import { NavLink } from 'react-router-dom'
import logoHeader from '../../assets/logo1.svg'

export default function Navigation() {
  const clicLogo = (event) => {
    console.log('Lien cliqué')
  }

  return (
    <>
      <NavLink onClick={clicLogo} to="/" className="logoClic">
        <img src={logoHeader} alt="logo principal Kaza" className="logo" />
      </NavLink>

      <div className="navigation">
        <ul>
          <NavLink
            to="/"
            end
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
