import React from 'react'
import './footer.css'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {SiLeetcode} from 'react-icons/si'
import {SiInstagram} from 'react-icons/si'
import {FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
   <footer>
    <a href="#" className='footer__logo'>JUJUDEV</a>

    <ul className='permalinks'>
      <li><a href="#">HOME</a></li>
      <li><a href="#about">ABOUT</a></li>
      <li><a href="#experience">EXPERIENCE</a></li>
      <li><a href="#services">SERVICES</a></li>
      <li><a href="#portfolio">PORTFOLIO</a></li>
      <li><a href="#testimonials">TESTIMONIALS</a></li>
      <li><a href="#contact">CONTACT</a></li>
    </ul>

    <div className="footer__socials">
    <a href="https://leetcode.com/mz_iiza" target="_blank" rel="noreferrer"><SiLeetcode /></a>
    <a href="https://instagram.com/mz_iiza" target="_blank" rel="noreferrer"><SiInstagram /></a>
    <a href="https://twitter.com/mz_iiza" target="_blank" rel="noreferrer"><FaTwitter /></a>
    <a href="https://www.linkedin.com/in/uju-igweokwu-9a2a431a8/" target="_blank" rel="noreferrer" ><AiOutlineLinkedin/></a>
    </div>

    <div className="footer_copyright">
      <small>&copy;JUJUDEV. All right reserved.</small>
    </div>
   </footer>
  )
}

export default Footer