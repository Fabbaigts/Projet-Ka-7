import React from 'react'
import Navigation from '../components/header/Navigation'
import ImageEnTete from '../components/header/Banner'
import DropdownDesktop from '../components/body/Description/Dropdown'
import Footer from '../components/footer/Footer.js'

const Apropos = () => {
  return (
    <>
      <section className="header">
        <Navigation />
      </section>
      <section className="aPropos_section1">
        <ImageEnTete h1="A propos" title="aproposBanniere" />
      </section>

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
            title="Respect"
            taille="grand"
            className="description__dropdown"
            contenu="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          />
        </div>
        <div className="conteneur__dropdown">
          <DropdownDesktop
            title="Services"
            taille="grand"
            className="description__dropdown"
            contenu="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
          />
        </div>
        <div className="conteneur__dropdown">
          <DropdownDesktop
            title="Sécurité"
            taille="grand"
            className="description__dropdown"
            contenu="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
..."
          />
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Apropos
