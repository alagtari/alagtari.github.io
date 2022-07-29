import Container from 'react-bootstrap/Container';
import profile from '../../assets/developer.png'
import './welcome.css'
import { motion } from "framer-motion";
import { useState } from 'react';
function Welcome() {
  const [scale,setScale] =useState(false)

  return (
    <Container >
      
      <div className='rowclass'>
        <div className='colclass profile_pic'>
          <motion.img
          initial={{
            opacity:0.5,
            x:-150
          }}
          animate={{
            opacity:1,
            x:0,
            transition:{duration:0.6}
          }}
          src={profile}/>
        </div>
        <div className='colclass'>
          <motion.h6
          initial={{
            opacity:0.5,
            x:150
          }}
          animate={{
            opacity:1,
            x:0,
            transition:{duration:0.64}

          }}
          >
            THIS IS ME
            </motion.h6>
          <motion.h1
          initial={{
            opacity:0.5,
            x:150
          }}
          animate={{
            opacity:1,
            x:0,
            transition:{duration:0.68}

          }}
          >
            ALA GTARI
            </motion.h1>
          <br/><br/>
          <motion.p
          initial={{
            opacity:0.5,
            x:150
          }}
          animate={{
            opacity:1,
            x:0,
            transition:{duration:0.72}

          }}
          >
            Fullstack developer with Software Engineering degree in software engineering, I have worked as a Freelancer with Tunisian IT development companies. I have also had several experiences in teamwork and in associative life, I am a motivated person with an impressive ability of problem solving and fast learning.</motion.p>
          <br/><br/>
          <motion.div
          align="center"
          className='morebtn'

          initial={{
            opacity:0.5,
            x:150
          }}
          animate={{
            scale:scale?1.05:1,
            opacity:1,
            x:0,
            transition:{duration:scale?0.5:1}


          }}

         
          onMouseEnter={()=>{
              setScale(!scale)
          }}
          onMouseLeave={()=>{
              setScale(!scale)
        }}
          >
            HIRE ME
            </motion.div>
       </div>
      </div>
      <br/><br/><br/><br/><br/><br/>
    </Container>
  );
}

export default Welcome;
