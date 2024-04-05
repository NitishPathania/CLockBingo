import React from 'react'
import MobileChild from './MobileChild'
import "../MobileComp/Mobile.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import Slider from "react-slick";

const MobileParent = () => {

  const mobileData1 = {
    img: "https://m.media-amazon.com/images/I/41yAce7gd4L._AC_SY200_.jpg",
    deal: "Limited time deal",
    price: "8999.00"
    , dis: "iQOO Z9 5G Newly Launched @17999"
  }
  const mobileData2 = {
    img: "https://m.media-amazon.com/images/I/41m-C1HHkIL._AC_SY200_.jpg",
    deal: "Limited time deal",
    price: "34,999.00"
    , dis: "OnePlus 11R 5GOnePlus 11R 5G"
  }
  const mobileData3 = {
    img: "https://m.media-amazon.com/images/I/411gvmvNQzL._AC_SY200_.jpg",
    deal: "Limited time deal",
    price: "34,999.00"
    , dis: "OnePlus 11R 5GOnePlus 11R 5G"
  }
  const mobileData4 = {
    img: "https://m.media-amazon.com/images/I/411iWoJEJjL._AC_SY200_.jpg",
    deal: "Limited time deal",
    price: "34,999.00"
    , dis: "OnePlus 11R 5GOnePlus 11R 5G"
  }

  const mobileData5 = {
    img: "https://m.media-amazon.com/images/I/51o13K4h3-L._AC_SY200_.jpg",
    deal: "Limited time deal",
    price: "34,999.00"
    , dis: "OnePlus 11R 5GOnePlus 11R 5G"
  }
  const mobileData6 = {
    img: "https://m.media-amazon.com/images/I/41ArHnIL7uL._AC_SY200_.jpg",
    deal: "Limited time deal",
    price: "34,999.00"
    , dis: "OnePlus 11R 5GOnePlus 11R 5G"
  }
  const mobileData7 = {
    img: "https://m.media-amazon.com/images/I/41dEcQR7UnL._AC_SY200_.jpg",
    deal: "Limited time deal",
    price: "34,999.00"
    , dis: "OnePlus 11R 5GOnePlus 11R 5G"
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
    <>


      <div className='mobile_heading'>
        <div className="mobile_heading_inner ">
          <h4>Today’s Deals</h4>
          <span><a href="">See all deals</a></span>
        </div>
        <Slider {...settings} >
          <div>

            <div className='mobile_parent_div'>
              <MobileChild data={mobileData2} />
              <MobileChild data={mobileData5} />
              <MobileChild data={mobileData3} />
              <MobileChild data={mobileData4} />
              <MobileChild data={mobileData5} />
            </div>
          </div>
          <div>
            <div className='mobile_parent_div'>
              <MobileChild data={mobileData4} />
              <MobileChild data={mobileData5} />
              <MobileChild data={mobileData2} />
              <MobileChild data={mobileData3} />
              <MobileChild data={mobileData6} />
            </div>

          </div>
          <div>
            <div className='mobile_parent_div'>
              <MobileChild data={mobileData4} />
              <MobileChild data={mobileData5} />
              <MobileChild data={mobileData2} />
              <MobileChild data={mobileData3} />
              <MobileChild data={mobileData6} />
            </div>

          </div>

        </Slider>


      </div>




      {/* <MobileChild  data={mobileData7} /> */}




    </>
  )
}

export default MobileParent