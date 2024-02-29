import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div className='d-flex justify-content-center  align-items-center w-100 bg-dark p-2 '>
        <div className='footer  align-item-center justfy-content-center' >
          <div className='website  d-flex flex-column ms-5 decoration-none' style={{ width: "400px" }}>
            <Link to='/' style={{ textDecoration: "none", color: "white", fontSize: "25px", marginLeft: "150px" }}><i class="fa-solid fa-briefcase text-warning"></i> </Link>
            <br />
            <br />
            <h5 className='text-white  ms-5 '>&copy; Amrutha Ranjakumar 2024</h5>
            <p className='mt-1 text-center text-warning me-5'>Copyright &copy; 2023 media player.Built with React</p>
          </div>
        </div>
      </div>
      <div className='d-flex justify-content-evenly bg-dark p-2 align-items-center mb-3 '>
        <Link style={{ textDecoration: "none", color: 'green' }}><i class="fa-brands fa-github  ms-5  "></i> 9895375560</Link>
        <Link style={{ textDecoration: "none", color: 'green' }}><i class="fa-solid fa-envelope  ms-5"></i> amrutharanjakumar143@gmail.com</Link>
        <Link style={{ textDecoration: "none", color: 'green' }}><i class="fa-brands fa-linkedin  ms-5"></i> in/amrutha-ranjakumar</Link>
      </div>
    </>
  )
}

export default Footer
