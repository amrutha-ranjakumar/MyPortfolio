import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useState } from 'react';
import './skill.css'
import image1 from '../assets/react4.png'
import image2 from '../assets/javascript3.jpg'
import image3 from '../assets/bootsrap.png'
import image4 from '../assets/github.jpg'
import image5 from '../assets/redux.png'
import image6 from '../assets/expressjs1.png'
import image7 from '../assets/Mongo-db 2.jpg'


function Skill() {
 
  return (

    <>
      <div className='text-warning d-flex mb-5 ms-5 align-items-center justify-content-center'>
        <h1>skills</h1>
      </div>
      <Row className='mb-5 ' style={{ marginRight: "70px" }}>
        <div className='bg-white card shadow border-warning  movie' style={{ width: "130px", height: "70px", marginLeft: "300px" }} >
          <img className='baground mt-2' src={image1} alt="" />
        </div>
        <div className='bg-white card shadow border-warning   movie' style={{ width: "130px", height: "70px", marginLeft: "100px" }} >
          <img className='baground mt-2' src={image2} alt="" />
        </div>
        <div className='bg-white card shadow border-warning  movie' style={{ width: "130px", height: "70px", marginLeft: "100px" }} >
          <img className='baground mt-2 mb-3' src={image3} alt="" />
        </div>
        <div className='bg-white card shadow border-warning  movie ' style={{ width: "130px", height: "70px", marginLeft: "100px" }} >
          <img className='baground mt-2 mb-3' src={image4} alt="" />
        </div>
        <div className='bg-white card shadow border-warning  movie ' style={{ width: "130px", height: "70px", marginLeft: "400px" }} >
          <img className='baground mt-2 mb-5' src={image5} alt="" />
        </div>
        <div className='bg-white card shadow border-warning  movie ' style={{ width: "130px", height: "70px", marginLeft: "110px" }} >
          <img className='baground mt-2 mb-5' src={image6} alt="" />
        </div>
        <div className='bg-white card shadow border-warning  movie ' style={{ width: "130px", height: "70px", marginLeft: "110px" }} >
          <img className='baground mt-2 mb-5' src={image7} alt="" height={'150px'} width={'105px'} />
        </div>
      </Row>
    </>
  )
}

export default Skill
