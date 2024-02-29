import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Col, Row } from 'react-bootstrap';
import './Header.css'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <div>
                <Row>
                    <Navbar className=' bg-dark' data-bs-theme="warning" >
                        {/* <Container> */}
                        <Col className=''>
                            <Link to='/' style={{ textDecoration: "none", color: "white", fontSize: "25px" }}>
                                <i class="fa-solid fa-briefcase text-warning ms-5"></i>
                            </Link>
                        </Col>
                        <Col sm={12} md={6} lg={6} className=' side p-5 '>
                            <Nav className="me-auto  me-5   justify-content-end ">
                             <Link to='/' className='me-5 ' style={{ textDecoration: "none", color: "white" }} href="#home">HOME</Link>
                                <Link to='/about' className='me-5' style={{ textDecoration: "none", color: "white" }} href="#features">ABOUT</Link>
                                <Link to='/skill' className='me-5' style={{ textDecoration: "none", color: "white" }} href="#pricing">SKILL</Link>
                                <Link to='/project' className='me-5' style={{ textDecoration: "none", color: "white" }} href="#home">PROJECT</Link>
                                <Link to='/education' className='me-5' style={{ textDecoration: "none", color: "white" }} href="#home">EDUCATION</Link>
                                <Link to='/contact' className='me-5' style={{ textDecoration: "none", color: "white" }} href="#home">CONTACT</Link>
                            </Nav>
                        </Col>
                        {/* </Container> */}
                    </Navbar>
                </Row>
            </div>
         </>
      )
}

export default Header