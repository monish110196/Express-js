const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bookRoutes = require('./book/bookRoutes');
const laptopRoutes = require('./laptop/laptopRoutes');
const PORT = process.env.PORT || 5000;
const app = express();

// Middleware to parse JSON requests
app.use(express.json());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://dhinavollmoon:dtXO6D8fFoQZ6qxI@dhina-mongoose.5bebs.mongodb.net/monish?retryWrites=true&w=majority&appName=dhina-mongoose',
     { useNewUrlParser: true,
         useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Use the routes
app.use('/api', bookRoutes);
app.use('/api', laptopRoutes);

// Start the server
app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
