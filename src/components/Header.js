import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Leaf, BarChart3 } from 'lucide-react';
import './Header.css';

const Header = () => {
  return (
    <motion.header 
      className="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="header-content">
        <div className="logo">
          <div className="logo-icon">
            <Leaf size={32} />
          </div>
          <div className="logo-text">
            <h1 className="gradient-text">Farmer Market</h1>
            <span>Price Predictor</span>
          </div>
        </div>
        
        <nav className="nav">
          <motion.a 
            href="#predictor" 
            className="nav-link"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <TrendingUp size={20} />
            Price Predictor
          </motion.a>
          <motion.a 
            href="#advisory" 
            className="nav-link"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <BarChart3 size={20} />
            Crop Advisory
          </motion.a>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header; 