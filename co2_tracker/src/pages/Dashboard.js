// src/pages/Dashboard.js
import React, { useEffect, useState } from 'react';
import ActivityList from '../components/ActivityList';
import EmissionsCalculator from '../components/EmissionsCalculator';
import { getUserActivities } from '../utils/api';

const Dashboard = ({ userId }) => {
    const [activities, setActivities] = useState([]);

    const fetchActivities = async () => {
        const response = await getUserActivities(1);
        setActivities(response.data);
    };

    useEffect(() => {
        fetchActivities();
    }, [userId]);

    return (
        <div>
            <h1>Your Dashboard</h1>
           
            <ActivityList activities={activities} />
        </div>
    );
};

export default Dashboard;
