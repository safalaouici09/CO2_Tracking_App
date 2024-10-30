import React, { useEffect, useState } from 'react';
import { getSuggestions } from '../utils/api';

const Suggestions = () => {
    const [suggestions, setSuggestions] = useState([]);

    const fetchSuggestions = async () => {
        const response = await getSuggestions();
        setSuggestions(response.data);
    };

    useEffect(() => {
        fetchSuggestions();
    }, []);

    return (
        <div className="bg-white shadow-md rounded-lg p-4 max-h-96 overflow-y-auto">
            <h2 className="text-lg font-semibold mb-2">Suggestions to Reduce Your Footprint</h2>
            <ul className="list-disc list-inside">
                {suggestions.map((suggestion, index) => (
                    <li key={index}>{suggestion}</li>
                ))}
            </ul>
        </div>
    );
};

export default Suggestions;
