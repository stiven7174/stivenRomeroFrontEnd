import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cities from './pages/Cities';
import CityDetails from './components/CityDetails';
import About from './pages/About'; // Importa el componente About

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cities" element={<Cities />} />
        <Route path="/city-details" element={<CityDetails />} />
        <Route path="/about" element={<About />} /> {/* Agrega la ruta para About */}
      </Routes>
    </Router>
  );
};

export default App;
