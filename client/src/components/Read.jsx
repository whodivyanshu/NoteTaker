import React from 'react'

const Read = (props) => {
  return (
    <div className="write">
    {/* <div className="wtitle">Title</div> */}
    

    <div className="wtitle"><textarea placeholder='Enter Your Title' name="" id="" cols="50" rows="1" value={props.title}></textarea></div>
    <hr />
    <div className="wcontent"><textarea placeholder='Write your Content from here!' value={props.content}  name="" id="" cols="94" rows="16"></textarea></div>
    {/* <button type='submit'>Save</button> */}
  </div>
  )
}

export default Read