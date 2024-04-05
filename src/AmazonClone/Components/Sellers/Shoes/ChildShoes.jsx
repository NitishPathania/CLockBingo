import React from 'react'
// import "../Sellers/CardSeller.css"
import "../Electronics/Electronic.css"
import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { LiaRupeeSignSolid } from "react-icons/lia";
import { CiStar } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa";
import { VscStarFull } from "react-icons/vsc";
import { VscStarHalf } from "react-icons/vsc";
import 'bootstrap/dist/css/bootstrap.min.css';
// import IconRating from "react-icon-rating"
// import "../CarMotorBike/CarMotor.css"
import "../BeautyBest/Beauty.css"
import { Link, useNavigate } from 'react-router-dom';
// import { Link, NavLink, Outlet } from 'react-router-dom';
const ChildShoes = (props) => {
  const navigate = useNavigate()
  const  { id } = props.data
  
  return (
   
    <>

      <div className='card_seller'>
        <div className='seller_trend_no'>
          <div className='zg-bdg-text'>
            <p>{props.data.bedgetitle}</p> </div>
          <div className='zg-bdg-text_arrow'></div>
        </div>
        <div className='seller_card_img'>
          <img src={props.data.img} alt="" />
        </div>
        <div className='seller_card_category '>
          <p onClick={()=>navigate(`/bestsellernavbar/particularcard/${id}`)}>{props.data.discri}</p>
         
            




        </div>
        <div className='seller_card_rating'>
          <VscStarFull className='rating_icon' />
          <VscStarFull className='rating_icon' />
          <VscStarFull className='rating_icon' />
          <VscStarHalf className='rating_icon' />
          <VscStarHalf className='rating_icon' />
          <span>{props.data.rating}</span>
        </div>
        <div className='seller_card_price'>
          <h5><LiaRupeeSignSolid className='rupee_icons' />{props.data.price}</h5>
        </div>
      </div>

    </>
  )
}

export default ChildShoes