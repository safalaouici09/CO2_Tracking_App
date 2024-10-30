// src/components/EmissionsCalculator.js
import React, { useEffect, useState } from 'react';
import { calculateEmissions } from '../utils/api';

const EmissionsCalculator = ({ userId }) => {
    const [totalEmissions, setTotalEmissions] = useState(0);

    const fetchEmissions = async () => {
        const response = await calculateEmissions(userId);
        setTotalEmissions(response.data.totalEmissions);
    };

    useEffect(() => {
        fetchEmissions();
    }, [userId]);

    return (
        <div>
            <h2>Total CO₂ Emissions: {totalEmissions} kg</h2>
        </div>
    );
};

export default EmissionsCalculator;
