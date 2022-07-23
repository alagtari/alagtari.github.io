import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './portfolio.css'
function Portfolio() {
  return (
    <Container  align='center'>
      
        <div align="center" >
         <h1 >PORTFOLIO</h1>
         <hr className='titleDecoration'/>
        </div>
      
      <br/><br/>
      <h6>Latest project :</h6>
      <Row className='items' >
      
      <Col md={4} xs={10}>
          <div className='project'></div>
      </Col>
      
      <Col md={4} xs={10}>
          <div className='project'></div>
      </Col>
      
      <Col md={4} xs={10}>
          <div className='project'></div>
      </Col>
      </Row>
      <br/>
            <div align="center" className='morebtn'>More ...</div>

      <br/><br/>

      

    </Container>
  );
}

export default Portfolio;