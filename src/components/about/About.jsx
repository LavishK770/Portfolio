import React from 'react'
import './about.css'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className='About_me'>
          <div className='about_me-image'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkHwIfa83tAQNOjJdd9LRhjc9LNakC8v3jZnnOWc1dil6XHmsEdaab8z7DYAhcTiT3DGw&usqp=CAU.jpg' alt="About Image"/>
          </div>
        </div>

        <div className='about_content'>
           <div className='about_cards'>

             <article className='about_card'>
             <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>Student</small>
             </article>

             <article className='about_card'>
             <VscFolderLibrary className='about_icon'/>
              <h5>Kya likhu isme</h5>
              <small>😢</small>
             </article>

             <article className='about_card'>
             <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>10+ Projects</small>
             </article>

           </div> 
           <p>
           But when it comes to printing, pixel dimensions are not the only number you need to be aware of. 
           We need to consider one other number when printing an image, and that is the resolution. 
           Understanding pixel dimension and resolution will help you better deal with those times when 
           someone is requesting a digital file from you, or when you need to give an image to someone to 
           use either in a presentation or to be printed.
           </p>

           <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About