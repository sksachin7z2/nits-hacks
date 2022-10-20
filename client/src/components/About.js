import React, { useState, useEffect, useRef } from 'react'
import BIRDS from 'vanta/dist/vanta.waves.min'
import Aboutcard from "./Aboutcard";
// import noteContext from '../context/notes/NoteContext';

function About() {
   
        const [vantaEffect, setVantaEffect] = useState(0)
        const myRef = useRef(null)
        useEffect(() => {
          if (!vantaEffect) {
            setVantaEffect(BIRDS({
              el: myRef.current
            }))
          }
         
        }, [vantaEffect]);


        // return ( <div ref={myRef}>
        //   Foreground content goes here
        // </div>)
      
  return (
    <>
      <div
       
       
        style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
          height: "80vh",
          width: "100%",
          position:"relative",
         top:"-7vh",
         zIndex:-1
        }}
        ref={myRef}
      >
        <div>
          <h1
            style={{
              textAlign: "center",
              color: "#202241",
              fontWeight: "bolder",
            }}
          >
            Memobook
          </h1>
          <p style={{ textAlign: "center" }}>
           Memobook is Web-app where you can save your personal notes in safe
            and secure way.
          </p>
        </div>
      </div>
     
          <h2 style={{textAlign:"center",color:"#16b08d",fontFamily:"monospace",fontWeight:"bolder"}}>About Me</h2>
          <hr style={{height:"0.2rem",color:"#16b08d"}}/>
        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}} className="container my-3">
       
    
        <Aboutcard/>
     
 </div>
    
      <footer
        style={{ height: "30vh", backgroundColor: "black", marginTop: "5vh" }}
      >
        <div className="container">
          <h3 style={{ color: "gray", paddingTop: "5vh" }}>Memobook</h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          facilis sunt adipisci! Voluptate itaque sed unde autem repellat quasi
          eius vero voluptates, delectus sit veniam tempora cupiditate
          praesentium corporis quis qui veritatis necessitatibus omnis.
        </div>
      </footer>
    </>
  );
}

export default About;
