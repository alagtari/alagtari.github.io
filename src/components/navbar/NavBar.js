import './NavBar.css';
import { Link } from "react-router-dom";
import { FaCode } from 'react-icons/fa';
function NavBar() {

  return (
    <div style={{marginLeft: '20px'}} >
      <span id='princpale'><FaCode style={{color:"rgb(46, 157, 255)"}}/>{" "}ALA GTARI</span>
      <Link className='navs' to="/home"><span>HOME</span></Link>
      <Link className='navs' to=""><span>ABOUT</span></Link>
      <Link className='navs' to="/portfolio"><span>PORTFOLIO</span></Link>      
      <Link className='navs' to=""><span>CONTACT</span></Link>
    </div>
  );
}

export default NavBar;
