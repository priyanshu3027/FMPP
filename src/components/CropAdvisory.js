import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Leaf, Calendar, MapPin, Search, Sun, CloudRain, Thermometer, Droplets, Target, TrendingUp, Clock, AlertCircle } from 'lucide-react';
import Select from 'react-select';
import './CropAdvisory.css';

const CropAdvisory = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedSeason, setSelectedSeason] = useState(null);
  const [advisoryResult, setAdvisoryResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Sample data - replace with real data from your API
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

  const seasons = [
    { value: 'kharif', label: 'Kharif (Monsoon)', icon: '🌧️' },
    { value: 'rabi', label: 'Rabi (Winter)', icon: '❄️' },
    { value: 'zaid', label: 'Zaid (Summer)', icon: '☀️' }
  ];

  const handleGetAdvisory = async () => {
    if (!selectedRegion || !selectedSeason) {
      alert('Please select both region and season');
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setAdvisoryResult({
        region: selectedRegion.label,
        season: selectedSeason.label,
        recommendations: [
          {
            crop: 'Rice',
            icon: '🌾',
            profitability: 'High',
            riskLevel: 'Low',
            sowingTime: 'June-July',
            harvestingTime: 'October-November',
            expectedYield: '25-30 quintals/acre',
            marketDemand: 'Strong',
            priceTrend: 'Rising',
            tips: [
              'Ensure proper water management',
              'Use certified seeds',
              'Monitor for pest attacks'
            ]
          },
          {
            crop: 'Cotton',
            icon: '🧶',
            profitability: 'Medium',
            riskLevel: 'Medium',
            sowingTime: 'May-June',
            harvestingTime: 'December-January',
            expectedYield: '8-12 quintals/acre',
            marketDemand: 'Stable',
            priceTrend: 'Stable',
            tips: [
              'Plant in well-drained soil',
              'Maintain proper spacing',
              'Control bollworm infestation'
            ]
          },
          {
            crop: 'Sugarcane',
            icon: '🎋',
            profitability: 'High',
            riskLevel: 'Low',
            sowingTime: 'February-March',
            harvestingTime: 'December-March',
            expectedYield: '350-400 quintals/acre',
            marketDemand: 'Very Strong',
            priceTrend: 'Rising',
            tips: [
              'Requires heavy irrigation',
              'Plant in fertile soil',
              'Monitor for red rot disease'
            ]
          }
        ],
        weatherConditions: {
          temperature: '25-35°C',
          rainfall: '800-1200mm',
          humidity: '70-80%',
          soilType: 'Clay loam',
          irrigation: 'Required'
        },
        marketInsights: {
          overallTrend: 'Positive',
          bestCrop: 'Rice',
          riskFactors: [
            'Unpredictable monsoon',
            'Pest infestation risk',
            'Market price fluctuations'
          ]
        }
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
    <div className="crop-advisory">
      <div className="advisory-header">
        <h2>🌱 Crop Advisory</h2>
        <p>Get personalized crop recommendations based on your region, season, and market conditions</p>
      </div>

      <div className="advisory-content">
        {/* Input Form */}
        <motion.div 
          className="advisory-form card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3>Select Parameters</h3>
          
          <div className="form-row">
            <div className="form-group">
              <label>
                <MapPin size={20} />
                Region
              </label>
              <Select
                value={selectedRegion}
                onChange={setSelectedRegion}
                options={regions}
                placeholder="Select your region..."
                styles={customSelectStyles}
              />
            </div>

            <div className="form-group">
              <label>
                <Calendar size={20} />
                Season
              </label>
              <Select
                value={selectedSeason}
                onChange={setSelectedSeason}
                options={seasons}
                placeholder="Select season..."
                styles={customSelectStyles}
                formatOptionLabel={(option) => (
                  <div className="select-option">
                    <span className="season-icon">{option.icon}</span>
                    <span>{option.label}</span>
                  </div>
                )}
              />
            </div>
          </div>

          <motion.button
            className="btn-primary advisory-btn"
            onClick={handleGetAdvisory}
            disabled={isLoading || !selectedRegion || !selectedSeason}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isLoading ? (
              <div className="loading-spinner">
                <div className="spinner"></div>
                Analyzing...
              </div>
            ) : (
              <>
                <Search size={20} />
                Get Crop Advisory
              </>
            )}
          </motion.button>
        </motion.div>

        {/* Results Section */}
        {advisoryResult && (
          <motion.div 
            className="advisory-results"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Weather Conditions */}
            <div className="weather-section card">
              <h3>Weather & Soil Conditions</h3>
              <div className="weather-grid">
                <div className="weather-item">
                  <div className="weather-icon">
                    <Thermometer size={24} />
                  </div>
                  <div className="weather-info">
                    <h4>Temperature</h4>
                    <span>{advisoryResult.weatherConditions.temperature}</span>
                  </div>
                </div>
                <div className="weather-item">
                  <div className="weather-icon">
                    <CloudRain size={24} />
                  </div>
                  <div className="weather-info">
                    <h4>Rainfall</h4>
                    <span>{advisoryResult.weatherConditions.rainfall}</span>
                  </div>
                </div>
                <div className="weather-item">
                  <div className="weather-icon">
                    <Droplets size={24} />
                  </div>
                  <div className="weather-info">
                    <h4>Humidity</h4>
                    <span>{advisoryResult.weatherConditions.humidity}</span>
                  </div>
                </div>
                <div className="weather-item">
                  <div className="weather-icon">
                    <Leaf size={24} />
                  </div>
                  <div className="weather-info">
                    <h4>Soil Type</h4>
                    <span>{advisoryResult.weatherConditions.soilType}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Crop Recommendations */}
            <div className="recommendations-section">
              <h3>Recommended Crops</h3>
              <div className="crop-recommendations">
                {advisoryResult.recommendations.map((crop, index) => (
                  <motion.div 
                    key={index}
                    className="crop-card card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="crop-header">
                      <div className="crop-icon">
                        <span className="crop-emoji">{crop.icon}</span>
                      </div>
                      <div className="crop-title">
                        <h4>{crop.crop}</h4>
                        <div className="crop-badges">
                          <span className={`profitability ${crop.profitability.toLowerCase()}`}>
                            {crop.profitability} Profit
                          </span>
                          <span className={`risk-level ${crop.riskLevel.toLowerCase()}`}>
                            {crop.riskLevel} Risk
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="crop-details">
                      <div className="detail-row">
                        <div className="detail-item">
                          <Clock size={16} />
                          <span>Sowing: {crop.sowingTime}</span>
                        </div>
                        <div className="detail-item">
                          <Target size={16} />
                          <span>Harvest: {crop.harvestingTime}</span>
                        </div>
                      </div>
                      <div className="detail-row">
                        <div className="detail-item">
                          <TrendingUp size={16} />
                          <span>Yield: {crop.expectedYield}</span>
                        </div>
                        <div className="detail-item">
                          <AlertCircle size={16} />
                          <span>Demand: {crop.marketDemand}</span>
                        </div>
                      </div>
                    </div>

                    <div className="crop-tips">
                      <h5>Farming Tips:</h5>
                      <ul>
                        {crop.tips.map((tip, tipIndex) => (
                          <li key={tipIndex}>{tip}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Market Insights */}
            <div className="market-insights card">
              <h3>Market Insights</h3>
              <div className="insights-content">
                <div className="insight-main">
                  <div className="insight-icon">
                    <TrendingUp size={24} />
                  </div>
                  <div className="insight-text">
                    <h4>Overall Market Trend: {advisoryResult.marketInsights.overallTrend}</h4>
                    <p>Best recommended crop for this season: <strong>{advisoryResult.marketInsights.bestCrop}</strong></p>
                  </div>
                </div>
                
                <div className="risk-factors">
                  <h5>Risk Factors to Consider:</h5>
                  <ul>
                    {advisoryResult.marketInsights.riskFactors.map((factor, index) => (
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

export default CropAdvisory;
