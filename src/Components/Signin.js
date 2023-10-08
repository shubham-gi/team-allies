import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
const Signin = (props) => {
  const [terms, setTerms] = useState("disabled");
  const navigate=useNavigate();
  const [isLoggedIn,setIsLoggedIn]=useState(false)
  const handleClick=()=>{
    if(terms==="") setTerms("disabled")
    else setTerms("")
  }
  const handleSubmit=()=>{
    props.setLoggedIn(true)
    if(setIsLoggedIn){
      navigate('/')
    }
    else{

    }
  }
  return (
    <div className="container " >
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
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
        <button type="submit" className={"btn btn-primary "+terms} >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signin;
