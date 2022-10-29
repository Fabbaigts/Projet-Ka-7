import React from 'react'
import Navigation from '../components/Navigation'
import Carrousel from '../components/Carrousel'
import { useParams } from 'react-router-dom'
import hebergements from '../datas/hebergements.json'
import DropdownDesktop from '../components/DropdownDesktop'
//import { NavLink } from 'react-router-dom'

const FicheLogement = () => {
  const { id } = useParams()
  const loc = hebergements.find((logement) => logement.id === id)

  console.log(loc)
  console.log({ id })

  return (
    <>
      <section className="header">
        <Navigation />
      </section>
      <>
        <section className="conteneurCarrousel">
          <Carrousel title={loc.title} carrouselPictures={loc.pictures} />
        </section>
        <section className="section__description">
          <article className="description__loc">
            <h1 className="titreFiche">{loc.title}</h1>
            <p className="localisation">{loc.location}</p>
          </article>
          <article className="description__user">
            <h1 className="nom__contact">{loc.host.name}</h1>
            <img
              className="avatar__contact"
              src={loc.host.picture}
              alt="avatar de profil"
            />
            <p className="notation">{loc.rating}</p>
          </article>
        </section>
        <section className="informations">
          <button className="dropdown" type="button">
            <DropdownDesktop title="Description" />
          </button>
          <button className="dropdown" type="button">
            <DropdownDesktop title="Équipements" />
          </button>
        </section>
      </>
    </>
  )
}

export default FicheLogement
