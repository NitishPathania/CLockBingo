import React from 'react'

const ChildBike = (props) => {
  return (
    <div>
 <div className='inner_mobile_card inner_mobile_cardd '>
                <div className='inner_card_img'>
                    <img src={props.data.img} alt="" />
                </div>
               
                     
            </div>
        
    </div>
  )
}

export default ChildBike