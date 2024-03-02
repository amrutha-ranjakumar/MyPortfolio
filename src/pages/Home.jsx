
import React from 'react'
import { Col, Row } from 'react-bootstrap'

import About from './About'
import Project from './Project'
import Skill from './Skill'
import Education from './Education'
import homeImage from '../assets/amrutha.jpg'
import { Contact } from './Contact'
import './home.css'
function Home() {
  const handleDownload = () => {
    const downloadUrl = '/Amrutha Ranjakumar Resume.pdf';
    const link = document.createElement('a')
    link.href = downloadUrl;
    link.download = 'my-cv.pdf';
    link.click();

  };
  return (
    <>
      <div className='d-flex justify-align-center align-items-center'>
        <div className='container   movie rounded p-5' style={{ width: "2000px", marginTop: "400px" }} >
          <Row  >
            <Col style={{ marginRight: "60px" }}>
              <div className='d-flex mb-5'>
                <div style={{ width: "100%" }} >
                  <h1 className=' ms-4 mt-3  mb-2 ms-5 text-warning  ' >I AM<span className='text-dark'>  AMRUTHA </span><span className='text-dark'>Ranjakumar</span></h1>
                  <h3 className='text-warning ms-5'>full stack developer</h3>
                  <p className='text-dark ms-5 '>  <p>
                
                As a dedicated learner and aspiring MERN Stack Developer Intern, I am deeply committed to crafting innovative web solutions. I am a self-motivated individual with a strong passion for web development. My skillset includes proficiency in HTML, CSS, React, Bootstrap, JavaScript, and Git. I am eager to apply these skills to create impactful and dynamic web applications.
                                  </p></p>
                  <button className='btn btn-danger rounded mb-5 ms-5 ' onClick={handleDownload}>DOWNLOAD CV</button>
                </div>
              </div>
            </Col>
            <Col>
              <img className=' ' src={homeImage} alt="" style={{ width: "60%", height: "40vh", marginLeft: "100px", marginTop: "10px", borderRadius: "120%" }}></img>
            </Col>
          </Row>
          <Skill/>
        <Project/>
        <Education/>
        <Contact/>
        </div>
       
       
         </div>


    </>
  );
}
export default Home;