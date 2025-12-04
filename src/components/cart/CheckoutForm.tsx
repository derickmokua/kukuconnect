"use client";

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

interface CheckoutFormProps {
    onSubmit: (details: { name: string; email: string; phone: string; location: string }) => void;
    onCancel: () => void;
    total: number;
}

export default function CheckoutForm({ onSubmit, onCancel, total }: CheckoutFormProps) {
    const { data: session } = useSession();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        location: '',
    });

    useEffect(() => {
        if (session?.user) {
            setFormData(prev => ({
                ...prev,
                name: session.user?.name || '',
                email: session.user?.email || '',
                // Phone is not in default session user type, need to extend or fetch.
                // For now, let's assume it's not in session unless we customized it.
                // We customized authOptions to return id, email, name.
                // We can add phone to session callback in auth.ts if we want.
                // But for now, user can fill it.
            }));
        }
    }, [session]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className="p-4 h-full flex flex-col">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Checkout Details</h2>
            <p className="text-sm text-gray-500 mb-6">Please enter your details to complete the order.</p>

            <form onSubmit={handleSubmit} className="flex-1 flex flex-col space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Full Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-kuku-yellow focus:ring-kuku-yellow sm:text-sm p-2 border"
                        placeholder="John Doe"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-kuku-yellow focus:ring-kuku-yellow sm:text-sm p-2 border"
                        placeholder="john@example.com"
                    />
                </div>

                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-kuku-yellow focus:ring-kuku-yellow sm:text-sm p-2 border"
                        placeholder="+254 700 000 000"
                    />
                </div>

                <div className="flex-1"></div>

                <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between text-base font-medium text-gray-900 mb-4">
                        <p>Total to Pay</p>
                        <p>KES {total.toLocaleString()}</p>
                    </div>

                    <button
                        type="submit"
                        className="w-full flex items-center justify-center rounded-md border border-transparent bg-kuku-yellow px-6 py-3 text-base font-medium text-kuku-black shadow-sm hover:bg-yellow-400 mb-3"
                    >
                        Place Order
                    </button>

                    <button
                        type="button"
                        onClick={onCancel}
                        className="w-full flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50"
                    >
                        Back to Cart
                    </button>
                </div>
            </form>
        </div>
    );
}
