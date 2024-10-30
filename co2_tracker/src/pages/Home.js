// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import ActivityForm from '../components/ActivityForm';
import ActivityList from '../components/ActivityList';
import Suggestions from '../components/Suggestions';
import SuggestionBall from '../components/SuggestionBall'; // Import the SuggestionBall
import { getUserActivities } from '../utils/api';

const Home = ({ userId, onActivityAdded }) => {
    const [activities, setActivities] = useState([]);

    const fetchActivities = async () => {
        try {
            const response = await getUserActivities(userId);
            setActivities(response.data);
        } catch (error) {
            console.error("Failed to fetch activities:", error);
        }
    };

    useEffect(() => {
        fetchActivities();
    }, [userId]);

    return (
        <div className="flex items-center justify-center flex-col min-h-screen bg-gray-100 relative">
            <h1 className="text-4xl font-bold mb-4 text-center">Welcome to the Carbon Footprint Tracker</h1>
            <ActivityForm userId={userId} onActivityAdded={fetchActivities} />
            <ActivityList activities={activities} />
            <SuggestionBall /> {/* Add the SuggestionBall here */}
        </div>
    );
};

export default Home;
