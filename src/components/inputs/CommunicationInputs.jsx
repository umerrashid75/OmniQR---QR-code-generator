import React from 'react';

export function EmailInput({ data, onChange }) {
    const handleChange = (field, value) => onChange({ ...data, [field]: value });
    return (
        <div className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input type="email" placeholder="user@example.com" value={data.email || ''} onChange={(e) => handleChange('email', e.target.value)} className="w-full px-4 py-2 text-base border border-gray-300 rounded-lg outline-none" />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input type="text" placeholder="Inquiry" value={data.subject || ''} onChange={(e) => handleChange('subject', e.target.value)} className="w-full px-4 py-2 text-base border border-gray-300 rounded-lg outline-none" />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Body</label>
                <textarea rows={4} placeholder="Hello..." value={data.body || ''} onChange={(e) => handleChange('body', e.target.value)} className="w-full px-4 py-2 text-base border border-gray-300 rounded-lg outline-none resize-none" />
            </div>
        </div>
    );
}

export function SmsInput({ data, onChange }) {
    const handleChange = (field, value) => onChange({ ...data, [field]: value });
    return (
        <div className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input type="tel" placeholder="+1234567890" value={data.phone || ''} onChange={(e) => handleChange('phone', e.target.value)} className="w-full px-4 py-2 text-base border border-gray-300 rounded-lg outline-none" />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea rows={4} placeholder="Hello..." value={data.message || ''} onChange={(e) => handleChange('message', e.target.value)} className="w-full px-4 py-2 text-base border border-gray-300 rounded-lg outline-none resize-none" />
            </div>
        </div>
    );
}

export function WhatsappInput({ data, onChange }) {
    const handleChange = (field, value) => onChange({ ...data, [field]: value });
    return (
        <div className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp Number</label>
                <input type="tel" placeholder="+1234567890" value={data.phone || ''} onChange={(e) => handleChange('phone', e.target.value)} className="w-full px-4 py-2 text-base border border-gray-300 rounded-lg outline-none" />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea rows={4} placeholder="Hello..." value={data.message || ''} onChange={(e) => handleChange('message', e.target.value)} className="w-full px-4 py-2 text-base border border-gray-300 rounded-lg outline-none resize-none" />
            </div>
        </div>
    );
}
