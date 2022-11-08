import React from 'react'
import Navigation from '../components/Navigation'
import Carrousel from '../components/Carrousel'
import { useParams } from 'react-router-dom'
import hebergements from '../datas/hebergements.json'
import DropdownDesktop from '../components/DropdownDesktop'
import Tags from '../components/Tags'
import Etoiles from '../components/Etoiles'
import Footer from '../components/Footer.js'
import Page404 from './Page404'

//import { NavLink } from 'react-router-dom'

const FicheLogement = () => {
  const { id } = useParams()
  const loc = hebergements.find((logement) => logement.id === id)

  console.log({ id })
  console.log(loc)

  if (loc === undefined) {
    return <Page404 />
  } else {
    const equip = loc.equipments

    console.log(equip)
    console.log(loc.id)

    return (
      <>
        <section className="header">
          <Navigation />
        </section>

        <section className="conteneurCarrousel">
          <Carrousel title={loc.title} carrouselPictures={loc.pictures} />
        </section>
        <section className="section__description">
          <article className="description__loc">
            <h1 className="titreFiche">{loc.title}</h1>
            <p className="localisation">{loc.location}</p>
            <div className="tags__ficheLogement">
              <Tags tags={loc.tags} classname="tags" />
            </div>
          </article>
          <article className="description__user">
            <div className="id__contact">
              <p className="nom__contact">{loc.host.name}</p>
              <img
                className="avatar__contact"
                src={loc.host.picture}
                alt="avatar de profil"
              />
            </div>
            <div className="stars">
              <Etoiles scaleValue={loc.rating} />
            </div>
          </article>
        </section>
        <section className="informations">
          <DropdownDesktop
            title="Description"
            taille="petit"
            className="description__dropdown"
            contenu={loc.description}
          />

          <DropdownDesktop
            title="Équipements"
            className="equipements"
            taille="petit"
            contenu={equip.map((e) => {
              return (
                <li key={e} className="equipment">
                  {e}
                </li>
              )
            })}
          />
        </section>

        <Footer />
      </>
    )
  }
}

export default FicheLogement
