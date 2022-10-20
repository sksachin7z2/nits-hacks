import React from 'react'
import aboutme from './aboutme.jpg'
import facebook from './facebook.png'
import linkedin from './linkedin.png'
import github from './github.png'

import Typewriter from 'typewriter-effect';
function Aboutcard() {
    return (
       <>
       <div data-aos="fade-right" className='p-3' >
       <div className="card mb-3 my-3"  style={{ maxWidth:"72vw",backgroundColor:"black"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img  src={aboutme} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8 ">
      <div style={{display:"flex",justifyContent:"center",color:"#ff004d",fontSize:"1.2rem",fontFamily:"courier",fontWeight:"bolder"}} className="card-body">
       
        <Typewriter
  options={{
    strings: ['Hello, My name is Sachin!', 'I am  new to development!','Learning new things everyday!'],
    autoStart: true,
    delay:70,
    loop: true,
  }}
/>

      </div>
      <div style={{color:"white",fontSize:"1rem",padding:"1rem",textAlign:"center"}} className="container">
          My name is Sachin Kumar Sharma.I am currently pursuing B.tech in Electronics and Communication Engineering from NIT Silchar. I am a passionate learner, technology enthusiast. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe corrupti architecto ipsa ratione numquam? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod cupiditate aspernatur sequi nemo eveniet repellendus maxime modi ea laborum repudiandae. Velit voluptas dolore quasi excepturi quisquam odio quis consectetur iste!
          </div>
          <div className='container text-center p-2'>
        <a href="https://www.facebook.com/profile.php?id=100035913851615" target="_blank" rel="noopener noreferrer"><img className='links' src={facebook} alt="facebook" width="20rem"/></a>&emsp;

       <a style={{color:"transparent"}} href="https://www.linkedin.com/in/sachin-sharma-92a78120a/" target="_blank" rel="noopener noreferrer"> <img className='links'src={linkedin} alt="linkedin" width="20rem"/></a>&emsp;

        <a href="https://github.com/sksachin7z2" target="_blank" rel="noopener noreferrer"><img className='links'src={github} alt="github" width="20rem"/></a>&emsp;
        </div>
        
    </div>
  </div>
</div>
</div>

     </>
    )
}

export default Aboutcard
