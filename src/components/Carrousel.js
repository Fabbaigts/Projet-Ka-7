import React, { useState } from 'react'
import FlechesCarrousel from './FlechesCarrousel'

const Carrousel = (props) => {
  const [current, setCurrent] = useState(0)
  console.log(props.carrouselPictures)
  const tableauDesImages = props.carrouselPictures
  console.log(tableauDesImages)
  const nombreTotalImages = tableauDesImages.length
  console.log("nombre d'images: " + nombreTotalImages)
  console.log("valeur de l'index courant : " + current)

  const nextPicture = () => {
    setCurrent(current === nombreTotalImages - 1 ? 0 : current + 1)
    console.log('next')

    //demander l'afficha
  }

  const previousPicture = () => {
    setCurrent(current < 1 ? nombreTotalImages - 1 : current - 1)
    console.log('previous')
  }

  return (
    <>
      <FlechesCarrousel previous={previousPicture} next={nextPicture} />
      {props.carrouselPictures.map((pic, indexOfPic) => {
        console.log(pic)
        let indexOfPicture = props.carrouselPictures.indexOf(pic)
        console.log(indexOfPicture)
        let altTag = indexOfPicture + 1
        console.log(altTag)

        return (
          <img
            className={
              indexOfPic === current
                ? 'imageCarrousel__visible'
                : 'imageCarrousel__cachee'
            }
            key={indexOfPic}
            src={pic}
            alt={'image de carrousel n°' + altTag}
          />
        )
      })}
    </>
  )
}

export default Carrousel
