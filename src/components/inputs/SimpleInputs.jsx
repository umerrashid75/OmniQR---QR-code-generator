import React from 'react';

export function UrlInput({ value, onChange }) {
    return (
        <div className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Website URL</label>
                <input
                    type="url"
                    placeholder="https://example.com"
                    value={value || ''}
                    onChange={(e) => onChange(e.target.value)}
                    className="w-full px-4 py-2 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                />
                <p className="mt-1 text-xs text-gray-500">Enter the full URL including https://</p>
            </div>
        </div>
    );
}

export function TextInput({ value, onChange }) {
    return (
        <div className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Text Content</label>
                <textarea
                    rows={4}
                    placeholder="Enter your text here..."
                    value={value || ''}
                    onChange={(e) => onChange(e.target.value)}
                    className="w-full px-4 py-2 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all resize-none"
                />
            </div>
        </div>
    );
}
