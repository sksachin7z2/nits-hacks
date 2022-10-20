// import logo from './logo.svg';
import React, { useState } from 'react';
import {
  HashRouter as Router, Route, Routes
} from 'react-router-dom';
import './App.css';
import Alert from './components/Alert';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NoteState from './context/notes/NoteState';
// import Contact from './components/Contact';

function App() {
  // const host="http://localhost:5000";
  const host="https://memobook.herokuapp.com";
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },2000);
}
  return (
        <>
        <NoteState>
        <Router>
        <Navbar />
        <Alert alert={alert}/>
        <Routes>
          
          <Route exact path="/" key="home" element={<Home showAlert={showAlert}/>}/>


        </Routes>
        </Router>
        </NoteState>
        </>
  );
}

export default App;
