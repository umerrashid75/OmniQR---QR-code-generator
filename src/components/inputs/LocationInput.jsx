import React from 'react';

export function LocationInput({ data, onChange }) {
    const handleChange = (field, value) => onChange({ ...data, [field]: value });

    const getCurrentLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    onChange({
                        ...data,
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    });
                },
                (error) => {
                    console.error("Error getting location", error);
                    alert("Could not get current location.");
                }
            );
        }
    };

    return (
        <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Latitude</label>
                    <input type="number" step="any" placeholder="37.7749" value={data.latitude || ''} onChange={(e) => handleChange('latitude', e.target.value)} className="w-full px-4 py-2 text-base border border-gray-300 rounded-lg outline-none" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Longitude</label>
                    <input type="number" step="any" placeholder="-122.4194" value={data.longitude || ''} onChange={(e) => handleChange('longitude', e.target.value)} className="w-full px-4 py-2 text-base border border-gray-300 rounded-lg outline-none" />
                </div>
            </div>
            <button
                type="button"
                onClick={getCurrentLocation}
                className="text-sm text-indigo-600 hover:text-indigo-800 font-medium flex items-center gap-1"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Use Current Location
            </button>
        </div>
    );
}
