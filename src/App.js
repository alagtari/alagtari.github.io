import './App.css';
import PortfolioPage from './pages/portfolio/PortfolioPage';
import HomePage from './pages/home/HomePage';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}>
      </Route>
      <Route path="/portfolio" element={<PortfolioPage />}/>

    </Routes>
  </BrowserRouter>
  );
}

export default App;
