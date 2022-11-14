import React from 'react'
import { NavLink } from 'react-router-dom'
import Navigation from '../components/header/Navigation'

const Page404 = () => {
  return (
    <>
      <section className="header">
        <Navigation />
      </section>
      <section className="body__404">
        <h1 className="Page404">404</h1>
        <h3 className="oups">Oups! La page que vous demandez n'existe pas.</h3>
        <NavLink to="/">
          <p className="retour__accueil">Retourner sur la page d’accueil</p>
        </NavLink>
      </section>
    </>
  )
}

export default Page404
