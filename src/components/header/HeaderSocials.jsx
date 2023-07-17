import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
import {IoLogoWhatsapp} from 'react-icons/io'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://linkedin.com/in/lavish-kumar-601b01238' target="blank"><BsLinkedin/></a>
        <a href='https://github.com/LavishK770' target="blank"><FaGithub/></a>
        <a href='https://instagr.am/la_vish__/' target="blank"><AiFillInstagram/></a>
        <a href='https://api.whatsapp.com/send?phone=%2B918082625770' target="blank"><IoLogoWhatsapp/></a>
    </div>
  ) 
}

export default HeaderSocials