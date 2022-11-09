import React from 'react';

export default function ImageEnTete (props)  {
    return (
      <div className="conteneur__imageEntete">
        <h1 className={props.title}>{props.h1}</h1>
      </div>
    )
};

