import React from "react";
import Main from "./components/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import SignUp from "./components/SignUp";
import Create from "./components/Create";
import Body from "./components/Body";

function App(){

    return (
        
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/create" element={<Create/>} />
        <Route path="/body" element={<Body/>} />

        </Routes>
        </BrowserRouter>
    )
}
export default App;