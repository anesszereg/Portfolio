import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

function HeaderSocial() {
  return (
    <div className='header_social'>
        <a href="https://linkedin.com" className='link' target='_blank'><BsLinkedin/></a>
        <a href="https://github.com" target='_blank' className='link' ><BsGithub/></a>
        <a href="https://instagram.com" target='_blank' className='link' ><BsInstagram/></a>

    </div>
  )
}

export default HeaderSocial