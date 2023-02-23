import React from 'react'
import CV from '../../assets/CV.pdf'


// to import CV and download it  we import it from assets folder and put it in the link below


function CTA() {
  return (
    <div className='cta'>
        <a href={CV} className='btn'>Download CV </a>
        <a href="#contact" className='btn btn-primary'> Let's Talk</a>


    </div>
  )
}

export default CTA