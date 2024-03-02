import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'

function Education() {
  return (
    <>
    
      <div className='d-flex  mb-5 justify-align-center align-items-center'>

        <h1 className='mt-5' style={{ marginLeft: "500px", color: "orange" }}>Education</h1>
    </div>

        {/* <h4 className='text-warning' style={{ marginLeft: "300px", marginTop: "10px" }}><i class="fa-solid fa-bullseye"></i> BACHELOR OF COMPUTER APPLICATION 2020-2023</h4>
        <h7 style={{ marginLeft: "400px", marginTop: "10px" }}>University of Calicut
        </h7>
        <h6 style={{ marginLeft: "400px", marginTop: "10px" }}>Tharananellur Arts and Science College, Thanissery, Thrissur</h6>
        <h4 className='text-warning' style={{ marginLeft: "300px", marginTop: "10px" }}><i class="fa-solid fa-bullseye"></i> HIGHER SECONDARY EDUCATION 2018-2019
        </h4>
        <h6 style={{ marginLeft: "400px", marginTop: "10px" }}>G.M.G.H.S.S Irinjalakuda, Thrissur
        </h6>
        <h4 className='text-warning' style={{ marginLeft: "300px", marginTop: "10px" }}><i class="fa-solid fa-bullseye"></i> HIGH SCHOOL 2017-2018
        </h4>
        <h6 style={{ marginLeft: "400px", marginTop: "10px" }}>Sreekrisha higher secondary school Anandapuram, Thrissur</h6> */}
      <div className='container mb-5 p-3 fixed' style={{ marginLeft: "100px" }}>
          <div className='row '>

            <Row  >
              <Col >
                <Card className='card shadow mt-5' style={{ width: '30rem', padding: "90px" }}>
                  {/* <Card.Img variant="top" src={image1} height={'180px'} /> */}
                  <Card.Body>
                    <Card.Title>React js</Card.Title>
                    </Card.Body>
                </Card>
              </Col>

              <Col>
                <Card className='card shadow mt-5' style={{ width: '30rem', padding: "90px" }}>
                  {/* <Card.Img variant="top" src={image2} height={'180px'} /> */}
                  <Card.Body>
                    <Card.Title>Html</Card.Title>
                 </Card.Body>
                </Card>
              </Col>
             
            
             
            </Row>




          </div>


        </div>
    
    

    </>
  )
}

export default Education