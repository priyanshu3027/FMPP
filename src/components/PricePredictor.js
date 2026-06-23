import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { TrendingUp, Calendar, MapPin, Search, BarChart3, DollarSign, TrendingDown, AlertCircle } from 'lucide-react';
import Select from 'react-select';
import './PricePredictor.css';

const PricePredictor = () => {
  const [selectedCrop, setSelectedCrop] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [predictionResult, setPredictionResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Sample data - replace with real data from your API
  const crops = [
    { value: 'rice', label: 'Rice', icon: '🌾' },
    { value: 'wheat', label: 'Wheat', icon: '🌾' },
    { value: 'corn', label: 'Corn', icon: '🌽' },
    { value: 'potato', label: 'Potato', icon: '🥔' },
    { value: 'tomato', label: 'Tomato', icon: '🍅' },
    { value: 'onion', label: 'Onion', icon: '🧅' },
    { value: 'cotton', label: 'Cotton', icon: '🧶' },
    { value: 'sugarcane', label: 'Sugarcane', icon: '🎋' }
  ];

  const regions = [
    { value: 'punjab', label: 'Punjab' },
    { value: 'haryana', label: 'Haryana' },
    { value: 'uttar-pradesh', label: 'Uttar Pradesh' },
    { value: 'madhya-pradesh', label: 'Madhya Pradesh' },
    { value: 'maharashtra', label: 'Maharashtra' },
    { value: 'karnataka', label: 'Karnataka' },
    { value: 'tamil-nadu', label: 'Tamil Nadu' },
    { value: 'andhra-pradesh', label: 'Andhra Pradesh' }
  ];

  // Sample historical and predicted data
  const historicalData = [
    { month: 'Jan', price: 1800, type: 'Historical' },
    { month: 'Feb', price: 1850, type: 'Historical' },
    { month: 'Mar', price: 1900, type: 'Historical' },
    { month: 'Apr', price: 1950, type: 'Historical' },
    { month: 'May', price: 2000, type: 'Historical' },
    { month: 'Jun', price: 2100, type: 'Historical' },
    { month: 'Jul', price: 2200, type: 'Predicted' },
    { month: 'Aug', price: 2300, type: 'Predicted' },
    { month: 'Sep', price: 2400, type: 'Predicted' },
    { month: 'Oct', price: 2350, type: 'Predicted' },
    { month: 'Nov', price: 2250, type: 'Predicted' },
    { month: 'Dec', price: 2150, type: 'Predicted' }
  ];

  const handlePredict = async () => {
    if (!selectedCrop || !selectedRegion) {
      alert('Please select both crop and region');
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setPredictionResult({
        currentPrice: 2100,
        predictedPrice: 2400,
        confidence: 85,
        trend: 'up',
        recommendation: 'Good time to sell',
        riskLevel: 'Low',
        factors: [
          'Favorable weather conditions',
          'Strong market demand',
          'Limited supply in region'
        ]
      });
      setIsLoading(false);
    }, 2000);
  };

  const customSelectStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      border: '1px solid rgba(74, 222, 128, 0.2)',
      borderRadius: '12px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
      '&:hover': {
        border: '1px solid rgba(74, 222, 128, 0.4)'
      }
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#4ade80' : state.isFocused ? 'rgba(74, 222, 128, 0.1)' : 'white',
      color: state.isSelected ? 'white' : '#1f2937',
      '&:hover': {
        backgroundColor: state.isSelected ? '#4ade80' : 'rgba(74, 222, 128, 0.1)'
      }
    })
  };

  return (
    <div className="price-predictor">
      <div className="predictor-header">
        <h2>📊 Crop Price Predictor</h2>
        <p>Get AI-powered price predictions for your crops based on market trends and historical data</p>
      </div>

      <div className="predictor-content">
        {/* Input Form */}
        <motion.div 
          className="predictor-form card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3>Select Parameters</h3>
          
          <div className="form-row">
            <div className="form-group">
              <label>
                <BarChart3 size={20} />
                Crop Type
              </label>
              <Select
                value={selectedCrop}
                onChange={setSelectedCrop}
                options={crops}
                placeholder="Select a crop..."
                styles={customSelectStyles}
                formatOptionLabel={(option) => (
                  <div className="select-option">
                    <span className="crop-icon">{option.icon}</span>
                    <span>{option.label}</span>
                  </div>
                )}
              />
            </div>

            <div className="form-group">
              <label>
                <MapPin size={20} />
                Region
              </label>
              <Select
                value={selectedRegion}
                onChange={setSelectedRegion}
                options={regions}
                placeholder="Select a region..."
                styles={customSelectStyles}
              />
            </div>
          </div>

          <motion.button
            className="btn-primary predict-btn"
            onClick={handlePredict}
            disabled={isLoading || !selectedCrop || !selectedRegion}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isLoading ? (
              <div className="loading-spinner">
                <div className="spinner"></div>
                Predicting...
              </div>
            ) : (
              <>
                <Search size={20} />
                Predict Price
              </>
            )}
          </motion.button>
        </motion.div>

        {/* Results Section */}
        {predictionResult && (
          <motion.div 
            className="prediction-results"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Price Overview Cards */}
            <div className="price-overview">
              <div className="price-card current-price">
                <div className="price-icon">
                  <DollarSign size={24} />
                </div>
                <div className="price-info">
                  <h4>Current Price</h4>
                  <span className="price-value">₹{predictionResult.currentPrice}/quintal</span>
                </div>
              </div>

              <div className="price-card predicted-price">
                <div className="price-icon">
                  <TrendingUp size={24} />
                </div>
                <div className="price-info">
                  <h4>Predicted Price</h4>
                  <span className="price-value">₹{predictionResult.predictedPrice}/quintal</span>
                  <span className="price-change positive">
                    +₹{predictionResult.predictedPrice - predictionResult.currentPrice}
                  </span>
                </div>
              </div>

              <div className="price-card confidence">
                <div className="price-icon">
                  <AlertCircle size={24} />
                </div>
                <div className="price-info">
                  <h4>Confidence</h4>
                  <span className="price-value">{predictionResult.confidence}%</span>
                  <span className="confidence-level">High Accuracy</span>
                </div>
              </div>
            </div>

            {/* Chart Section */}
            <div className="chart-section card">
              <h3>Price Trend Analysis</h3>
              <div className="chart-container">
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={historicalData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis 
                      dataKey="month" 
                      stroke="#6b7280"
                      fontSize={12}
                    />
                    <YAxis 
                      stroke="#6b7280"
                      fontSize={12}
                      tickFormatter={(value) => `₹${value}`}
                    />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        border: '1px solid rgba(74, 222, 128, 0.2)',
                        borderRadius: '8px'
                      }}
                      formatter={(value) => [`₹${value}`, 'Price']}
                    />
                    <Area
                      type="monotone"
                      dataKey="price"
                      stroke="#4ade80"
                      fill="url(#colorGradient)"
                      strokeWidth={3}
                    />
                    <defs>
                      <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#4ade80" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#4ade80" stopOpacity={0.1}/>
                      </linearGradient>
                    </defs>
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="chart-legend">
                <div className="legend-item">
                  <div className="legend-color historical"></div>
                  <span>Historical Data</span>
                </div>
                <div className="legend-item">
                  <div className="legend-color predicted"></div>
                  <span>Predicted Data</span>
                </div>
              </div>
            </div>

            {/* Recommendations */}
            <div className="recommendations card">
              <h3>Market Insights & Recommendations</h3>
              <div className="recommendation-content">
                <div className="recommendation-main">
                  <div className="recommendation-icon">
                    {predictionResult.trend === 'up' ? <TrendingUp size={24} /> : <TrendingDown size={24} />}
                  </div>
                  <div className="recommendation-text">
                    <h4>{predictionResult.recommendation}</h4>
                    <p>Based on current market analysis and historical trends</p>
                  </div>
                </div>
                
                <div className="risk-assessment">
                  <h5>Risk Assessment</h5>
                  <div className={`risk-level ${predictionResult.riskLevel.toLowerCase()}`}>
                    {predictionResult.riskLevel} Risk
                  </div>
                </div>

                <div className="market-factors">
                  <h5>Key Market Factors</h5>
                  <ul>
                    {predictionResult.factors.map((factor, index) => (
                      <li key={index}>{factor}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default PricePredictor;