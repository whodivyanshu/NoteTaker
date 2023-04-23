import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Note from './Note';
import axios from 'axios';
import Write from './Write';

const Body = () => {
  const location = useLocation();
  const username = new URLSearchParams(location.search).get('username');

  const [data, setData] = useState(null);
  const [showWrite, setShowWrite] = useState(false);

  useEffect(() => {
    let source = axios.CancelToken.source();
    axios
      .get('https://backend-26qi.onrender.com/getData', {
        cancelToken: source.token,
      })
      .then((response) => {
        console.log(response.data);
        const user = response.data.find((user) => user.username === username);
        if (user) {
          setData(user.notes);
        }
      })
      .catch((error) => {
        if (axios.isCancel(error)) {
          console.log('Request canceled:', error.message);
        } else {
          console.log(error);
        }
      });

    return () => {
      source.cancel('Canceled due to new request');
    };
  }, [username]);

  const handleShowWrite = () => {
    setShowWrite(!showWrite);
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <header>
        <h1>Hello, {username}</h1>
      </header>
      {showWrite && <Write username={username} />}
      <div className="notes">
        {data.map((note, index) => (
          <Note key={index} title={note.title} content={note.content} />
        ))}
      </div>
      <button className="nmake" onClick={handleShowWrite}>
        +
      </button>
    </>
  );
};

export default Body;
