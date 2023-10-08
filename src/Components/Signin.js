import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
import Alert from "./Alert";
import users from '../users/student'
const Signin = (props) => {
  const [terms, setTerms] = useState("disabled");
  const navigate=useNavigate();
  const [isAuth,setIsAuth]=useState(false)
  const [warning, setWarning] = useState(false);
  const handleClick=()=>{
    if(terms==="") setTerms("disabled")
    else setTerms("")
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    const tempUser={
      email: e.target.email1.value.toLowerCase(),
      password: e.target.password1.value
    }
    console.log(tempUser)
    
    users.forEach((element)=>{
      console.log(element)
      if(element.email===tempUser.email && element.password===tempUser.password){
        props.setLoggedIn(true)
        props.setUser(element)
        setIsAuth(true)
      }
    })
    if(isAuth){
      navigate('/')
    }
    else{
      setWarning(true)
      console.log("warning is set true")
    }
    
  }
  return (
    <div className="container " >
      <h1>Sign In</h1>
      {warning&&<Alert alert={{type:"warning",msg:"Enter correct username and password"}}/>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="email1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label for="password1">Password</label>
          <input
            type="password"
            className="form-control"
            id="password1"
            placeholder="Password"
          />
        </div>
        <div className="form-group form-check">
          <input
            onClick={handleClick}
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
          Agree to Terms and Conditions
          </label>
        </div>
        <button type="submit" className={"btn btn-primary "} disabled={terms} >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signin;
