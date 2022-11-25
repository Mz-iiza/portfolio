import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {SiTwitter} from 'react-icons/si'
import {IoLogoWhatsapp} from 'react-icons/io'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dke8tzj', 'template_fej41ro', form.current, 't-NhpX9uxw2Ki7LYJ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);

      });
      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5></h5>
            <a href="mailto:ujuigweokwu@gmail.com" target="_blank">send a message </a>
          </article>

          <article className="contact__option">
            <IoLogoWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5></h5>
            <a href="https://web.whatsapp.com/send?phone+2348030833227" target="_blank">send a message </a>
          </article>
        </div>
        {/*END OF CONTACTS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder= 'Your Full Name' required />
          <input type="email" name='email' placeholder= 'Your Email' required />
          <textarea name="message" rows="7" placeholder= 'Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact