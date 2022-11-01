import React from 'react'
import Card from '../components/Card'
import hebergements from '../datas/hebergements.json'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <>
      <section className="header">
        <Navigation />
      </section>
      <section className="home_section1">
        <h2>Chez vous, partout et ailleurs</h2>
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
      <Footer/>
    </>
  )
}

export default Home
