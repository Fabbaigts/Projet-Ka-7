import React, { useEffect } from 'react'
import { useState } from 'react'


function DropdownDesktop(props) {
  const [etat, setEtat] = useState(false)

  console.log(etat)
  console.log(props)

  useEffect(()=>{
    
  });

 
  

return (
  <div className="dropupsmall">
    <button className="barre__dropdown" onClick={() => setEtat(true)}>
      <h3 className="titre__dropdown">{props.title}</h3>
      <img className="chevron" src="./up.svg" alt="chevron up" />
    </button>
    <div className="greyContainerr">
      <ul className="contenu__dropdown">{props.contenu}</ul>
    </div>
  </div>
)
}

export default DropdownDesktop
