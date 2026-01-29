import React, { useState } from 'react';

// Payment Type Selector inside the Payment Input
export function PaymentInput({ data, onChange }) {
    const [subType, setSubType] = useState('upi');

    const handleSubTypeChange = (type) => {
        setSubType(type);
        onChange({ ...data, paymentType: type });
    };

    const handleChange = (field, value) => {
        onChange({ ...data, [field]: value, paymentType: subType });
    };

    return (
        <div className="space-y-6">
            <div className="flex space-x-2 border-b border-gray-200 pb-2">
                {['upi', 'crypto', 'paypal'].map(type => (
                    <button
                        key={type}
                        onClick={() => handleSubTypeChange(type)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-colors ${subType === type ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                        {type}
                    </button>
                ))}
            </div>

            {subType === 'upi' && (
                <div className="space-y-4">
                    <div><label className="block text-sm font-medium text-gray-700 mb-1">Payee VPA (UPI ID)</label><input type="text" placeholder="user@upi" value={data.pa || ''} onChange={(e) => handleChange('pa', e.target.value)} className="w-full px-4 py-2 text-base border border-gray-300 rounded-lg outline-none" /></div>
                    <div><label className="block text-sm font-medium text-gray-700 mb-1">Payee Name</label><input type="text" placeholder="John Doe" value={data.pn || ''} onChange={(e) => handleChange('pn', e.target.value)} className="w-full px-4 py-2 text-base border border-gray-300 rounded-lg outline-none" /></div>
                    <div className="grid grid-cols-2 gap-4">
                        <div><label className="block text-sm font-medium text-gray-700 mb-1">Amount</label><input type="number" placeholder="0.00" value={data.am || ''} onChange={(e) => handleChange('am', e.target.value)} className="w-full px-4 py-2 text-base border border-gray-300 rounded-lg outline-none" /></div>
                        <div><label className="block text-sm font-medium text-gray-700 mb-1">Currency</label><input type="text" value="INR" disabled className="w-full px-4 py-2 text-base border border-gray-200 bg-gray-50 text-gray-500 rounded-lg" /></div>
                    </div>
                </div>
            )}

            {subType === 'crypto' && (
                <div className="space-y-4">
                    <div><label className="block text-sm font-medium text-gray-700 mb-1">Cryptocurrency</label>
                        <select value={data.currency || 'bitcoin'} onChange={(e) => handleChange('currency', e.target.value)} className="w-full px-4 py-2 text-base border border-gray-300 rounded-lg outline-none bg-white">
                            <option value="bitcoin">Bitcoin (BTC)</option>
                            <option value="ethereum">Ethereum (ETH)</option>
                            <option value="litecoin">Litecoin (LTC)</option>
                        </select>
                    </div>
                    <div><label className="block text-sm font-medium text-gray-700 mb-1">Wallet Address</label><input type="text" placeholder="Address" value={data.address || ''} onChange={(e) => handleChange('address', e.target.value)} className="w-full px-4 py-2 text-base border border-gray-300 rounded-lg outline-none font-mono text-sm" /></div>
                    <div><label className="block text-sm font-medium text-gray-700 mb-1">Amount</label><input type="number" step="any" placeholder="0.00" value={data.amount || ''} onChange={(e) => handleChange('amount', e.target.value)} className="w-full px-4 py-2 text-base border border-gray-300 rounded-lg outline-none" /></div>
                </div>
            )}

            {subType === 'paypal' && (
                <div className="space-y-4">
                    <div><label className="block text-sm font-medium text-gray-700 mb-1">PayPal Username</label><input type="text" placeholder="username" value={data.username || ''} onChange={(e) => handleChange('username', e.target.value)} className="w-full px-4 py-2 text-base border border-gray-300 rounded-lg outline-none" /></div>
                    <div className="grid grid-cols-2 gap-4">
                        <div><label className="block text-sm font-medium text-gray-700 mb-1">Amount</label><input type="number" placeholder="0.00" value={data.amount || ''} onChange={(e) => handleChange('amount', e.target.value)} className="w-full px-4 py-2 text-base border border-gray-300 rounded-lg outline-none" /></div>
                        <div><label className="block text-sm font-medium text-gray-700 mb-1">Currency</label>
                            <select value={data.currency || 'USD'} onChange={(e) => handleChange('currency', e.target.value)} className="w-full px-4 py-2 text-base border border-gray-300 rounded-lg outline-none bg-white">
                                <option value="USD">USD</option>
                                <option value="EUR">EUR</option>
                                <option value="GBP">GBP</option>
                            </select>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
