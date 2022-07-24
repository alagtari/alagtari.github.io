import './App.css';
import PortfolioPage from './pages/portfolio/PortfolioPage';
import HomePage from './pages/home/HomePage';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Test from './pages/Test';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}>
      </Route>
      <Route path="/portfolio" element={<PortfolioPage />}/>
      <Route path="/test" element={<Test />}/>

    </Routes>
  </BrowserRouter>
  );
}

export default App;