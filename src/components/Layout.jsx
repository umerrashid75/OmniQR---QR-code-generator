import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Menu, X } from 'lucide-react';
import { cn } from '../utils/cn';

export function Layout({ children, activeType, onTypeSelect }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="flex h-screen bg-gray-50 overflow-hidden">
            {/* Mobile Menu Backdrop */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            {/* Sidebar - Mobile & Desktop */}
            <aside
                className={cn(
                    "fixed inset-y-0 left-0 z-50 transform md:relative md:translate-x-0 transition-transform duration-300 ease-in-out h-full border-r bg-white",
                    isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                <Sidebar
                    activeType={activeType}
                    onSelect={(id) => {
                        onTypeSelect(id);
                        setIsMobileMenuOpen(false);
                    }}
                />
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col h-full w-full relative overflow-hidden">
                {/* Mobile Header */}
                <header className="md:hidden bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between shrink-0">
                    <h1 className="text-lg font-semibold text-gray-800">OmniQR</h1>
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 -mr-2 text-gray-600 hover:text-gray-900"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </header>

                {/* Scrollable Content Area */}
                <main className="flex-1 overflow-y-auto p-4 md:p-8">
                    <div className="max-w-6xl mx-auto h-full">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
