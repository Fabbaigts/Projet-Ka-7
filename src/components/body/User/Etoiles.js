import React from 'react'
import etoilerose from '../../../assets/etoilerose.png'
import etoilegrise from '../../../assets/etoilegrise.png'

const tableauEtoiles = [1, 2, 3, 4, 5]

export default function Etoiles(props) {
  let votes = props.scaleValue
  return (
    <>
      {tableauEtoiles.map((indexdutableau) =>
        indexdutableau <= votes ? (
          <img
            key={'etoilerose' + indexdutableau}
            src={etoilerose}
            alt="etoilesroses"
            className="etoilesroses"
          />
        ) : (
          <img
            key={'etoilegrise' + indexdutableau}
            src={etoilegrise}
            alt="etoilesgrises"
            className="etoilesgrises"
          />
        )
      )}
    </>
  )
}
