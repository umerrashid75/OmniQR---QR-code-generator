import React from 'react';

export function VCardInput({ data, onChange }) {
    const handleChange = (field, value) => {
        onChange({ ...data, [field]: value });
    };

    return (
        <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input
                        type="text"
                        placeholder="John"
                        value={data.firstName || ''}
                        onChange={(e) => handleChange('firstName', e.target.value)}
                        className="w-full px-4 py-2 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input
                        type="text"
                        placeholder="Doe"
                        value={data.lastName || ''}
                        onChange={(e) => handleChange('lastName', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Phone</label>
                    <input
                        type="tel"
                        placeholder="+1234567890"
                        value={data.phone || ''}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                        type="email"
                        placeholder="john@example.com"
                        value={data.email || ''}
                        onChange={(e) => handleChange('email', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                    />
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Organization</label>
                <input
                    type="text"
                    placeholder="Company Inc."
                    value={data.organization || ''}
                    onChange={(e) => handleChange('organization', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
                <input
                    type="text"
                    placeholder="Software Engineer"
                    value={data.jobTitle || ''}
                    onChange={(e) => handleChange('jobTitle', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Website</label>
                <input
                    type="url"
                    placeholder="https://example.com"
                    value={data.website || ''}
                    onChange={(e) => handleChange('website', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                />
            </div>

            {/* Address fields could be collapsible if too many */}
            <details className="group">
                <summary className="cursor-pointer text-sm font-medium text-indigo-600 hover:text-indigo-700 py-2 select-none">
                    Add Address Details
                </summary>
                <div className="grid grid-cols-1 gap-4 pt-2">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Street</label>
                        <input type="text" value={data.street || ''} onChange={(e) => handleChange('street', e.target.value)} className="w-full px-4 py-2 text-base border border-gray-300 rounded-lg outline-none" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                            <input type="text" value={data.city || ''} onChange={(e) => handleChange('city', e.target.value)} className="w-full px-4 py-2 text-base border border-gray-300 rounded-lg outline-none" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Zip</label>
                            <input type="text" value={data.zip || ''} onChange={(e) => handleChange('zip', e.target.value)} className="w-full px-4 py-2 text-base border border-gray-300 rounded-lg outline-none" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                        <input type="text" value={data.country || ''} onChange={(e) => handleChange('country', e.target.value)} className="w-full px-4 py-2 text-base border border-gray-300 rounded-lg outline-none" />
                    </div>
                </div>
            </details>
        </div>
    );
}
