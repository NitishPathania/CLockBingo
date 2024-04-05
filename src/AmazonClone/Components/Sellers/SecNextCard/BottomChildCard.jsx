
import React from 'react';
import "../SecNextCard/BottomChildCard.css";
import { VscStarFull } from "react-icons/vsc";
import { VscStarHalf } from "react-icons/vsc";
import { MdOutlineCurrencyRupee } from "react-icons/md";
const BottomChildCard = (props) => {
    console.log(props);
    const imgSrc = props.data ? props.data.img : '';
    const heading = props.data ? props.data.heading : '';
    const discri = props.data ? props.data.discri : '';
    const rating = props.data ? props.data.rating : '';
    const price = props.data ? props.data.price : '';

    return ( 
        <div className='parent_bottom_card'>
            <div className="inner_bottom_card">
                <div className='inner_bottom_card_img'>
                    {/* Use conditional rendering to avoid errors if imgSrc is empty */}
                     <img src={imgSrc} alt="" />
                </div>
                <div className='inner_bottom_card_img_heading'>
                    <h5>{heading}</h5>
                </div>
                <div className='inner_bottom_card_img_discr'>
                    <p>{discri}</p>
                </div>
                <div className='inner_bottom_card_img_rating'>
                <div  >
                <VscStarFull className='rating_icon' />
               
          <VscStarFull className='rating_icon' />
          <VscStarFull className='rating_icon' />
          <VscStarHalf className='rating_icon' />
          <VscStarHalf className='rating_icon' /> 
          </div>
          &nbsp;<div> <h5>{rating}</h5></div>
         
                </div>
                <div className='inner_bottom_card_img_price'>
                <h6> <MdOutlineCurrencyRupee className='rup_icon_inner_bottom_card_img' />{price}</h6>
                </div>
            </div>
        </div>
    );
}

export default BottomChildCard;
