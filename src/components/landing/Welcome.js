import Container from 'react-bootstrap/Container';
import profile from '../../assets/profile.png'
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
          animate={{
            x:[-150,0],
            transition:{duration:1}
          }}
          src={profile}/>
        </div>
        <div className='colclass'>
          <motion.h6
          animate={{
            x:[150,0],
            transition:{duration:0.7}
          }}
          >
            THIS IS ME
            </motion.h6>
          <motion.h1
          animate={{
            x:[150,0],
            transition:{duration:0.7}
          }}
          >
            ALA GTARI
            </motion.h1>
          <br/><br/>
          <motion.p
          animate={{
            x:[150,0],
            transition:{duration:0.9}
          }}
          >
            Fullstack developer with Software Engineering degree in software engineering, I have worked as a Freelancer with Tunisian IT development companies. I have also had several experiences in teamwork and in associative life, I am a motivated person with an impressive ability of problem solving and fast learning.</motion.p>
          <br/><br/>
          <motion.div
          align="center"
          className='morebtn'
          animate={{
            scale:scale?1.05:1,
            x:[150,0],
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
