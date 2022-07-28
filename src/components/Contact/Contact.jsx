import React from 'react'
import './Contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsInstagram } from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from 'emailjs-com';
import { useRef } from 'react'



function contact() {

  const form = useRef()


  const sendEmail = (e) => {
    e.preventDefault();
// to kno w if we get the information we do console.log to the inputs

    // console.log(., '❤❤');


    emailjs.sendForm("service_yyltsm5","template_84yn2yg", form.current,"user_t2mB2dDub0bT4XNfL")
      .then((result) => {
          console.log(result.text , 'message sent successfully');
      }, (error) => {
          console.log(error.text, 'message not sent');
      });
      e.target.reset()

  };
  
  
  
  
  

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2 className='gg' >Contact Me</h2>


      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <MdOutlineEmail className='contact-icon'/>
            <h4>Email</h4>
            <h5>Anesszereg1@gmail.com</h5>
            <a  className='link' target='_blank'href="mailto:anesszereg1@gmail.com"> Send a message</a>

          </article>
          <article className='contact_option'>
          <BsInstagram className='contact-icon'/>
            <h4>Instagram</h4>
            <h5>Aness_Zg</h5>
            <a  className='link' target='_blank' href="https://m.me/Aness_Zg"> Send a message</a>

          </article>
          <article className='contact_option'>
          <BsWhatsapp className='contact-icon'/>
            <h4>WhatsApp</h4>
            <h5>+213556938145</h5>
            <a   className='link'  target='_blank'href="https://api.whatsapp.com/send?phone+=+213556938145"> Send a message</a>

          </article>
        </div>


        <form ref={form} onSubmit={sendEmail}>
          <input type="text"  name="Name" placeholder='Your Full Name'required />
          <input type="email"  name="email" placeholder='Your Email'required />
          <textarea name="message"  rows="7" placeholder='your message'></textarea>
          <button className='btn btn-primary' type='submit' > Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default contact
