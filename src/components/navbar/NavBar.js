import './NavBar.css';
import { Link } from "react-router-dom";
import { FaCode } from 'react-icons/fa';
import { motion } from "framer-motion";

function NavBar() {

  return (
    <motion.div
    initial={{
      opacity:0,
      y:-50
    }}
      animate={{
        opacity:1,
        y:0,
        transition:{duration:0.6  }
      }}
    style={{marginLeft: '20px',backgroundColor:'rgba(0,0,0,0)'}} >
    <span id='princpale'><FaCode style={{color:"rgb(46, 157, 255)"}}/>{" "}ALA GTARI</span>
      <Link className='navs' to="/"><span
      
      >HOME</span></Link>
      <Link className='navs' to=""><span
      
      >ABOUT</span></Link>
      <Link className='navs' to="/portfolio"><span
      
      >PORTFOLIO</span></Link>      
      <Link className='navs' to=""><span
      
      >CONTACT</span></Link>
    </motion.div>
  );
}

export default NavBar;
