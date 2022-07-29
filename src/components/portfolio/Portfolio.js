import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './portfolio.css'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from 'react';
function Portfolio() {
  const [scale,setScale] =useState(false)

  return (
    <Container  align='center'>
      
        <motion.div
        initial={{
          opacity:0.5,
          y:50
        }} viewport={{once:true}}
        whileInView={{
          opacity:1,
          y:0,
          transition:{duration:0.5}
        }}
        align="center" >
         <h1 >PORTFOLIO</h1>
         <hr className='titleDecoration'/>
        </motion.div>
      
      <br/><br/>
      <Row className='items' >
      
      <Col md={4} xs={10} align='center'>
      <Link style={{textDecoration:'none'}} to='/gallery/1'>
          <motion.div
          initial={{
            opacity:0.5,
            y:50
          }}
           viewport={{once:true}}
          whileInView={{
            opacity:1,
            y:0,
            transition:{duration:0.6}
          }}
          className='project'>
          <h4>Food application</h4>
          <p>An application for food delivery</p>
          <div className='skills'>
        <div className='skill'>Flutter</div>
        <div className='skill'>UX/UI</div>

        </div>
        </motion.div>
</Link>
      </Col>
      
      <Col md={4} xs={10} align='center'>
      <Link style={{textDecoration:'none'}} to='/gallery/2'>
          <motion.div
          initial={{
            opacity:0.5,
            y:50
          }}
           viewport={{once:true}}
          whileInView={{
            opacity:1,
            y:0,
            transition:{duration:0.7}
          }}
          className='project'>
          <h4>Appointment application</h4>
          <p>An application for appointments with doctors</p>
          <div className='skills'>
        <div className='skill'>Flutter</div>
        <div className='skill'>UX/UI</div>

        </div>
        </motion.div>
</Link>
      </Col>

      <Col md={4} xs={10}>
          <motion.div
          initial={{
            opacity:0.5,
            y:50
          }}
           viewport={{once:true}}
          whileInView={{
            opacity:1,
            y:0,
            transition:{duration:0.8}
          }}
          className='project'></motion.div>
      </Col>
      </Row>
      <br/>
        <Link style={{textDecoration:'none'}} to='/portfolio'>
        <motion.div
        initial={{
          opacity:0.5,
          y:50
        }}
         viewport={{once:true}}
        whileInView={{
          opacity:1,
          y:0,
          scale:scale?1.05:1,
          transition:{duration:scale?0.4:1}
        }}

        onMouseEnter={()=>{
            setScale(!scale)
        }}
        onMouseLeave={()=>{
            setScale(!scale)
      }}
        align="center" className='morebtn'>More ...</motion.div></Link>

      <br/><br/>

      

    </Container>
  );
}

export default Portfolio;