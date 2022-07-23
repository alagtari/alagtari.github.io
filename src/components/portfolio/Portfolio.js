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
        whileInView={{
          opacity:[0,1],
          y:[50,0],
          transition:{duration:0.5}
        }}
        align="center" >
         <h1 >PORTFOLIO</h1>
         <hr className='titleDecoration'/>
        </motion.div>
      
      <br/><br/>
      <Row className='items' >
      
      <Col md={4} xs={10}>
          <motion.div
          whileInView={{
            opacity:[0,1],
            y:[50,0],
            transition:{duration:0.7}
          }}
          className='project'></motion.div>
      </Col>
      
      <Col md={4} xs={10}>
          <motion.div
          whileInView={{
            opacity:[0,1],
            y:[50,0],
            transition:{duration:0.8}
          }}
          className='project'></motion.div>
      </Col>
      
      <Col md={4} xs={10}>
          <motion.div
          whileInView={{
            opacity:[0,1],
            y:[50,0],
            transition:{duration:0.9}
          }}
          className='project'></motion.div>
      </Col>
      </Row>
      <br/>
        <Link style={{textDecoration:'none'}} to='/portfolio'>
        <motion.div
        whileInView={{
          scale:scale?1.05:1,
          opacity:[0,1],
          y:[50,0],
          transition:{duration:scale?0.9:1}
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