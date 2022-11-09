import React from 'react'
import { useState } from 'react'

export default function DropdownDesktop(props) {
  // ici les props sont héritées de la page Fichelogement ou Apropos
  // et sont : title="Description"; taille = 'petit' ou 'grand'; className = 'description__dropdown' et contenu(mappé précédemment)
  // + initialisation d'une variable "d'état" de la barre dropdown par défaut sur "false" (fermée)
  const [etat, setEtat] = useState(false)
  return (
    <>
      <div
        // attribution d'une classe différente selon que la barre dropdown a des propriétés
        //"taille" petite (dropdownsmall) ou grande (dropdownlarge) héritée  de la page auquelle elle fait référence.
        className={props.taille === 'petit' ? 'dropdownsmall' : 'dropdownlarge'}
      >
        <div>
          {/*  Evenement au clic de la barre dropdown (sous forme de boutton)
           -> Modification du usestate en l'inverse de l'état actuel  */}
          <button className="barre__dropdown" onClick={() => setEtat(!etat)}>
            <h3 className="titre__dropdown">{props.title}</h3>
            {/*  Selon l'état "true ou false" de la barre, attribution d'une image différente de chevron (up ou down)*/}
            <img
              className="chevron"
              src={etat ? '../up.svg' : '../down.svg'}
              alt="chevron down"
            />
          </button>
        </div>
        {/*  Si l'état de la barre est "true", Ajout d'une div de text contenant le contenu approprié selon ses propriétés*/}
        {etat === true && (
          <div className="greyContainer">
            <ul className="contenu__dropdown">{props.contenu}</ul>
          </div>
        )}
      </div>
    </>
  )
}
