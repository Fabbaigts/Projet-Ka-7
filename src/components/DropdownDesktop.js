import React from 'react'

import { useState } from 'react'

function DropdownDesktop(props) {
  const [etat, setEtat] = useState(false)
  console.log(etat)

  console.log(props)

  return (
    <>
      <div
        className={props.taille === 'petit' ? 'dropdownsmall' : 'dropdownlarge'}
      >
        <div>
          <button className="barre__dropdown" onClick={() => setEtat(!etat)}>
            <h3 className="titre__dropdown">{props.title}</h3>
            <img
              className="chevron"
              src={etat ? './up.svg' : './down.svg'}
              alt="chevron down"
            />
          </button>
        </div>

        {etat === true && (
          <div className="greyContainer">
            <ul className="contenu__dropdown">{props.contenu}</ul>
          </div>
        )}
      </div>
    </>
  )
}

export default DropdownDesktop
