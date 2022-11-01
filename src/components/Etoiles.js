import React from 'react'

const tableauEtoiles = [1, 2, 3, 4, 5]
console.log(tableauEtoiles)

const Etoiles = (props) => {
  let votes = props.scaleValue
  console.log(votes)

  return (
    <>
      {tableauEtoiles.map((valeurencoursdutableau) =>
        votes < valeurencoursdutableau ? (
          <img
            key={'etoilegrise' + valeurencoursdutableau}
            src="./etoilegrise.png"
            alt="etoilesgrises"
            className="etoilesgrises"
          />
        ) : (
          <img
            key={'etoilerose' + valeurencoursdutableau}
            src="./etoilerose.png"
            alt="etoilesroses"
            className="etoilesroses"
          />
        )
      )}
    </>
  )
}

export default Etoiles
