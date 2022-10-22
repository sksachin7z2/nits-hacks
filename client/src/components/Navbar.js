import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">Green</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      
        
          {/* <li className="nav-item">
            <Link onClick={reload3} className={`nav-link ${location.pathname==="/contact"?"active":""}`} to="/contact">Contact</Link>
          </li> */}
         
         
        </ul>
        {!localStorage.getItem('token')?
        <form className="d-flex">
       
        <Link   className="btn btn-primary mx-1" to="/signup" role="button">SignUp</Link>
        </form>:<div><button  className="btn btn-primary" >Logout</button>&emsp;
                 {/* <button onClick={async()=>{await deleteUser(userId);
                                      localStorage.removeItem('token');
                                      localStorage.removeItem('userId');
                                      navigate('/login');
                                      }} className="btn btn-primary" >Delete account</button> */}
                                      </div>}
      </div>
    </div>
  </nav>
  )
}

export default Navbar