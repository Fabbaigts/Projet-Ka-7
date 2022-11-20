import React from 'react'
import { NavLink } from 'react-router-dom'



export default function Card(props) {

  return (
    <article className="card">
      <NavLink to={props.Navlink} className="lien_card">
        <div className="conteneurImage">
          <img className="imgCard" src={props.imgurl} alt={props.title}></img>
        </div>
        <div className="conteneur_description_card">
          <h2 className='descrition_card'>{props.title}</h2>
        </div>
      </NavLink>
    </article>
  )
}




