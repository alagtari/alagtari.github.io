import './contact.css'
import { motion } from "framer-motion";
import { useState } from 'react';

export  default function Contact () {
  const [scale,setScale] =useState(false)

  return (
    <div id='contact' className='about' align="center">
      <br/>
      <motion.div
       initial="hidden" viewport={{once:true}}
       whileInView={{
         opacity:[0,1],
         y:[50,0],
         transition:{duration:0.5}
       }}
      align="center" >
         <h1 >CANTACT</h1>
         <hr className='titleDecoration'/>
        </motion.div>
    
    <div align="center" className="contact__form-container">
          <form action="#" className="contact__form">
            <div className="contact__form-field">
              <motion.label
               initial="hidden" viewport={{once:true}}
               whileInView={{
                 opacity:[0,1],
                 y:[50,0],
                 transition:{duration:0.6}
               }}
              className="contact__form-label" for="name">Name</motion.label>
              <motion.input
               initial="hidden" viewport={{once:true}}
               whileInView={{
                 opacity:[0,1],
                 y:[50,0],
                 transition:{duration:0.7}
               }}
                required
                placeholder="Enter Your Name"
                type="text"
                className="contact__form-input"
                name="name"
                id="name"
              />
            </div>
            <div className="contact__form-field">
              <motion.label
               initial="hidden" viewport={{once:true}}
               whileInView={{
                 opacity:[0,1],
                 y:[50,0],
                 transition:{duration:0.8}
               }}
              className="contact__form-label" for="email">Email</motion.label>
              <motion.input
                 initial="hidden" viewport={{once:true}}
                 whileInView={{
                   opacity:[0,1],
                   y:[50,0],
                   transition:{duration:0.9}
                 }}
                required
                placeholder="Enter Your Email"
                type="text"
                className="contact__form-input"
                name="email"
                id="email"
              />
            </div>
            <div className="contact__form-field">
              <motion.label
               initial="hidden" viewport={{once:true}}
               whileInView={{
                 opacity:[0,1],
                 y:[50,0],
                 transition:{duration:1}
               }}
              className="contact__form-label" for="message">Message</motion.label>
              <motion.textarea
                 initial="hidden" viewport={{once:true}}
                 whileInView={{
                   opacity:[0,1],
                   y:[50,0],
                   transition:{duration:1.1}
                 }}
                required
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Enter Your Message"
                name="message"
                id="message"
              ></motion.textarea>
            </div>

            <motion.button
            initial="hidden" viewport={{once:true}}
            whileInView={{
              scale:scale?1.05:1,
              opacity:[0,1],
              y:[50,0],
              transition:{duration:scale?0.4:1.2}
            }}
    
            onMouseEnter={()=>{
                setScale(!scale)
            }}
            onMouseLeave={()=>{
                setScale(!scale)
          }}
            id='submitbtn' className='morebtn' align="center">
              Submit
            </motion.button>
       
          </form>
        </div>
        <br/>
        <br/>
        </div> 
  );
};
