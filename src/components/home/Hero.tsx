import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
    return (
        <div className="relative bg-kuku-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="relative z-10 pb-8 bg-kuku-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="sm:text-center lg:text-left">
                            <h1 className="text-4xl tracking-tight font-extrabold text-kuku-black sm:text-5xl md:text-6xl">
                                <span className="block xl:inline">KukuConnect: The Future of</span>{' '}
                                <span className="block text-kuku-yellow xl:inline">Poultry Farming</span>
                            </h1>
                            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                Plugs You In. Get access to premium quality chicks, fertilized eggs, and expert support to grow your poultry business.
                            </p>
                            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                <div className="rounded-md shadow">
                                    <Link
                                        href="/products"
                                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-kuku-black bg-kuku-yellow hover:bg-yellow-400 md:py-4 md:text-lg md:px-10 transition-colors"
                                    >
                                        Shop Now
                                    </Link>
                                </div>
                                <div className="mt-3 sm:mt-0 sm:ml-3">
                                    <Link
                                        href="/support"
                                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-kuku-green bg-green-100 hover:bg-green-200 md:py-4 md:text-lg md:px-10 transition-colors"
                                    >
                                        Get Support
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-gray-100 flex items-center justify-center">
                {/* Placeholder for Hero Image */}
                <div className="text-gray-400 flex flex-col items-center">
                    <span className="text-6xl">🐥</span>
                    <span className="mt-2 text-sm font-medium">Hero Image Placeholder</span>
                </div>
            </div>
        </div>
    );
}
