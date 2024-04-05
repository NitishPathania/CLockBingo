import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import axios from "axios";
import {Port} from "../Port/Port"
import Swal from "sweetalert2"
import { useNavigate } from 'react-router-dom';
function Login() {
  const navigate=useNavigate()
  const [phone, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleMobileChange = (event) => {
    setMobile(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    validatePassword(event.target.value);
  };

  const validatePassword = (value) => {
    if (value.length < 6) {
      setErrorMessage('Password must be at least 6 characters long.');
    } else if (value.length > 20) {
      setErrorMessage('Password must not exceed 20 characters.');
    } else {
      setErrorMessage('');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
     
    await axios.post(`${Port}/login`, { phone, password }).then((res)=>{
      if (res) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login SuccessFully",
          showConfirmButton: false,
          timer: 1500
        });
        localStorage.setItem("token",res.data.token)
        console.log(res)
        navigate("/")
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Wrong Details!",
          footer: "Wrong Details!",
          

          
        });
      }
    })
    
    } catch (error) {
      console.error('Error during login:', error);
      // Handle login error here
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Wrong Details!",
        footer: "Wrong Details!",
        

        
      });
    }
  };

  return (
    <>
      <div className='heading-signin'>
          <img src='https://cdn.siasat.com/wp-content/uploads/2022/05/amazon.jpg' alt="Amazon Logo" />
      </div>
      <div className="container">
        <div className="signin-container">
          <h2>Sign-In</h2>
          <form className="signin-form" onSubmit={handleSubmit}>
            <label htmlFor="mobile">Mobile Number</label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              placeholder="Enter your Phone Number"
              value={phone}
              onChange={handleMobileChange}
              required
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <button type="submit">Continue</button>
          </form>
          <p className="forgot-password">Forgot your password?</p>
          <hr />
          <p className="signup-link">New to Amazon? <Link to="/sign">Create your Amazon account</Link></p>
        </div>
      </div>
    </>
  );
}

export default Login;
