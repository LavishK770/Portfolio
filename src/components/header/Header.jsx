import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import { useTypewriter,Cursor } from 'react-simple-typewriter'

const Header = () => {
  const [text]= useTypewriter({
    words:['Coder', 'Developer.'],
    loop:true,
    typeSpeed:20,
    deleteSpeed:10,
    delaySpeed:2000,
  })
  return (
    <header>
      <div className='container  header_container'>
        <h5>HEllo I'm </h5>
        <h1>Lavish Kumar</h1>
        <h5 className='header_text'>a <span>{text}</span></h5>
        <CTA/>
        <HeaderSocials/>

        <div className='me'>
          <img src='https://i.graphicmama.com/uploads/2016/3/Toby-Good-to-go-56dec977c76de.png' alt='me'/>
        </div>

        <a href='#contact' className='scroll_down'>Scroll Down</a>
        </div>

    </header>
  )
}

export default Header