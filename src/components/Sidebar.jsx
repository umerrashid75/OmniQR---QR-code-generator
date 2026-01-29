import React from 'react';
import {
    Link as LinkIcon,
    Wifi,
    CreditCard,
    Contact,
    Mail,
    MapPin,
    MessageSquare,
    Smartphone,
    Type
} from 'lucide-react';
import { cn } from '../utils/cn';

export const QR_TYPES = [
    { id: 'url', label: 'Website URL', icon: LinkIcon },
    { id: 'text', label: 'Plain Text', icon: Type },
    { id: 'wifi', label: 'Wi-Fi', icon: Wifi },
    { id: 'vcard', label: 'vCard Contact', icon: Contact },
    { id: 'email', label: 'Email', icon: Mail },
    { id: 'sms', label: 'SMS Message', icon: Smartphone },
    { id: 'whatsapp', label: 'WhatsApp', icon: MessageSquare },
    { id: 'payment', label: 'Payment', icon: CreditCard },
    { id: 'location', label: 'Location', icon: MapPin },
];

export function Sidebar({ activeType, onSelect, className }) {
    return (
        <div className={cn("bg-white text-gray-800 w-full md:w-64 flex-shrink-0 border-r border-gray-200 overflow-y-auto h-full", className)}>
            <div className="p-4 border-b border-gray-100">
                <h1 className="text-xl font-bold flex items-center gap-2 text-indigo-600">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                    </svg>
                    OmniQR
                </h1>
            </div>
            <nav className="p-2 space-y-1">
                {QR_TYPES.map((type) => {
                    const Icon = type.icon;
                    return (
                        <button
                            key={type.id}
                            onClick={() => onSelect(type.id)}
                            className={cn(
                                "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200",
                                activeType === type.id
                                    ? "bg-indigo-50 text-indigo-700 shadow-sm"
                                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                            )}
                        >
                            <Icon className={cn("w-5 h-5", activeType === type.id ? "text-indigo-600" : "text-gray-400")} />
                            {type.label}
                        </button>
                    );
                })}
            </nav>

            <div className="p-4 mt-auto border-t border-gray-100 text-xs text-gray-400 text-center">
                &copy; {new Date().getFullYear()} OmniQR Generator
            </div>
        </div>
    );
}
