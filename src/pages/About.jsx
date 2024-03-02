import React from 'react'
import aboutImage from '../assets/cartoon4.jpg'
import { Button, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './about.css'



function About() {
  return (
    <>
 
      <section id="about" class="about">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>About</h2>
            <p>About Me</p>
          </div>
          <div class="row">
            <div class="about-content p15">
              <div class="row mb-5">
                <div class="about-text p15">
                  <p>
                
As a dedicated learner and aspiring MERN Stack Developer Intern, I am deeply committed to crafting innovative web solutions. I am a self-motivated individual with a strong passion for web development. My skillset includes proficiency in HTML, CSS, React, Bootstrap, JavaScript, and Git. I am eager to apply these skills to create impactful and dynamic web applications.
                  </p>
                </div>
              </div>
              </div>
                   
            
          
          
              <div class="row">
                <div class="education p15">
                  <h3 class="title mb-2 ">Education</h3>
                  <div class="row">
                    <div class="timeline-box p15 mb-5">
                      <div class="timeline shadow ">
                     

                        <div class="timeline-item">
                          <div class="circle-dot"></div>
                          <h6 class="timeline-date">
                            <i class="fa fa-calendar"></i>   2020 - 2023
                          </h6>
                          <h4 class="timeline-title">
                       Bachelore Of Computer Application
                          </h4>
                          <p class="timeline-text">
                            Tharananellur Arts And science College
                            University of Calicut
                          </p>
                        </div>
                       

                        <div class="timeline-item">
                          <div class="circle-dot"></div>
                          <h6 class="timeline-date">
                            <i class="fa fa-calendar"></i>   2018 - 2019
                          </h6>
                          <h4 class="timeline-title">Computer Science</h4>
                          <p class="timeline-text">
                          G.M.G.H.S.S Irinjalakuda, Thrissur
                          </p>
                        </div>
                       
                      </div>
                    </div>
                  </div>
                </div>
                </div>
                    </div>
                 
                       
</div>
                
              </section>
             
                     

                     
                     
                       
                  
             

     
      
       

      
     
     
    </>
  )
}

export default About