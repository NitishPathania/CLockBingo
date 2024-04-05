import React from 'react'
import "../MobileComp/Mobile.css"
const MobileChild = (props) => {
    return (
        <>
        {/* <div className="mobile_heading d-flex">
                <h4>Today’s Deals</h4>
                <span><a href="">See all deals</a></span>
            </div> */}
     
        <div>
            
            <div className='inner_mobile_card'>
                <div className='inner_card_img'>
                    <img src={props.data.img} alt="" />
                </div>
                <div className='card_discount'>
                   <div className='inner_card_deal' >50% off</div>  
                    <div><span>{props.data.deal}</span></div> 
                </div>
                <div className='card_rate'>
                   <h6>{props.data.price}</h6>
                </div>
                <div className='card_description'>
                    <p>{props.data.dis}</p>
                </div>
                     
            </div>
        </div>
        </>
    )
}

export default MobileChild