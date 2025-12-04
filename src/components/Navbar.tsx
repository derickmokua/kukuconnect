"use client";

import Link from 'next/link';
import { Menu, ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';

import { useSession, signOut } from 'next-auth/react';

export default function Navbar() {
    const { setIsCartOpen, cartCount } = useCart();
    const { data: session } = useSession();

    return (
        <nav className="bg-kuku-white border-b border-gray-100 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-kuku-yellow rounded-full flex items-center justify-center">
                                <span className="text-kuku-black font-bold text-xl">K</span>
                            </div>
                            <span className="font-bold text-xl tracking-tight text-kuku-black">KukuConnect</span>
                        </Link>
                    </div>

                    <div className="hidden md:flex space-x-8 items-center">
                        <Link href="/" className="text-gray-700 hover:text-kuku-green font-medium transition-colors">
                            Home
                        </Link>
                        <Link href="#about" className="text-gray-700 hover:text-kuku-green font-medium transition-colors">
                            About Us
                        </Link>
                        <Link href="#products" className="text-gray-700 hover:text-kuku-green font-medium transition-colors">
                            Products
                        </Link>
                        <Link href="#testimonials" className="text-gray-700 hover:text-kuku-green font-medium transition-colors">
                            Testimonials
                        </Link>
                        <Link href="#support" className="text-gray-700 hover:text-kuku-green font-medium transition-colors">
                            Support
                        </Link>

                        {session ? (
                            <div className="flex items-center gap-4">
                                <span className="text-sm font-medium text-gray-700">Hi, {session.user?.name}</span>
                                <button
                                    onClick={() => signOut()}
                                    className="text-sm font-medium text-red-600 hover:text-red-500"
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <Link href="/login" className="text-gray-700 hover:text-kuku-green font-medium transition-colors">
                                Login
                            </Link>
                        )}

                        <button
                            onClick={() => setIsCartOpen(true)}
                            className="bg-kuku-yellow text-kuku-black px-4 py-2 rounded-full font-semibold hover:bg-yellow-400 transition-colors flex items-center gap-2"
                        >
                            <ShoppingCart size={18} />
                            <span>Cart ({cartCount})</span>
                        </button>
                    </div>

                    <div className="md:hidden flex items-center gap-4">
                        <button
                            onClick={() => setIsCartOpen(true)}
                            className="text-gray-700 hover:text-kuku-black relative"
                        >
                            <ShoppingCart size={24} />
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-kuku-yellow text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                    {cartCount}
                                </span>
                            )}
                        </button>
                        <button className="text-gray-700 hover:text-kuku-black">
                            <Menu size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
