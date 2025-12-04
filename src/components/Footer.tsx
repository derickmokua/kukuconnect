import Link from 'next/link';
import { Facebook, Instagram, Twitter, Phone, MessageCircle, Video } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-kuku-black text-white pt-12 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 bg-kuku-yellow rounded-full flex items-center justify-center">
                                <span className="text-kuku-black font-bold text-xl">K</span>
                            </div>
                            <span className="font-bold text-xl tracking-tight text-white">KukuConnect</span>
                        </Link>
                        <p className="text-gray-400 text-sm">
                            The Future of Poultry Farming, Plugs You In. Quality chicks, eggs, and expert support for modern farmers.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-kuku-yellow font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/products" className="hover:text-white transition-colors">Products</Link></li>
                            <li><Link href="/#testimonials" className="hover:text-white transition-colors">Testimonials</Link></li>
                            <li><Link href="/support" className="hover:text-white transition-colors">Support</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-kuku-yellow font-semibold mb-4">Products</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="/products" className="hover:text-white transition-colors">Day-Old Chicks</Link></li>
                            <li><Link href="/products" className="hover:text-white transition-colors">Fertilized Eggs</Link></li>
                            <li><Link href="/products" className="hover:text-white transition-colors">Table Eggs</Link></li>
                            <li><Link href="/products" className="hover:text-white transition-colors">Grown Birds</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-kuku-yellow font-semibold mb-4">Connect With Us</h3>
                        <div className="flex space-x-4 mb-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="WhatsApp"><MessageCircle size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="TikTok"><Video size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="X (Twitter)"><Twitter size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram"><Instagram size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Call Us"><Phone size={20} /></a>
                        </div>
                        <p className="text-gray-400 text-sm">
                            Email: hello@kukuconnect.com<br />
                            Phone: +254 700 000 000
                        </p>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} KukuConnect. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
