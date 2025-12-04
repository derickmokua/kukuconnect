import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const products = [
        {
            name: 'Day-Old Chicks',
            description: 'High-quality day-old chicks, vaccinated and ready for rearing.',
            price: 'KES 100',
            category: 'Chicks',
            minQuantity: 50,
            imageSrc: '/images/chicks.jpg', // Placeholder path
        },
        {
            name: 'Broilers',
            description: 'Fast-growing broilers for meat production.',
            price: 'KES 120',
            category: 'Chicks',
            minQuantity: 50,
            imageSrc: '/images/broilers.jpg',
        },
        {
            name: 'Layers',
            description: 'High-yield layers for egg production.',
            price: 'KES 150',
            category: 'Chicks',
            minQuantity: 50,
            imageSrc: '/images/layers.jpg',
        },
        {
            name: 'Tray of Eggs',
            description: 'Fresh farm eggs, tray of 30.',
            price: 'KES 350',
            category: 'Eggs',
            minQuantity: 1,
            imageSrc: '/images/eggs.jpg',
        },
        {
            name: 'Kienyeji Eggs',
            description: 'Organic Kienyeji eggs, tray of 30.',
            price: 'KES 450',
            category: 'Eggs',
            minQuantity: 1,
            imageSrc: '/images/kienyeji.jpg',
        },
    ]

    for (const product of products) {
        await prisma.product.create({
            data: product,
        })
    }

    console.log('Seed data inserted')
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
