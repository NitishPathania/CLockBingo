import React from 'react'
// import "../Sellers/CardSeller.css"
import { LiaRupeeSignSolid } from "react-icons/lia";
import { CiStar } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa";
import { VscStarFull } from "react-icons/vsc";
import { VscStarHalf } from "react-icons/vsc";
// import IconRating from "react-icon-rating"
const  Childtoys = (props) => {
  return (
    <>
   
        <div className='card_seller'>
                            <div className='seller_trend_no'>
                                <div className='zg-bdg-text'>
                                  <p>{props.data. bedgetitle}</p> </div>
                                <div className='zg-bdg-text_arrow'></div>
                            </div>
                            <div className='seller_card_img'>
                                <img preload="true" src={props.data.img} alt="" />
                            </div>
                            <div className='seller_card_category'>
                                <p>{props.data.discri}</p>
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

export default  Childtoys