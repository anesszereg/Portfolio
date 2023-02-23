import React from 'react'
import './Footer.css'

import {BsTwitter} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'

function Footer() {
  return (
    <footer >

      <a href="#" className='footer_logo ' > Aness ZEREG </a>


      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li> 
        <li><a  href="#experience">Experience</a></li>
        <li><a  href="#portfolio">Portfolio</a></li>
        <li><a  href="#contact">Contact</a></li>

      </ul>


      <div className="social_media">
        <a className='link' href="https://facebook.com"> <FaFacebookF/></a>
        <a className='link' href="https://instagram.com"> <BsInstagram/></a>
        <a className='link' href="https://twitter.com"> <BsTwitter/></a>
</div>


    </footer>
  )
}

export default Footer