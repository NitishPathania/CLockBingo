
import React, { useEffect, useState } from 'react'
import NavBarTwo from "../NavBars/NavBarTwo";
import NavOne from "../NavBars/NavOne";
import "../ModalCart/CartData.css"
import { useDispatch, useSelector } from 'react-redux';
import style from "../ModalCart/StyleCart.module.css"
import { UseDispatch } from 'react-redux';
import { deleteCart } from '../AddtoCart/features/CreateSlice';
const CartData = () => {
  const dispach=useDispatch()
  // const [cartData,setCartData]=useState([{}])

  const cartData = useSelector(state => state.app.cartItems);
  const cartDelete=(id)=>{
    dispach(deleteCart(id))
  }
  return (
    <>
      <NavOne />
      <NavBarTwo />
      <div className="container-fluid">
        <div className="row row_shoping_cart_div" >
          <div className="col-md-8 border">
            <h1>Shopping Cart</h1><hr />
            <div className='shoping_cart_div'>
              {
              cartData.length > 0? cartData.map((item) => {
                  return (
                    <>
                      <div className='inner_shoping_cart'>
                        <div className='img_shoping_cart'>
                          <img src={item.img} alt="" />
                        </div>
                        <div className={style.content_shoping_cart}>
                          <p >{item.discri}</p>
                          <b>Size: <select>
                            {item.size && item.size.map((e) => (
                              <option key={e} value={e}>{e}</option>
                            ))}
                          </select> </b>


                          <b>Color:{item.color}</b>
                          <div className={style.inner_quality_delete_content}>
                            <b>
                              <select>
                                {item.quality && item.quality.map((e) => (
                                  <option key={e} value={e}>Qty: {e}</option>
                                ))}
                              </select>  &nbsp;
                            </b>
                            &nbsp; <b    onClick={()=>cartDelete(item.id)}
                             className={style.inner_quality_delete_content_para}>Delete
                             </b>
                          </div>
                        </div>
                      </div >
                      <hr />
                    </>
                  )
                }):<h1>Your Cart Is Empty</h1>
              }
            </div>

          </div>
          <div className="col-md-4 border"></div>
        </div>
      </div >
  
    </>
  )
}

export default CartData