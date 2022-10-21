// import logo from './logo.svg';
import React, { useState } from 'react';
import {
  HashRouter as Router, Route, Routes
} from 'react-router-dom';
import './App.css';

import Home from './components/Home';

import NoteState from './context/notes/NoteState';


function App() {
  const host="http://localhost:5000";
  // const host="https://memobook.herokuapp.com";
  

  return (
        <>
        <NoteState>
        <Router>
 
       
        <Routes>
          
          <Route exact path="/" key="home" element={<Home />}/>
          <Route exact path="/login" key="resident" element={<Home />}/>
            
        </Routes>
        </Router>
        </NoteState>
        </>
  );
}

export default App;
