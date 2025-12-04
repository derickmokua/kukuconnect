import Image from 'next/image';

export default function AboutSection() {
    return (
        <section id="about" className="bg-white">
            {/* Hero Section */}
            <div className="bg-kuku-yellow py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-extrabold text-kuku-black sm:text-5xl">About KukuConnect</h2>
                    <p className="mt-4 text-xl text-kuku-black max-w-2xl mx-auto">
                        Empowering poultry farmers with quality breeds, expert knowledge, and reliable support.
                    </p>
                </div>
            </div>

            {/* Mission & Vision */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-3xl font-bold text-kuku-black mb-4">Our Mission</h3>
                        <p className="text-lg text-gray-600 mb-6">
                            To revolutionize poultry farming in the region by providing farmers with accessible, high-quality inputs and the technical know-how to succeed. We believe in sustainable farming practices that benefit both the farmer and the community.
                        </p>
                        <h3 className="text-3xl font-bold text-kuku-black mb-4">Our Vision</h3>
                        <p className="text-lg text-gray-600">
                            To be the leading partner for poultry farmers, creating a thriving ecosystem where every farmer has the tools and support to grow a profitable business.
                        </p>
                    </div>
                    <div className="relative h-64 md:h-96 bg-gray-100 rounded-lg flex items-center justify-center">
                        {/* Placeholder for About Image */}
                        <div className="text-gray-400 flex flex-col items-center">
                            <span className="text-6xl">🚜</span>
                            <span className="mt-2 text-sm font-medium">Farm Image Placeholder</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <div className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-kuku-black">Meet Our Team</h3>
                        <p className="mt-4 text-lg text-gray-500">The experts behind KukuConnect.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Team Member 1 */}
                        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">👨‍🌾</div>
                            <h4 className="text-xl font-semibold text-kuku-black">James Mwangi</h4>
                            <p className="text-kuku-green font-medium">Founder & CEO</p>
                            <p className="mt-2 text-gray-500 text-sm">Poultry expert with over 15 years of experience in the industry.</p>
                        </div>
                        {/* Team Member 2 */}
                        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">👩‍⚕️</div>
                            <h4 className="text-xl font-semibold text-kuku-black">Dr. Sarah Kamau</h4>
                            <p className="text-kuku-green font-medium">Head Veterinarian</p>
                            <p className="mt-2 text-gray-500 text-sm">Ensures the health and vaccination standards of all our flocks.</p>
                        </div>
                        {/* Team Member 3 */}
                        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">🚚</div>
                            <h4 className="text-xl font-semibold text-kuku-black">David Ochieng</h4>
                            <p className="text-kuku-green font-medium">Logistics Manager</p>
                            <p className="mt-2 text-gray-500 text-sm">Coordinates fast and safe delivery to farmers across the country.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
