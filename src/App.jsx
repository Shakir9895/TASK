import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from './page/Home';
import { Login } from './page/Login';



export const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/home' element={<Home/>} />
          
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={"Register"} />
        </Routes>
      </Router>
    </>
  )
}
