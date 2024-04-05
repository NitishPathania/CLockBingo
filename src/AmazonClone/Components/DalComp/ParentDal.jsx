import React from 'react'
import "../DalComp/Dal.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Slider from "react-slick";
import ChildDal from './ChildDal';

const ParentDal = () => {
    const mobileData1 = {
        img: "https://m.media-amazon.com/images/I/51KbHv8RgYL._AC_SY200_.jpg",
       
      }
      const mobileData2 = {
        img: "https://m.media-amazon.com/images/I/61ug1DmriWL._AC_SY200_.jpg",

      }
      const mobileData3 = {
        img: "https://m.media-amazon.com/images/I/61Ol4N7QNxL._AC_SY200_.jpg",
       
      }
      const mobileData4 = {
        img: "https://m.media-amazon.com/images/I/611khGdjC+L._AC_SY200_.jpg",
      
      }
    
      const mobileData5 = {
        img: "https://m.media-amazon.com/images/I/718CxTIHJvL._AC_SY200_.jpg",
       
      }
      const mobileData6 = {
        img: "https://m.media-amazon.com/images/I/71wOCvfaAdL._AC_SY200_.jpg",
        
      }
      const mobileData7 = {
        img: "https://m.media-amazon.com/images/I/61C6ClQlwWL._AC_SY200_.jpg",
        
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
          <h4>Deilvered within 48 hours | Holi herbal colours & pichkaris from stores near you</h4>
          <span><a href="">See all offeres</a></span>
        </div>
        <Slider {...settings} >
          <div>

            <div className='mobile_parent_div'>
              <ChildDal data={mobileData2} />
              <ChildDal data={mobileData1} />
              <ChildDal data={mobileData3} />
              <ChildDal data={mobileData4} />
              <ChildDal data={mobileData5} />
            </div>
          </div>
          <div>
            <div className='mobile_parent_div'>
              <ChildDal data={mobileData4} />
              <ChildDal data={mobileData5} />
              <ChildDal data={mobileData2} />
              <ChildDal data={mobileData3} />
              <ChildDal data={mobileData6} />
            </div>

          </div>
          <div>
            <div className='mobile_parent_div'>
              <ChildDal data={mobileData4} />
              <ChildDal data={mobileData5} />
              <ChildDal data={mobileData2} />
              <ChildDal data={mobileData3} />
              <ChildDal data={mobileData6} />
            </div>

          </div>

        </Slider>


      </div>
    </div>
  )
}

export default ParentDal