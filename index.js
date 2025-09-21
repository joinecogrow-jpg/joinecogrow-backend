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
    endpoints: {
      health: '/api/health',
      features: '/api/features',
      auth: '/api/auth',
      builds: '/api/builds',
      trees: '/api/trees',
      users: '/api/users'
    }
  });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// Feature categories based on your 750+ features
const features = {
  diy: 88,
  trees: 91,
  gaming: 55,
  entertainment: 63,
  ai: 68,
  iot: 38,
  blockchain: 42,
  community: 87,
  analytics: 47,
  commerce: 45,
  enterprise: 74,
  admin: 52
};

// Features endpoint
app.get('/api/features', (req, res) => {
  res.json({
    total: Object.values(features).reduce((a, b) => a + b, 0),
    categories: features
  });
});

// Error handling
app.use((req, res) => {
  res.status(404).json({
    error: 'Not Found',
    message: `Cannot ${req.method} ${req.path}`,
    availableEndpoints: {
      root: '/',
      health: '/api/health',
      features: '/api/features'
    }
  });
});

app.listen(PORT, () => {
  console.log('====================================');
  console.log('JoinEcoGrow Backend Server Started!');
  console.log('====================================');
  console.log('Server running on port:', PORT);
  console.log('Environment:', process.env.NODE_ENV || 'development');
  console.log('Features: 750+');
  console.log('Ready to grow!');
  console.log('====================================');
});
