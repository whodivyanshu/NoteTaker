import React from 'react'
// import axios from "axios";
import Login from './Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Main = () => {


  return (
    <BrowserRouter>
    <Routes>

    <div className="main">
        <div className="mleft">
          
          <Login/>
        </div>
        <div className="mright">

        </div>
    </div>
    </Routes>
    </BrowserRouter>
  )
}

export default Main
