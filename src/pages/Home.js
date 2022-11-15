import React from 'react'
import Navigation from '../components/header/Navigation'
import ImageEnTete from '../components/header/Banner'
import hebergements from '../datas/hebergements.json'
import Card from '../components/body/Card'
import Footer from '../components/footer/Footer'

const Home = () => {
  return (
    <>
      <section className="header">
        <Navigation />
      </section>
      <section className="banner">
        <ImageEnTete h1="Chez vous, partout et ailleurs" title="_slogan" />
      </section>
      <section className="gallery_ground">
        {hebergements.map((logement) => {
          return (
            <Card
              key={logement.id}
              title={logement.title}
              Navlink={'/logement/' + logement.id}
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
