import React from 'react'
import { Link ,useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './Signup.css'
function Login() {

  const [credentials, setcredentials] = useState({email:'',password:''})
  let navigate = useNavigate()

  
    const handleSubmit= async(e)=>{
        e.preventDefault()
        console.log(JSON.stringify({email:credentials.email,password:credentials.password}));
       const response = await fetch("http://localhost:5000/api/loginuser",{
        
       method:'POST',
       headers:{
        'Content-Type':"application/json"
       },
       body:JSON.stringify({email:credentials.email,password:credentials.password})

       })

       const json = await response.json()
       console.log(json);

       if(!json.success){
        alert('ENTER VALID ')
       }

       if(json.success){
        localStorage.setItem("userEmail",credentials.email);
        localStorage.setItem("authToken",json.authToken);
        console.log(localStorage.getItem("authToken"));
        navigate('/')
       }
       

    }
    
const onChange=(event)=>{
    setcredentials({...credentials,[event.target.name]:event.target.value})
}


  return (
    <>

<div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
      </div>


<div className='container ' >
<form onSubmit={handleSubmit}>


  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" name="email"   value={credentials.email} onChange={onChange}  placeholder="Enter email"/>
     
  </div>

 

  <div className="form-group">
    <label htmlFor="example InputPassword1">Password</label>
    <input type="password" className="form-control" name="password"   value={credentials.password} onChange={onChange}  placeholder="Password"/>
  </div>
 

  <button type="submit" className="btn btn-primary">LOGIN</button>
  <Link to="/createuser" className="m-3 btn btn-danger">I am a new user</Link>
</form>


</div>
    </>
  )
}

export default Login