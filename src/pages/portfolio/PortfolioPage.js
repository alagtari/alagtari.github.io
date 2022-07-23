
import NavBar from '../../components/navbar/NavBar'
import Welcome from '../../components/landing/Welcome';
import About from '../../components/about/About'
import Portfolio from '../../components/portfolio/Portfolio'
import Footer from '../../components/footer/Footer';
import Contact from '../../components/contact/Contact';
import Fixedbtn from '../../components/fixedbtn/Fixedbtn';



function PortfolioPage() {
  return (
    <div className="App">
      <NavBar/>
      
      <Portfolio/>
      
      <Footer/>
      <Fixedbtn/>
    </div>
  );
}

export default PortfolioPage;
