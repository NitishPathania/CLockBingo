import React,{useState} from 'react'
import "../Slider/SliderAll.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

const SliderAll = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
    
    return (
        <div>
            <div className='parent_slider'>
            <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
    <img src="Images/cimageone.jpg" alt="" />

     
      </Carousel.Item>
      <Carousel.Item>
        <img src="Images/pcimagetwo.jpg" alt="" />
       
      </Carousel.Item>
      <Carousel.Item>
       <img src="Images/pcimagethree.jpg" alt="" />
       
      </Carousel.Item>
      <Carousel.Item>
       <img src="Images/pcimagefour.jpg" alt="" />
       
      </Carousel.Item>
      <Carousel.Item>
       <img src="Images/pcimagefive.jpg" alt="" />
       
      </Carousel.Item>
      <Carousel.Item>
       <img src="Images/pcimagesix.jpg" alt="" />
       
      </Carousel.Item>
    </Carousel>
            </div>



        </div>
    )
}

export default SliderAll