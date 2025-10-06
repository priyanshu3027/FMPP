import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Leaf, BarChart3, Target } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const features = [
    {
      icon: <TrendingUp size={24} />,
      title: "Price Prediction",
      description: "AI-powered crop price forecasting"
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Market Analysis",
      description: "Real-time market trends & insights"
    },
    {
      icon: <Target size={24} />,
      title: "Crop Advisory",
      description: "Optimal crop recommendations"
    },
    {
      icon: <Leaf size={24} />,
      title: "Seasonal Planning",
      description: "Best timing for sowing & harvesting"
    }
  ];

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="floating-shapes">
          <motion.div 
            className="shape shape-1"
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="shape shape-2"
            animate={{ 
              y: [0, 15, 0],
              rotate: [0, -5, 0]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="shape shape-3"
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 3, 0]
            }}
            transition={{ 
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </div>
      
      <div className="hero-content">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title">
            <span className="gradient-text">Smart Farming By Priyanshu ;)</span> 
            <h3>Starts Here</h3>
          </h1>
          <p className="hero-subtitle">
            Predict crop prices with AI accuracy and get personalized crop advisory 
            to maximize your farming profits. Make data-driven decisions for a 
            sustainable agricultural future.
          </p>
          
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">95%</span>
              <span className="stat-label">Prediction Accuracy</span>
            </div>
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Crop Types</span>
            </div>
            <div className="stat">
              <span className="stat-number">1000+</span>
              <span className="stat-label">Markets Covered</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="hero-features"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 