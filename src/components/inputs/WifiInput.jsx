import React from 'react';
import { Eye, EyeOff } from 'lucide-react';

export function WifiInput({ data, onChange }) {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleChange = (field, value) => {
        onChange({ ...data, [field]: value });
    };

    return (
        <div className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Network Name (SSID)</label>
                <input
                    type="text"
                    placeholder="MyHomeWifi"
                    value={data.ssid || ''}
                    onChange={(e) => handleChange('ssid', e.target.value)}
                    className="w-full px-4 py-2 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Security Type</label>
                <select
                    value={data.encryption || 'WPA'}
                    onChange={(e) => handleChange('encryption', e.target.value)}
                    className="w-full px-4 py-2 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none bg-white"
                >
                    <option value="WPA">WPA/WPA2</option>
                    <option value="WEP">WEP</option>
                    <option value="nopass">No Password</option>
                </select>
            </div>

            {data.encryption !== 'nopass' && (
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter password"
                            value={data.password || ''}
                            onChange={(e) => handleChange('password', e.target.value)}
                            className="w-full px-4 py-2 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none pr-10"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>
                </div>
            )}

            <div className="flex items-center">
                <input
                    id="hidden-network"
                    type="checkbox"
                    checked={data.hidden || false}
                    onChange={(e) => handleChange('hidden', e.target.checked)}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="hidden-network" className="ml-2 block text-sm text-gray-900">
                    Hidden Network
                </label>
            </div>
        </div>
    );
}
