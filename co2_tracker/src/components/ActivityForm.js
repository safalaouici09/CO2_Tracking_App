// src/components/ActivityForm.js
import React, { useState } from 'react';
import { addActivity } from '../utils/api';

const ActivityForm = ({ userId, onActivityAdded }) => {
    const [type, setType] = useState('');
    const [value, setValue] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const activity = { userId, type, value, date };
        await addActivity(activity);
       onActivityAdded(); // Call to refresh the activity list
        setType('');
        setValue('');
        setDate('');
    };

    return (
        <div className="flex items-center justify-center w-full md:w-1/2  mx-auto">
        <form onSubmit={handleSubmit} className="flex flex-row gap-2">
            <input
                type="text"
                placeholder="Activity Type"
                value={type}
                onChange={(e) => setType(e.target.value)}
                required
                className="p-2 border border-gray-300 rounded"
            />
            <input
                type="number"
                placeholder="CO₂ Value"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                required
                className="p-2 border border-gray-300 rounded"
            />
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                className="p-2 border border-gray-300 rounded"
            />
            <button type="submit" className="p-2 bg-greenCustom text-white rounded hover:bg-green-400">
                Add Activity
            </button>
        </form>
        </div>
    );
};

export default ActivityForm;
