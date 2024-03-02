import React from 'react'
import image1 from '../assets/react-icon.png'
import image2 from '../assets/html.png'
import image3 from '../assets/bootstrap-logo.jpg'
import image4 from '../assets/GitHub.png'
import image5 from '../assets/CSS-Logo.jpg'
import image6 from '../assets/redux1.jpg'
import image7 from '../assets/MongoDB.jpg'
import image8 from '../assets/nodejs1.jpg'
import './skill.css'
import Card from 'react-bootstrap/Card';
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'


function Skill() {
  return (
    <>
      <div>



        <div className='d-flex justify-align-center align-items-center'>
          <button className='border border-warning ' style={{ width: "2000px", marginTop: "30px" }}></button>
        </div>
        <div className='text-warning d-flex mb-5 p-5 '>
          <h1 style={{ marginLeft: "700px" }}>Skill</h1>
        </div>
        <div className='container mb-5 p-3 fixed' style={{ marginLeft: "200px" }}>
          <div className='row '>

            <Row>
              <Col>
                <Card className='card shadow mt-5' style={{ width: '18rem', padding: "90px" }}>
                  <Card.Img variant="top" src={image1} height={'180px'} />
                  <Card.Body>
                    <Card.Title>React js</Card.Title>
                    </Card.Body>
                </Card>
              </Col>

              <Col>
                <Card className='card shadow mt-5' style={{ width: '18rem', padding: "90px" }}>
                  <Card.Img variant="top" src={image2} height={'180px'} />
                  <Card.Body>
                    <Card.Title>Html</Card.Title>
                 </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className='card shadow mt-5' style={{ width: '18rem', padding: "90px" }}>
                  <Card.Img variant="top" src={image3} height={'180px'} />
                  <Card.Body>

                    <h6 style={{ fontSize: "19px" }}>boostap</h6>
                   </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className='card shadow mt-5' style={{ width: '18rem', padding: "90px" }}>
                  <Card.Img variant="top" src={image4} height={'180px'} />
                  <Card.Body>
                    <Card.Title>Github</Card.Title>
                    </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className='card shadow mt-5' style={{ width: '18rem', padding: "90px" }}>
                  <Card.Img variant="top" src={image5} height={'180px'} />
                  <Card.Body>
                    <Card.Title>css</Card.Title>
                 </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className='card shadow mt-5' style={{ width: '18rem', padding: "90px" }}>
                  <Card.Img variant="top" src={image6} height={'180px'} />
                  <Card.Body>
                    <Card.Title>Redux</Card.Title>
                   </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className='card shadow mt-5' style={{ width: '18rem', padding: "90px" }}>
                  <Card.Img variant="top" src={image7} height={'180px'} />
                  <Card.Body>
                    <h9 style={{ fontSize: "16px" }}>MongoDB</h9>
                </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className='card shadow mt-5' style={{ width: '18rem', padding: "90px" }}>
                  <Card.Img variant="top" src={image8} height={'180px'} />
                  <Card.Body>
                    <Card.Title>Nodejs</Card.Title>
                    </Card.Body>
                </Card>
              </Col>
            </Row>




          </div>


        </div>
      </div>


    </>


  )
}

export default Skill