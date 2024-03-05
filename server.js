// Load environment variables from a .env file
require('dotenv').config();


// Import required modules and create an Express app
const express = require('express');
const app = express();
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const strings = require('./Config/constants');



const {server} = require('./Config/config');

// Import the database connection function and execute it
const { connection } = require('./Config/database');
const database = connection();



// Middleware setup
app.use(express.json()); // Enable JSON request body parsing
app.use(express.urlencoded({ extended: true })); // Enable URL-encoded request body parsing
app.use(helmet());


// Define the rate limit configuration
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: 'Rate limit exceeded. Please try again later.',
});

app.use(apiLimiter);

// Connect to the MongoDB database
database.connectToMongo()




const userRoutes = require('./Routes/users.routes');
const productRoutes = require('./Routes/products.routes');
const { default: mongoose } = require('mongoose');

app.use('/api', userRoutes);
app.use('/api/products', productRoutes);





app.use((err, req, res, next) => {
    // Handle errors and respond accordingly
    console.error(err);
    res.status(strings.SERVER_HTTP_VERSION_NOT_SUPPORTED_HTTP_CODE).json({ error: strings.EMPTY_REQUEST_FOR_UPDATE });
  });


// Start the Express server and listen on port 5000
app.listen(server.PORT, () => {
    console.log('Listening on port 5000');
});