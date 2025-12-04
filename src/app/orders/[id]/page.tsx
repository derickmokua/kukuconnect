import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";
import Link from "next/link";
import { redirect, notFound } from "next/navigation";

export default async function OrderDetailsPage({ params }: { params: { id: string } }) {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
        redirect("/login");
    }

    const order = await prisma.order.findUnique({
        where: {
            id: params.id,
        },
        include: {
            items: {
                include: {
                    product: true,
                },
            },
        },
    });

    if (!order) {
        notFound();
    }

    if (order.userId !== session.user.id) {
        redirect("/orders"); // Unauthorized access
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-6">
                    <Link href="/orders" className="text-gray-500 hover:text-gray-700 text-sm font-medium flex items-center gap-1">
                        &larr; Back to Orders
                    </Link>
                </div>

                <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                    <div className="px-4 py-5 sm:px-6 border-b border-gray-200 flex justify-between items-center">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">
                                Order Details
                            </h1>
                            <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                Order #{order.id}
                            </p>
                        </div>
                        <span className={`px-3 py-1 inline-flex text-sm leading-5 font-semibold rounded-full ${order.status === 'COMPLETED' ? 'bg-green-100 text-green-800' :
                                order.status === 'PENDING' ? 'bg-yellow-100 text-yellow-800' :
                                    'bg-gray-100 text-gray-800'
                            }`}>
                            {order.status}
                        </span>
                    </div>

                    <div className="px-4 py-5 sm:p-6">
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Items</h3>
                        <ul className="divide-y divide-gray-200">
                            {order.items.map((item) => (
                                <li key={item.id} className="py-4 flex justify-between">
                                    <div className="flex gap-4">
                                        <div className="flex-1">
                                            <p className="text-sm font-medium text-gray-900">{item.product.name}</p>
                                            <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                                        </div>
                                    </div>
                                    <p className="text-sm font-medium text-gray-900">KES {(item.price * item.quantity).toLocaleString()}</p>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-8 border-t border-gray-200 pt-6">
                            <div className="flex justify-between text-base font-medium text-gray-900">
                                <p>Total</p>
                                <p>KES {order.total.toLocaleString()}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
