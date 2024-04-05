import React from 'react'
import "../Sellers/CardSeller.css"
import { LiaRupeeSignSolid } from "react-icons/lia";
import { CiStar } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa";
import { VscStarFull } from "react-icons/vsc";
import { VscStarHalf } from "react-icons/vsc";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
// import ReactImageMagnify from 'react-image-magnify';
import { FaCaretRight } from "react-icons/fa";
// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal'
const CardSeller = (props) => {
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);

  const navigate = useNavigate()
  const { id } = props.data
  return (
    <>


      <div className='card_seller'>
        <div className='seller_trend_no'>
          <div className='zg-bdg-text'>
            <p>{props.data.bedgetitle}</p> </div>
          <div className='zg-bdg-text_arrow'></div>
        </div>
        <div className='seller_card_img'>
          <img preload="true" src={props.data.img} alt="" />
          <div className='watching_div_inner' onClick={() => setLgShow(true)}>
            {/* <h1>hello</h1> */}


            <p ><FaCaretRight className='watching_div_inner_icon' />&nbsp;&nbsp;Watch</p>

          </div>

        </div>
        <div className='seller_card_category'>

          <p onClick={() => navigate(`/bestsellernavbar/secnextcardd/${id}`)}
          >{props.data.discri}</p>
        </div>
        <div className='seller_card_rating'>
          <VscStarFull className='rating_icon' />
          <VscStarFull className='rating_icon' />
          <VscStarFull className='rating_icon' />
          <VscStarHalf className='rating_icon' />
          <VscStarHalf className='rating_icon' />
          <span>{props.data.rating}</span>
        </div>
        <div className='seller_card_price'>
          <h5><LiaRupeeSignSolid className='rupee_icons' />{props.data.price}</h5>
        </div>
      </div>

      {/* modal */}

      {/* <Button >Large modal</Button> */}

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Large Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='m-auto'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/hQ65gT8xTe8?si=5P4mMLJn8NQqcrGS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen infiniteloop></iframe>

        </Modal.Body>
      </Modal>


    </>
  )
}

export default CardSeller

