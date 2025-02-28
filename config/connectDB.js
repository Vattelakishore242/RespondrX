const mongoose = require('mongoose');
require('dotenv').config(); // Ensures environment variables are loaded from .env

// Function to connect to MongoDB using Mongoose
const connectDB = async () => {
  try {
    // Attempt to connect to MongoDB using the connection string from the environment variable
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Log success message once the connection is established
    console.log('MongoDB connected successfully');
  } catch (error) {
    // Log detailed error message and exit the process if the connection fails
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit the process with a failure code
  }
};

// Export the connectDB function so it can be used in other parts of the app
module.exports = connectDB;
