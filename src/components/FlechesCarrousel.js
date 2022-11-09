import React from 'react'

export default function FlechesCarrousel (props) {
  return (
    <div className="conteneur_fleches">
      <button className="flecheGauche" value="Back" onClick={props.previous}>
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      <button className="flecheDroite" value="Next" onClick={props.next}>
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  )
}


