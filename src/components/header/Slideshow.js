import React from 'react'
import { useState } from 'react'

import { Fragment } from 'react'

export default function Carrousel(props) {
  const [current, setCurrent] = useState(0)
  const tableauDesImages = props.carrouselPictures
  const nombreDimages = props.carrouselPictures.length
  const imageAffichee = current + 1
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
      {tableauDesImages.length !== 1 && (
        <div className="conteneur_fleches">
          <button
            className="flecheGauche"
            value="Back"
            onClick={previousPicture}
          >
            <i className="fa-sharp fa-solid fa-chevron-left"></i>
          </button>
          <button className="flecheDroite" value="Next" onClick={nextPicture}>
            <i className="fa-sharp fa-solid fa-chevron-right"></i>
          </button>
        </div>
      )}

      {/* Affichage du COMPTEUR si le nombre d'images est > 1 */}
      {nombreDimages !== 1 && (
        <div className="numero__image">
          {imageAffichee}/{nombreDimages}
        </div>
      )}

      {/* Affichage de L'image si son index correspond au setcurrent*/}
      {tableauDesImages.map((pic, indexOfpic) => {
        return (
          /* <Fragment> va permettre d'attribuer une key unique à chaque image retournée*/
          /* ce qui n'est pas possible dans le cas de fragment <></>*/
          <Fragment key={indexOfpic}>
            {indexOfpic === current && (
              <img
                className="imageCarrousel"
                src={pic}
                alt={'image de carrousel n°' + imageAffichee}
              />
            )}
          </Fragment>
        )
      })}
    </>
  )
}
