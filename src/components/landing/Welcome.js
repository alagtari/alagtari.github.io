import Container from 'react-bootstrap/Container';
import profile from '../../assets/profile.png'
import './welcome.css'
function Welcome() {
  return (
    <Container >
      
      <div className='rowclass'>
        <div className='colclass profile_pic'>
          <img src={profile}/>
        </div>
        <div className='colclass'>
          <h6>THIS IS ME</h6>
          <h1>ALA GTARI</h1>
          <br/><br/>
          <p>Fullstack developer with Software Engineering degree in software engineering, I have worked as a Freelancer with Tunisian IT development companies. I have also had several experiences in teamwork and in associative life, I am a motivated person with an impressive ability of problem solving and fast learning.</p>
          <br/><br/>
          <div align="center" className='morebtn'>HIRE ME</div>
       </div>
      </div>
      <br/><br/><br/><br/><br/><br/>
    </Container>
  );
}

export default Welcome;