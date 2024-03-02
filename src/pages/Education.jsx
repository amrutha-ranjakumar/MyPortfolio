import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import education1 from '../assets/Tharanaellur_Arts__Science_clg_BANNER.jpeg'

function Education() {
  return (
    <>
      <div className='d-flex  mb-5 justify-align-center align-items-center'>
        <h1 className='mt-4' style={{ marginLeft: "550px", color: "orange" }}>Education</h1>
      </div>
      <div className='container mb-5 p-3 fixed ' style={{ marginLeft: "400px" }}>
        <div >

          <Row  >
            <Col  >
              <Card className='card shadow mt-5 border border-warning' style={{ width: '30rem', padding: "90px" }}>
                <Card.Img variant="top" src={education1} height={'180px'} />

                <Card.Body>

                  <br />
                  <h5 className='text-warning' style={{ textAlign: "center" }}>Tharananellur Arts And Science Collage</h5>
                  <br />
                  <h9 style={{ marginLeft: "20px" }}>Bachelor of computer Application</h9>
                  <br />
                  <h9 style={{ marginLeft: "80px" }}>2020 2023</h9>
                </Card.Body>
              </Card>
            </Col>
            {/* 
              <Col>
                <Card className='card shadow mt-5' style={{ width: '30rem', padding: "90px" }}>
                <img alt="Your Image" className="image"  />
                  {/* <Card.Img variant="top" src={image2} height={'180px'} /> */}
            {/* <Card.Body>
                    <Card.Title>Html</Card.Title>
                 </Card.Body>
                </Card>
              </Col> */}
          </Row>
        </div>
      </div>
    </>
  )
}

export default Education