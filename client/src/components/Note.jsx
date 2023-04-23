import React from 'react'

const Note = (props) => {
  return (
    <>
    <div className="note">
        <div className="ntitle">{props.title}</div>
        <div className="nbody">{props.content}</div>
    </div>
    </>
  )
}

export default Note