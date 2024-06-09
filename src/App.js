import './App.css';

import { Route, Routes } from 'react-router-dom';

import About from './component/About';
import Navbar from './component/Navbar';
import Product from './component/Product';
import Home from './component/Home';
import Contact from './component/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        {/* Add a route for Contact if needed */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
