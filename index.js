const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Welcome route
app.get('/', (req, res) => {
  res.json({ 
    message: 'Welcome to JoinEcoGrow API',
    version: '1.0.0',
    features: '750+',
    status: 'operational',
    platform: 'Global Eco-Growing Platform',
    endpoints: {
      health: '/api/health',
      features: '/api/features',
      builds: '/api/builds',
      trees: '/api/trees',
      auth: '/api/auth',
      users: '/api/users'
    }
  });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Feature categories from your comprehensive guides (750+ features)
const features = {
  diy: 88,           // DIY Eco-Growing Systems
  trees: 91,         // Tree Planting & Reforestation  
  gaming: 55,        // Battle Royale & Mini-games
  entertainment: 63, // Videos, Streaming, Podcasts
  ai: 68,           // AI Garden Assistant, CRISPR, Quantum
  iot: 38,          // Sensor Integration
  blockchain: 42,    // NFTs, Carbon Credits, DAO
  community: 87,     // Forums, Mentorship, Dating
  analytics: 47,     // Insights & Tracking
  commerce: 45,      // Marketplace, Payments
  enterprise: 74,    // White-label, API, SSO
  admin: 52         // Management Tools
};

// IMPORTANT: Features endpoint - THIS IS WHAT'S MISSING!
app.get('/api/features', (req, res) => {
  const total = Object.values(features).reduce((a, b) => a + b, 0);
  res.json({
    total: total,
    categories: features,
    platform: 'JoinEcoGrow - Global Eco-Growing Platform',
    message: 'Grow Together, Grow Sustainable',
    comprehensive_guides: {
      ultimate_unified: true,
      dittofi_master: true,
      global_comprehensive: true,
      hybrid_implementation: true
    }
  });
});

// Placeholder for builds endpoint
app.get('/api/builds', (req, res) => {
  res.json({
    message: 'DIY Build Library',
    total_builds: 500,
    categories: ['hydroponics', 'vertical_gardens', 'composters', 'rain_barrels']
  });
});

// Placeholder for trees endpoint
app.get('/api/trees', (req, res) => {
  res.json({
    message: 'Tree Planting System',
    features: ['QR tracking', 'GPS verification', 'NFT certificates', 'Carbon credits']
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Endpoint not found',
    message: `Cannot ${req.method} ${req.path}`,
    available_endpoints: {
      root: '/',
      health: '/api/health',
      features: '/api/features',
      builds: '/api/builds',
      trees: '/api/trees'
    }
  });
});

app.listen(PORT, () => {
  console.log('====================================');
  console.log('JoinEcoGrow Backend Server Started!');
  console.log('====================================');
  console.log('Server running on port:', PORT);
  console.log('Environment:', process.env.NODE_ENV || 'development');
  console.log('Features: 750+ across 12 categories');
  console.log('Platform: Global Eco-Growing Solution');
  console.log('Ready to grow sustainably!');
  console.log('====================================');
});

module.exports = app;
