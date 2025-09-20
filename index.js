const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const compression = require('compression');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(compression());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Welcome route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to JoinEcoGrow API',
    version: '1.0.0',
    features: '750+',
    status: 'operational',
    endpoints: {
      health: '/api/health',
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

// Feature categories (based on your 750+ features)
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

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Something went wrong!',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(
    🌱 JoinEcoGrow Backend Server Started! 🌱
    =====================================
    Server running at: http://localhost:
    Environment: 
    Features: 750+
    Ready to grow!
  );
});

module.exports = app;
