import React from 'react'
import image1 from '../assets/react4.png'
import image2 from '../assets/javascript3.jpg'
import image3 from '../assets/bootsrap.png'
import image4 from '../assets/github.jpg'
import image5 from '../assets/redux.png'
import image6 from '../assets/html.jpg'


function Skill() {
  return (
    <>
      <div>
        <button className='border border-warning ' style={{ width: "1800px", marginTop: "30px" }}></button>
      </div>
      <div className='text-warning d-flex mb-5 p-5 '>
        <h1 style={{ marginLeft: "600px" }}>Skill</h1>
      </div>
      <div className='container mb-5 p-5 fixed' style={{ marginLeft: "200px" }}>
        <div className='row'>
          <div className='col-md-3'>
            <div class="card" >
              <img src={image1} class="card-img-top" alt="..." />
            </div>
          </div>
          <div className='col-md-3'>
            <div class="card" >
              <img src={image2} class="card-img-top" alt="..." />
            </div>
          </div>
          <div className='col-md-3'>
            <div class="card" >
              <img src={image3} class="card-img-top" alt="..." />
            </div>
          </div>
        </div>
      </div>
      <div className='container fixed mb-2 p-5' style={{ marginLeft: "200px" }}>
        <div className='row'>
          <div className='col-md-3'>
            <div class="card" >
              <img src={image4} class="card-img-top" alt="..." />
            </div>

          </div>
          <div className='col-md-3'>
            <div class="card" >
              <img src={image5} class="card-img-top" alt="..." />
            </div>
          </div>
          <div className='col-md-3'>
            <div class="card" >
              <img src={image6} height={'140px'} class="card-img-top" alt="..." />
            </div>
          </div>
        </div>
      </div>

    </>


  )
}

export default Skill