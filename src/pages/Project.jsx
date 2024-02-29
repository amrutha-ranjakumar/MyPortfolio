import React from 'react';
import './Project.css'; // Import CSS for styling
import project from '../assets/Media-player.jpg'
import project1 from '../assets/netflix (2).png'
import project2 from '../assets/Restarunt.jpg'
import project3 from '../assets/E-kart.jpg'




const Project = () => {

  return (
    <>
      <div>
        <button className='border border-warning ' style={{ width: "100px", width: "1600px", marginTop: "70px" }}></button>
      </div>
      <div className='text-warning d-flex mb-5 '>
        <h1 style={{marginLeft:"600px"}}>Projects</h1>
      </div>
      <div className='bg-white ' style={{ height: "1000px", marginBottom: "400px" }}>
       
        <div className='bg-white card shadow p-5 border-warning  mb-5 mt-5 test movie' style={{height:"400px",width:"700px"}}>
        <h5  style={{marginLeft:"250px",color:"orange"}}>Neflix Clone</h5>
          <p>User crafted a responsive Netflix clone with HTML, CSS, and React, integrating API for dynamic content, ensuring optimal display across devices for seamless user experience.</p>
          <div className="image-container  ">
            <img src={project1} alt="Your Image" className="image"  />
            <div className="text">
              <h2 style={{ marginBottom: "300px", marginLeft: "100px" }} >Netflix Clone</h2>
              <p>mnnnnb</p>
            </div>
          </div>
        </div>
        <div className='bg-white card shadow p-5   border-warning mb-5 mt-5 test movie'style={{height:"400px",width:"700px"}}>
        <h5 style={{marginLeft:"250px",color:"orange"}}>Restaurant</h5>
          <p>User created a Restaurant website with HTML, CSS, React, and Redux, featuring intuitive UI showcasing reviews, hours, and details, with Redux for optimized state management enhancing navigation and performance.</p>
          <div className="image-container ">
            <img src={project2} alt="Your Image" className="image"  />
            <div className="text">
              <h2 style={{ marginBottom: "300px", marginLeft: "110px" }} >Restaurant</h2>
              <p>mnnnnb</p>
            </div>
          </div>
        </div>
        <div className='bg-white card shadow p-5  border-warning mb-5 mt-5 test movie'style={{height:"400px",width:"700px"}}>
        <h5 style={{marginLeft:"250px",color:"orange"}}>E-kart</h5>
          <p className='text-dark'>User developed an e-Kart website using HTML, CSS, React, and Redux, featuring product viewing, wishlist, and cart functionality, with Redux ensuring centralized data management for scalability and future enhancements.</p>
          <div className="image-container ">
            <img src={project3} alt="Your Image" className="image"  />
            <div className="text">
              <h2 style={{ marginBottom: "300px", marginLeft: "150px" }} >E-Kart</h2>
              <p>mnnnnb</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;



















