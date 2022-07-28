import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'

function Services() {
    return (
        <section id='services'>
            <h5>
                What I Offer</h5>
            <h2>Services</h2>


            <div className="container services_container">
               
                <article className='service'>
                    <div className="service_head">
                        <h3>Web Developer</h3>
                    </div>
                    <ul className='service_list'>


                        <li>
                            <BiCheck className='service-list-icon'/>
                            <p>Computer literacy.</p>
                        </li>

                        <li>
                            <BiCheck className='service-list-icon'/>
                            <p>Strong numeracy skills.</p>
                        </li>

                        <li>
                            <BiCheck className='service-list-icon'/>
                            <p>Strong creative ability.</p>
                        </li>

                        <li>
                            <BiCheck className='service-list-icon'/>
                            <p>Attention to detail.</p>
                        </li>

                        <li>
                            <BiCheck className='service-list-icon'/>
                            <p>Strong communication skills.</p>
                        </li>

                        <li>
                            <BiCheck className='service-list-icon'/>
                            <p>The ability to explain technical matters clearly.</p>
                        </li>
                    </ul>

                </article>
            </div>
                {/* <article className='service'>
                    <div className="service_head">
                        <h3>Web Developer</h3>
                    </div>
                    <ul className='service_list'>


                        <li>
                            <BiCheck className='service-list-icon'/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                        </li>

                        <li>
                            <BiCheck className='service-list-icon'/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                        </li>

                        <li>
                            <BiCheck className='service-list-icon'/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                        </li>

                        <li>
                            <BiCheck className='service-list-icon'/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                        </li>

                        <li>
                            <BiCheck className='service-list-icon'/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                        </li>
                    </ul>

                </article> */}

        </section>
    )
}

export default Services
