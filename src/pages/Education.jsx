import React from 'react'

function Education() {
  return (
    <>
      <div className='text-warning d-flex mb-5 ms-5 mt-5 align-items-center justify-content-center'>
        <h1>Education</h1>
      </div>
      <div className='bg-white card shadow border border-warning movie mt-5 mb-5 ' style={{ width: "1200px", height: "290px", marginLeft: "100px" }}>
        <h4 className='text-warning' style={{ marginLeft: "300px", marginTop: "10px" }}><i class="fa-solid fa-bullseye"></i> BACHELOR OF COMPUTER APPLICATION 2020-2023</h4>
        <h7 style={{ marginLeft: "400px", marginTop: "10px" }}>University of Calicut
        </h7>
        <h6 style={{ marginLeft: "400px", marginTop: "10px" }}>Tharananellur Arts and Science College, Thanissery, Thrissur</h6>
        <h4 className='text-warning' style={{ marginLeft: "300px", marginTop: "10px" }}><i class="fa-solid fa-bullseye"></i> HIGHER SECONDARY EDUCATION 2018-2019
        </h4>
        <h6 style={{ marginLeft: "400px", marginTop: "10px" }}>G.M.G.H.S.S Irinjalakuda, Thrissur
        </h6>
        <h4 className='text-warning' style={{ marginLeft: "300px", marginTop: "10px" }}><i class="fa-solid fa-bullseye"></i> HIGH SCHOOL 2017-2018
        </h4>
        <h6 style={{ marginLeft: "400px", marginTop: "10px" }}>Sreekrisha higher secondary school Anandapuram, Thrissur</h6>
      </div>
    </>
  )
}

export default Education