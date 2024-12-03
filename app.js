const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/bookRoutes');
const laptopRoutes = require('./routes/laptopRoutes');
const studentRoutes = require('./routes/studentRoutes');


const app = express();
const PORT = 4000;

// Middleware
app.use(bodyParser.json());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb+srv://dhinavollmoon:dtXO6D8fFoQZ6qxI@dhina-mongoose.5bebs.mongodb.net/monish?retryWrites=true&w=majority&appName=dhina-mongoose",  
    { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

// Routes
app.use('/api', bookRoutes);
app.use('/api', laptopRoutes);
app.use('/api', studentRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});