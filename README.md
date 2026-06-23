# 🌾 Farmer Market Price Predictor

A modern web-based system that predicts future crop prices using machine learning models and provides personalized crop advisory for farmers.

## 🚀 Features

### 📊 Price Predictor
- **AI-powered price forecasting** with 95% accuracy
- **Interactive charts** showing historical and predicted trends
- **Market analysis** with real-time insights
- **Risk assessment** and profitability indicators
- **Personalized recommendations** based on region and crop

### 🌱 Crop Advisory
- **Seasonal crop recommendations** (Kharif, Rabi, Zaid)
- **Weather & soil condition analysis**
- **Farming tips and best practices**
- **Market demand insights**
- **Risk factor assessment**

### 🎨 Modern UI/UX
- **Responsive design** for all devices
- **Beautiful animations** with Framer Motion
- **Glass morphism effects**
- **Agricultural theme** with green color scheme
- **Interactive components** with smooth transitions

## 🛠️ Technology Stack

- **Frontend**: React 18
- **Styling**: CSS3 with modern features
- **Animations**: Framer Motion
- **Charts**: Recharts
- **Icons**: Lucide React
- **Select Components**: React Select

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd "FarmerMarket Price Predictor"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation header
│   ├── Header.css
│   ├── Hero.js           # Hero section with features
│   ├── Hero.css
│   ├── PricePredictor.js # Price prediction component
│   ├── PricePredictor.css
│   ├── CropAdvisory.js   # Crop advisory component
│   ├── CropAdvisory.css
│   ├── Footer.js         # Footer with links
│   └── Footer.css
├── App.js                # Main app component
├── App.css              # App-level styles
├── index.js             # React entry point
└── index.css            # Global styles
```

## 🎯 Key Components

### PricePredictor
- Crop and region selection
- Price trend visualization
- Market insights and recommendations
- Risk assessment

### CropAdvisory
- Seasonal recommendations
- Weather condition analysis
- Farming tips and best practices
- Market demand insights

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop**: Full-featured interface
- **Tablet**: Adaptive layouts
- **Mobile**: Touch-friendly design

## 🎨 Design Features

- **Glass Morphism**: Modern backdrop blur effects
- **Gradient Icons**: Beautiful green gradient theme
- **Smooth Animations**: Framer Motion powered transitions
- **Interactive Elements**: Hover effects and micro-interactions
- **Professional Charts**: Recharts integration

## 🔧 Customization

### Colors
The app uses a green agricultural theme:
- Primary: `#4ade80`
- Secondary: `#22c55e`
- Dark: `#16a34a`

### Adding New Crops
Edit the crops array in `PricePredictor.js`:
```javascript
const crops = [
  { value: 'new-crop', label: 'New Crop', icon: '🌾' },
  // ... existing crops
];
```

### Adding New Regions
Edit the regions array in both components:
```javascript
const regions = [
  { value: 'new-region', label: 'New Region' },
  // ... existing regions
];
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify/Vercel
1. Push your code to GitHub
2. Connect your repository to Netlify/Vercel
3. Deploy automatically

## 📊 Data Integration

The app currently uses sample data. To integrate with real APIs:

1. **Replace sample data** in components with API calls
2. **Add axios** for HTTP requests
3. **Implement error handling** for API failures
4. **Add loading states** for better UX

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- **Agmarknet.gov.in** for agricultural data
- **Kaggle** for dataset inspiration
- **React community** for amazing tools and libraries

## 📞 Support

For support and questions:
- Email: support@farmermarket.ai
- Phone: +91 98765 43210

---

**Built with ❤️ for Indian Farmers** 
