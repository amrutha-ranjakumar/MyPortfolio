import React from 'react'
import aboutImage from '../assets/amrutha.jpg'
import { Button, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'



function About() {
  return (
    <>
      <div className='text-warning d-flex mb-5 ms-5 align-items-center justify-content-center'>
        <h1>about me</h1>
      </div>
      <div>
        <button className='border border-warning ' style={{ width: "600px", width: "1000px", marginLeft: "200px", marginTop: "20px" }}></button>
      </div>
      < div className='mb-5  mb-5  card shadow bg-white movie ' style={{ width: "60%", height: "400px", marginLeft: "300px", marginTop: "100px" }}>
        <div className='container-fluid rounded'>
          <Row  >
            <Col>
              <img className=' ' src={aboutImage} alt="" style={{ width: "60%", height: "40vh", marginLeft: "60px", marginTop: "50px" , borderRadius: "120%"}}></img>
            </Col>
            <Col style={{ marginRight: "60px" }}>
              <div className='d-flex mb-5'>
                <div style={{ width: "100%", height: "100vh" }} >
                  <h3 className=' ms-4 mt-5  mb-4 me-5 text-warning  ' >I AM<span className='text-dark'>  AMRUTHA </span><span className='text-dark'>Ranjakumar</span></h3>
                  <p className='text-dark '>As a dedicated learner and aspiring MERN Stack Developer Intern, I am deeply committed to crafting innovative web solutions. I am a self-motivated individual with a strong passion for web development. My skillset includes proficiency in HTML, CSS, React, Bootstrap, JavaScript, and Git. I am eager to apply these skills to create impactful and dynamic web applications.</p>
                  <p className='text-dark mt-4'>....................................................................................................................................</p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <button className='border border-warning ' style={{ width: "600px", width: "1000px", marginLeft: "200px", marginTop: "100px" }}></button>
    </>
  )
}

export default About