import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Note from './Note';
import axios from 'axios';
import Write from './Write';

const Body = () => {
  const location = useLocation();
  const username = new URLSearchParams(location.search).get('username');

  const [data, setData] = useState(null);
  const [showWrite, setShowWrite] = useState(false)

  useEffect(() => {
    axios
      .get('https://backend-26qi.onrender.com/getData')
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

  return (
    <>
      <header>
        <h1>Hello, {username}</h1>
      </header>
      {showWrite && <Write username={username}/>}

      <div className="notes">
        {data.map((note,index) => (
          <Note key={index} title={note.title} content={note.content} />
        ))}
      </div>
      <button className="nmake" onClick={handleShowWrite}>+</button>
    </>
  );
};
export default Body;