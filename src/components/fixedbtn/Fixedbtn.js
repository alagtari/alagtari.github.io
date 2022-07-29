import './fixedbtn.css';
import {useEffect, useState} from 'react';
import { RiMenuFill, RiArrowUpSLine } from "react-icons/ri";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaGithub ,FaLinkedin,FaFacebook,FaTwitter,FaInstagram} from 'react-icons/fa';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Fixedbtn() {
    function getWindowSize() {
        const {innerWidth, innerHeight} = window;
        return {innerWidth, innerHeight};
      }

  const [show, setShow] = useState(false);    
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);
    
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            setShowTopBtn(true);
        } else {
            setShowTopBtn(false);
        }
    });
}, []);

const goToTop = () => {
  window.scrollTo({
      top: 0,
      behavior: "smooth",
  });
};


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    
    <Offcanvas  show={show} onHide={handleClose} placement='bottom' scroll={true} style={{borderTopLeftRadius:'20px',borderTopRightRadius:'20px',height: '50%',paddingLeft:'10vw'}} >
       
        
        <Link className='navs navitem' to="/">
        <motion.div
        initial={{
          opacity:0.2,
        }}
    
        whileInView={{
          opacity:1,
          transition:{duration:0.5}
        }}
        >  
          HOME</motion.div></Link>

        <Link className='navs navitem' to="">
        <motion.div
        initial={{
          opacity:0.2,
        }}
    
        whileInView={{
          opacity:1,
          transition:{duration:0.55}
        }}
        >  
          ABOUT</motion.div></Link>
        <Link className='navs navitem' to="/portfolio">
        <motion.div
        initial={{
          opacity:0.2,
        }}
    
        whileInView={{
          opacity:1,
          transition:{duration:0.6}
        }}
        >  
          PORTFOLIO</motion.div></Link>      
        <Link className='navs navitem' to="">
        <motion.div
        initial={{
          opacity:0.2,
        }}
    
        whileInView={{
          opacity:1,
          transition:{duration:0.65}
        }}
        >  
          CONTACT</motion.div></Link>
        <motion.div 
        initial={{
          opacity:0.2,
        }}
    
        whileInView={{
          opacity:1,
          transition:{duration:1}
        }}
        >
        <FaGithub style={{paddingRight:'10px'}} size={50}/>
        <FaFacebook style={{paddingRight:'10px'}} size={50}/>
        <FaInstagram style={{paddingRight:'10px'}} size={50}/>
        <FaLinkedin style={{paddingRight:'10px'}} size={50}/>
        <FaTwitter style={{paddingRight:'10px'}} size={50}/>
        </motion.div>
        
      </Offcanvas>
    <motion.div

    initial={{
      opacity:0.2,
      x:20,

    }}

    whileInView={{
      opacity:1,
      x:0,
      transition:{duration:1}
    }}

    exit={{
      opacity:0,
      x:20,
      transition:{duration:1}

    }}

    id='fixedbtn' align='center' className={`${showTopBtn ? "" : "hideupbtn"}`}  >
     {windowSize.innerWidth <786 ? <RiMenuFill size={25} onClick={handleShow}/>:<RiArrowUpSLine size={35} onClick={goToTop}  /> }
    </motion.div>
    </>
  );
}

export default Fixedbtn;
