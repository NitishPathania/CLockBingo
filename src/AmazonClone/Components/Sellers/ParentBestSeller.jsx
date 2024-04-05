import React, { useState,useRef } from 'react'
import Sellers from './Sellers'
import CardSeller from './CardSeller'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Slider from "react-slick";
const carts = [
    {
        id: 1,
        bedgetitle: "#1",
        img: "https://images-eu.ssl-images-amazon.com/images/I/61HPVuqzGjL._AC_UL450_SR450,320_.jpg",
        discri: "Lymio Men Cargo || Men Cargo Pants || Men Cargo Pants Cotton || Cargos for Men (Cargo-05-08)",
        rating: "2037",
        price: "699.00",
        pre: "-87%",
        imgtwo: "https://m.media-amazon.com/images/I/61e-Io31G6L._SY741_.jpg",
        imgthree: "https://m.media-amazon.com/images/I/61kRZXxzDSL._SY741_.jpg",
        imgfour: "https://m.media-amazon.com/images/I/51yRXK0BrIL._SY741_.jpg",
        imgfive: "https://m.media-amazon.com/images/I/51xP-WCADfL._SX679_.jpg",
        imgsix: "https://m.media-amazon.com/images/I/51LL07sL2oL._SY741_.jpg",
        size:["S","M","L","Xl","XXL"],
        color: "Olive Green",
        quality:["1","2","3","4","5","6","7","8","9","10"]
    },
    {
        id: 2,
        bedgetitle: "#2",
        img: "https://images-eu.ssl-images-amazon.com/images/I/51LfzsMZAWL._AC_UL450_SR450,320_.jpg",
        discri: "GoSriKi Women's Cotton Blend Chikankari Embroidered Straight Kurti",
        rating: "4,424",
        price: "489.00",
        imgtwo: "https://m.media-amazon.com/images/I/51euab2HaaL._SY741_.jpg",
        imgthree: "https://m.media-amazon.com/images/I/61JQiBVv-9L._SY741_.jpg",
        imgfour: "https://m.media-amazon.com/images/I/61u6923ZA1L._SY741_.jpg",
        imgfive: "https://m.media-amazon.com/images/I/61r9NTocTpL._SY741_.jpg",
        imgsix: "https://m.media-amazon.com/images/I/81HxoTD4+eL._SY741_.jpg",
        size:["S","M","L","Xl","XXL"],
        color: "Yellow"

    },
    {
        id: 3,
        bedgetitle: "#3",
        img: "https://images-eu.ssl-images-amazon.com/images/I/610PT6URUqL._AC_UL450_SR450,320_.jpg",
        discri: "FancyDressWale Holi t-Shirts for Girls",
        rating: "275",
        price: "379.00",
        imgtwo: "https://m.media-amazon.com/images/I/41XmkkY1x8L.jpg",
        imgthree: "https://m.media-amazon.com/images/I/61ztFZXsj2L._SX679_.jpg",
        imgfour: "https://m.media-amazon.com/images/I/61GU0RAK+DL._SX679_.jpg",
        imgfive: "https://m.media-amazon.com/images/I/61OWN3lfM3L._SX569_.jpg",
        imgsix: "https://m.media-amazon.com/images/I/31IeD-z4BpL.jpg",
        size:["S","M","L","Xl","XXL"],
        color: "white"
    },
    {
        id: 4,
        bedgetitle: "#4",
        img: "https://images-eu.ssl-images-amazon.com/images/I/71BLkd39VKL._AC_UL450_SR450,320_.jpg",
        discri: "ANNI DESIGNER Women Kurta with Palazzo",
        rating: "295",
        price: "489.00",
        imgtwo: "https://m.media-amazon.com/images/I/81qfaP7RoHL._SY741_.jpg",
        imgthree: "https://m.media-amazon.com/images/I/81HHz1f8BZL._SY741_.jpg",
        imgfour: "https://m.media-amazon.com/images/I/8159FOnj6xL._SY741_.jpg",
        imgfive: "https://m.media-amazon.com/images/I/81myFwvAr0L._SY741_.jpg",
        imgsix: "https://m.media-amazon.com/images/I/815M2936qVL._SY741_.jpg"
    },
    {
        id: 5,
        bedgetitle: "#5",
        img: "https://images-eu.ssl-images-amazon.com/images/I/71tF9O0WgwL._AC_UL450_SR450,320_.jpg",
        discri: "Leriya Fashion Dress for Women | One Piece Dress for Women | Beach Dress for Women",
        rating: "53",
        price: "479.00",
        imgtwo: "https://m.media-amazon.com/images/I/71A9rNozJ7L._SY741_.jpg",
        imgthree: "https://m.media-amazon.com/images/I/71hnlnfRdHL._SY741_.jpg",
        imgfour: "https://m.media-amazon.com/images/I/81tUFVkkj-L._SY741_.jpg",
        imgfive: "https://m.media-amazon.com/images/I/41vKpmWcdfL.jpg",
        imgsix: "https://m.media-amazon.com/images/I/71A9rNozJ7L._SY741_.jpg"
    },
    {
        id: 6,
        bedgetitle: "#6",
        img: "https://images-eu.ssl-images-amazon.com/images/I/51ZQzVWvFyL._AC_UL450_SR450,320_.jpg",
        discri: "Bon Organik Unisex My First Holi Bodysuit Baby",
        rating: "956",
        price: "269.00",

    },
    {
        id: 7,
        bedgetitle: "#7",
        img: "https://images-eu.ssl-images-amazon.com/images/I/71eUwDk8z+L._AC_UL450_SR450,320_.jpg",
        discri: "Allen Solly Men's Regular Fit Polo",
        rating: "68,061",
        price: "699.00",
        imgtwo: "https://m.media-amazon.com/images/I/71mh8ZJZFuL._SX569_.jpg",
        imgthree: "https://m.media-amazon.com/images/I/71vSLpVgZpL._SX569_.jpg",
        imgfour: "https://m.media-amazon.com/images/I/71J8pbcn8WL._SX569_.jpg",
        imgfive: "https://m.media-amazon.com/images/I/71Xu6C8X5sL._SX569_.jpg",
        imgsix: "https://m.media-amazon.com/images/I/81ad2heJVXL._SX569_.jpg"
    },
    {
        id: 8,
        bedgetitle: "#8",
        img: "https://images-eu.ssl-images-amazon.com/images/I/713n+TxyfCL._AC_UL450_SR450,320_.jpg",
        discri: "Amazon Brand - Symbol Men's Cotton Rich Solid Polo T-Shirt Regular Fit (Available in Plus Size)",
        rating: "26,801",
        price: "399.00"
    },
    {
        id: 9,
        bedgetitle: "#9",
        img: "https://images-eu.ssl-images-amazon.com/images/I/61SgADmAyDL._AC_UL450_SR450,320_.jpg",
        discri: "Amazon Brand - Symbol Men's Cotton Rich Solid Polo T-Shirt Regular Fit (Available in Plus Size)",
        rating: "51",
        price: "399.00"
    },
    {
        id: 10,
        bedgetitle: "#10",
        img: "https://images-eu.ssl-images-amazon.com/images/I/71Hy7lDZiaL._AC_UL450_SR450,320_.jpg",
        discri: "GoSriKi Women's Cotton Blend Embroidered Straight Kurta with Pant & Dupatta",
        rating: "167",
        price: "679.00"
    },
    {
        id: 11,
        bedgetitle: "#11",
        img: "https://images-eu.ssl-images-amazon.com/images/I/81MfjxIbRsL._AC_UL450_SR450,320_.jpg",
        discri: "GoSriKi Women's Cotton Blend Embroidered Straight Kurta with Pant & Dupatta",
        rating: "167",
        price: "279.00"
    },
    {
        id: 12,
        bedgetitle: "#12",
        img: "https://images-eu.ssl-images-amazon.com/images/I/81TRdxk1wnL._AC_UL450_SR450,320_.jpg",
        discri: "Jockey 8820 Men's Super Combed Cotton Round Neck Sleeveless Vest with Extended Length for Easy Tuck (Pack of 3)",
        rating: "137",
        price: "579.00"
    },
    {
        id: 13,
        bedgetitle: "#13",
        img: "https://images-eu.ssl-images-amazon.com/images/I/71GoGpdI2NL._AC_UL450_SR450,320_.jpg",
        discri: "Lymio Casual Shirt for Men|| Shirt for Men|| Men Stylish Shirt (D-Crush-16-23)",
        rating: "167",
        price: "679.00"
    },
    {
        id: 14,
        bedgetitle: "#14",
        img: "https://images-eu.ssl-images-amazon.com/images/I/51uSxAeuAkL._AC_UL450_SR450,320_.jpg",
        discri: "Lux Cozi Men's Regular Fit Polo Neck Half Sleeve Solid Casual T-Shirt | Polo T-Shirt for Men",
        rating: "1,032",
        price: "319.00"
    },
    {
        id: 15,
        bedgetitle: "#15",
        img: "https://images-eu.ssl-images-amazon.com/images/I/51EP887WiRL._AC_UL450_SR450,320_.jpg",
        discri: "ALYNE Lycra Saree Shapewear Petticoat for Women, Women's Blended Saree Shapewear",
        rating: "1,087",
        price: "251.00"
    },
    {
        id: 16,
        bedgetitle: "#16",
        img: "https://images-eu.ssl-images-amazon.com/images/I/51uJfMfofQL._AC_UL450_SR450,320_.jpg",
        discri: "KSHS Women's Cotton Printed Night Suit Set of Top & Shorts",
        rating: "230",
        price: "499"
    }
];

console.log(carts); // Output the carts array to see all the cart objects within it

const ParentBestSeller = () => {
    const sliderRef = useRef(null);
    var settings = {
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 1,
        autoplay: true,
        slidesToScroll: 1,
        arrows: false,
        autoplaySpeed: 3000,
        afterChange: (index)=>setCurrentPage(index+1),
        ref: sliderRef

    };
   const [currentPage,setCurrentPage]=useState(1)
   const totalPages=Math.ceil(carts.length/4)
  const  startOver=()=>{
    setCurrentPage(1); // Set currentPage state to 1
    sliderRef.current.slickGoTo(0);
  }
    return (

        <>
            <div className='best_card_heading'>


                <div >   
                     <h5>Bestsellers in Clothing & Accessories</h5> 
                
                 </div> 
                 <div>
                    <a href="">See More</a>
                    </div>
                    <div className='start_over_div'>
                        <span>Page</span>&nbsp;
                          <span>{currentPage }&nbsp;of&nbsp;{totalPages}</span>| &nbsp;
                         
                          
                          
                          {
                          currentPage !==1 && 
                          (<span onClick={startOver} 
                          className='heading_start_over'>
                            Start Over</span>)
                             }
                    </div>
              




            </div>

            <Slider {...settings} >
                <div>
                    <div className='all_best_seller_card'>

                        <CardSeller id="1" data={carts.find(item => item.id === 1)} />
                        <CardSeller id="2" data={carts.find(item => item.id === 2)} />
                        <CardSeller id="3" data={carts.find(item => item.id === 3)} />
                        <CardSeller id="4" data={carts.find(item => item.id === 4)} />
                    </div>
                </div>
                <div>
                    <div className='all_best_seller_card'>
                        <CardSeller id="5" data={carts.find(item => item.id === 5)} />
                        <CardSeller id="6" data={carts.find(item => item.id === 6)} />
                        <CardSeller id="7" data={carts.find(item => item.id === 7)} />
                        <CardSeller id="8" data={carts.find(item => item.id === 8)} />
                    </div>
                </div>
                <div>
                    <div className='all_best_seller_card'>
                        <CardSeller id="9" data={carts.find(item => item.id === 9)} />
                        <CardSeller id="10" data={carts.find(item => item.id === 10)} />
                        <CardSeller id="11" data={carts.find(item => item.id === 11)} />
                        <CardSeller id="12" data={carts.find(item => item.id === 12)} />
                    </div>
                </div>
                <div>
                    <div className='all_best_seller_card'>
                        <CardSeller id="13" data={carts.find(item => item.id === 13)} />
                        <CardSeller id="14" data={carts.find(item => item.id === 14)} />
                        <CardSeller id="15" data={carts.find(item => item.id === 15)} />
                        <CardSeller id="16" data={carts.find(item => item.id === 16)} />
                    </div>
                </div>
                

            </Slider>
        </>
    )
}

export default ParentBestSeller
export { carts } 