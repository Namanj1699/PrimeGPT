import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_3we6ihm', 'template_gitkgdn', form.current, {
            publicKey: 'VMXhPxlPO24jkUWCV',
          })
          .then(
            () => {
              alert("Message Sent Successfully")
            },
            (error) => {
              alert(error.text)
            },
          );
      };
      
  return (
    <div className='text-white ml-80 mt-[-150px]'>
      <form ref={form} onSubmit={sendEmail}>
      
      <label className='m-72'>Name
      <input className='mb-8 ml-10 text-black' type="text" name="from_name" />
      </label>
      <br/>
      <label className='m-72'>Email
      <input className='mb-8 ml-11 text-black' type="email" name="user_email" />
      </label>
      <br/>
      <label className='m-72'>Message
      <input className='mb-8 ml-4 text-black' type="text" name="message" />
      </label>
      <br/>
      <input className='ml-[410px]' type="submit" value="Send" />
      
    </form>
    </div>
  )
}

export default Contact
