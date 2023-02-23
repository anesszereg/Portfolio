import React from 'react'
import './Experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'


function Experience() {
    return (
        <section id='experience'>
            <h5>what Skill I have
            </h5>
            <h2>
                My Experience</h2>
            <div className='container experience_container'>
                <div className='experience_frontend'>
                    <h3>Front-End Developer</h3>
                    <div className="experience_content">
                        <article className='experience_details'>
                            <BsFillPatchCheckFill className="experience_icon "/>
                            <div><h4>HTML</h4>
                            <small className='text-light '>
                                Experienced</small></div>
                        </article>
                        <article className='experience_details'>
                            <BsFillPatchCheckFill className="experience_icon "/>
                            <div><h4>CSS</h4>
                            <small className='text-light '>
                                Experienced</small></div>
                        </article>
                        <article className='experience_details'>
                            <BsFillPatchCheckFill className="experience_icon "/>
                            <div><h4>JavaScript</h4>
                            <small className='text-light '>
                                Experienced</small></div>
                        </article>
                        <article className='experience_details'>
                            <BsFillPatchCheckFill className="experience_icon "/>
                            <div><h4>React</h4>
                            <small className='text-light '>
                                Experienced</small></div>
                        </article>
                        <article className='experience_details'>
                            <BsFillPatchCheckFill className="experience_icon "/>
                            <div><h4>Boot Strap
                            </h4>
                            <small className='text-light '>
                                Experienced</small></div>
                        </article>
                        <article className='experience_details'>
                            <BsFillPatchCheckFill className="experience_icon "/>
                            <div><h4>Tailwind</h4>
                            <small className='text-light '>
                                Experienced</small></div>
                        </article>
                    </div>


                </div>

                <div className='experience_backend'>
                    <h3>Back-End Developer</h3>
                    <div className="experience_content">
                        <article className='experience_details'>
                            <BsFillPatchCheckFill className="experience_icon "/>
                            <div><h4>Node.js</h4>
                            <small className='text-light '>

                                Experienced</small></div>
                        </article>
                        <article className='experience_details'>
                            <BsFillPatchCheckFill className="experience_icon "/>
                            <div><h4>Express.js</h4>
                            <small className='text-light '>
                                Experienced</small></div>
                        </article>
                        <article className='experience_details'>
                            <BsFillPatchCheckFill className="experience_icon "/>
                            <div><h4>MongoDB</h4>
                            <small className='text-light '>
                                Experienced</small></div>
                        </article>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Experience
