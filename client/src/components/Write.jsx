import React, {useState} from 'react'
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Write = (props) => {
    const username = props.username;
    // const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("")

    const handleNoteSubmit = async(e) =>{
        // alert(username);
        e.preventDefault();
        try{
            await axios.post("https://backend-26qi.onrender.com/notesubmit", {
                username: username,
                title: title,
                content: content
            });
            // alert("Note Saved Successfully");

        }catch(error){
            alert("there is a problem on making the note");
            console.log(error);
        }
        // navigate(`/body?username=${username}`)
        window.location.reload();
        
        

    }





  return (
    <div className="write">
    {/* <div className="wtitle">Title</div> */}
    <form action="/" method="post" onSubmit={handleNoteSubmit}>

    <div className="wtitle"><textarea placeholder='Enter Your Title' name="" id="" cols="50" rows="1" value={title} onChange={(e)=>setTitle(e.target.value)}></textarea></div>
    <hr />
    <div className="wcontent"><textarea placeholder='Write your Content from here!' value={content} onChange={(e)=> setContent(e.target.value)} name="" id="" cols="94" rows="16"></textarea></div>
    <button type='submit'>Save</button>
    </form>
  </div>
  )
}

export default Write