import React from 'react'
import { SlLocationPin } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";
// import Nav_DropDown from './NavBars/Nav_DropDown';
import Nav_DropDown from './Nav_DropDown';
// import "../Components/NavBars/NavOne.css"
import "../NavBars/NavOne.css"
import { CiLocationOn } from "react-icons/ci";
import { CgShoppingCart } from "react-icons/cg";
import { GrCart } from "react-icons/gr";
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CartData from '../ModalCart/CartData';
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { BiCartDownload } from "react-icons/bi";
import { BsBagPlus } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
const NavOne = () => {
    const navigate=useNavigate()
    const cartData = useSelector(state => state.app.cartItems);
   
  const handelCartData=()=>{
    navigate("/cartdata")
  }
    return (
        <div>
            <header>

                <nav className='nav_main'>
                   
                    <div className='navlogo'>
                        <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
                    </div>
                    <div className='nav_location'>
                    <CiLocationOn className='loaction_icon' />
                    <div className='location_heading'>
                        <b>Update Location</b>
                    </div>
                    </div>
                    
                    <div className='search_bar'>
                        <div>
                            <Nav_DropDown  />
                        </div>
                        <input type="text" placeholder='Search Amazon.in' />
                        <button>
                            <CiSearch className='search_box' />
                        </button>
                    </div>
                 
                   <div className='langu_age'>
                        <h5>En</h5>
                   </div>
                   <div className='account_list'>
                    <h5>Account&Lists</h5>
                   </div>
                   <div className='return_orders'>
                     <h6>Returns <br /> <b>&Orders</b> </h6>
                    
                   </div>
                   <div className='cart_div' onClick={handelCartData} >
          
                   
                 
                   <div className=' cart_icons'> 
                  
                   {/* <BiCartDownload className=' cart_icons' > </BiCartDownload> */}
                   <BiCart className=' cart_icons' />
                   <h6 className='cart_value'>{cartData.length}</h6>
                   </div>
                   <div className='cart_heading'>
                    <h4>Cart</h4>
                   </div>
                  
                   </div>
                   <div>
                
      
                   </div>
                </nav>
            </header>


















            {/* <div className='parent_firt'>
                <nav className='nav_one'>
                    <div className="logo_amazon">
                        <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo" />
                    </div>
                    <div className='update_location'>
                        <h4 className='color_white'>
                            < SlLocationPin 
                            className='location_logo' /> <b>Update location</b>
                            </h4>
                    </div>
                    <div className='search_bar'>
                        <div>
                            <Nav_DropDown  />
                        </div>
                        <input type="text" placeholder='Search Amazon.in' />
                        <button>
                            <CiSearch className='search_box' />
                        </button>
                    </div>
                    <div className='lang_uage'>
                        <h5 className='color_white '>EN</h5>
                    </div>
                    <div className='accou_nt color_white '>
                       <h5> Account & Lists</h5>
                        </div>
                        <div className='return_order '>
                        <p className='color_white'> Returns <br /><h5>&Orders</h5></p>
                        </div>
                        <div className='cart_icons padding_top'>
                        <CgShoppingCart className='color_white cg_cart' />
                        <span className='color_white cart_line'>Cart</span>

                        </div>





                </nav>


            </div>
 */}
















        </div>
    )
}

export default NavOne