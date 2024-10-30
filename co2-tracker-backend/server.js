require('dotenv').config();
const express = require('express');
const { Sequelize } = require('sequelize');
const activityController = require('./controller'); 
const { Activity } = require('./models/activity');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); 
app.use(express.json());

// Initialize Sequelize for MySQL
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
});

// Test the database connection
sequelize.authenticate()
    .then(() => {
        console.log('Database connected successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

// Define routes
app.post('/activities/:userId', activityController.addActivity);
app.get('/activities/:userId', activityController.getUserActivities); // Fixed route to include userId
app.get('/', (req, res) => {
    res.send('Hello, world!');
});
app.get('/suggestions', activityController.getSuggestions);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
