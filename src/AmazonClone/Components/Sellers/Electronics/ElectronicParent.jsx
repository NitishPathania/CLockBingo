import React from 'react'
// import Sellers from './Sellers'
import ElectronicChild from './ElectronicChild'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Slider from "react-slick";
import "../Electronics/Electronic.css"
// import "../CarMotorBike/CarMotor.css"
const ElectronicParent = () => {
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
       const cartOne={
        bedgetitle:"#1",
        img:"https://images-eu.ssl-images-amazon.com/images/I/61jFNCDeahL._AC_UL450_SR450,320_.jpg",
        discri:"Lymio Men Cargo || Men Cargo Pants || Men Cargo Pants Cotton || Cargos for Men (Cargo-05-08)",
        rating:"203",
        price:"699.00"
       
       }
       const cartTwo={
        bedgetitle:"#2",
        img:"https://images-eu.ssl-images-amazon.com/images/I/81WimZLWH1L._AC_UL450_SR450,320_.jpg",
        discri:"GoSriKi Women's Cotton Blend Chikankari Embroidered Straight Kurti",
   
        rating:"4,424",
        price:"489.00"
       
       }

       const cartThree={
        bedgetitle:"#3",
        img:"https://images-eu.ssl-images-amazon.com/images/I/819DWQLgjKL._AC_UL450_SR450,320_.jpg",
        discri:"FancyDressWale Holi t-Shirts for Girls",
        
       
        rating:"275",
        price:"379.00"
       
       }
       const cartfour={
        bedgetitle:"#4",
        img:"https://images-eu.ssl-images-amazon.com/images/I/818UhQ1kpdL._AC_UL450_SR450,320_.jpg",
        discri:" ANNI DESIGNER Women Kurta with Palazzo",
        
      
       
        rating:"295",
        price:"489.00"
       
       }
       const cartfive={
        bedgetitle:"#5",
        img:"https://images-eu.ssl-images-amazon.com/images/I/61pt59LW-lL._AC_UL450_SR450,320_.jpg",
        discri:" Leriya Fashion Dress for Women | One Piece Dress for Women | Beach Dress for Women",
     

      
       
        rating:"53",
        price:"479.00"
       
       }
       const cartsix={
        bedgetitle:"#6",
        img:"https://images-eu.ssl-images-amazon.com/images/I/61vtLhO6fDL._AC_UL450_SR450,320_.jpg",
        discri:"   Bon Organik Unisex My First Holi Bodysuit Baby",
   

      
       
        rating:"956",
        price:"269.00"
       
       }
       const cartseven={
        bedgetitle:"#7",
        img:"https://images-eu.ssl-images-amazon.com/images/I/61AHiYyu3ZL._AC_UL450_SR450,320_.jpg",
        discri:"      Allen Solly Men's Regular Fit Polo",


      
       
        rating:"68,061",
        price:"699.00"
       
       }
       const carteight={
        bedgetitle:"#8",
        img:"https://images-eu.ssl-images-amazon.com/images/I/61KNJav3S9L._AC_UL450_SR450,320_.jpg",
        discri:"       Amazon Brand - Symbol Men's Cotton Rich Solid Polo T-Shirt Regular Fit (Available in Plus Size)",


      
       
        rating:"26,801",
        price:"399.00"
       
       }
       const cartnine={
        bedgetitle:"#9",
        img:"https://images-eu.ssl-images-amazon.com/images/I/71ozxOYao9L._AC_UL450_SR450,320_.jpg",
        discri:"       Amazon Brand - Symbol Men's Cotton Rich Solid Polo T-Shirt Regular Fit (Available in Plus Size)",


      
       
        rating:"51",
        price:"399.00"
       
       }
       const cartten={
        bedgetitle:"#10",
        img:"https://images-eu.ssl-images-amazon.com/images/I/51Vxpmjhw7L._AC_UL450_SR450,320_.jpg",
        discri:"       GoSriKi Women's Cotton Blend Embroidered Straight Kurta with Pant & Dupatta",

        
       
      
       
        rating:"167",
        price:"679.00"
       
       }
       const cart11={
        bedgetitle:"#11",
        img:"https://images-eu.ssl-images-amazon.com/images/I/71GrK57KgxL._AC_UL450_SR450,320_.jpg",
        discri:"       GoSriKi Women's Cotton Blend Embroidered Straight Kurta with Pant & Dupatta",

        
       
      
       
        rating:"167",
        price:"279.00"
       
       }
       const cart12={
        bedgetitle:"#12",
        img:"https://images-eu.ssl-images-amazon.com/images/I/51UhwaQXCpL._AC_UL450_SR450,320_.jpg",
        discri:"     Jockey 8820 Men's Super Combed Cotton Round Neck Sleeveless Vest with Extended Length for Easy Tuck (Pack of 3)",

       
       
      
       
        rating:"137",
        price:"579.00"
       
       }
       const cart13={
        bedgetitle:"#13",
        img:"https://images-eu.ssl-images-amazon.com/images/I/61yyQD1KLOL._AC_UL450_SR450,320_.jpg",
        discri:"  Lymio Casual Shirt for Men|| Shirt for Men|| Men Stylish Shirt (D-Crush-16-23)",

    
      
       
        rating:"167",
        price:"679.00"
       
       }
       const cart14={
        bedgetitle:"#14",
        img:"https://images-eu.ssl-images-amazon.com/images/I/51aDwuCqdHL._AC_UL450_SR450,320_.jpg",
        discri:"        Lux Cozi Men's Regular Fit Polo Neck Half Sleeve Solid Casual T-Shirt | Polo T-Shirt for Men",

        
        
       
        rating:"1,032",
        price:"319.00"
       
       }
       const cart15={
        bedgetitle:"#15",
        img:"https://images-eu.ssl-images-amazon.com/images/I/61LB+d0vheL._AC_UL450_SR450,320_.jpg",
        discri:"      ALYNE Lycra Saree Shapewear Petticoat for Women, Women's Blended Saree Shapewear",

        
       
        
       
        rating:"1,087",
        price:"251.00"
       
       }
  return (

    <>
     <div className='best_card_heading'>
        <div><h5>Bestsellers in Electronics</h5></div>
        <div><a href="">See More</a></div>
    </div>
   
    <Slider {...settings} >
        <div>
    <div className='all_best_seller_card'>
    <ElectronicChild data={cartOne}/>
    <ElectronicChild data={cartTwo}/>
    <ElectronicChild data={cartThree}/>
    <ElectronicChild data={cartsix}/>
    </div>
    </div>
    <div>
    <div className='all_best_seller_card'>
    <ElectronicChild data={cartfour}/>
    <ElectronicChild data={cartfive}/>
    <ElectronicChild data={cartsix}/>
    <ElectronicChild data={cartOne}/>
    </div>
    </div>
    <div>
    <div className='all_best_seller_card'>
    <ElectronicChild data={cartseven}/>
    <ElectronicChild data={carteight}/>
    <ElectronicChild data={cart11}/>
    <ElectronicChild data={cartnine}/>
    </div>
    </div>
    <div>
    <div className='all_best_seller_card'>
    <ElectronicChild data={cartten}/>
    <ElectronicChild data={cart11}/>
    <ElectronicChild data={cartseven}/>
    <ElectronicChild data={cart12}/>
    </div>
    </div>
    <div>
    <div className='all_best_seller_card'>
    <ElectronicChild data={cart13}/>
    <ElectronicChild data={cart14}/>
    <ElectronicChild data={cart15}/>
    <ElectronicChild data={cartTwo}/>
    </div>
    </div>
    </Slider>
    </>
  )
}

export default ElectronicParent