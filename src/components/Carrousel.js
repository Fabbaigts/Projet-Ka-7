import React from 'react'
import { useState } from 'react'
import FlechesCarrousel from './FlechesCarrousel'

export default function Carrousel(props) {
  const [current, setCurrent] = useState(0)
  const tableauDesImages = props.carrouselPictures
  
  const nextPicture = () => {
    setCurrent(current === tableauDesImages.length - 1 ? 0 : current + 1)
  }

  const previousPicture = () => {
    setCurrent(current < 1 ? tableauDesImages.length - 1 : current - 1)
  }

  return (
    <>
      {tableauDesImages.length !== 1 && (
        <FlechesCarrousel previous={previousPicture} next={nextPicture} />
      )}
      {tableauDesImages.map((pic, indexOfPic) => {
        let indexOfPicture = tableauDesImages.indexOf(pic)

        return (
          <>
            {indexOfPic === current && (
              <img
                className="imageCarrousel__visible"
                key={indexOfPic}
                src={pic}
                alt={'image de carrousel n°' + indexOfPicture + 1}
              />
            )}
          </>
        )
      })}
      {tableauDesImages.length !== 1 && (
        <div className="numero__image">
          {current + 1}/{tableauDesImages.length}
        </div>
      )}
    </>
  )
}
