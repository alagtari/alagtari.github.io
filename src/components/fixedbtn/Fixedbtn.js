import './fixedbtn.css';
import {useEffect, useState} from 'react';
import { RiMenuFill, RiArrowUpSLine } from "react-icons/ri";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaGithub ,FaLinkedin,FaFacebook,FaTwitter,FaInstagram} from 'react-icons/fa';

function Fixedbtn() {
    function getWindowSize() {
        const {innerWidth, innerHeight} = window;
        return {innerWidth, innerHeight};
      }
  const [show, setShow] = useState(false);    
  const [windowSize, setWindowSize] = useState(getWindowSize());
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);
    
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    
    <Offcanvas  show={show} onHide={handleClose} placement='bottom' scroll={true} style={{borderTopLeftRadius:'20px',borderTopRightRadius:'20px',height: '50%',paddingLeft:'10vw'}} >
       
        
        <div className='navitem'>HOME</div>
        <div className='navitem'>ABOUT</div>
        <div className='navitem'>PORTFOLIO</div>
        <div className='navitem'>CONTACT</div>
        <div >
        <FaGithub style={{paddingRight:'10px'}} size={50}/>
        <FaFacebook style={{paddingRight:'10px'}} size={50}/>
        <FaInstagram style={{paddingRight:'10px'}} size={50}/>
        <FaLinkedin style={{paddingRight:'10px'}} size={50}/>
        <FaTwitter style={{paddingRight:'10px'}} size={50}/>
        </div>
        
      </Offcanvas>
    <div id='fixedbtn' align='center'  >
     {windowSize.innerWidth <576 ? <RiMenuFill size={25} onClick={handleShow}/>:<RiArrowUpSLine size={35}/> }
    </div>
    </>
  );
}

export default Fixedbtn;
