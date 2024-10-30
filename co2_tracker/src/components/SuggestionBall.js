// src/components/SuggestionBall.js
import React, { useEffect, useState } from 'react';
import { getSuggestions } from '../utils/api'; // Ensure this API function is defined and imported

const SuggestionBall = () => {
    const [suggestions, setSuggestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [position, setPosition] = useState({ top: 0, left: 0 });

    const fetchSuggestions = async () => {
        const response = await getSuggestions();
        setSuggestions(response.data);
    };

    const updatePosition = () => {
        setPosition({
            top: Math.random() * (window.innerHeight - 100), // Adjust for larger ball size
            left: Math.random() * (window.innerWidth - 100), // Adjust for larger ball size
        });
    };

    const changeSuggestion = () => {
        const randomIndex = Math.floor(Math.random() * suggestions.length);
        setCurrentIndex(randomIndex);
        updatePosition(); // Update position on suggestion change
    };

    useEffect(() => {
        fetchSuggestions();
    }, []); // Run once on component mount

    useEffect(() => {
        if (suggestions.length > 0) {
            updatePosition(); // Initial position on suggestions fetched
            const intervalId = setInterval(() => {
                changeSuggestion();
            }, 10000); // Change suggestion every 10 seconds

            return () => clearInterval(intervalId); // Cleanup on unmount
        }
    }, [suggestions]); // Runs when suggestions change

    return (
        <div
            className="absolute bg-greenCustom text-white rounded-lg w-60 h-20 flex items-center justify-center transition-transform shadow-lg"
            style={{
                top: position.top,
                left: position.left,
                transition: 'top 5s ease, left 5s ease', // Smooth movement
                fontSize: '1.25rem', // Adjust font size for better visibility
                padding: '10px 20px', // Add padding for aesthetics
                textAlign: 'center', // Center the text
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)', // Shadow effect
                borderRadius: '20px' // Rounded corners
            }}
        >
            {suggestions.length > 0 ? suggestions[currentIndex] : 'Loading...'}
        </div>
    );
};

export default SuggestionBall;
