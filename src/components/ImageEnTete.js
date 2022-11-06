import React from 'react';

const ImageEnTete = (props) => {
    return (
      <div className="conteneur__imageEntete">
        <h1 className={props.title}>{props.h1}</h1>
      </div>
    )
};

export default ImageEnTete;