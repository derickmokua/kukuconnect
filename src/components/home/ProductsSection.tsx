import ProductCard from "@/components/products/ProductCard";
import prisma from "@/lib/prisma";

export default async function ProductsSection() {
    const products = await prisma.product.findMany();

    const chicks = products.filter(p => p.category === 'Chicks' || p.category === 'Meat Birds');
    const eggs = products.filter(p => p.category === 'Eggs');

    return (
        <section id="products" className="bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-kuku-black sm:text-4xl">Our Products</h2>
                    <p className="mt-4 text-xl text-gray-500">Premium quality poultry products for your farm and home.</p>
                </div>

                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-kuku-black mb-6 border-b border-gray-200 pb-2">Chicks & Birds</h3>
                    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {chicks.length > 0 ? (
                            chicks.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    id={product.id}
                                    name={product.name}
                                    price={product.price}
                                    category={product.category}
                                    imageSrc={product.imageSrc || undefined}
                                />
                            ))
                        ) : (
                            <p className="text-gray-500 col-span-full text-center">No products available in this category.</p>
                        )}
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl font-bold text-kuku-black mb-6 border-b border-gray-200 pb-2">Eggs</h3>
                    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {eggs.length > 0 ? (
                            eggs.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    id={product.id}
                                    name={product.name}
                                    price={product.price}
                                    category={product.category}
                                    imageSrc={product.imageSrc || undefined}
                                />
                            ))
                        ) : (
                            <p className="text-gray-500 col-span-full text-center">No products available in this category.</p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
