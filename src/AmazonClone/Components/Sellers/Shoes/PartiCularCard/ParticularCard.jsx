import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { cartData } from '../ParentShoes'
import "../PartiCularCard/Particular.css"
import PartiNavbar from './PartiNvbar/PartiNavbar'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { VscStarFull } from "react-icons/vsc";
import { VscStarHalf } from "react-icons/vsc";
// import ReactImageMagnify from 'react-image-magnify';
const ParticularCard = () => {
    console.log(cartData)
    const { id } = useParams()
    const [item, setItem] = React.useState({})
 React.useEffect(() => {
        // Find the item with the matching id
        const selectedItem = cartData.find(item => item.id === parseInt(id));
        // Update the state with the selected item
        setItem(selectedItem);
    }, [id]); // Re-run effect when id changes


    return (
        < >
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
                                          
                                            <img className='inner_carousel_img' src={item.img} />

                                        </div>
                                        <div>
                                            <img className='inner_carousel_img' src={item.cimgone} />

                                        </div>
                                        <div>
                                            <img className='inner_carousel_img' src={item.cimgtwo} />

                                        </div>
                                        <div>
                                            <img className='inner_carousel_img' src={item.cimgthree} />

                                        </div>
                                        <div>
                                            <img className='inner_carousel_img' src={item.cimgfour} />

                                        </div>
                                        <div>
                                            <img className='inner_carousel_img' src={item.cimgfive} />

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
                                        </div>
                                        <h6>{item.rating}&nbsp;rating</h6>
                                    </div>
                                    | &nbsp;&nbsp;<a href="" className='a_search_rating_bottom'>Search this  Page</a>
                                    <div className="col_trend_card"></div>
                                    <hr className='hr_card_item' />
                                    <div className="col_price_card">
                                        <div className='limited_div'>Limited time deal</div><br />
                                        <span className='span_one_price'>{item.pre}</span><span className='span_two_price'>{item.price}</span>
                                        <h6>M.R.P: <b>799</b> </h6>
                                    </div>
                                    <hr />
                                    <div className='parten_offers'>
                                        <div className='inner_parten_offers'>
                                            <h6>Partner Offers</h6>
                                            <p>Get GST invoice and save up to 28% on business purchases. Sign up for free</p>
                                            {/* <a href="">1 offer </a> */}
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
                                        <ul>
                                            <li><strong>Material type:</strong> EVA, Rubber</li>
                                            <li><strong>Style:</strong> Flip Flop</li>
                                            <li><strong>Closure type:</strong> Slip On</li>
                                            <li><strong>Heel type:</strong> Flat</li>
                                            <li><strong>Country of Origin:</strong> India</li>
                                        </ul>
                                        <h3>About this item</h3>
                                        <p>
                                            <strong>DIABETIC AND ORTHOPEDIC:</strong> Extra Soft, Padded, Comfortable and Cushioned Foot-Bed Enhances Comfort to The Feet. Doctor Extra Soft Slipper Provides You Better Walking Comfort and Also Makes Your Walking Life Easy and Effortlessly.<br />
                                            <strong>ANTI-SKID:</strong> Good Rubber Grip Enables You to Use These Slippers on Wet Floors, Tiles, Marbles, Etc. This Rubber Sole Is Long Lasting and Provides Uninterrupted Daily Usage.<br />
                                            <strong>LIGHTWEIGHT AND DURABLE:</strong> They Are Extremely Light Weight and Durable Slippers and Are Widely Used by Women’s / Ladies for All Ages, Especially Old Aged, Men with Foot, Knee and Back Pain, Arthritis, Plantar Fasciitis, Etc. These Extra Soft Doctor Slippers are mostly used by Women’s of all ages, Especially old aged suffering from Diabetes, Plantar fasciitis, Orthopedic Pain, Heel Pain, Arch Pain, Ankle Pain, Knee Pain and Back Pain.<br />
                                            <strong>MEDICATED SOFT DOCTOR SLIPPERS:</strong> Recommended by Doctors and Podiatrists for Diabetic, Orthopaedic, Cracked heals and obese's person's problem. Its EVA is Skin-friendly, bio-degradable, 100% recyclable and non-allergic material has been used which is skillfully crafted to provide optimum support to your ailing feet.<br />
                                            <strong>SKIN FRIENDLY AND STYLISH:</strong> It's Skin-Friendly material are Crafted and made with care that avoids Blisters, Scars, Sweating of the feet and Pain. These Stylish Slippers Fitting Your Lifestyle Where Your Feet Looks Pretty Which Provides Premium Look and Feel to The Feet. Various Colours Are Not Only Colourful & Highly Attractive to Look at But Also Gives You Option to Buy Slippers as Per Your Choice Than Chance.<br />
                                            <strong>Department Name:</strong> Womens<br />
                                            <strong>Heel Type:</strong> Flat<br />
                                            <strong>Toe Style:</strong> Open Toe
                                        </p>
                                        <h3>Additional Information</h3>
                                        <ul>
                                            <li><strong>Manufacturer:</strong> DOCTOR EXTRA SOFT</li>
                                            <li><strong>Packer:</strong> DOCTOR EXTRA SOFT</li>
                                            <li><strong>Item Weight:</strong> 210 g</li>
                                            <li><strong>Item Dimensions (LxWxH):</strong> 20 x 8 x 10 Centimeters</li>
                                            <li><strong>Generic Name:</strong> Slipper</li>
                                        </ul>
                                    </div>


                                </div>



                            </div>
                            <div className="col-md-3 border">

                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </>
    )
}

export default ParticularCard

