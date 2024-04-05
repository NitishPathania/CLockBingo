import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Slider from "react-slick";
// import ChildBike from './ChildBike';
import ChildBike from "../BikeComp/ChildBike"
const ParentBike = () => {
    const mobileData1 = {
        img: "https://m.media-amazon.com/images/I/71bp1ECm53L._AC_SY200_.jpg",
       
      }
      const mobileData2 = {
        img: "https://m.media-amazon.com/images/I/61wZvaoE2HL._AC_SY200_.jpg",

      }
      const mobileData3 = {
        img: "https://m.media-amazon.com/images/I/61lbumYbFyL._AC_SY200_.jpg",
       
      }
      const mobileData4 = {
        img: "https://m.media-amazon.com/images/I/51pDpsai4DL._AC_SY200_.jpg",
      
      }
    
      const mobileData5 = {
        img: "https://m.media-amazon.com/images/I/51CpQWTUn8L._AC_SY200_.jpg",
       
      }
      const mobileData6 = {
        img: "https://m.media-amazon.com/images/I/51H8a7JfLqL._AC_SY200_.jpg",
        
      }
      const mobileData7 = {
        img: "https://m.media-amazon.com/images/I/51CpQWTUn8L._AC_SY200_.jpg",
        
      }
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
    <div>
     <div className='mobile_heading'>
        <div className=" mobile_heading_innerr">
          <h4>EMI starting at ₹105/day | Electric scooters & motorbike</h4>
          <span><a href="">See all offeres</a></span>
        </div>
        <Slider {...settings} >
          <div>

            <div className='mobile_parent_div'>
              <ChildBike data={mobileData2} />
              <ChildBike data={mobileData1} />
              <ChildBike data={mobileData3} />
              <ChildBike data={mobileData4} />
              <ChildBike data={mobileData5} />
            </div>
          </div>
          <div>
            <div className='mobile_parent_div'>
              <ChildBike data={mobileData4} />
              <ChildBike data={mobileData5} />
              <ChildBike data={mobileData2} />
              <ChildBike data={mobileData3} />
              <ChildBike data={mobileData6} />
            </div>

          </div>
          <div>
            <div className='mobile_parent_div'>
              <ChildBike data={mobileData4} />
              <ChildBike data={mobileData5} />
              <ChildBike data={mobileData2} />
              <ChildBike data={mobileData3} />
              <ChildBike data={mobileData6} />
            </div>

          </div>

        </Slider>


      </div>



    </div>
  )
}

export default ParentBike