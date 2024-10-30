const { Sequelize, DataTypes } = require('sequelize');

// Create a new Sequelize instance using the database connection string from your environment variables
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
});

// Define the Activity model
const Activity = sequelize.define('Activity', {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    value: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
}, {
    // Model options
    timestamps: true, // Enables createdAt and updatedAt fields
    tableName: 'Activities', // Use a custom table name if necessary
});

// Sync the model with the database (optional, for development)
const syncDatabase = async () => {
    try {
        await sequelize.sync(); // Creates the table if it doesn't exist (without dropping existing tables)
        console.log('Activity model synchronized with the database.');
    } catch (error) {
        console.error('Error synchronizing Activity model:', error);
    }
};

// Uncomment the line below to sync the database when the module is loaded (be cautious in production)
// syncDatabase();

module.exports = { Activity }; // Export both Activity model and sequelize instance
