import "./contact.css";
import emailjs, { init } from '@emailjs/browser';
import { useRef, useState } from "react";
import {motion} from 'motion/react'
import { stagger } from "motion";
import { useInView } from "motion/react";
import ContactSvg from "./ContactSvg";
import { useEffect } from "react";

const listVariants = {
  initial: {
    x:100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
}


const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const ref = useRef();
  const form = useRef();

   const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(import.meta.env.VITE_SERVICE_ID, 
        import.meta.env.VITE_TEMPLATE_ID, 
        form.current, {
        publicKey: import.meta.env.VITE_PUBLIC_KEY,
      }
    )
      .then(
        () => {
          setSuccess(true);
          setError(false);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setError(true);
          setSuccess(false);
        },
      );
  };

  const isInView = useInView(ref, {margin: "-200px" });


  return (
    <div className='contact' ref = {ref} onSubmit={sendEmail}>
      <div className="cSection">
        <motion.form ref={form} variants={listVariants}
        animate = {isInView ? "animate" : "initial"}>
          <motion.h1 variants={listVariants} className="cTitle">Let's keep in touch</motion.h1>
          <motion.div variants={listVariants} className="formItem">
            <label>Name</label>
            <input type="text" name="user_username" placeholder="Minki Cho" />
          </motion.div>
          <motion.div variants={listVariants} className="formItem">
            <label>Email</label>
            <input type="email" name="user_email" placeholder="theremingi@gmail.com" />
          </motion.div>
          <motion.div variants={listVariants} className="formItem">
            <label>Message</label>
            <textarea
              rows={10}
              name="user_message"
              placeholder="Write your message here..."
            ></textarea>
          </motion.div>
          <motion.button variants={listVariants} className="formButton">Send</motion.button>
          {success && <span className="success">Your message has been sent!</span>}
          {error && <span className="error">Something went wrong!</span>}
        </motion.form>
      </div>
      <div className="cSection">SVG</div>
    </div>
  )
}

export default Contact