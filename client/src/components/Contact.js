import React,{useState,useRef,useEffect} from 'react'
import BIRDS from 'vanta/dist/vanta.birds.min'
// import dp from './dp.jpg'
function Contact() {
    const [info, setinfo] = useState({name:"",email:"",subject:"",description:""})
    const onchange=(e)=>{
        setinfo({...info,[e.target.name]:e.target.value})
    }

    const [vantaEffect, setVantaEffect] = useState(0)
    const myRef = useRef(null)
    useEffect(() => {
      if (!vantaEffect) {
        setVantaEffect(BIRDS({
          el: myRef.current
        }))
      }
     
    }, [vantaEffect]);
    return (
        
<div className='App1'>
      <div className="card mb-3" >
      <div className="row g-0">
        <div ref={myRef}  className="col-md-4 d-flex">
         
     
      
        </div>
        <div className="col-md-8 query">
          <div className="card-body">
            <h5 className="card-title text-center darkmode">Contact Me</h5>
           
            <div  className='App'>
            <form action="https://formsubmit.co/sksachin7z2@gmail.com" method="POST">
  <div className="form-group">
    <label className='darkmode' htmlFor="name">Name</label>
    <input type="text" className="form-control " id="name" name="name"  onChange={onchange} aria-describedby="emailHelp"   required/>
   
  </div>
  <div className="form-group">
    <label className='darkmode' htmlFor="email">Email address</label>
    <input type="email" className="form-control " id="email" name="email" onChange={onchange} aria-describedby="emailHelp" required/>
   
  </div>
  <div className="form-group">
  <label className='darkmode' htmlFor="subject">Subject</label>
    <input type="text" className="form-control " id="subject" onChange={onchange} name="subject"   required/>
  </div>
  <div className="form-group">
  <label className='darkmode' htmlFor="description">Description</label><br />
    <textarea name="description" id="description" cols="50" rows="10"></textarea>
  </div>
  
  <button type="submit" className="btn btn-primary my-3">Send</button>
</form>
        </div>




           
          </div>
        </div>
      </div>
    </div>

  
           
        </div>
    )
}

export default Contact
