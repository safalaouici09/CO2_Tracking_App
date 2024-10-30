import React from 'react';

const ActivityList = ({ activities }) => {
    return (
        <div className="bg-white shadow-md w-full md:w-1/2 rounded-lg p-6 mx-auto mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Activities</h2>
            <table className="min-w-full bg-white">
                <thead>
                    <tr className="w-full bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                        <th className="py-3 px-6 text-left">Type</th>
                        <th className="py-3 px-6 text-left">Value (CO₂)</th>
                        <th className="py-3 px-6 text-left">Date</th>
                    </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                    {activities.length > 0 ? (
                        activities.map((activity) => (
                            <tr key={activity.id} className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6">{activity.type}</td>
                                <td className="py-3 px-6">{activity.value} CO₂</td>
                                <td className="py-3 px-6">
                                    {new Date(activity.date).toLocaleDateString()}
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3" className="py-3 px-6 text-center text-gray-500">No activities found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ActivityList;
