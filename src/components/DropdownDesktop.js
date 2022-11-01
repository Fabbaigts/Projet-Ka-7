import React from 'react'


import { useState } from 'react'

function DropdownDesktop(props) {
  const [etat, setEtat] = useState(false)
  console.log(etat)

  console.log(props)
if (props.taille === "petit") { 
  if (etat === false)
    return (
      <div className="dropdownsmall">
        <button className="barre__dropdown" onClick={() => setEtat(true)}>
          <h3 className="titre__dropdown">{props.title}</h3>
          <img className="chevron" src="./down.svg" alt="chevron down" />
        </button>
      </div>
    )
  else
    return (
      <div className="dropupsmall">
        <button className="barre__dropdown" onClick={() => setEtat(false)}>
          <h3 className="titre__dropdown">{props.title}</h3>
          <img className="chevron" src="./up.svg" alt="chevron up" />
        </button>
        <div className="greyContainerr">
          <ul className="contenu__dropdown">{props.contenu}</ul>
        </div>
      </div>
    )}
    else if (props.taille === 'grand') {
      if (etat === false)
        return (
          <div className="dropdownlarge">
            <button className="barre__dropdown" onClick={() => setEtat(true)}>
              <h3 className="titre__dropdown">{props.title}</h3>
              <img className="chevron" src="./down.svg" alt="chevron down" />
            </button>
          </div>
        )
      else
        return (
          <div className="dropuplarge">
            <button className="barre__dropdown" onClick={() => setEtat(false)}>
              <h3 className="titre__dropdown">{props.title}</h3>
              <img className="chevron" src="./up.svg" alt="chevron up" />
            </button>
            <div className="greyContainer">
              <ul className="contenu__dropdown">{props.contenu}</ul>
            </div>
          </div>
        )
    }
}

export default DropdownDesktop
