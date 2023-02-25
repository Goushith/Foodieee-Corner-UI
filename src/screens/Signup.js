import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './Signup.css'

export default function Signup() {



  const [credentials, setcredentials] = useState({ name: '', email: '', password: '', geolocation: '' })
  let navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation }));
    const response = await fetch("http://localhost:5000/api/createuser", {

      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      },

      body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation })







    })

    const json = await response.json()
    //  navigate('/login')

    console.log(json);





    if (!json.success) {
      alert('ENTER VALID ')
    }

    if (json.success) {
      alert('LOGGED IN')
      navigate('/login')
    }



  }


  // const response = fetch("http://localhost:5000/api/createuser")
  //   const submit =()=>{
  //     const json =  response.json()
  //       if(json.success){
  //         navigate('/login')
  //         alert('ENTER VALID ')
  //        }
  //      }








  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value })
  }

  return (
    <>


      <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
      </div>

      <form onSubmit={handleSubmit}>
        <h3>Login Here</h3>

        {/* <label htmlFor="exampleInputEmail1">Email address</label> */}
        <input type="email" name="email" value={credentials.email} onChange={onChange} placeholder="Enter email" />


        {/* <label htmlFor="example InputPassword1" >Username</label> */}
        <input type="text" name="name" value={credentials.name} placeholder="Name" onChange={onChange} id="username" />

        {/* <label htmlFor="example InputPassword1">Password</label> */}
        <input type="password" name="password" value={credentials.password} onChange={onChange} placeholder="Password" id="password" />

        {/* <label htmlFor="example InputPassword1">Address</label> */}
        <input type="text" name="geolocation" value={credentials.geolocation} onChange={onChange} placeholder="Address" />


        <button type="submit" >Submit</button>

        <Link to="/login" className="m-3 ">
        
        <div class="social">
          <div class="go"><i class="fab fa-google"></i>  Already have an account</div>
          
        </div>

        </Link>

      </form>









    </>
  )
}
