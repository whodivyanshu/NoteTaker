import React from 'react'
import { useLocation } from 'react-router-dom';

const Body = () => {
    const location = useLocation();
    const username = new URLSearchParams(location.search).get('username');

  return (
    <>
    <header><h1>{username}</h1></header>
    </>
  )
}

export default Body