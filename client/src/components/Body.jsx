import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Note from './Note';
import axios from 'axios';

const Body = () => {
  const location = useLocation();
  const username = new URLSearchParams(location.search).get('username');

  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:4000/getData')
      .then((response) => {
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

  return (
    <>
      <header>
        <h1>Hello, {username}</h1>
      </header>

      <div className="notes">
        {data.map((note,index) => (
          <Note key={index} title={note.title} content={note.content} />
        ))}
      </div>
      <button className="nmake">+</button>
    </>
  );
};
export default Body;