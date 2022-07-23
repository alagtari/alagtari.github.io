import './App.css';
import NavBar from './components/navbar/NavBar'
import Welcome from './components/landing/Welcome';
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import Fixedbtn from './components/fixedbtn/Fixedbtn';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <Welcome/>
      <About/>
      <Portfolio/>
      <Contact/>
      <Footer/>
      <Fixedbtn/>
    </div>
  );
}

export default App;
