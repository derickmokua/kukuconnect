import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function OrdersPage() {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
        redirect("/login");
    }

    const orders = await prisma.order.findMany({
        where: {
            userId: session.user.id,
        },
        orderBy: {
            createdAt: "desc",
        },
        include: {
            items: true,
        },
    });

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Your Orders</h1>

                {orders.length === 0 ? (
                    <div className="bg-white shadow overflow-hidden sm:rounded-lg p-6 text-center">
                        <p className="text-gray-500 mb-4">You haven&apos;t placed any orders yet.</p>
                        <Link href="/" className="text-kuku-green font-medium hover:text-green-500">
                            Start Shopping
                        </Link>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {orders.map((order) => (
                            <div key={order.id} className="bg-white shadow overflow-hidden sm:rounded-lg">
                                <div className="px-4 py-5 sm:px-6 flex justify-between items-center bg-gray-50 border-b border-gray-200">
                                    <div>
                                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                                            Order #{order.id.slice(-6).toUpperCase()}
                                        </h3>
                                        <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                            Placed on {new Date(order.createdAt).toLocaleDateString()}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${order.status === 'COMPLETED' ? 'bg-green-100 text-green-800' :
                                            order.status === 'PENDING' ? 'bg-yellow-100 text-yellow-800' :
                                                'bg-gray-100 text-gray-800'
                                            }`}>
                                            {order.status}
                                        </span>
                                        <Link href={`/orders/${order.id}`} className="text-kuku-green hover:text-green-500 font-medium text-sm">
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                                <div className="px-4 py-5 sm:p-6">
                                    <div className="flex justify-between items-center">
                                        <p className="text-gray-700">Total Items: {order.items.reduce((acc, item) => acc + item.quantity, 0)}</p>
                                        <p className="text-xl font-bold text-gray-900">KES {order.total.toLocaleString()}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
