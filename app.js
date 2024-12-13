const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const errorHandler = require('./middleware/errorHandler')
const bookRoutes = require('./routes/bookRoutes');
const laptopRoutes = require('./routes/laptopRoutes');
const studentRoutes = require('./routes/studentRoutes');
const userRoutes = require('./routes/userRoutes');
const profileRoutes = require('./routes/profileRoutes')
const postRoutes = require('./routes/postRoutes');
const projectRoutes = require('./routes/projectRoutes');


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
app.use('/user', userRoutes);
app.use('/profile', profileRoutes);
app.use('/post', postRoutes);
app.use('/project', projectRoutes);
app.use(errorHandler);

process.on('uncaughtException', (err) => {
  console.error("Uncaught Exception:", err);
  process.exit(1);
});

process.on('unhandledRejection', (reason) => {
  console.error("Unhandled Rejection:", reason);
  process.exit(1);
});



app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});