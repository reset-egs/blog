// src/components/AppBar.tsx
'use client';

import Link from "next/link";
import {useState} from "react";

export default function AppBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="border-b-2 border-black sticky top-0 bg-white z-50">
            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <Link href="/" className="inline-block">
                        <h2 className="text-xl font-bold tracking-tighter flex items-center">
                            <span
                                className="border-2 border-black px-1 bg-cyan-300 shadow-[2px_2px_0px_rgba(0,0,0,0.3)]">ctrl</span>
                            <span className="mx-1 font-bold">+</span>
                            <span
                                className="border-2 border-black px-1 bg-yellow-300 shadow-[2px_2px_0px_rgba(0,0,0,0.3)]">alt</span>
                            <span className="mx-1 font-bold">+</span>
                            <span
                                className="border-2 border-black px-1 bg-pink-300 shadow-[2px_2px_0px_rgba(0,0,0,0.3)]">reset</span>
                        </h2>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex gap-6">
                        <Link href="/" className="hover:underline font-medium">Home</Link>
                        <Link href="/about" className="hover:underline font-medium">About</Link>
                        <Link href="/blog" className="hover:underline font-medium">Blog</Link>
                        <Link href="/contact" className="hover:underline font-medium">Contact</Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden border-2 border-black p-1.5 hover:bg-yellow-100"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                             viewBox="0 0 16 16">
                            {menuOpen ? (
                                <path
                                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            ) : (
                                <path
                                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {menuOpen && (
                    <nav className="md:hidden py-3 mt-2 border-t-2 border-black">
                        <ul className="flex flex-col space-y-2">
                            <li>
                                <Link
                                    href="/"
                                    className="block py-2 px-1 hover:bg-yellow-100"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about"
                                    className="block py-2 px-1 hover:bg-yellow-100"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/blog"
                                    className="block py-2 px-1 hover:bg-yellow-100"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="block py-2 px-1 hover:bg-yellow-100"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>
                )}
            </div>
        </header>
    );
}