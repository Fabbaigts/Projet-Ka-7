import React from 'react'
import Card from '../components/Card'
import hebergements from '../datas/hebergements.json'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import ImageEnTete from '../components/ImageEnTete'




const Home = () => {
  return (
    <>
      <section className="header">
        <Navigation />
      </section>
      <section className="home_section1">
        <ImageEnTete h1="Chez vous, partout et ailleurs" title="HomeBanniere"/>
      </section>
      <section className="gallery_ground">
        {hebergements.map((logement) => {
          return (
            <Card
              key={logement.id}
              title={logement.title}
              Navlink={'/logement_' + logement.id}
              imgurl={logement.cover}
            />
          )
        })}
      </section>
      <Footer />
    </>
  )
}

export default Home
