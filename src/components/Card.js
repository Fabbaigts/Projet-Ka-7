import React from 'react'
import { NavLink } from 'react-router-dom'



function Card(props) {

  return (
    <article className="card">
      <NavLink to={props.Navlink} className="lien_card">
        <div className="conteneurImage">
          <img className="imgCard" src={props.imgurl} alt={props.title}></img>
        </div>
        <div className="conteneur_description_card">
          <p className='descrition_card'>{props.title}</p>
        </div>
      </NavLink>
    </article>
  )
}

export default Card


