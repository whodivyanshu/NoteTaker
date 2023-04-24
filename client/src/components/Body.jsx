import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Note from './Note';
import axios from 'axios';
import Write from './Write';
import Read from './Read';

const Body = () => {
  const location = useLocation();
  const username = new URLSearchParams(location.search).get('username');

  const [data, setData] = useState(null);
  const [showWrite, setShowWrite] = useState(false)
  const [showNote, setshowNote] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:4000/getData')
      .then((response) => {
        console.log(response.data);
        const user = response.data.find((user) => user.username === username);
        if (user) {
          setData(user.notes);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [username]);

  if (!data) {
    return <div>Loading...</div>;
  }
  const handleShowWrite = () =>{
    if(showWrite === false){
      setShowWrite(true);
    }
    else{
      setShowWrite(false);
    }
  }
  const handleNote = ()=>{
    if(showNote === false){
      setshowNote(true);
    }
  }

  return (
    <>
      <header>
        <h1>Hello, {username}</h1>
      </header>
      {showWrite && <Write username={username}/>}
      {showNote && <Read title={data.title} content={data.content}/>}

      <div className="notes">
        {data.map((note,index) => (
          <Note key={index} title={note.title} content={note.content} onClick={handleNote} />
        ))}
      </div>
      <button className="nmake" onClick={handleShowWrite}>+</button>
    </>
  );
};
export default Body;