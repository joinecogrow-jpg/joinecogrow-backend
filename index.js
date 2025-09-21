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
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Feature categories (750+ features from your guides)
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

// Features endpoint - THIS WAS MISSING!
app.get('/api/features', (req, res) => {
  res.json({
    total: Object.values(features).reduce((a, b) => a + b, 0),
    categories: features,
    message: 'JoinEcoGrow Platform Features'
  });
});

// 404 handler for undefined routes
app.use((req, res) => {
  res.status(404).json({
    error: 'Not Found',
    message: `Cannot ${req.method} ${req.path}`,
    suggestion: 'Check available endpoints at /'
  });
});

app.listen(PORT, () => {
  console.log('JoinEcoGrow Backend Server Started!');
  console.log(`Server running on port ${PORT}`);
});
