"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

export interface CartItem {
    id: string;
    name: string;
    price: string;
    quantity: number;
    category: string;
    imageSrc?: string;
}

interface CartContextType {
    items: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: string) => void;
    updateQuantity: (id: string, quantity: number) => void;
    clearCart: () => void;
    isCartOpen: boolean;
    setIsCartOpen: (isOpen: boolean) => void;
    cartCount: number;
    cartTotal: number;
    submitOrder: (details: { name: string; email: string; phone: string; location: string }) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const { data: session } = useSession();
    const [items, setItems] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Determine storage key based on user session
    const cartKey = session?.user?.id ? `kukuconnect-cart-${session.user.id}` : 'kukuconnect-cart-guest';

    // Load cart from local storage when session changes or on mount
    useEffect(() => {
        const savedCart = localStorage.getItem(cartKey);
        if (savedCart) {
            try {
                setItems(JSON.parse(savedCart));
            } catch (error) {
                console.error("Failed to parse cart from local storage", error);
                setItems([]);
            }
        } else {
            setItems([]);
        }
    }, [cartKey]);

    // Save cart to local storage whenever it changes
    useEffect(() => {
        localStorage.setItem(cartKey, JSON.stringify(items));
    }, [items, cartKey]);

    const addToCart = (newItem: CartItem) => {
        setItems((prevItems) => {
            const existingItemIndex = prevItems.findIndex((item) => item.id === newItem.id);
            if (existingItemIndex > -1) {
                const updatedItems = [...prevItems];
                updatedItems[existingItemIndex].quantity += newItem.quantity;
                return updatedItems;
            } else {
                return [...prevItems, newItem];
            }
        });
        setIsCartOpen(true);
    };

    const removeFromCart = (id: string) => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const updateQuantity = (id: string, quantity: number) => {
        if (quantity < 1) return;
        setItems((prevItems) =>
            prevItems.map((item) => (item.id === id ? { ...item, quantity } : item))
        );
    };

    const clearCart = () => {
        setItems([]);
    };

    const cartCount = items.reduce((total, item) => total + item.quantity, 0);

    const cartTotal = items.reduce((total, item) => {
        // Extract numeric price from string (e.g., "KES 100" -> 100)
        const priceValue = parseInt(item.price.replace(/[^0-9]/g, ''), 10) || 0;
        return total + priceValue * item.quantity;
    }, 0);

    const submitOrder = async (details: { name: string; email: string; phone: string; location: string }) => {
        try {
            const response = await fetch('/api/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    items,
                    total: cartTotal,
                    details,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Order Submitted:", data);
                // alert(`Thank you ${details.name}! Your order has been placed successfully.`);
                clearCart();
                setIsCartOpen(false);
                // Redirect to order details
                if (data.orderId) {
                    window.location.href = `/orders/${data.orderId}`;
                }
            } else {
                const errorData = await response.json();
                alert(`Failed to place order: ${errorData.message}`);
            }
        } catch (error) {
            console.error("Error submitting order:", error);
            alert("An error occurred while placing your order. Please try again.");
        }
    };

    return (
        <CartContext.Provider
            value={{
                items,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                isCartOpen,
                setIsCartOpen,
                cartCount,
                cartTotal,
                submitOrder,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}
