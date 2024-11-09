import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();
  const notifySuccess = () => toast("Message sent successfully 🚀");
  const notifyFailure = () => toast("Message not sent 🚫");


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_3we6ihm", "template_gitkgdn", form.current, {
        publicKey: "VMXhPxlPO24jkUWCV",
      })
      .then(
        () => {
          notifySuccess();
        },
        (error) => {
          notifyFailure();
        }
      );
  };

  return (
    <div className="text-white md:ml-[600px] md:mt-[-155px] h-screen object-cover fixed">
      <form ref={form} onSubmit={sendEmail}>
        <label className="md:m-72 md:ml-0 ml-8">
          Name
          <input
            className="md:mb-8 mb-6 md:ml-10 ml-10 text-black"
            type="text"
            name="from_name"
            required
          />
        </label>
        <br />
        <label className="md:m-72 md:ml-0 ml-8">
          Email
          <input
            className="md:mb-8 mb-6 md:ml-11 ml-11 text-black"
            type="email"
            name="user_email"
            required
          />
        </label>
        <br />
        <label className="md:m-72 md:ml-0 ml-8">
          Message
          <input className="md:mb-8 mb-6 md:ml-4 ml-4 text-black" type="text" name="message" required />
        </label>
        <br />
        <input className="md:ml-[150px] ml-48" type="submit" value="Send" />
      </form>
      <ToastContainer
      position="bottom-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      transition={Bounce}/>
    </div>
  );
};

export default Contact;


