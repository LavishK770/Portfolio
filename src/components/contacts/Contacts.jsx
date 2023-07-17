// import React from 'react'
import './contacts.css'
import {MdOutlineMail} from 'react-icons/md'
import {BsInstagram} from 'react-icons/bs'
import {FaWhatsapp} from 'react-icons/fa'
import React, { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dwn6bht', 'template_dydpk66', form.current, 'f4_p2bQgdAmyFwnv3')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

  return (
    <section id='contacts'>
        <h5>Get In Touch</h5>
        <h2>Contact Us</h2>

        <div className='container contact_container'>
          <div className='contact_options'>

            <article className='contact_option'>
            <MdOutlineMail className='contact_option-icon'/>
              <h4>Email</h4>
              <h5>lavishk5012@gmail.com</h5>
              <a href='mailto:lavishk5012@gmail.com' target='_blank'>Send a Message</a>
            </article>

            <article className='contact_option'>
            <BsInstagram className='contact_option-icon'/>
              <h4>Instagram</h4>
              <h5>@lav__ish</h5>
              <a href='https://instagr.am/la_vish__/' target='_blank'>Send a Message</a>
            </article>

            <article className='contact_option'>
            <FaWhatsapp className='contact_option-icon'/>
              <h4>WhatsApp</h4>
              <h5>+123456789</h5>
              <a href='https://api.whatsapp.com/send?phone=%2B918082625770' target='_blank'>Send a Message</a>
            </article>

          </div>

          <form ref={form} onSubmit={sendEmail}>
            <input type='text' name='name' placeholder='Your Full Name' required/>
            <input type='email' name='email' placeholder='Your Email' required/>
            <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
          
        </div>
    
    </section>
  )
}

export default Contact