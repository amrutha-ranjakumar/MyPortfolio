import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Col, Row } from 'react-bootstrap';


export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_qh7mnxu', 'template_n5zictb', form.current, {
        publicKey: 'XkNpRc5qOFp1B7Lc-',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='d-flex justify-align-center align-items-center'>
      <form ref={form} onSubmit={sendEmail} style={{ marginLeft: "300px" }}>
        <div className='border border-warning card  bg-dark shadow movie mt-5 mb-5 p-5' style={{ width: "1100px" }}>
          <Row className='bg-dark'>
            <Col>
              <h3 className='text-warning mt-2 mb-2 ms-3 d-flex justify-content-center align-items-center '>CONTACT ME</h3>
              <div style={{ color: "white" }}>

                <label>Name:</label>
                <input type="text" className='form-control' style={{ width: "500px" }} name="from_name" />
                <br />
                <label>Email</label>
                <input type="email" className='form-control' style={{ width: "500px" }} name="from_email" />
                <br />
                <label>Message</label>
                <textarea name="message" className='form-control' style={{ width: "500px", height: "200px" }} />
                <br />
                <input type="submit" className='form-control btn btn-warning border-danger' style={{ width: "500px" }} value="Send" />
              </div>
            </Col>
            <Col className=' d-flex flex-column' style={{ marginTop: "10px", fontSize: "12px" }} >
              <h3 className='text-warning   ' style={{ marginTop: "180px", marginLeft: '60px' }}>CONNECT WITH ME</h3>
              <br />
              <a href='https://github.com/amrutha-ranjakumar' target='_blank' className='btn' style={{ textDecoration: "none", color: 'white', marginTop: "0px", marginLeft: '80px' }}>
                <i class="fa-brands fa-github text-success"></i>  https://github.com/amrutha-ranjakumar</a>
              <a href='amrutharanjakumar143@gmail.com' target='_blank' className='btn' style={{ textDecoration: "none", color: 'white', marginTop: "0px", marginLeft: '10px' }}><i class="fa-solid fa-envelope text-success ms-5"></i> amrutharanjakumar143@gmail.com</a>
              <a href='https://www.linkedin.com/in/amrutha-ranjakumar-7665192aa' target='_blank' className='btn' style={{ textDecoration: "none", color: 'white', marginTop: "0px", marginLeft: '30px' }}>
                <i class="fa-brands fa-linkedin text-success  ms-5"></i>  https://www.linkedin.com/in/amrutha-ranjakumar-7665192aa</a>
            </Col>
          </Row>
        </div>
      </form>
    </div>
  );
};
