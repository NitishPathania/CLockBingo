import React from 'react'
import "../DalComp/Dal.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Slider from "react-slick";
// import ChildDal from './ChildDal';
import TvChild from './TvChild';
const TvParent = () => {
    const mobileData1 = {
        img: "https://m.media-amazon.com/images/I/91Zb64yWENL._AC_SY200_.jpg",
       
      }
      const mobileData2 = {
        img: "https://m.media-amazon.com/images/I/71hZj+2OkuL._AC_SY200_.jpg",

      }
      const mobileData3 = {
        img: "https://m.media-amazon.com/images/I/71sAn2UfxPL._AC_SY200_.jpg",
       
      }
      const mobileData4 = {
        img: "https://m.media-amazon.com/images/I/51-J1WOxzIL._AC_SY200_.jpg",
      
      }
    
      const mobileData5 = {
        img: "https://m.media-amazon.com/images/I/71S59-R52EL._AC_SY200_.jpg",
       
      }
      const mobileData6 = {
        img: "https://m.media-amazon.com/images/I/81ratqQtFfL._AC_SY200_.jpg",
        
      }
      const mobileData7 = {
        img: "https://m.media-amazon.com/images/I/712uzQ26A-L._AC_SY200_.jpg",
        
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
          <h4>Up to 85% off | Bestsellers from Small businesses</h4>
          <span><a href="">See all offeres</a></span>
        </div>
        <Slider {...settings} >
          <div>

            <div className='mobile_parent_div'>
              <TvChild data={mobileData2} />
              <TvChild data={mobileData1} />
              <TvChild data={mobileData3} />
              {/* <TvChild data={mobileData7} /> */}
              <TvChild data={mobileData4} />
              <TvChild data={mobileData5} />
            </div>
          </div>
          <div>
            <div className='mobile_parent_div'>
              <TvChild data={mobileData4} />
              <TvChild data={mobileData5} />
              <TvChild data={mobileData2} />
              <TvChild data={mobileData3} />
              <TvChild data={mobileData6} />
            </div>

          </div>
          <div>
            <div className='mobile_parent_div'>
              <TvChild data={mobileData4} />
              <TvChild data={mobileData5} />
              <TvChild data={mobileData2} />
              <TvChild data={mobileData3} />
              <TvChild data={mobileData6} />
            </div>

          </div>

        </Slider>


      </div>

    </div>
  )
}

export default TvParent