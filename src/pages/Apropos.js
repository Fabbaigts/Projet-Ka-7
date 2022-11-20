import React from 'react'
import Navigation from '../components/header/Navigation'
import Banner from '../components/header/Banner'
import DropdownDesktop from '../components/body/Logement/Dropdown'
import Footer from '../components/footer/Footer.js'
import DonneesApropos from '../datas/apropos.json'

const Apropos = () => {
  return (
    <>
      <section className="header">
        <Navigation />
      </section>
      <section className="aPropos_section1">
        <Banner h1="Page A propos" title="aproposBanniere" />
      </section>
      <section className="informations__apropos">
        {DonneesApropos.map((e) => {
          return (
            <DropdownDesktop
              key={e.id}
              title={e.id}
              taille="grand"
              className="description__dropdown"
              contenu={e.contenu}
            />
          )
        })}
      </section>
      <Footer />
    </>
  )
}

export default Apropos
