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
            <div className='nav1'>
                <Row>
                    <Navbar className='bg-dark' data-bs-theme="warning"  style={{width:'2000px'}}>
                        {/* <Container> */}
                        <Col className='nav_imgage ms-5'>
                            <Link to='/' style={{ textDecoration: "none", color: "white", fontSize: "40px" }}>
                                <i class="fa-solid fa-briefcase text-warning ms-5"></i>
                            </Link>
                        </Col>
                        <Col  className=' side p-5 d-flex '>
                            <Nav  style={{marginLeft:"800px"}}>
                             <Link to='/' className='me-5 ' style={{ textDecoration: "none", color: "white",fontSize: "26px"  }} href="#home">HOME</Link>
                                <Link to='/about' className='me-5' style={{ textDecoration: "none", color: "white",fontSize: "26px" }} href="#features">ABOUT</Link>
                                <Link to='/skill' className='me-5' style={{ textDecoration: "none", color: "white",fontSize: "26px" }}  href="#pricing">SKILL</Link>
                                <Link to='/project' className='me-5' style={{ textDecoration: "none", color: "white",fontSize: "26px" }}  href="#home">PROJECT</Link>
                                <Link to='/education' className='me-5' style={{ textDecoration: "none", color: "white",fontSize: "26px" }}  href="#home">EDUCATION</Link>
                                <Link to='/contact' className='me-5' style={{ textDecoration: "none", color: "white",fontSize: "26px" }}  href="#home">CONTACT</Link>
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