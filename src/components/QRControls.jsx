import React from 'react';

export function QRControls({ options, onChange }) {
    const handleChange = (field, value) => {
        onChange({ ...options, [field]: value });
    };

    return (
        <div className="space-y-6">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Colors</label>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="text-xs text-gray-500 block mb-1">Foreground</label>
                        <div className="flex items-center gap-2">
                            <input
                                type="color"
                                value={options.fgColor || '#000000'}
                                onChange={(e) => handleChange('fgColor', e.target.value)}
                                className="h-8 w-8 rounded cursor-pointer border-0 p-0"
                            />
                            <span className="text-xs font-mono text-gray-500">{options.fgColor || '#000000'}</span>
                        </div>
                    </div>
                    <div>
                        <label className="text-xs text-gray-500 block mb-1">Background</label>
                        <div className="flex items-center gap-2">
                            <input
                                type="color"
                                value={options.bgColor || '#ffffff'}
                                onChange={(e) => handleChange('bgColor', e.target.value)}
                                className="h-8 w-8 rounded cursor-pointer border-0 p-0 ring-1 ring-gray-200"
                            />
                            <span className="text-xs font-mono text-gray-500">{options.bgColor || '#ffffff'}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Error Correction</label>
                <div className="flex rounded-md shadow-sm" role="group">
                    {['L', 'M', 'Q', 'H'].map((level) => (
                        <button
                            key={level}
                            type="button"
                            onClick={() => handleChange('level', level)}
                            className={`px-4 py-2 text-sm font-medium border flex-1 first:rounded-l-lg last:rounded-r-lg ${options.level === level ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'}`}
                        >
                            {level}
                        </button>
                    ))}
                </div>
                <p className="mt-1 text-xs text-gray-500">Higher levels allow more damage but make the QR complex.</p>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Size (Margin)</label>
                <input
                    type="range"
                    min="0"
                    max="10"
                    value={options.margin !== undefined ? options.margin : 2}
                    onChange={(e) => handleChange('margin', parseInt(e.target.value, 10))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>None</span>
                    <span>Wide</span>
                </div>
            </div>
        </div>
    );
}
