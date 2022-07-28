import React, { useState } from 'react'
import './Navbar.css'
import {FcHome} from 'react-icons/fc'
import {FcBusinessman} from 'react-icons/fc'
import {FcPieChart} from 'react-icons/fc'
import {FcServices} from 'react-icons/fc'
import {FcPhoneAndroid} from 'react-icons/fc'


function Navbar() {

  const [activeNav, setActiveNav] = useState('')
  
  


  
  return (
   <nav>
    <a className={activeNav === '#'? 'active' :'link'} onClick={()=>setActiveNav('#')} href="#"><FcHome/></a>
    <a className={activeNav === '#about'? 'active' :'link'} onClick={()=>setActiveNav('#about')} href="#about"><FcBusinessman/></a>
    <a className={activeNav === '#contact'? 'active' :'link'} onClick={()=>setActiveNav('#contact')} href="#experience"><FcPieChart/></a>
    <a className={activeNav === '#services'? 'active' :'link'} onClick={()=>setActiveNav('#services')} href="#services"><FcServices/></a>
    <a className={activeNav === '#experience'? 'active' :'link'} onClick={()=>setActiveNav('#experience')} href="#contact"><FcPhoneAndroid/></a>
   </nav>
  )
}

export default Navbar