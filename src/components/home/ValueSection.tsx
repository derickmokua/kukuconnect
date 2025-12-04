import { Heart, Users, Truck } from 'lucide-react';

export default function ValueSection() {
    const values = [
        {
            name: 'Health Focus',
            description: 'Our chicks are vaccinated and raised with the highest biosecurity standards to ensure a healthy flock.',
            icon: Heart,
        },
        {
            name: 'Expert Support',
            description: 'Get 24/7 access to our team of poultry experts and a comprehensive knowledge base.',
            icon: Users,
        },
        {
            name: 'Fast Delivery',
            description: 'Reliable and safe delivery of chicks and eggs right to your farm or nearest pickup point.',
            icon: Truck,
        },
    ];

    return (
        <div className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-base text-kuku-yellow font-semibold tracking-wide uppercase">Why Choose Us</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-kuku-black sm:text-4xl">
                        The KukuConnect Advantage
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        We provide more than just poultry products; we provide a partnership for your success.
                    </p>
                </div>

                <div className="mt-10">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
                        {values.map((value) => (
                            <div key={value.name} className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-kuku-green text-white">
                                        <value.icon className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-kuku-black">{value.name}</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">{value.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
}
