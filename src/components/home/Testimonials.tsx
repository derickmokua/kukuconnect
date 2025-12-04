'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        content: "KukuConnect has transformed my poultry business. The quality of their chicks is unmatched, and the support team helped me reduce mortality rates significantly.",
        author: "John Doe",
        role: "Poultry Farmer, Kiambu",
        initials: "JD"
    },
    {
        id: 2,
        content: "I've been sourcing eggs from KukuConnect for my bakery for over a year now. The consistency and freshness are exactly what I need. Highly recommended!",
        author: "Mary Wanjiku",
        role: "Bakery Owner, Nairobi",
        initials: "MW"
    },
    {
        id: 3,
        content: "The expert support from KukuConnect is a game-changer. Whenever I have a question about vaccination or feeds, they are just a chat away.",
        author: "Peter Kamau",
        role: "Small Scale Farmer, Nakuru",
        initials: "PK"
    }
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    // Auto-advance every 5 seconds
    useEffect(() => {
        const timer = setInterval(nextTestimonial, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="testimonials" className="py-12 bg-gray-50 overflow-hidden md:py-20 lg:py-24">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-extrabold tracking-tight text-kuku-black sm:text-4xl">
                            Trusted by Farmers
                        </h2>
                    </div>

                    <div className="relative max-w-4xl mx-auto">
                        {/* Slider Content */}
                        <div className="overflow-hidden">
                            <div
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                            >
                                {testimonials.map((testimonial) => (
                                    <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                                        <blockquote className="mt-10">
                                            <div className="max-w-3xl mx-auto text-center text-xl md:text-2xl leading-9 font-medium text-kuku-black">
                                                <p>&ldquo;{testimonial.content}&rdquo;</p>
                                            </div>
                                            <footer className="mt-8">
                                                <div className="md:flex md:items-center md:justify-center">
                                                    <div className="md:flex-shrink-0">
                                                        <div className="mx-auto h-10 w-10 rounded-full bg-kuku-yellow flex items-center justify-center text-kuku-black font-bold">
                                                            {testimonial.initials}
                                                        </div>
                                                    </div>
                                                    <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                                                        <div className="text-base font-medium text-kuku-black">{testimonial.author}</div>
                                                        <svg className="hidden md:block mx-1 h-5 w-5 text-kuku-green" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M11 0h3L9 20H6l5-20z" />
                                                        </svg>
                                                        <div className="text-base font-medium text-gray-500">{testimonial.role}</div>
                                                    </div>
                                                </div>
                                            </footer>
                                        </blockquote>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Navigation Buttons */}
                        <button
                            onClick={prevTestimonial}
                            className="absolute top-1/2 left-0 -translate-y-1/2 -ml-4 md:-ml-12 p-2 rounded-full bg-white shadow-md text-gray-600 hover:text-kuku-green focus:outline-none"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={nextTestimonial}
                            className="absolute top-1/2 right-0 -translate-y-1/2 -mr-4 md:-mr-12 p-2 rounded-full bg-white shadow-md text-gray-600 hover:text-kuku-green focus:outline-none"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight size={24} />
                        </button>

                        {/* Dots Indicator */}
                        <div className="flex justify-center mt-8 space-x-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`h-2 w-2 rounded-full transition-colors ${index === currentIndex ? 'bg-kuku-green' : 'bg-gray-300'
                                        }`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
