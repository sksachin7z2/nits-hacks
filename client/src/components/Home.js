import React from 'react'
// import '../home.css'
import main from './garbage-recycle.svg'
import Navbar from './Navbar'
import{ Link} from 'react-router-dom'
function Home() {
  return (
    <div>
       <Navbar/>
  

    <section id="mt-5" style={{marginTop:"56px"}}>
      <div className=" container">
        <div className="row">
        <div className="mt-5 col-md-6">
          <h3>Lorem ipsum dolor sit amet, consectetur</h3>
          <br />
          <div className="row">
          <div className=" col-md-6">
            <h4>For Residents</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <form action="sachin">
              <div className=" button">
                       <Link to='/studentlogin'><button className='btn btn-success'>Login</button></Link>
                    </div>
            </form>
             
          </div>

          <div className=" col-md-6">
            <h4>For Authority</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <form action="">
            <div className=" button">
                       <Link to='/authoritylogin'> <button className='btn btn-success'>Login</button></Link>
                    </div>
                </form>
          </div>
          </div>
          
        </div>

        <div className=" col-md-6">
          <img className='w-100' src={main} alt="" srcset="" />
        </div>
        </div>
        
      </div>
    </section>

    </div>
  )
}

export default Home