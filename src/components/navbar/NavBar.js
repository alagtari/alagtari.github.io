import './NavBar.css';
import { Link } from "react-router-dom";
import { FaCode } from 'react-icons/fa';
import { motion } from "framer-motion";

function NavBar() {

  return (
    <motion.div
      animate={{
        opacity:[0,1],
        y:[-150,0],
        transition:{duration:1}
      }}
    style={{marginLeft: '20px'}} >
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
