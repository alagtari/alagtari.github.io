import Container from 'react-bootstrap/Container';
import { FaGithub ,FaLinkedin,FaFacebook,FaTwitter,FaInstagram} from 'react-icons/fa';
import { motion } from "framer-motion";

import './footer.css'
function Footer() {
  return (
    <div className='footer'>
      <Container align='center' >
      <div  align='center'>
         <motion.div
         initial="hidden" viewport={{once:true}}
         whileInView={{
           opacity:[0,1],
           transition:{duration:0.9}
         }}
         >
         <h1>FOLLOW ME </h1>
        </motion.div> 
        
        <div style={{marginTop:0}}>
          
        <motion.span 
        initial="hidden" viewport={{once:true}}
        whileInView={{
          opacity:[0,1],
          transition:{duration:1}
        }}
        style={{color:'white' ,padding:'0',margin:0}}><FaGithub style={{color:'white' ,paddingRight:'10px'}} size={50}/></motion.span>
        <motion.span 
        initial="hidden" viewport={{once:true}}
        whileInView={{
          opacity:[0,1],
          transition:{duration:1.1}
        }}
        style={{color:'white' ,padding:'0',margin:0}}><FaFacebook style={{color:'white' ,paddingRight:'10px'}} size={50}/></motion.span>
        <motion.span 
        initial="hidden" viewport={{once:true}}
        whileInView={{
          opacity:[0,1],
          transition:{duration:1.2}
        }}
        style={{color:'white' ,padding:'0',margin:0}}><FaInstagram style={{color:'white' ,paddingRight:'10px'}} size={50}/></motion.span>
        <motion.span 
        initial="hidden" viewport={{once:true}}
        whileInView={{
          opacity:[0,1],
          transition:{duration:1.3}
        }}
        style={{color:'white' ,padding:'0',margin:0}}><FaLinkedin style={{color:'white' ,paddingRight:'10px'}} size={50}/></motion.span>
        <motion.span 
        initial="hidden" viewport={{once:true}}
        whileInView={{
          opacity:[0,1],
          transition:{duration:1.4}
        }}
        style={{color:'white' ,padding:'0',margin:0}}><FaTwitter style={{color:'white' ,paddingRight:'10px'}} size={50}/></motion.span>
        </div>
      </div>
      <motion.hr
      initial="hidden" viewport={{once:true}}
      whileInView={{
        opacity:[0,1],
        transition:{duration:1.4}
      }}
      className='footerbar'/>
      
      <br/>
      <motion.p
      initial="hidden" viewport={{once:true}}
      whileInView={{
        opacity:[0,1],
        transition:{duration:1.4}
      }}
      align="center "  style={{color:'white'}}>© 2022 all rigths reserved</motion.p>
      <br/><br/>
    </Container>
    </div>
  );
}

export default Footer;