import React from 'react'

const tableauEtoiles = [1, 2, 3, 4, 5]
console.log(tableauEtoiles)

const Etoiles = (props) => {
  let votes = props.scaleValue
  console.log(votes)

  return (
    <>
      {tableauEtoiles.map((indexdutableau) =>
        indexdutableau <= votes ? (
          <img
            key={'etoilerose' + indexdutableau}
            src="./etoilerose.png"
            alt="etoilesroses"
            className="etoilesroses"
          />
 
        ) : (
          <img
            key={'etoilegrise' + indexdutableau}
            src="./etoilegrise.png"
            alt="etoilesgrises"
            className="etoilesgrises"
          />
        )
      )}
    </>
  )
}

export default Etoiles
