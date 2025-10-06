import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import PricePredictor from './components/PricePredictor';
import CropAdvisory from './components/CropAdvisory';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('predictor');

  return (
    <div className="App">
      <Header />
      <Hero />
      
      <main className="main-content">
        <div className="tab-container">
          <div className="tab-buttons">
            <motion.button
              className={`tab-button ${activeTab === 'predictor' ? 'active' : ''}`}
              onClick={() => setActiveTab('predictor')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              📊 Price Predictor
            </motion.button>
            <motion.button
              className={`tab-button ${activeTab === 'advisory' ? 'active' : ''}`}
              onClick={() => setActiveTab('advisory')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🌱 Crop Advisory
            </motion.button>
          </div>
          
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="tab-content"
          >
            {activeTab === 'predictor' ? <PricePredictor /> : <CropAdvisory />}
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App; 