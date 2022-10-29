import React from 'react'
import { NavLink } from 'react-router-dom'

function DropdownDesktop(props) {
  console.log(props)

  return (
    <>
     
        <h3 className='titre__dropdown'>{props.title}</h3>
        
    
    </>
  )
}

export default DropdownDesktop
