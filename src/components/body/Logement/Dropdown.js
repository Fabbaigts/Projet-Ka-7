import React from 'react'
import { useState } from 'react'
import up from '../../../assets/up.svg'
import down from '../../../assets/down.svg'

export default function Dropdown(props) {
  // ici les props sont héritées de la page Fichelogement ou Apropos
  // et sont : title="Description"; taille = 'petit' ou 'grand';
  // className = 'description__dropdown' et contenu(mappé précédemment)
  // + initialisation d'une variable "d'état" de la barre dropdown par défaut sur "false" (fermée)
  const [etat, setEtat] = useState(false)

  return (
    <>
      <article
        // attribution d'une classe différente selon que la barre dropdown a des propriétés
        // "taille" petite (dropdownsmall) ou grande (dropdownlarge)
        // héritée  de la page auquelle elle fait référence.
        className={props.taille === 'petit' ? 'dropdownsmall' : 'dropdownlarge'}
      >
        <div>
          {/*  Evenement au clic de la barre dropdown (sous forme de boutton)
           -> Modification du usestate en l'inverse de l'état actuel  */}
          <button className={props.className} onClick={() => setEtat(!etat)}>
            <h2 className="titre__dropdown">{props.title}</h2>
            {/*  Selon l'état "true ou false" de la barre, 
            attribution d'une image différente de chevron (up ou down)*/}
            <img
              className="chevron"
              src={etat ? up : down}
              alt="chevron down"
            />
          </button>
        </div>
        {/*  Si l'état de la barre est "true", Ajout d'une div de text ayant
        // le contenu approprié selon ses propriétés*/}
        {etat === true && (
          <div className="greyContainer">
            <ul className="contenu__dropdown">{props.contenu}</ul>
          </div>
        )}
      </article>
    </>
  )
}
