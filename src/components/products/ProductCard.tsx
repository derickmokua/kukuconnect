"use client";

import { useState } from 'react';
import { ShoppingCart, Plus, Minus } from 'lucide-react';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
    id: string;
    name: string;
    price: string;
    imageSrc?: string;
    category: string;
}

export default function ProductCard({ id, name, price, imageSrc, category }: ProductCardProps) {
    const { addToCart } = useCart();
    const minQuantity = category === 'Chicks' ? 50 : 1;
    const [quantity, setQuantity] = useState(minQuantity);

    const handleIncrement = () => setQuantity(prev => prev + 1);
    const handleDecrement = () => setQuantity(prev => (prev > minQuantity ? prev - 1 : prev));

    const handleAddToCart = () => {
        addToCart({
            id,
            name,
            price,
            quantity,
            category,
            imageSrc
        });
        // Reset to minimum after adding
        setQuantity(minQuantity);
    };

    return (
        <div className="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-56 relative">
                {/* Placeholder for Product Image */}
                <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">
                    <span className="text-4xl">📦</span>
                </div>
            </div>
            <div className="flex-1 p-4 space-y-2 flex flex-col">
                <h3 className="text-lg font-medium text-kuku-black">
                    <a href="#">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {name}
                    </a>
                </h3>
                <p className="text-sm text-gray-500">{category}</p>
                <div className="flex-1 flex flex-col justify-end">
                    <p className="text-xl font-bold text-kuku-black">{price}</p>
                </div>

                <div className="mt-4 flex items-center justify-between border border-gray-300 rounded-md z-10 relative bg-white">
                    <button
                        onClick={handleDecrement}
                        className={`p-2 hover:bg-gray-100 text-gray-600 ${quantity <= minQuantity ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={quantity <= minQuantity}
                    >
                        <Minus size={16} />
                    </button>
                    <span className="px-4 font-medium text-gray-900">{quantity}</span>
                    <button
                        onClick={handleIncrement}
                        className="p-2 hover:bg-gray-100 text-gray-600"
                    >
                        <Plus size={16} />
                    </button>
                </div>
                {category === 'Chicks' && (
                    <p className="text-xs text-gray-500 mt-1">Min. order: 50 chicks</p>
                )}

                <button
                    onClick={handleAddToCart}
                    className="mt-2 w-full bg-kuku-yellow text-kuku-black py-2 px-4 rounded-md font-semibold hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2 z-10 relative"
                >
                    <ShoppingCart size={18} />
                    Add to Cart
                </button>
            </div>
        </div>
    );
}
