import './fixedbtn.css';
import {useEffect, useState} from 'react';
import { RiMenuFill, RiArrowUpSLine } from "react-icons/ri";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaGithub ,FaLinkedin,FaFacebook,FaTwitter,FaInstagram} from 'react-icons/fa';
import { Link } from "react-router-dom";

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
       
        
        <Link className='navs navitem' to="/home"><div>HOME</div></Link>
        <Link className='navs navitem' to=""><div>ABOUT</div></Link>
        <Link className='navs navitem' to="/portfolio"><div>PORTFOLIO</div></Link>      
        <Link className='navs navitem' to=""><div>CONTACT</div></Link>
        <div >
        <FaGithub style={{paddingRight:'10px'}} size={50}/>
        <FaFacebook style={{paddingRight:'10px'}} size={50}/>
        <FaInstagram style={{paddingRight:'10px'}} size={50}/>
        <FaLinkedin style={{paddingRight:'10px'}} size={50}/>
        <FaTwitter style={{paddingRight:'10px'}} size={50}/>
        </div>
        
      </Offcanvas>
    <div id='fixedbtn' align='center' className={`${showTopBtn ? "" : "hideupbtn"}`}  >
     {windowSize.innerWidth <576 ? <RiMenuFill size={25} onClick={handleShow}/>:<RiArrowUpSLine size={35} onClick={goToTop}  /> }
    </div>
    </>
  );
}

export default Fixedbtn;
