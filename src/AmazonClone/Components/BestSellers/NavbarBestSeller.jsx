import React from 'react'
import NavOne from '../NavBars/NavOne'
import NavBarTwo from '../NavBars/NavBarTwo'
import "../BestSellers/BestNav.css"
import { Link, NavLink, Outlet } from 'react-router-dom'
const NavbarBestSeller = () => {
  return (
    <>
    
   
        <div><NavOne/></div>
        <div><NavBarTwo/></div>
    <div className="container-fluid">
   <div className="row">
    <div className=" col-lg-6 col-md-12 bestsellerNav">
       <div>
        <NavLink to="sellers">Bestsellers</NavLink>
       </div>
       <div>
        <NavLink to="releases">New Hot Releases</NavLink>
       </div>
       <div>
        <NavLink to="movers">
            Movers and Shakers
        </NavLink>
       </div>
       <div>
        <NavLink to="wishted">Most Wished For</NavLink>
       </div>
       <div>
        <NavLink to="gifted">Most Gifted</NavLink>
       </div>

    </div>
    <div className="col-lg-6 bestsellerNav">
    
    </div>
    
   </div>




    </div>
    <Outlet/>
  



    </>
  )
}

export default NavbarBestSeller
