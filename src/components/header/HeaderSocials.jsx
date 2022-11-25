import React from 'react'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {VscGithub} from 'react-icons/vsc'
import {BsTwitter} from 'react-icons/bs'
import {SiLeetcode} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className= 'header__socials'>
        <a href="https://www.linkedin.com/in/uju-igweokwu-9a2a431a8/" target="_blank"><AiOutlineLinkedin/></a>
        <a href="https://github.com/Mz-iiza" target="_blank"><VscGithub/></a>
        <a href="https://twitter.com/mz_iiza" target="_blank"><BsTwitter/></a>
        <a href="https://leetcode.com/mz_iiza"><SiLeetcode /></a>
    </div>
  )
}

export default HeaderSocials