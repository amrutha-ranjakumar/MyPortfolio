import React from 'react'
import aboutImage from '../assets/amrutha.jpg'
import { Button, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'



function About() {
  return (
    <>
      <div>
        <button className='border border-warning ' style={{ width: "2000px", marginTop: "70px" }}></button>
      </div>
      <div className='text-warning mb-5'>
        <h1 style={{ marginLeft: "900px" }}>About</h1>
      </div>
      
        <div style={{marginLeft:"200px"}} className='d-flex justify-align-center align-items-center'>
      <div className='container card shadow border-warning mb-5 mt-2 border border-2 border-secondary movie rounded p-5'>
        <Row  >
          <Col>
            <img className=' ' src={aboutImage} alt="" style={{ width: "70%", height: "30vh", marginLeft: "60px", marginTop: "50px", borderRadius: "120%" }}></img>
          </Col>
          <Col style={{ marginRight: "60px" }}>
            <div className='d-flex mb-5'>
              <div style={{ width: "100%" }} >
                <h3 className=' ms-4 mt-5  mb-4 me-5 text-warning  ' >I AM<span className='text-dark'>  AMRUTHA </span><span className='text-dark'>Ranjakumar</span></h3>
                <p className='text-dark '>As a dedicated learner and aspiring MERN Stack Developer Intern, I am deeply committed to crafting innovative web solutions. I am a self-motivated individual with a strong passion for web development. My skillset includes proficiency in HTML, CSS, React, Bootstrap, JavaScript, and Git. I am eager to apply these skills to create impactful and dynamic web applications.</p>
                <p className='text-dark mt-4'>....................................................................................................................................</p>
              </div>
            </div>
          </Col>
        </Row>

      </div>
      </div>
     
      <button className='border border-warning ' style={{ width: "1200px", marginLeft: "20px", marginTop: "100px" }}></button>
    </>
  )
}

export default About