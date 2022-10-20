import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Spinner from './Spinner.js'
const Signup = (props) => {
    const [credentials, setcredentials] = useState({name:"",email:"",password:"",cpassword:""})
    const [loading, setLoading] = useState(false);
        let navigate=useNavigate();

    const host=props.host;
    const handleSubmit=async(e)=>{
        e.preventDefault();
        setLoading(true);
        const {name,email,password,cpassword}=credentials
        if(password===cpassword){
        const response = await fetch(`${host}/api/auth/createUser`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
           
            headers: {
              'Content-Type': 'application/json'
             
            },
            body: JSON.stringify({name:name,email:email,password:password})
            
          });
          const json =await response.json(); 
          // console.log(json);
          //redirect
          if(json.success)
          {
              localStorage.setItem('token',json.authToken);
              localStorage.setItem('userId',json.userId);
              setLoading(false);
              navigate('/');
              props.showAlert("Created Account Successfully","success");
          }
          else{
             props.showAlert("Email already exist or format is wrong","danger");
             setLoading(false);
          }
        }
        else{
            props.showAlert("password didnot match","danger");
            setLoading(false);
        }
    }
    const onchange=(e)=>{
        setcredentials({...credentials,[e.target.name]:e.target.value})
    }
  
    return (
        <div className="App">
         { loading &&<Spinner/>}
            <form onSubmit={handleSubmit}>
  <div className="form-group">
    <label className='' htmlFor="name">Name</label>
    <input type="text" className="form-control" id="name" name="name"  onChange={onchange} aria-describedby="emailHelp" minLength={3}  required/>
   
  </div>
  <div className="form-group">
    <label className='' htmlFor="email">Email address</label>
    <input type="email" className="form-control" id="email" name="email" onChange={onchange} aria-describedby="emailHelp" required/>
   
  </div>
  <div className="form-group">
    <label className='' htmlFor="password">Password</label>
    <input type="password" className="form-control" id="password" onChange={onchange} name="password"  minLength={5} required/>
  </div>
  <div className="form-group">
    <label className='' htmlFor="password">Confirm Password</label>
    <input type="password" className="form-control" id="cpassword"  onChange={onchange} name="cpassword"  minLength={5} required/>
  </div>
  <div className="text-center"><button type="submit" className="btn btn-primary my-3 ">Submit</button></div>
  
</form>
        </div>
    )
}

export default Signup
