import React from 'react'

export default function Tags(props) {
  return (
    <>
      {props.tags.map((tag) => {
        console.log(tag)
        let indexOfTag = props.tags.indexOf(tag)
        console.log(indexOfTag)

        return (
          <div className="tags" key={indexOfTag}>
            {tag}
          </div>
        )
      })}
    </>
  )
}
