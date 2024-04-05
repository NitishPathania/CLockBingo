import React from 'react'
import "../NavBars/NavbarTwo.css"
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaBars } from "react-icons/fa6";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
// import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
const NavBarTwo = () => {


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show, setShow] = useState(false);


    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };
  
    const closeAccordion = () => {
      setIsOpen(false);
    };
  
  
  
  return (
    <div>
    <div className='parent_sec_nav'>
     <div className='all_overlay'>
    <Button onClick={handleShow} > <FaBars className='fa_bars' /><span>&nbsp; All</span></Button>
    <Offcanvas   show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
          
            <div className='heading_offcanvas'>
                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAqwMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAgMEAQUH/8QAKRABAAICAAUEAgIDAQAAAAAAAAECAxEEEiExUTJBYXEigTORFEJSE//EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A+4gAAAAAAAAAAAAAAAAAAAAAAAAAAAOTMR7oXv7VV9+4LJyeEOe0+7gDu58yc1vMuAJxkn4Ti8T8KQGgU1tMfS2sxMdAdAAAAAAAAAAVXtudR2SyW1GoVAAAA5a0Vjdp6A6Kp4jHHvP9JUy0v0i3XwCYADtZ12cAXxMTHR1TS3LPwuAAAAAAABG86rIKrTuXAAABDNkjHXc957MVr2vO7TtPibby69q9FQBHTsCo08Pm3PJefqWl5r0aW5qRPmEV0ABdjndVKeKeugWhAAAAAAhl7JoZe0AqAAJAGHP/ADX+1a7iq6y83tZSIAKDfh/ir9MMRudQ9CsctYr4RXQAEqeqEXaeqAXgAAAAAIZI/FNy0bjQKAkAABHJSuSurfpiyY7Un8o/bba9a97RH3KP/timOtomAYXYiZnUR1apnh5/539JVyYa+max+gR4fDyflf1e0eF6EZcc9IvCfz7AAAJY/XCKzFHTYLAAAAAAAAU5I1PwivtG40pmNToHGXNnnfLjnUefKzir8uPUd7dP0xgAKgAAsx5bY57zrwrAehS8XruqTHw1+XJET2t0bEU1vpC+I1GkMdfdYAAAAAAAAAjasWj5SAebxu4yRHwzvXyY65K8t43DFl4O9Z3jnmjx7gyjtoms6mJifEuKgAAC3Hw+TJ2jUeZBXX1V1329WlPeYQwcNTF19VvK9FAAAAAAAAAAAAAARtSt+lqxMfMKrcJht/rr6leAzf4WPzb+yODxe8TP7aQFdMOOnppWP0sAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/2Q==" alt="" />
                <h4>Hello, sign in</h4>

            </div>

          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div className='bottom_content_help_setting'>
      <hr />
      <div className='inner_help_setting'>
     <ul>
        <h4>Help & Settings</h4>
        <div className='hover_color'><a href="">Your Account</a></div>
       <div className='hover_color'><a href="">Customer Service</a></div>
      
      <div><Link to="/login">Sign In</Link></div>
        
     </ul>


      </div>


        </div>
        </Offcanvas.Body>
      </Offcanvas>


     </div>
     <div>
        <a href="">Amazon miniTv</a>
     </div>
     <div>
        <a href="">Sell</a>
     </div>
     <div>
        <Link to="/bestsellernavbar">Best Sellers</Link>
     </div>
     <div>
        <a href="">Mobiles</a>
     </div>
     <div>
        <a href="">Toaday Deals</a>
     </div>
     <div>
        <a href="">Electronics</a>
     </div>
     <div>
        <a href="">Customer Service</a>
     </div>
     <div>
        <a href="">Prime
        <MdOutlineArrowDropDown />
        </a> 
     </div>
     <div>
        <a href="">New Releases</a>
     </div>
     <div>
        <a href="">Home & Kitchen</a>
     </div>
     <div>
        <a href="">Gift Ideas</a>
     </div>
     <div>
        <a href="">Amazon Pay</a>
     </div>
     <div>
        <a href="">Fashion </a>
     </div>
     <div>
        <a href="">Computer</a>
     </div>



    </div>



    </div>
  )
}

export default NavBarTwo