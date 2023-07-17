import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'

const Footer = () => {
  return (
  <footer>
    <a href='#' className='footer_logo'>Lavish Kumar</a>

    <ul className='links'>

      <li><a href='#'>Home</a></li>
      <li><a href='#about'>About</a></li>
      <li><a href='#experience'>Experience</a></li>
      <li><a href='#project'>Projects</a></li>
      <li><a href='#contacts'>Contact</a></li>
    </ul>

    <div className='footer_socials'>
      <a href='https://facebook.com'target='_blank'><BsFacebook/></a>
      <a href='https://instagr.am/la_vish__/' target='_blank'><BsInstagram/></a>
      <a href='https://twitter.com'target='_blank'><AiFillTwitterCircle/></a>
    </div>

    <div className='copy'>
      <small>&copy; Lavish Kumar. Delhi Technological University</small>
    </div>
  </footer>
  )
}

export default Footer