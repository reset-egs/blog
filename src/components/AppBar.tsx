// src/components/AppBar.tsx
import React from 'react';
import Link from 'next/link';

interface AppBarProps {
    title?: string;
}

const AppBar: React.FC<AppBarProps> = ({ title = "My Blog" }) => {
    return (
        <header className="w-full bg-white border-b-2 border-black mb-8">
            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo/Title */}
                    <Link href="/" className="hover:translate-y-[-2px] transition-transform">
                        <h1 className="text-2xl font-bold tracking-tighter">{title}</h1>
                    </Link>

                    {/* Navigation */}
                    <nav className="flex gap-6">
                        <Link
                            href="/"
                            className="px-4 py-2 border-black border-2 bg-white hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all font-medium"
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className="px-4 py-2 border-black border-2 bg-yellow-300 hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all font-medium"
                        >
                            About
                        </Link>
                        <Link
                            href="/contact"
                            className="px-4 py-2 border-black border-2 bg-pink-300 hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all font-medium"
                        >
                            Contact
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default AppBar;