import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Story from './components/Story';
import Location from './components/Location';
import DirectLinks from './components/DirectLinks';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Products />
      <Story />
      <Location />
      <DirectLinks />
      <Footer />
    </div>
  );
}

export default App;