import React from 'react'
import { NavLink } from 'react-router-dom'



function Card(props) {

  return (
    <article className="card">
      <NavLink to={props.Navlink}>
        <div className="conteneurImage">
          <img className="imgCard" src={props.imgurl} alt={props.title}></img>
        </div>
        <h4>{props.title}</h4>
      </NavLink>
    </article>
  )
}

export default Card


