import React from 'react'
import './About.css'
import ME2 from '../../assets/ME2.png'
import {FcSalesPerformance} from 'react-icons/fc'
import {FcVoicePresentation} from 'react-icons/fc'
import{FcOpenedFolder} from 'react-icons/fc'




function About() {
    return (
        <section id='about'>
            <h5>Get To know</h5>
            <h2 className='link'>About Me</h2>

            <div className="container about_container">

                <div className="about_me">
                    <div className="about_me_img">
                        <img src={ME2}
                            alt="about image" className='img'/>
                    </div>

                </div>
                <div className="about_content">
                    <div className="about-cards">
                        <article className='about-card'>
                        <FcSalesPerformance className='about-icon'/>
                          <h5>Experience</h5>
                          <small> 1 Years working </small>
                        </article>
                        <article className='about-card'>
                          <FcVoicePresentation className='about-icon'/>
                        <h5>Client</h5>
                          <small> 0 </small>
                        </article>
                        <article className='about-card'>
                          <FcOpenedFolder className='about-icon'/>
                        <h5>Projects</h5>
                          <small> 20+ Completed  </small>
                        </article>
                    </div>

                    <p>
                    Am currently a second-year computer Science Student at Boumerdes University Algeria, and Start my journey as a front-end & back-end  web developer. <br />
Technologies : Html , CSS , Tailwind , JavaScript ❤ , NodeJS , Express and Mongo DB .</p>

                    <a href="#contact" className='btn btn-primary'> Let's talk</a>

                </div>
            </div>
        </section>
    )
}

export default About
