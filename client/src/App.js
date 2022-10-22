// import logo from './logo.svg';
import React, { useState } from 'react';
import {
  BrowserRouter as Router, Route, Routes
} from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import ResDashboard from './components/ResDashboard';
import AuthorityLogin from './components/AuthorityLogin'
import ResLogin from './components/ResLogin'
import NoteState from './context/notes/NoteState';
import AuthorityDashboard from './components/AuthorityDashboard'

function App() {
  const host="http://localhost:5000";
  // const host="https://memobook.herokuapp.com";
  

  return (
        <>
        <NoteState>
        <Router>
 
       
        <Routes>
          
          <Route exact path="/" key="home" element={<Home />}/>
          <Route exact path="/studentlogin" key="resident" element={<ResLogin />}/>
          <Route exact path="/authoritylogin" key="authority" element={<AuthorityLogin />}/>
          {/* <Route exact path="/authoritylogin" key="authority" element={<Reslogin />}/> */}
          <Route exact path="/studentDashboard" key="studentDashboard" element={<ResDashboard/>}/>
          <Route exact path="/authorityDashboard" key="authorityDashboard" element={<AuthorityDashboard/>}/>
        </Routes>
        </Router>
        </NoteState>
        </>
  );
}

export default App;
