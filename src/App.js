import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import React from 'react'


function App() {
  return (
    <>
        <Routes>
              <Route path="/" element={<Home/>}></Route>
        </Routes>
    </>
  );
}


export default App;
