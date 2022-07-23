import Container from 'react-bootstrap/Container';
import { FaGithub ,FaLinkedin,FaFacebook,FaTwitter,FaInstagram} from 'react-icons/fa';
import './footer.css'
function Footer() {
  return (
    <div className='footer'>
      <Container align='center' >
      <div  align='center'>
         <div>
         <h1>FOLLOW ME </h1>
        </div> 

        <div style={{marginTop:0}}>
          
        <FaGithub style={{color:'white' ,paddingRight:'10px'}} size={50}/>
        <FaFacebook style={{color:'white' ,paddingRight:'10px'}} size={50}/>
        <FaInstagram style={{color:'white' ,paddingRight:'10px'}} size={50}/>
        <FaLinkedin style={{color:'white' ,paddingRight:'10px'}} size={50}/>
        <FaTwitter style={{color:'white' ,paddingRight:'10px'}} size={50}/>
        </div>
      </div>
      <hr className='footerbar'/>
      
      <br/>
      <p align="center "  style={{color:'white'}}>© 2022 all rigths reserved</p>
      <br/><br/>
    </Container>
    </div>
  );
}

export default Footer;