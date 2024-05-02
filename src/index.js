import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Log from './Log';
import Home from './Home';
import Veg from './Veg';
import Tiffins from './Tiffins';
import About from './About';
import Homepage from './Homepage';
import Cart from './Cart';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Log />} />
        <Route path="/home" element={<Home />} />
        <Route path="/veg" element={<Veg />} />
        <Route path="/non-veg" element={<Home />} />
        <Route path="/tiffins" element={<Tiffins />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/add-to-cart" element={<Cart />} />
        <Route path="/home1" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
