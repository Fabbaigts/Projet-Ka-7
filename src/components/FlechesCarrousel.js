import React from 'react'

const FlechesCarrousel = (props) => {
  return (
    <div className="conteneur_fleches">
      <button className="flecheGauche" value="Back" onClick={props.previous}>
        <i class="fa-solid fa-chevron-left"></i>
      </button>
      <button className="flecheDroite" value="Next" onClick={props.next}>
        <i class="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  )
}

export default FlechesCarrousel
