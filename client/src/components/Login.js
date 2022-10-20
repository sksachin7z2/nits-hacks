import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Spinner from './Spinner'
const Login = (props) => {
        const [credentials, setcredentials] = useState({email:"",password:""})
        let navigate=useNavigate();
        const [loading, setLoading] = useState(false);
    const host=props.host;
    const handleSubmit=async(e)=>{
        e.preventDefault();
        setLoading(true);
        const response = await fetch(`${host}/api/auth/login`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
           
            headers: {
              'Content-Type': 'application/json'
             
            },
            body: JSON.stringify({email:credentials.email,password:credentials.password})
            
          });
          const json =await response.json(); 
          // console.log(json);
          if(json.success)
          {
              //redirect
              localStorage.setItem('token',json.authToken);
              localStorage.setItem('userId',json.userId);
              setLoading(false);
              navigate('/');
              props.showAlert("Logged in Successfully","success");
          }
          else{
            props.showAlert("Invalid Credential","danger");
            setLoading(false);
          }
          
    }
    const onchange=(e)=>{
        setcredentials({...credentials,[e.target.name]:e.target.value})
    }
    return (
        <div className="App">
          {loading&&<Spinner/>}
          <div>
           <form onSubmit={handleSubmit}>
  <div className="form-group my-3">
    <label className='' htmlFor="email">Email address</label>
    <input type="email" value={credentials.email} className="form-control" id="email" name="email" aria-describedby="emailHelp"onChange={onchange}/>
    
  </div>
  <div className="form-group my-3">
    <label className='' htmlFor="password">Password</label>
    <input type="password"  value={credentials.password}className="form-control" id="password" name="password" onChange={onchange}/>
  </div>
  <div className="text-center"><button  type="submit" className="btn btn-primary my-3">Submit</button></div>
  
</form>
</div>
        </div>
    )
}

export default Login
