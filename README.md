# KukuConnect

KukuConnect is a modern e-commerce platform for poultry products, built with Next.js 14, Tailwind CSS, Prisma, and NextAuth.js.

## Features

- **User Authentication**: Register, Login, and Password Reset.
- **Product Catalog**: Browse chicks, eggs, and poultry products.
- **Shopping Cart**: Add items, adjust quantities, and checkout.
- **Order Management**: View order history and details.
- **Admin Features**: (Planned) Manage products and orders.

## Prerequisites

- Node.js 18+ installed.
- SQLite (for local database).

## Getting Started

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Environment Setup**:
    Create a `.env` file in the root directory (if not exists) and add:
    ```env
    DATABASE_URL="file:./dev.db"
    NEXTAUTH_SECRET="supersecret" # Change this in production
    NEXTAUTH_URL="http://localhost:3000"
    ```

3.  **Database Setup**:
    Run the following commands to set up the database and seed it with initial data:
    ```bash
    npx prisma migrate dev --name init
    npx prisma db seed
    ```

4.  **Run the Development Server**:
    ```bash
    npm run dev
    ```

5.  **Open the App**:
    Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `src/app`: Next.js App Router pages and API routes.
- `src/components`: Reusable UI components.
- `src/lib`: Utility functions and configurations (Prisma, Auth).
- `prisma`: Database schema and seed scripts.

## Technologies

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Prisma](https://www.prisma.io/)
- [NextAuth.js](https://next-auth.js.org/)
