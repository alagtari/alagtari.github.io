import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './about.css'
import { motion } from "framer-motion";

function About() {
  return (
    <div className='about'>
      <Container  >
<br/>
        <motion.div
        whileInView={{
          opacity:[0,1],
          y:[50,0],
          transition:{duration:0.5}
        }}
        align="center" >
         <h1 >ABOUT ME</h1>
         <hr className='titleDecoration'/>
       
        </motion.div>

      <br/><br/>
      <Row className='aboutitems' >
        <Col md={3} xs={12}>
        <motion.h4
        whileInView={{
          opacity:[0,1],
          y:[50,0],
          transition:{duration:0.55}
        }}
        >EDUCATION</motion.h4>
        <br/>
        <motion.h6
        whileInView={{
          opacity:[0,1],
          y:[50,0],
          transition:{duration:0.6}
        }}
        >Degree in Software Engineering</motion.h6>
        <motion.p
        whileInView={{
          opacity:[0,1],
          y:[50,0],
          transition:{duration:0.6}
        }}
        >ISTIC Borj Cedria (2019-2022)</motion.p>
        <br/><br/>
        </Col>
        
        <Col md={5} xs={12}>
        <motion.h4
        whileInView={{
          opacity:[0,1],
          y:[50,0],
          transition:{duration:0.6}
        }}
        >PROFESSIONAL EXPERIENCE</motion.h4>
        <br/>
        <motion.h6
        whileInView={{
          opacity:[0,1],
          y:[50,0],
          transition:{duration:0.65}
        }}
        >Intern at E-Build - End of study internship (2022) </motion.h6>
        <motion.p
        whileInView={{
          opacity:[0,1],
          y:[50,0],
          transition:{duration:0.65}
        }}
        >creation of a customer relationship management platform (CRM)</motion.p>
        <br/>
        <motion.h6
        whileInView={{
          opacity:[0,1],
          y:[50,0],
          transition:{duration:0.7}
        }}
        >Intern at NABDA - End of year internship (2021)</motion.h6>
        <motion.p
        whileInView={{
          opacity:[0,1],
          y:[50,0],
          transition:{duration:0.7}
        }}
        >Creation of a mobile application for psychiatrists</motion.p><br/><br/>
        </Col>
        
        <Col md={4} xs={12}>
        <motion.h4
        whileInView={{
          opacity:[0,1],
          y:[50,0],
          transition:{duration:0.65}
        }}
        >My SKILLS</motion.h4>
        <motion.div className='skills'>
        <motion.div
        whileInView={{
          opacity:[0,1],
          y:[50,0],
          transition:{duration:0.7}
        }}
        className='skill'>Programming C</motion.div>
        <motion.div
        whileInView={{
          opacity:[0,1],
          y:[50,0],
          transition:{duration:0.74}
        }}
        className='skill'>HTML</motion.div>
        <motion.div
        whileInView={{
          opacity:[0,1],
          y:[50,0],
          transition:{duration:0.78}
        }}
        className='skill'>CSS</motion.div>
        
        <motion.div
        whileInView={{
          opacity:[0,1],
          y:[50,0],
          transition:{duration:0.82}
        }}
        className='skill'>React</motion.div>
        <motion.div
        whileInView={{
          opacity:[0,1],
          y:[50,0],
          transition:{duration:0.86}
        }}
        className='skill'>Flutter</motion.div>
        <motion.div
        whileInView={{
          opacity:[0,1],
          y:[50,0],
          transition:{duration:0.9}
        }}
        className='skill'>JavaScript</motion.div>
        <motion.div
        whileInView={{
          opacity:[0,1],
          y:[50,0],
          transition:{duration:0.94}
        }}
        className='skill'>JAVA</motion.div>        
        <motion.div
        whileInView={{
          opacity:[0,1],
          y:[50,0],
          transition:{duration:0.98}
        }}
        className='skill'>VueJS</motion.div>
        <motion.div
        whileInView={{
          opacity:[0,1],
          y:[50,0],
          transition:{duration:1.02}
        }}
        className='skill'>Python</motion.div>
        
        <motion.div
        
        whileInView={{
          opacity:[0,1],
          y:[50,0],
          transition:{duration:1.04}
        }}
        className='skill'>NoSQL</motion.div>
        <motion.div
        whileInView={{
          opacity:[0,1],
          y:[50,0],
          transition:{duration:1.08}
        }}
        className='skill'>PLSQL</motion.div>
        </motion.div>
        </Col>
      </Row>
    </Container>
    <br/><br/><br/><br/>
    </div>
    
  );
}

export default About;