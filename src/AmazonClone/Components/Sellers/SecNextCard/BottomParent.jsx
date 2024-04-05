import React from 'react'
import BottomChildCard from './BottomChildCard';
import "../SecNextCard/BottomChildCard.css"
import Slider from "react-slick";
const BottomParent = () => {
    var settings = {
        dots: true,
        infinite:true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay :true,
        fade:true,
        autoplaySpeed:2000,
        waitForAnimate:true,
        useTransform:true,
        arrows:false
     
    };
    
    
    //Cart Data

    const bottomCarts = [
        {
            id: "1",

            img: "https://images-eu.ssl-images-amazon.com/images/I/71YLQtka1DL._AC_SR555,630,0,B_BR3_.jpg",

            heading: "ARBOUR",
            discri: "ARBOUR Striped Men Polo Neck Slim fit t-Shirt Comfortable & Stylish Men's T-Shirt"
            , rating: "10",
            price: "699"



        },
        {
            id: "2",
            img: "https://images-eu.ssl-images-amazon.com/images/I/71mBS366zPL._AC_SR555,630,0,B_BR3_.jpg"
            ,
            heading: "Fastrack",
            discri: "Fastrack Revibe Analog Black Dial Men's Watch-3259PF01"
            , rating: "10",
            price: "21,35"

        },
        {
            id: "3",
            img: "https://images-eu.ssl-images-amazon.com/images/I/813KiehzFJL._AC_SR555,630,0,B_BR3_.jpg",
            heading: "Woodland",
            discri: "Woodland Mens OGC 2706117 Sneaker"
            , rating: "232",
            price: "1,998"
        },
        {
            id: "4",
            img: "https://images-eu.ssl-images-amazon.com/images/I/51TpJVsW4WL._AC_SR185,210,0,B_BR3_.jpg"
            ,
            heading: "Wear ",
            discri: "Wear Your Opinion Men's Polo Collar Neck Half Sleeve Tshirt (Combo of 3 Tshirt)"
            , rating: "1,697",
            price: "947"
        },
        {
            id: "5",
            img: "https://images-eu.ssl-images-amazon.com/images/I/71HtC7ATYHL._AC_SR555,630,0,B_BR3_.jpg"
            ,
            heading: "Titan",
            discri: "Titan Analog Gold Dial Men's Watch-NL1715YM02/NR1715YM02"
            , rating: "691",
            price: "2,245"
        },
        {
            id: "6",
            img: "https://images-eu.ssl-images-amazon.com/images/I/7155iSWPkZL._AC_SR555,630,0,B_BR3_.jpg"
            ,
            heading: "U.S. POLO ASSN",
            discri: "U.S. POLO ASSN. Mens Dolfi 4.0 Sneaker"
            , rating: "24",
            price: "2,224"

        },
        {
            id: "7",
            img: "https://images-eu.ssl-images-amazon.com/images/I/51lP3VinwoL._AC_SR555,630,0,B_BR3_.jpg"
            ,
            heading: "Veirdo®",
            discri: "Veirdo® Polo T Shirts for Men, Cotton Polo Neck T Shirts for Men, Half Sleeves Men Polo Tshirt, Classic Colorblocked Polo T Shirts for Men, Men's Regular Polo Shirt"
            , rating: "1,600",
            price: "428"
        },
        {
            id: "8",
            img: "https://images-eu.ssl-images-amazon.com/images/I/718oG0y5SdL._AC_SR555,630,0,B_BR3_.jpg"
            ,
            heading: "Fossil",
            discri: "Fossil Neutra Automatic Analogue Men's Watch(Black Dial Black Colored Strap)-ME3183"
            , rating: "46",
            price: "19,995"
        },
        {
            id: "9",
            img: "https://images-eu.ssl-images-amazon.com/images/I/514QFfCaPvL._AC_SR555,630,0,B_BR3_.jpg"
            ,
            heading: "Liberty",
            discri: "Liberty Mens Roger-e Sneaker"
            , rating: "213",
            price: "847"
        },
        {
            id: "10",
            img: "https://images-eu.ssl-images-amazon.com/images/I/81aN1dXJ+CL._AC_SR555,630,0,B_BR3_.jpg"
            ,
            heading: " T-Shirt",
            discri: "Amazon Brand - Symbol Men's Cotton Rich Solid Polo T-Shirt Regular Fit (Available in Plus Size)"
            , rating: "26,843",
            price: "399"
        },
        {
            id: "11",
            img: "https://images-eu.ssl-images-amazon.com/images/I/61K5hSpdggL._AC_SR555,630,0,B_BR3_.jpg"
            ,
            heading: "ON TIME OCTUS",
            discri: "ON TIME OCTUS Analogue Men's Watch MN-141-143 (Multi Dial Brown Colored Strap)"
            , rating: "6",
            price: "249"
        },
        {
            id: "12",
            img: "https://images-eu.ssl-images-amazon.com/images/I/61V+IDD7BYL._AC_SR555,630,0,B_BR3_.jpg"
            ,
            heading: "Centrino",
            discri: "Centrino Mens 6309-1 Sneaker"
            , rating: "17",
            price: "649"
        },
        {
            id: "13",
            img: "https://images-eu.ssl-images-amazon.com/images/I/61H4+BRHY5L._AC_SR555,630,0,B_BR3_.jpg"
            ,
            heading: "UNITED COLORS OF BENETTON",
            discri: "UNITED COLORS OF BENETTON Men's Polo Shirt"
            , rating: "6",
            price: "1,036"
        },
        {
            id: "14",
            img: "https://images-eu.ssl-images-amazon.com/images/I/51I-p+qqp-L._AC_SR555,630,0,B_BR3_.jpg"
            ,
            heading: "Campus Men's",
            discri: "Campus Men's Camp Denver Sneakers"
            , rating: "522",
            price: "1,299"
        }
        ,
        {
            id: "15",
            img: "https://images-eu.ssl-images-amazon.com/images/I/61LJSUAeocL._AC_SR555,630,0,B_BR3_.jpg"
            ,
            heading: "selloria Analogue Men's",
            discri: "selloria Analogue Men's & Women's Watch (Gold Dial) (Pack of 2)"
            , rating: "52",
            price: "299"
        }

    ]
console.log(bottomCarts)
    return (
        <div>
            <Slider  {...settings}>
                <div>
                    <div className='inner_right__styling_ideas_slider'>
                        <div className='inner_right_div'>
                        <BottomChildCard id="1"
                            data={bottomCarts.find(item => item.id === "1")} />
                            </div>
                            <div className='inner_right_div'>
                        <BottomChildCard id="2"
                            data={bottomCarts.find(item => item.id === "2")} />
                            </div>
                            <div className='inner_right_div'>
                        <BottomChildCard id="3"
                            data={bottomCarts.find(item => item.id === "3")} />
                            </div>
                    </div>
                </div>
                <div>
                    <div className='inner_right__styling_ideas_slider'>
                        <div className='inner_right_div'>
                        <BottomChildCard id="4"
                         data={bottomCarts.find(item => item.id === "4")} />
                         </div>
                           <div className='inner_right_div'>
                        <BottomChildCard id="5"
                         data={bottomCarts.find(item => item.id === "5")} />
                         </div>
                         <div className='inner_right_div'>
                        <BottomChildCard id="6"
                         data={bottomCarts.find(item => item.id === "6")} />
                         </div>
                    </div>
                </div>
                <div>
                    <div className='inner_right__styling_ideas_slider'>
                        <div className='inner_right_div'>
                        <BottomChildCard id="7"
                         data={bottomCarts.find(item => item.id === "7")} />
                         </div>
                         <div className='inner_right_div'>
                        <BottomChildCard id="8" 
                        data={bottomCarts.find(item => item.id === "8")} />
                        </div>
                        <div className='inner_right_div'>
                        <BottomChildCard id="9"
                         data={bottomCarts.find(item => item.id === "9")} />
                         </div>
                    </div>
                </div>
                <div>
                    <div className='inner_right__styling_ideas_slider'>
                        <div className='inner_right_div'>
                        <BottomChildCard id="10"
                         data={bottomCarts.find(item => item.id === "10")} />
                         </div>
                         <div className='inner_right_div'>
                        <BottomChildCard id="11" 
                        data={bottomCarts.find(item => item.id === "11")} />
                        </div>
                        <div className='inner_right_div'>
                        <BottomChildCard id="12"
                         data={bottomCarts.find(item => item.id === "12")} />
                         </div>
                    </div>
                </div>
                <div>
                    <div className='inner_right__styling_ideas_slider'>
                        <div className='inner_right_div'>
                        <BottomChildCard id="13"
                         data={bottomCarts.find(item => item.id ==="13")} />
                         </div>
                         <div className='inner_right_div'>
                        <BottomChildCard id="14"
                         data={bottomCarts.find(item => item.id === "14")} />
                         </div>
                         <div className='inner_right_div'>
                        <BottomChildCard id="15"
                         data={bottomCarts.find(item => item.id === "15")} />
                         </div>
                       
                    </div>
                </div>

            </Slider>


        </div>
    )
}

export default BottomParent