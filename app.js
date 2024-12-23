const express = require('express');
const logger = require('./utils/logger');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require("./routes/authRoutes");
const errorHandler = require('./middleware/errorHandler')
const bookRoutes = require('./routes/bookRoutes');
const laptopRoutes = require('./routes/laptopRoutes');
const studentRoutes = require('./routes/studentRoutes');
const userRoutes = require('./routes/userRoutes');
const profileRoutes = require('./routes/profileRoutes')
const postRoutes = require('./routes/postRoutes');
const projectRoutes = require('./routes/projectRoutes');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 4001

// const whitelist = ['http://localhost:3000', 'https://www.google.com'];
// const corsOptions = {
//   origin:(origin, callback) =>{
//     if(whitelist.indexOf(origin)!== -1 || !origin) {
//       callback(null,true)
//     }else{
//       callback(new Error('Not allowed by CORS'));
//     }
//   },
//   optionSuccessStatus : 200
// }
// app.use(cors(corsOptions))

// Middleware

app.use(bodyParser.json());
app.use(express.json());

app.use((req, res, next) => {
  logger.info(`Incoming request: ${req.method} ${req.url}`);
  next();
});



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
app.use("/auth", authRoutes);
app.use(errorHandler);




app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});






// process.on('uncaughtException', (err) => {
//   console.error("Uncaught Exception:", err);
//   process.exit(1);
// });

// process.on('unhandledRejection', (reason) => {
//   console.error("Unhandled Rejection:", reason);
//   process.exit(1);
// });


// app.use((err, req, res, next) => {
//   logger.error(`Error occurred: ${err.message}`);
//   res.status(err.status || 500).json({
//     success: false,
//     message: err.message || 'Internal Server Error',
//   });
// });