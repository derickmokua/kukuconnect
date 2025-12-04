"use client";

import { useState } from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import CheckoutForm from './CheckoutForm';

export default function CartDrawer() {
    const { items, removeFromCart, updateQuantity, isCartOpen, setIsCartOpen, cartTotal, submitOrder } = useCart();
    const [view, setView] = useState<'cart' | 'checkout'>('cart');

    if (!isCartOpen) return null;

    const handleClose = () => {
        setIsCartOpen(false);
        setTimeout(() => setView('cart'), 300); // Reset view after closing animation
    };

    return (
        <div className="fixed inset-0 z-50 overflow-hidden">
            <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity" onClick={handleClose} />

            <div className="fixed inset-y-0 right-0 max-w-md w-full flex">
                <div className="w-full h-full bg-white shadow-xl flex flex-col">
                    <div className="flex items-center justify-between px-4 py-6 bg-gray-50 border-b border-gray-200">
                        <h2 className="text-lg font-medium text-gray-900">
                            {view === 'cart' ? 'Shopping Cart' : 'Checkout'}
                        </h2>
                        <button
                            type="button"
                            className="text-gray-400 hover:text-gray-500"
                            onClick={handleClose}
                        >
                            <span className="sr-only">Close panel</span>
                            <X size={24} />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto">
                        {view === 'checkout' ? (
                            <CheckoutForm
                                onSubmit={submitOrder}
                                onCancel={() => setView('cart')}
                                total={cartTotal}
                            />
                        ) : (
                            <div className="p-4 h-full flex flex-col">
                                {items.length === 0 ? (
                                    <div className="h-full flex flex-col items-center justify-center text-center">
                                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-3xl">🛒</div>
                                        <p className="text-gray-500 text-lg">Your cart is empty.</p>
                                        <button
                                            onClick={handleClose}
                                            className="mt-4 text-kuku-green font-medium hover:text-green-700"
                                        >
                                            Continue Shopping
                                        </button>
                                    </div>
                                ) : (
                                    <ul className="space-y-6 flex-1">
                                        {items.map((item) => (
                                            <li key={item.id} className="flex py-2">
                                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 bg-gray-100 flex items-center justify-center text-2xl">
                                                    {/* Placeholder image logic if no src */}
                                                    {item.imageSrc ? (
                                                        <Image src={item.imageSrc} alt={item.name} width={96} height={96} className="h-full w-full object-cover object-center" />
                                                    ) : (
                                                        <span>📦</span>
                                                    )}
                                                </div>

                                                <div className="ml-4 flex flex-1 flex-col">
                                                    <div>
                                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                                            <h3>{item.name}</h3>
                                                            <p className="ml-4">{item.price}</p>
                                                        </div>
                                                        <p className="mt-1 text-sm text-gray-500">{item.category}</p>
                                                    </div>
                                                    <div className="flex flex-1 items-end justify-between text-sm">
                                                        <div className="flex items-center border border-gray-300 rounded-md">
                                                            <button
                                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                                className="p-1 hover:bg-gray-100 text-gray-600"
                                                                disabled={item.category === 'Chicks' && item.quantity <= 50}
                                                            >
                                                                <Minus size={16} />
                                                            </button>
                                                            <span className="px-4 font-medium text-gray-900">{item.quantity}</span>
                                                            <button
                                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                                className="p-1 hover:bg-gray-100 text-gray-600"
                                                            >
                                                                <Plus size={16} />
                                                            </button>
                                                        </div>

                                                        <button
                                                            type="button"
                                                            onClick={() => removeFromCart(item.id)}
                                                            className="font-medium text-red-600 hover:text-red-500 flex items-center gap-1"
                                                        >
                                                            <Trash2 size={16} />
                                                            <span>Remove</span>
                                                        </button>
                                                    </div>
                                                    {item.category === 'Chicks' && item.quantity < 50 && (
                                                        <p className="text-xs text-red-500 mt-1">Minimum order: 50 chicks</p>
                                                    )}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {items.length > 0 && (
                                    <div className="border-t border-gray-200 pt-6 mt-6">
                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                            <p>Subtotal</p>
                                            <p>KES {cartTotal.toLocaleString()}</p>
                                        </div>
                                        <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                                        <div className="mt-6">
                                            <button
                                                onClick={() => setView('checkout')}
                                                className="w-full flex items-center justify-center rounded-md border border-transparent bg-kuku-yellow px-6 py-3 text-base font-medium text-kuku-black shadow-sm hover:bg-yellow-400"
                                            >
                                                Checkout
                                            </button>
                                        </div>
                                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                            <p>
                                                or{' '}
                                                <button
                                                    type="button"
                                                    className="font-medium text-kuku-green hover:text-green-700"
                                                    onClick={handleClose}
                                                >
                                                    Continue Shopping
                                                    <span aria-hidden="true"> &rarr;</span>
                                                </button>
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
