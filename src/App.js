import './App.css';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import Home from './pages/home_page';
import About from './pages/about_page';
import Collaboration from './pages/collab_page';
import Contact from './pages/contact_page';
import Portfolio from './pages/portfolio_page';
import Hire from './pages/hire_page';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
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
