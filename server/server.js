import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';
import path from 'path';
import { fileURLToPath } from 'url';

import connectDB from './config/db.js';
import apiRoutes from './routes/api.js';

// Load env vars
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Security HTTP headers
app.use(helmet({
  crossOriginResourcePolicy: false, // Allow images to be loaded by frontend
}));

// Enable CORS
app.use(cors({
  origin: '*', // For demo purposes, allow all origins
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again after 15 minutes',
});
app.use('/api/', limiter);

// Get directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static assets from server public directory if needed
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

// Mount API routes
app.use('/api', apiRoutes);

// Test endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Uddanam Care Health Clinic API is running...' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: 'An unexpected server error occurred',
    error: process.env.NODE_ENV === 'development' ? err.message : {},
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
