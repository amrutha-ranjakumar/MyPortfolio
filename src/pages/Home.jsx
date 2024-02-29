
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
       <div className='mb-3 bg-white' style={{ width: "100%", height: "80vh" }}>
                <div style={{ marginLeft: "100px" }}>
                    <div className='container-fluid rounded mb-5'>
                        <Row className='align-items-center justify-content-between  p-5 ' >
                            <Col sm={12} md={6} lg={6}>
                                <h2 className=' mb-2 ms-5 text-warning ' >I AM<span className='text-black'>  AMRUTHA Ranjakumar</span></h2>
                                <h1 className='text-warning   ms-5  '>full stack developer</h1>
                                <p className=' ms-5 text-black'>Hey there,I design and build high quality  web applications</p>
                                <button className='btn btn-danger rounded mb-5 ms-5' onClick={handleDownload}>DOWNLOAD CV</button>
                            </Col>
                            <Col lg={6} md={6} >
                                <img className='bg-black ms-5 homeimage1 ' src={homeImage} alt="" height={"400px"} marginBottom={"500px"} />
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        <About />
            <Skill />
                 <Project />
                        <Contact />
         </>
    );
}
export default Home;









