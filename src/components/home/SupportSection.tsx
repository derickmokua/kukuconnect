import { BookOpen, Phone, Mail, MessageCircle } from 'lucide-react';

export default function SupportSection() {
    const articles = [
        {
            title: "Brooding 101: The First 7 Days",
            description: "Learn the essential steps to ensure your chicks survive and thrive during the critical first week.",
            category: "Guide",
        },
        {
            title: "Vaccination Schedule",
            description: "A comprehensive guide to vaccinating your poultry against common diseases like Newcastle and Gumboro.",
            category: "Health",

        },
        {
            title: "Switching Feeds Correctly",
            description: "How to transition from starter to grower mash without affecting your birds' growth rate.",
            category: "Nutrition",
        },
    ];

    return (
        <section id="support" className="bg-white">
            <div className="bg-kuku-green py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">KukuCare Support Hub</h2>
                    <p className="mt-4 text-xl text-green-100">Expert advice and resources for your poultry journey.</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
                        <div className="mx-auto h-12 w-12 bg-kuku-yellow rounded-full flex items-center justify-center text-kuku-black mb-4">
                            <Phone size={24} />
                        </div>
                        <h3 className="text-lg font-medium text-kuku-black">Call Us</h3>
                        <p className="mt-2 text-gray-500">+254 700 000 000</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
                        <div className="mx-auto h-12 w-12 bg-kuku-yellow rounded-full flex items-center justify-center text-kuku-black mb-4">
                            <Mail size={24} />
                        </div>
                        <h3 className="text-lg font-medium text-kuku-black">Email Us</h3>
                        <p className="mt-2 text-gray-500">support@kukuconnect.com</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
                        <div className="mx-auto h-12 w-12 bg-kuku-yellow rounded-full flex items-center justify-center text-kuku-black mb-4">
                            <MessageCircle size={24} />
                        </div>
                        <h3 className="text-lg font-medium text-kuku-black">Chat with KukuCare</h3>
                        <p className="mt-2 text-gray-500">Available 24/7 via Chatbot</p>
                    </div>
                </div>

                <h3 className="text-2xl font-bold text-kuku-black mb-6 flex items-center gap-2">
                    <BookOpen className="text-kuku-green" />
                    Support Library
                </h3>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {articles.map((article) => (
                        <div key={article.title} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-6">
                            <div className="text-sm font-medium text-kuku-green mb-2">{article.category}</div>
                            <h4 className="text-xl font-semibold text-kuku-black mb-2">{article.title}</h4>
                            <p className="text-gray-500 mb-4">{article.description}</p>
                            <a href="#" className="text-kuku-yellow font-medium hover:text-yellow-600">Read Article &rarr;</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
