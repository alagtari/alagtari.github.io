import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './about.css'
function About() {
  return (
    <div className='about'>
      <Container  >
<br/>
        <div align="center" >
         <h1 >ABOUT ME</h1>
         <hr className='titleDecoration'/>
       
        </div>

      <br/><br/>
      <Row className='aboutitems' >
        <Col md={3} xs={12}>
        <h4  >EDUCATION</h4>
        <br/>
        <h6>Degree in Software Engineering</h6>
        <p>ISTIC Borj Cedria (2019-2022)</p>
        <br/><br/>
        </Col>
        
        <Col md={5} xs={12}>
        <h4  >PROFESSIONAL EXPERIENCE</h4>
        <br/>
        <h6>Intern at E-Build - End of study internship (2022) </h6>
        <p>creation of a customer relationship management platform (CRM)</p>
        <br/>
        <h6>Intern at NABDA - End of year internship (2021)</h6>
        <p>Creation of a mobile application for psychiatrists</p><br/><br/>
        </Col>
        
        <Col md={4} xs={12}>
        <h4>My SKILLS</h4>
        <div className='skills'>
        <div className='skill'>Programming C</div>
        <div className='skill'>HTML</div>
        <div className='skill'>CSS</div>
        <div className='skill'>JavaScript</div>
        <div className='skill'>React</div>
        <div className='skill'>Flutter</div>
        <div className='skill'>VueJS</div>
        <div className='skill'>Python</div>
        <div className='skill'>JAVA</div>
        <div className='skill'>NoSQL</div>
        <div className='skill'>PLSQL</div>
        </div>
        </Col>
      </Row>
    </Container>
    <br/><br/><br/><br/>
    </div>
    
  );
}

export default About;