import React from 'react'
import './about.css'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
import {MdSchool} from 'react-icons/md'

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
             <MdSchool className='about_icon'/>
              <h5>Schooling</h5>
              <small></small>
             </article>

             <article className='about_card'>
             <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>10+ Projects</small>
             </article>

           </div> 
           <p>
           I am  <span id='name'>Lavish Kumar</span>, a motivated B.Tech student majoring in Computer Science Engineering
            at Delhi Technological University. Seeking an entry-level position to showcase my skills
             and contribute to a professional setting. With a strong foundation in computer science
              concepts and a passion for learning, I am confident in my ability to adapt quickly to
               new technologies. I possess  attention to detail, and a drive for continuous improvement.
           </p>

           <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About