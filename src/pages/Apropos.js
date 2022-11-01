import React from 'react'
import Navigation from '../components/Navigation'

import DropdownDesktop from '../components/DropdownDesktop'
import Footer from '../components/Footer.js'

const Apropos = () => {
  return (
    <>
      <section className="header">
        <Navigation />
      </section>
      <section className="header">
        <Navigation />
      </section>
      <h1>A propos</h1>

      <section className="informations__apropos">
        <div className="conteneur__dropdown">
          <DropdownDesktop
            title="Fiabilité"
            taille="grand"
            className="description__dropdown"
            contenu="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
          />
        </div>
        <div className="conteneur__dropdown">
          <DropdownDesktop
            title="Fiabilité"
            taille="grand"
            className="description__dropdown"
            contenu="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
          />
        </div>
      </section>
      <section className="espacement"></section>
    </>
  )
}

export default Apropos
