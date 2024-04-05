import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../SignPage/Sign.css';
import { Link } from 'react-router-dom';
import axios from "axios"
import Swal from "sweetalert2"
import {Port} from "../Port/Port"
import ReactDOMServer from 'react-dom/server';
import { useNavigate } from 'react-router-dom';
const Sign = () => {
  const navigate=useNavigate()
  // Define validation schema using Yup
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('First name is required'),

    phone: Yup.string()
      .required('Mobile number is required')
      .matches(/^[0-9]+$/, 'Mobile number must contain only digits')
      .min(10, 'Mobile number must be at least 10 characters'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters'),
  });

 
  const handleSubmit = (values, { setSubmitting }) => {
setSubmitting(false);
    axios.post(`${Port}/signup`, values)
    .then((res) => {
        if (res) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Register SuccessFully",
            showConfirmButton: false,
            timer: 1500
          });
          navigate("/login")
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "You are Already Register!",
            footer: "You are Already Register!",
            

            
          });
        }
    })
    .catch((error) => {
      
        console.error("Error during registration:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "You are Already Register!",
          footer: "You are Already Register!"
        });
    });
};


  return (
    <>
   
   <div className='logo_img'>
    
    <img src="https://cdn.siasat.com/wp-content/uploads/2022/05/amazon.jpg" alt="" />
</div>
    <div className="create-account-container">
    
      <h2>Create Account</h2>
      <Formik
        initialValues={{
          name: '',
         phone: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className='main_form'>
            <div className="form-group">
              <label htmlFor="name">Your name</label>
              <div className="name-fields">
                <Field className="field_width" type="text" id="name" 
                name="name" placeholder="First and Last name" />
                </div>
                <ErrorMessage  name="name" component="div" className=" color_red error" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Mobile number</label>
              <div className="mobile-fields">
                <select name="countryCode">
                  <option value="IN">IN +91</option>
                </select>
                <Field type="text" id="phone" name="phone" placeholder="Mobile number" />
               
              </div>
              <ErrorMessage name="phone" component="div" className="error color_red" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field type="password" id="password" name="password" placeholder="At least 6 characters" />
             
            
            </div>
            <ErrorMessage  name="password" component="div" className="error color_red" /><br />
            <p>To verify your number, we will send you a text message with a temporary code. Message and data rates may apply.</p>
            <button type="submit" className='btn_verify' disabled={isSubmitting}>Verify mobile number</button>
          </Form>
        )}
      </Formik>
     <hr />
      <div className="account-actions">
        <p>Buying for work?</p>
       <a href="">Create a free business account</a><hr />
        <p>Already have an account? <Link to="/login">Sign in</Link></p>
      </div>
      <p>By creating an account or logging in, you agree to Amazons <a href="#">Conditions of Use</a> and <a href="#">Privacy Policy</a>.</p>
     
    </div>
    </>
  );
};

export default Sign;
