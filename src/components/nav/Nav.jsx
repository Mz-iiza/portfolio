import React from 'react'
import './nav.css'
import {MdMapsHomeWork} from 'react-icons/md'
import {RiFolderUserFill} from 'react-icons/ri'
import {MdOutlineLaptopChromebook} from 'react-icons/md'
import {RiServiceFill} from 'react-icons/ri'
import {TiMessageTyping} from 'react-icons/ti'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><MdMapsHomeWork/></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><RiFolderUserFill/></a>
      <a href="#experience"onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><MdOutlineLaptopChromebook/></a>
      <a href="#services"onClick={()=> setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceFill/></a>
      <a href="#contact"onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><TiMessageTyping/></a>
    </nav>
  )
}

export default Nav