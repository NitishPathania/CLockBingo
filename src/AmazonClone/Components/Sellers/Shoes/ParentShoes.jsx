import React from 'react'
// import Sellers from './Sellers'
import ChildShoes from './ChildShoes'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Slider from "react-slick";
import "../Electronics/Electronic.css"
import "../BeautyBest/Beauty.css"
// import "../CarMotorBike/CarMotor.css"

const  cartData = [
  {
    id: 1,
    bedgetitle: "#1",
  vist:  "Visit the DOCTOR EXTRA SOFT Store",
    img: "https://images-eu.ssl-images-amazon.com/images/I/51dMc66bcZL._AC_UL450_SR450,320_.jpg",
    discri: "Lymio Men Cargo || Men Cargo Pants || Men Cargo Pants Cotton || Cargos for Men (Cargo-05-08)",
    rating: "203",
    price: "699.00",
    pre:"-33%",
    cimgone:"https://m.media-amazon.com/images/I/71dLKXzS91L._SY625_.jpg",
    cimgtwo:"https://m.media-amazon.com/images/I/51oymfgGS6L._SX625_.jpg",
    cimgthree:"https://m.media-amazon.com/images/I/41cbKpSBcGL.jpg",
    cimgfour:"https://m.media-amazon.com/images/I/51gADGPRAIL._SX625_.jpg",
    cimgfive:"https://m.media-amazon.com/images/I/51OyyhHjklL._SX625_.jpg"
  },
  {
    id: 2,
    bedgetitle: "#2",
    img: "https://images-eu.ssl-images-amazon.com/images/I/61utX8kBDlL._AC_UL450_SR450,320_.jpg",
    discri: "GoSriKi Women's Cotton Blend Chikankari Embroidered Straight Kurti",
    rating: "4,424",
    price: "489.00",
    pre:"-33%",
    cimgone:"https://m.media-amazon.com/images/I/71dLKXzS91L._SY625_.jpg",
    cimgtwo:"https://m.media-amazon.com/images/I/51oymfgGS6L._SX625_.jpg",
    cimgthree:"https://m.media-amazon.com/images/I/41cbKpSBcGL.jpg",
    cimgfour:"https://m.media-amazon.com/images/I/51gADGPRAIL._SX625_.jpg",
    cimgfive:"https://m.media-amazon.com/images/I/51OyyhHjklL._SX625_.jpg"
  },
  {
    id: 3,
    bedgetitle: "#3",
    img: "https://images-eu.ssl-images-amazon.com/images/I/61FNHdi4cxL._AC_UL450_SR450,320_.jpg",
    discri: "FancyDressWale Holi t-Shirts for Girls",
    rating: "275",
    price: "379.00",
    pre:"-33%",
    cimgone:"https://m.media-amazon.com/images/I/71dLKXzS91L._SY625_.jpg",
    cimgtwo:"https://m.media-amazon.com/images/I/51oymfgGS6L._SX625_.jpg",
    cimgthree:"https://m.media-amazon.com/images/I/41cbKpSBcGL.jpg",
    cimgfour:"https://m.media-amazon.com/images/I/51gADGPRAIL._SX625_.jpg",
    cimgfive:"https://m.media-amazon.com/images/I/51OyyhHjklL._SX625_.jpg"
  },
  {
    id: 4,
    bedgetitle: "#4",
    img: "https://images-eu.ssl-images-amazon.com/images/I/81dxxthgCVL._AC_UL450_SR450,320_.jpg",
    discri: "ANNI DESIGNER Women Kurta with Palazzo",
    rating: "295",
    price: "489.00",
    pre:"-33%",
    cimgone:"https://m.media-amazon.com/images/I/71dLKXzS91L._SY625_.jpg",
    cimgtwo:"https://m.media-amazon.com/images/I/51oymfgGS6L._SX625_.jpg",
    cimgthree:"https://m.media-amazon.com/images/I/41cbKpSBcGL.jpg",
    cimgfour:"https://m.media-amazon.com/images/I/51gADGPRAIL._SX625_.jpg",
    cimgfive:"https://m.media-amazon.com/images/I/51OyyhHjklL._SX625_.jpg"
  },
  {
    id: 5,
    bedgetitle: "#5",
    img: "https://images-eu.ssl-images-amazon.com/images/I/61n0JhRQ+JL._AC_UL450_SR450,320_.jpg",
    discri: "Leriya Fashion Dress for Women | One Piece Dress for Women | Beach Dress for Women",
    rating: "53",
    price: "479.00",
    pre:"-33%",
    cimgone:"https://m.media-amazon.com/images/I/71dLKXzS91L._SY625_.jpg",
    cimgtwo:"https://m.media-amazon.com/images/I/51oymfgGS6L._SX625_.jpg",
    cimgthree:"https://m.media-amazon.com/images/I/41cbKpSBcGL.jpg",
    cimgfour:"https://m.media-amazon.com/images/I/51gADGPRAIL._SX625_.jpg",
    cimgfive:"https://m.media-amazon.com/images/I/51OyyhHjklL._SX625_.jpg"
  },
  {
    id: 6,
    bedgetitle: "#6",
    img: "https://images-eu.ssl-images-amazon.com/images/I/61OkTushHbL._AC_UL450_SR450,320_.jpg",
    discri: "Bon Organik Unisex My First Holi Bodysuit Baby",
    rating: "956",
    price: "269.00",
    pre:"-33%",
    cimgone:"https://m.media-amazon.com/images/I/71dLKXzS91L._SY625_.jpg",
    cimgtwo:"https://m.media-amazon.com/images/I/51oymfgGS6L._SX625_.jpg",
    cimgthree:"https://m.media-amazon.com/images/I/41cbKpSBcGL.jpg",
    cimgfour:"https://m.media-amazon.com/images/I/51gADGPRAIL._SX625_.jpg",
    cimgfive:"https://m.media-amazon.com/images/I/51OyyhHjklL._SX625_.jpg"
  },
  {
    id: 7,
    bedgetitle: "#7",
    img: "https://images-eu.ssl-images-amazon.com/images/I/61lzchLevKL._AC_UL450_SR450,320_.jpg",
    discri: "Allen Solly Men's Regular Fit Polo",
    rating: "68,061",
    price: "699.00",
    pre:"-33%",
    cimgone:"https://m.media-amazon.com/images/I/71dLKXzS91L._SY625_.jpg",
    cimgtwo:"https://m.media-amazon.com/images/I/51oymfgGS6L._SX625_.jpg",
    cimgthree:"https://m.media-amazon.com/images/I/41cbKpSBcGL.jpg",
    cimgfour:"https://m.media-amazon.com/images/I/51gADGPRAIL._SX625_.jpg",
    cimgfive:"https://m.media-amazon.com/images/I/51OyyhHjklL._SX625_.jpg"
  },
  {
    id: 8,
    bedgetitle: "#8",
    img: "https://images-eu.ssl-images-amazon.com/images/I/71-JrD05RaL._AC_UL450_SR450,320_.jpg",
    discri: "Amazon Brand - Symbol Men's Cotton Rich Solid Polo T-Shirt Regular Fit (Available in Plus Size)",
    rating: "26,801",
    price: "399.00",
    pre:"-33%",
    cimgone:"https://m.media-amazon.com/images/I/71dLKXzS91L._SY625_.jpg",
    cimgtwo:"https://m.media-amazon.com/images/I/51oymfgGS6L._SX625_.jpg",
    cimgthree:"https://m.media-amazon.com/images/I/41cbKpSBcGL.jpg",
    cimgfour:"https://m.media-amazon.com/images/I/51gADGPRAIL._SX625_.jpg",
    cimgfive:"https://m.media-amazon.com/images/I/51OyyhHjklL._SX625_.jpg"
  },
  {
    id: 9,
    bedgetitle: "#9",
    img: "https://images-eu.ssl-images-amazon.com/images/I/71MjjKXxiYL._AC_UL450_SR450,320_.jpg",
    discri: "Amazon Brand - Symbol Men's Cotton Rich Solid Polo T-Shirt Regular Fit (Available in Plus Size)",
    rating: "51",
    price: "399.00",
    pre:"-33%",
    cimgone:"https://m.media-amazon.com/images/I/71dLKXzS91L._SY625_.jpg",
    cimgtwo:"https://m.media-amazon.com/images/I/51oymfgGS6L._SX625_.jpg",
    cimgthree:"https://m.media-amazon.com/images/I/41cbKpSBcGL.jpg",
    cimgfour:"https://m.media-amazon.com/images/I/51gADGPRAIL._SX625_.jpg",
    cimgfive:"https://m.media-amazon.com/images/I/51OyyhHjklL._SX625_.jpg"
  },
  {
    id: 10,
    bedgetitle: "#10",
    img: "https://images-eu.ssl-images-amazon.com/images/I/71Z9XdlDzjL._AC_UL450_SR450,320_.jpg",
    discri: "GoSriKi Women's Cotton Blend Embroidered Straight Kurta with Pant & Dupatta",
    rating: "167",
    price: "679.00",
    pre:"-33%",
    cimgone:"https://m.media-amazon.com/images/I/71dLKXzS91L._SY625_.jpg",
    cimgtwo:"https://m.media-amazon.com/images/I/51oymfgGS6L._SX625_.jpg",
    cimgthree:"https://m.media-amazon.com/images/I/41cbKpSBcGL.jpg",
    cimgfour:"https://m.media-amazon.com/images/I/51gADGPRAIL._SX625_.jpg",
    cimgfive:"https://m.media-amazon.com/images/I/51OyyhHjklL._SX625_.jpg"
  },
  {
    id: 11,
    bedgetitle: "#11",
    img: "https://images-eu.ssl-images-amazon.com/images/I/61HA3-8XMIL._AC_UL450_SR450,320_.jpg",
    discri: "GoSriKi Women's Cotton Blend Embroidered Straight Kurta with Pant & Dupatta",
    rating: "167",
    price: "279.00",
    pre:"-33%",
    cimgone:"https://m.media-amazon.com/images/I/71dLKXzS91L._SY625_.jpg",
    cimgtwo:"https://m.media-amazon.com/images/I/51oymfgGS6L._SX625_.jpg",
    cimgthree:"https://m.media-amazon.com/images/I/41cbKpSBcGL.jpg",
    cimgfour:"https://m.media-amazon.com/images/I/51gADGPRAIL._SX625_.jpg",
    cimgfive:"https://m.media-amazon.com/images/I/51OyyhHjklL._SX625_.jpg"
  },
  {
    id: 12,
    bedgetitle: "#12",
    img: "https://images-eu.ssl-images-amazon.com/images/I/71sfbi31lhL._AC_UL450_SR450,320_.jpg",
    discri: "Jockey 8820 Men's Super Combed Cotton Round Neck Sleeveless Vest with Extended Length for Easy Tuck (Pack of 3)",
    rating: "137",
    price: "579.00",
    pre:"-33%",
    cimgone:"https://m.media-amazon.com/images/I/71dLKXzS91L._SY625_.jpg",
    cimgtwo:"https://m.media-amazon.com/images/I/51oymfgGS6L._SX625_.jpg",
    cimgthree:"https://m.media-amazon.com/images/I/41cbKpSBcGL.jpg",
    cimgfour:"https://m.media-amazon.com/images/I/51gADGPRAIL._SX625_.jpg",
    cimgfive:"https://m.media-amazon.com/images/I/51OyyhHjklL._SX625_.jpg"
  },
  {
    id: 13,
    bedgetitle: "#13",
    img: "https://m.media-amazon.com/images/I/71chIep9O6L._AC_UL320_.jpg",
    discri: "Lymio Casual Shirt for Men|| Shirt for Men|| Men Stylish Shirt (D-Crush-16-23)",
    rating: "167",
    price: "679.00",
    pre:"-33%",
    cimgone:"https://m.media-amazon.com/images/I/71dLKXzS91L._SY625_.jpg",
    cimgtwo:"https://m.media-amazon.com/images/I/51oymfgGS6L._SX625_.jpg",
    cimgthree:"https://m.media-amazon.com/images/I/41cbKpSBcGL.jpg",
    cimgfour:"https://m.media-amazon.com/images/I/51gADGPRAIL._SX625_.jpg",
    cimgfive:"https://m.media-amazon.com/images/I/51OyyhHjklL._SX625_.jpg"
  },
  {
    id: 14,
    bedgetitle: "#13",
    img: "https://m.media-amazon.com/images/I/81owlQPVw-L._AC_UL320_.jpg",
    discri: "Lymio Casual Shirt for Men|| Shirt for Men|| Men Stylish Shirt (D-Crush-16-23)",
    rating: "167",
    price: "679.00",
    pre:"-33%",
    cimgone:"https://m.media-amazon.com/images/I/71dLKXzS91L._SY625_.jpg",
    cimgtwo:"https://m.media-amazon.com/images/I/51oymfgGS6L._SX625_.jpg",
    cimgthree:"https://m.media-amazon.com/images/I/41cbKpSBcGL.jpg",
    cimgfour:"https://m.media-amazon.com/images/I/51gADGPRAIL._SX625_.jpg",
    cimgfive:"https://m.media-amazon.com/images/I/51OyyhHjklL._SX625_.jpg"
  },
  {
    id: 15,
    bedgetitle: "#13",
    img: "https://m.media-amazon.com/images/I/81I-VgN5z1L._AC_UL320_.jpg",
    discri: "Lymio Casual Shirt for Men|| Shirt for Men|| Men Stylish Shirt (D-Crush-16-23)",
    rating: "167",
    price: "679.00",
    pre:"-33%",
    cimgone:"https://m.media-amazon.com/images/I/71dLKXzS91L._SY625_.jpg",
    cimgtwo:"https://m.media-amazon.com/images/I/51oymfgGS6L._SX625_.jpg",
    cimgthree:"https://m.media-amazon.com/images/I/41cbKpSBcGL.jpg",
    cimgfour:"https://m.media-amazon.com/images/I/51gADGPRAIL._SX625_.jpg",
    cimgfive:"https://m.media-amazon.com/images/I/51OyyhHjklL._SX625_.jpg"
  },
]
const ParentShoes= () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 1,
        autoplay: true,
        slidesToScroll: 1,
        arrows: false,
        autoplaySpeed: 1000
      };
    
     
 
  return (

    <>
     <div className='best_card_heading'>
        <div><h5>Bestsellers in Shoes & Handbags</h5></div>
        <div><a href="">See More</a></div>
    </div>
   
    <Slider {...settings} >
      
    <div>
     <div className='all_best_seller_card'>
        {/* Find the item with id 1 */}
        <ChildShoes id="1" data={cartData.find(item => item.id === 1)} />
        
        {/* Find the item with id 2 */}
        <ChildShoes id="2" data={cartData.find(item => item.id === 2)} />

        {/* Find the item with id 3 */}
        <ChildShoes id="3" data={cartData.find(item => item.id === 3)} />

        {/* Find the item with id 4 */}
        <ChildShoes id="4" data={cartData.find(item => item.id === 4)} />
      </div>
      </div>
      <div>
     <div className='all_best_seller_card'>
        {/* Find the item with id 1 */}
        <ChildShoes id="5" data={cartData.find(item => item.id === 5)} />
        
        {/* Find the item with id 2 */}
        <ChildShoes id="6" data={cartData.find(item => item.id === 6)} />

        {/* Find the item with id 3 */}
        <ChildShoes id="7" data={cartData.find(item => item.id === 7)} />

        {/* Find the item with id 4 */}
        <ChildShoes id="8" data={cartData.find(item => item.id === 8)} />
      </div>
      </div>
      <div>
     <div className='all_best_seller_card'>
        {/* Find the item with id 1 */}
        <ChildShoes id="9" data={cartData.find(item => item.id === 9)} />
        
        {/* Find the item with id 2 */}
        <ChildShoes id="10" data={cartData.find(item => item.id === 10)} />

        {/* Find the item with id 3 */}
        <ChildShoes id="11" data={cartData.find(item => item.id === 11)} />

        {/* Find the item with id 4 */}
        <ChildShoes id="6" data={cartData.find(item => item.id === 6)} />
      </div>
      </div>
      <div>
     <div className='all_best_seller_card'>
        {/* Find the item with id 1 */}
        <ChildShoes id="13" data={cartData.find(item => item.id === 13)} />
        
        {/* Find the item with id 2 */}
        <ChildShoes id="14" data={cartData.find(item => item.id === 14)} />

        {/* Find the item with id 3 */}
        <ChildShoes id="15" data={cartData.find(item => item.id === 15)} />

        {/* Find the item with id 4 */}
        <ChildShoes id="4" data={cartData.find(item => item.id === 4)} />
      </div>
      </div>
  
    </Slider>
    </>
  )
}
// export {cartData}
// export  default ParentShoes
export default ParentShoes

export { cartData}
