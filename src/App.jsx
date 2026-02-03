// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Mobile from './pages/Mobile';
import Tablets from './pages/Tablets';
import Laptops from './pages/Laptops';
import Desktops from './pages/Desktops';
import Contact from './pages/Contact';
import SignIn from './pages/SignIn';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/mobile" element={<Mobile />} />
            <Route path="/tablets" element={<Tablets />} />
            <Route path="/laptops" element={<Laptops />} />
            <Route path="/desktops" element={<Desktops />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;