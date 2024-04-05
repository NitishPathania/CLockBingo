import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import { cartData } from '../ParentShoes'
// import {carts} from ""
import { carts } from "../ParentBestSeller"
import "../SecNextCard/SecNextCard.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { VscStarFull } from "react-icons/vsc";
import { VscStarHalf } from "react-icons/vsc";
// import ReactImageMagnify from 'react-image-magnify';
import PartiNavbar from '../Shoes/PartiCularCard/PartiNvbar/PartiNavbar';
import "react-multi-carousel/lib/styles.css";
import { BsCurrencyRupee } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import BottomParent from './BottomParent';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../AddtoCart/features/CreateSlice';
const SecNextCardd = () => {
    // console.log(cartData)
    const { id } = useParams()
    const [item, setItem] = React.useState({})
    React.useEffect(() => {
        const selectedItem = carts.find(item =>
            item.id === parseInt(id));
        // Update the state with the selected item
        setItem(selectedItem);
    }, [id]); // Re-run effect when id changes  


    const [showContent, setShowContent] = useState(false)
    const toggleVisibility = () => {
        setShowContent(!showContent)
    }
    //useDispatch
    const dispatch = useDispatch()
    //handleAddtoCart
    const handleAddtoCart = (item) => {
        dispatch(addToCart(item))
    }

    return (
        < >
            {/* <PartiNavbar/> */}
            <PartiNavbar />
            <div className="container-fluid">




                <div className="row">
                    <div className="col-md-12">
                        <a href="">Back to results</a>
                    </div>
                    <div className="col-md-12">
                        <div className="row border">
                            <div className="col-md-5 border main_caursel_div">
                                <div>
                               <Carousel infiniteLoop autoPlay className='inner_carousel'>
                                        <div>
                                            <img src={item.imgsix} alt="" />
                                        
                                        </div>
                                        <div>
                                            <img src={item.imgtwo} alt="" />
                                        </div>
                                        <div>
                                            <img src={item.imgthree} alt="" />

                                        </div>
                                        <div>
                                            <img src={item.imgfour} alt="" />
                                        </div>
                                        <div>
                                            <img src={item.imgsix} alt="" />
                                        </div>
                                    </Carousel>  
 

               
                            
                                </div>
                            </div>
                            <div className="col-md-4 border middle_content_card">
                                <div className='inner_middle_content_card'>
                                    <div className='extra_store_heading'>
                                        <a href="">{item.vist}</a>
                                    </div>
                                    <div className="col_discri_card">
                                        <h5>{item.discri}</h5>
                                    </div>

                                    <div className="col_rating_card">
                                        <div>
                                            <VscStarFull className='rating_icon' />
                                            <VscStarFull className='rating_icon' />
                                            <VscStarFull className='rating_icon' />
                                            <VscStarHalf className='rating_icon' />
                                            <VscStarHalf className='rating_icon' />
                                        </div>&nbsp;&nbsp;
                                        <h6>{item.rating}&nbsp;rating</h6>
                                    </div>
                                    | &nbsp;&nbsp;<a href="" className=
                                        'a_search_rating_bottom'>Search this  Page</a>
                                    <div className="col_trend_card"></div>
                                    <hr className='hr_card_item' />
                                    <div className="col_price_card">
                                        <div className='limited_div'>Limited time deal</div><br />
                                        <span className='span_one_price'>{item.pre}</span>
                                        <span className='span_two_price'><BsCurrencyRupee className='rupes_icon' />{item.price}</span>
                                        <h6>M.R.P: <b><BsCurrencyRupee className='rupes_icon' />799</b> </h6>
                                        <p>Inclusive of all taxes</p>
                                    </div>
                                    <hr />
                                    <div className='parten_offers'>
                                        <div className='inner_parten_offers'>
                                            <h6>Partner Offers</h6>
                                            <p>Get GST invoice and save up to 28% on business
                                                purchases. Sign up for free</p>

                                        </div>
                                    </div>
                                    <hr />
                                    <div className='return_Exchange_div'>
                                        <div>
                                            <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png" alt="" />
                                            <p>10 days Return & Exchange
                                            </p>
                                        </div>
                                        <div>
                                            <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB485937110_.png" alt="" />
                                            <p>Pay on Delivery
                                            </p>
                                        </div>
                                        <div>
                                            <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB630870460_.png" alt="" />
                                            <p>Free Delivery

                                            </p>
                                        </div>
                                        <div>
                                            <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-top-brand._CB617044271_.png" alt="" /><br />
                                            <p>Top Brand

                                            </p>
                                        </div>




                                    </div>
                                    <hr />
                                    <div className='size_button_for_product'>

                                        <label htmlFor="size">Size:</label>
                                        <select id="size" >
                                            <option value="">Select</option>
                                            <option value="S">S</option>
                                            <option value="M">M</option>
                                            <option value="L">L</option>
                                            <option value="XL">XL</option>
                                            <option value="XXL">XXL</option>
                                        </select>

                                    </div>
                                    <div className='product_details'>
                                        <h2>Product Details</h2>

                                        <div className='inner_product_details'>
                                            <div className='b_product_list'>
                                                <b>Material type</b><br />
                                                <b>Length</b><br />
                                                <b>Style</b><br />
                                                <b>Closure type</b><br />
                                                <b>Care instructions</b><br />
                                                <b>Country of Origin</b>
                                            </div>
                                            <div className='h6_product_list'>

                                                <h6 className=''>Cotton</h6>

                                                <h6 className=''>Full</h6>

                                                <h6 className=''> Cargo</h6>

                                                <h6 className=''>Drawstring</h6>

                                                <h6 className=''> Loose</h6>

                                                <h6 className=''>India</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className='about_product_details'>
                                        <h2>About this item</h2>
                                        <div className='inner_about_ul_details'>
                                            <>
                                                <li>Men Cargo || Men Cargo Pants ||
                                                    Men Cargo Pants Cotton || Cargos for Men</li>
                                                <li>Type:Cargo Pants</li>
                                                {
                                                    showContent && (
                                                        <>
                                                            <li>Closure Type:Drawstring Waist</li>
                                                            <li>Length:Long</li>
                                                            <li>Fit Type:Loose</li>
                                                            <hr />
                                                            <div className='about_product_details'>
                                                                <h2>Additional Information</h2>

                                                                <div className='inner_product_details'>
                                                                    <div className='b_product_list'>
                                                                        <b>Manufacturer</b><br />
                                                                        <b>Packer</b><br />
                                                                        <b>Importer</b><br />
                                                                        <b>Item Weight</b><br />
                                                                        <b>Item Dimensions LxWxH</b><br />
                                                                        <b>Generic Name</b>
                                                                    </div>
                                                                    <div className='about_h6_product_list'>

                                                                        <h6 className=''>J B Fashion, J B fashion_Surat-395004</h6>

                                                                        <h6 className=''>J B Fashion_Surat-395004</h6>

                                                                        <h6 className=''> J B Fashion_Surat-395004</h6>

                                                                        <h6 className=''>399 g</h6>

                                                                        <h6 className=''> 10 x 2 x 11 Centimeters</h6>

                                                                        <h6 className=''>Cargo Pant</h6>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </>
                                                    )
                                                }
                                            </>
                                        </div>
                                        <div>
                                            <br />
                                            <h5 onClick={toggleVisibility}>
                                                {/* {showContent ? `${<IoIosArrowDown />} See less` : 
                                            `${<IoIosArrowUp />}See more`} */}
                                                {showContent ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                                {showContent ? 'See less' : 'See more   '}

                                            </h5>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 border">
                                <button onClick={() => handleAddtoCart(item)}>
                                    Add to Cart</button>
                            </div>
                        </div>
                    </div>





                </div>
            </div><br />
            <div className="container-fluid border main_styling_ideas_div p-0">
                <div className="row w-100">
                    <div className="col-md-12 inner_styling_ideas_col">
                        <h4>Styling ideas</h4>
                    </div>
                </div>
                <div className="row w-100">
                    <div className='col-md-4 border inner_left__styling_ideas_col' >
                        <div className='border'>
                            <img src="https://images-eu.ssl-images-amazon.com/images/I/51znqdelPbL._AC_SR300,375,0,C_BR3_.jpg" alt="" />
                        </div>
                    </div>
                    <div className='col-md-8 border   inner_right__styling_ideas_col'  >

                        <BottomParent />
                    </div>
                </div>






            </div>


            <div className='container-fluid main_manufacture_div '>
                <div className="row w-100">
                    <div className="col-md-12 inner_manufacture_col ">
                        <div className='inerr_manufacture_div border'>
                            <div className='inerr_manufacture_div_first'>
                                <h4>From the manufacturer</h4>
                            </div>
                            <div className='inerr_manufacture_div_second'>
                                <img src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/cbf1899b-34ae-4091-b74c-97fb1c8ed3f6.__CR0,0,970,600_PT0_SX970_V1___.jpg" alt="" />

                            </div><br />
                            <div className='inerr_manufacture_div_second'>
                                <img src=" https://m.media-amazon.com/images/S/aplus-media-library-service-media/834b7cd6-f1a9-428d-be37-afc778cf7b89.__CR0,0,970,600_PT0_SX970_V1___.jpg" />
                            </div><br />
                            <div className='inerr_manufacture_div_second'>
                                <img src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/09b77fc6-5a52-4da1-a991-2eb5371c4b15.__CR0,0,970,600_PT0_SX970_V1___.jpg" alt="" />
                            </div><br />
                            <div className='inerr_manufacture_div_second'>
                                <img src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/44c29999-1509-4968-b0fc-9419254826f3.__CR0,0,970,600_PT0_SX970_V1___.jpg" alt="" />
                            </div><br />
                            <div className='inerr_manufacture_div_second'>
                                <img src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/d2261bdd-6113-43c1-9a28-a5f2e3a0ec78.__CR0,0,970,300_PT0_SX970_V1___.jpg" alt="" />
                            </div>
                        </div>


                    </div>
                </div>
            </div>


        </>
    )
}

export default SecNextCardd;
// export { bottomCarts }

