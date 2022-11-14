import React from 'react'
import { useState } from 'react'
import FlechesCarrousel from './FlechesCarrousel'

export default function Carrousel(props) {
  const [current, setCurrent] = useState(0)
  const tableauDesImages = props.carrouselPictures
  const nombreDimages = props.carrouselPictures.length
  const imageAffichee = current + 1
  const date = new Date()
  const numeroAleatoire = date.getTime()
  const nextPicture = () => {
    //si l'image affichée est = au nombre total d'image alors set current retourne à la valeur 0
    setCurrent(imageAffichee === nombreDimages ? 0 : current + 1)
    console.log(current)
  }
  //si l'image affichée et = à 1 alors set current est = nombre total d'image -1 (pour trouver l'index 0 du tableau)
  const previousPicture = () => {
    setCurrent(imageAffichee === 1 ? nombreDimages - 1 : current - 1)
    console.log(current)
  }

  return (
    <>
      {/* Affichage des fleches du carrousel si le nombre d'images est > 1 */}
      {tableauDesImages.length !== 1 && (
        <FlechesCarrousel previous={previousPicture} next={nextPicture} />
      )}
      {/* Affichage du compteur d'image si le nombre d'images est > 1 */}
      {nombreDimages !== 1 && (
        <div className="numero__image">
          {imageAffichee}/{nombreDimages}
        </div>
      )}
      {/* Affichage de l'image si son index correspond au setcurrent*/}
      {tableauDesImages.map((pic, indexOfpic) => {
        console.log(indexOfpic)
        return (
          <>
            {/* indexOf : retourne l'index de chaque element d'un tableau*/}
            {indexOfpic === current && (
              <img
                className="imageCarrousel__visible"
                key={numeroAleatoire}
                src={pic}
                alt={'image de carrousel n°' + imageAffichee}
              />
            )}
          </>
        )
      })}
    </>
  )
}
