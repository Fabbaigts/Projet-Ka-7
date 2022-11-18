import React from 'react'

export default function Tags(props) {
  return (
    <>
      {props.tags.map((tag) => {
        let indexOfTag = props.tags.indexOf(tag)
        return (
          <div className="tags" key={indexOfTag}>
            {tag}
          </div>
        )
      })}
    </>
  )
}
