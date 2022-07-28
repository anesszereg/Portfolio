import React from 'react'
import './Header.css'
import CTA from './CTA'
import MEE from '../../assets/MEE.png'
import HeaderSocial from './HeaderSocial'
import {AiOutlineDoubleRight} from 'react-icons/ai'



function Header() {
  return (
    <div className='header'>
      <div className="container header_container">
        <h5>Hello I'm  </h5>
        <h1>ANESS ZEREG</h1>
        <h5 className='text-light'>FullStuck developer</h5>
        <CTA />
        <HeaderSocial/>

        <div className="me">
          <img src={MEE} alt="me"  />
        </div>
        <a href="#contact" className='scroll_down link'> Scroll Down <div className='icon'> <AiOutlineDoubleRight/></div> </a>


      </div>
    </div>
  )
}

export default Header