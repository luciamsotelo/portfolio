import './App.css'; // Ensure your CSS file is correctly placed and named
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './pages/home_page'; // Make sure this path is correct
import About from './pages/about_page'; // Make sure this path is correct
import Collaboration from './pages/collab_page'; // Make sure this path is correct
import Contact from './pages/contact_page'; // Make sure this path is correct
import Portfolio from './pages/portfolio_page'; // Make sure this path is correct
import Hire from './pages/hire_page'; // Make sure this path is correct

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Default route */}
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/collaboration" element={<Collaboration />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/hire" element={<Hire />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
