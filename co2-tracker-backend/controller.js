// src/controllers/activityController.js
const { Activity } = require('./models/activity'); // Adjust path as needed

// Add Activity
exports.addActivity = async (req, res) => {
    try {
        console.log('adding activity')
userId=2;
        const {  type, value, date } = req.body;
        const activity = await Activity.create({ userId, type, value, date });
        res.status(201).json(activity);
    } catch (error) {
        res.status(500).json({ error: 'Failed to add activity' });
    }
};

// Get User Activities
exports.getUserActivities = async (req, res) => {
    const { userId } = req.params;
    try {
        const activities = await Activity.findAll({ where: { userId } });
        res.status(200).json(activities);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve activities' });
    }
};

// Calculate CO₂ Emissions
exports.calculateEmissions = async (req, res) => {
    const { userId } = req.params;
    try {
        // Logic to calculate emissions based on user activities
        // Placeholder for demonstration
        const totalEmissions = 0; // Replace with actual calculation logic
        res.status(200).json({ totalEmissions });
    } catch (error) {
        res.status(500).json({ error: 'Failed to calculate emissions' });
    }
};

// Get Suggestions
exports.getSuggestions = (req, res) => {
    // Placeholder for suggestions
    const suggestions = [
        'Use public transport more often',
        'Eat less red meat',
        'Reduce plastic usage',
    ];
    res.status(200).json(suggestions);
};
