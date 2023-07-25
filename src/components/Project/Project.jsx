import React from 'react'
import './project.css'

const Project = () => {
  return (
    <section id='project'>
    <h5>My Projects</h5>
    <h2>Projects</h2>

    <div className='container projects_container'>

      <article className='projects_item'>

        <div className='projects_item-image'>
        <img src='https://www.hessenhub.de/wp-content/uploads/2020/03/digLL_AB_E_Portfolio_500_500_px.png' alt=""/>        </div>
        <h3>Portfolio</h3>
        <a href='https://github.com/LavishK770/Portfolio'target='_blank' className='btn'>Github</a>

      </article>

      <article className='projects_item'>
      
        <div className='projects_item-image'>
        <img src='https://assets.entrepreneur.com/content/3x2/2000/20190314204050-GettyImages-1020621870-crop.jpeg' alt=""/>        </div>
        <h3>LikendIn Landing Page</h3>
        <a href='https://github.com/LavishK770/LinkedIn-Landing_page'target='_blank' className='btn'>Github</a>

      </article>

      
      <article className='projects_item'>
      
        <div className='projects_item-image'>
          <img src='https://cdn-icons-png.flaticon.com/512/7477/7477790.png' alt=""/>
        </div>
        <h3>Weather_App</h3>
        <a href='https://github.com/LavishK770/weather_app'target='_blank' className='btn'>Github</a>

      </article>

      <article className='projects_item'>
      
        <div className='projects_item-image'>
        <img src='https://t4.ftcdn.net/jpg/04/99/62/59/360_F_499625910_ghBBxV9RsHAWLQVPJdTpF49ioBP9ak1Z.jpg' alt=""/>        </div>
        <h3>Cricket Chrome Extension</h3>
        <a href='https://github.com/LavishK770/Cricket-Chrome-Extension'target='_blank' className='btn'>Github</a>

      </article>

      <article className='projects_item'>
      
        <div className='projects_item-image'>
          <img src='https://content-management-files.canva.com/cdn-cgi/image/f=auto,q=70/9afab89c-1849-4921-b2a4-5d3a9e04b2b6/header_QR-code-generator_2x.png' alt=""/>
        </div>
        <h3>Qr-Code Generator</h3>
        <a href='https://github.com/LavishK770/QR-Code-Generator'target='_blank' className='btn'>Github</a>

      </article>

      <article className='projects_item'>
      
        <div className='projects_item-image'>
        <img src='https://cdn-icons-png.flaticon.com/512/2344/2344132.png' alt=""/>        </div>
        <h3>Calculator</h3>
        <a href='https://github.com/LavishK770/Calculator'target='_blank' className='btn'>Github</a>

      </article>

      <article className='projects_item'>
      
      <div className='projects_item-image'>
        <img src='https://img.freepik.com/premium-vector/password-secure-login-access-notice-authentication-verification-code-note-message-bubble-speech-icon-flat-cartoon_212005-104.jpg' alt=""/>
      </div>
      <h3>Password_Generator</h3>
      <a href='https://github.com/LavishK770/Password_Generator'target='_blank' className='btn'>Github</a>

    </article>

      <article className='projects_item'>
      
        <div className='projects_item-image'>
        <img src='https://clickup.com/blog/wp-content/uploads/2019/01/to-do-list-apps.png' alt=""/>        </div>
        <h3>To-Do App</h3>
        <a href='https://github.com/LavishK770/To-do-App'target='_blank' className='btn'>Github</a>

      </article>

      

      <article className='projects_item'>
      
        <div className='projects_item-image'>
          <img src='https://cdn.shopify.com/s/files/1/0667/1378/0491/products/5_18e5694a-ee0b-4bfe-8e30-e5b68a2f7439_1024x1024.png?v=1675625911' alt=""/>
        </div>
        <h3>NoteBook</h3>
        <a href='https://github.com/LavishK770/NoteBook'target='_blank' className='btn'>Github</a>

      </article>


     

    </div>

    </section>
  )
}

export default Project