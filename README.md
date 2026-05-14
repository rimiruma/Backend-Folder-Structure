# 🛒 Daraz Clone - Multi-Vendor E-commerce Platform

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css)

A modern, fully responsive, and premium multi-vendor e-commerce platform inspired by **Daraz Bangladesh**. Built with the latest web technologies to provide a blazing fast and beautiful shopping experience.

---

## ✨ Features

- **Premium UI Design**: Clean, modern, and beautiful interface with Daraz's signature `#F85606` primary color.
- **Responsive Layout**: Seamlessly adapts to desktop, tablet, and mobile devices.
- **Dynamic Navbar & Footer**: Authentic e-commerce navigation with sticky search bars, dynamic categories, and multi-column footers.
- **Seller Dashboard**: A dedicated dashboard interface for sellers to manage and publish products.
- **Beginner Friendly Code**: Uses straightforward native React hooks (`useState`) for state management—clean, lightweight, and easy to understand without heavy third-party libraries.
- **Optimized Performance**: Built with Next.js App Router for cutting-edge server-side rendering and static generation.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 🚀 Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites
Make sure you have Node.js installed (v18+ recommended).

### Installation

1. **Navigate to the project directory**:
   ```bash
   cd backend-folder-structure
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open the application**:
   Open [http://localhost:3000](http://localhost:3000) in your browser to see the live result.

---

## 📂 Project Structure

- `app/` - Core Next.js App Router files.
  - `add-product/` - Premium Add Product dashboard page with native React state management.
  - `layout.tsx` - Root layout containing the global Navbar and Footer.
  - `page.tsx` - The main landing page placeholder.
- `components/` - Reusable UI components.
  - `Navbar.tsx` - Daraz-style top navigation bar with category menus.
  - `Footer.tsx` - Multi-column responsive footer with custom SVG social icons.

---

## 🎨 Design System

- **Primary Brand Color**: `#F85606` (Daraz Orange)
- **Backgrounds**: `#f4f4f6` (Light Gray) & Pure White
- **Typography**: Geist Sans & Geist Mono (Optimized natively by Next.js)

---

## 📄 License

This project is completely open-source and free to use.

---

## 📚 Database Concepts (Q&A)

Here are 10 fundamental database questions explained in a simple, beginner-friendly way!

### 1. What is the difference between Primary Key and Foreign Key?
- **Primary Key**: Think of it as a student ID number. It uniquely identifies a specific row in a table. There can only be one Primary Key per table, and it cannot be empty (null).
- **Foreign Key**: Think of it as a reference to another table's Primary Key. It connects two tables together. For example, an `Order` table might have a `user_id` Foreign Key that points back to the `User` table so we know who made the order.

### 2. Why is normalization important?
Normalization is like organizing your closet. It helps eliminate duplicate data and organizes data logically so that when you need to update something, you only have to do it in one place. It saves storage space and prevents data from becoming inconsistent.

### 3. What is a JOIN?
A JOIN is a way to combine data from two or more tables based on a related column between them. If you have a table for `Users` and a table for `Orders`, a JOIN lets you look at the user's name right next to their order details in one single view.

### 4. Difference between SQL and MongoDB?
- **SQL (Relational)**: Like a well-organized spreadsheet with strict rows and columns. It's great when data structure is fixed and consistency is highly critical (e.g., banking systems).
- **MongoDB (NoSQL)**: Like a collection of flexible JSON documents. It doesn't force a strict structure, making it great for rapidly changing data or unstructured data (e.g., social media feeds).

### 5. What is a composite key?
A composite key is just a Primary Key that is made up of **two or more columns** instead of just one. Sometimes a single column isn't enough to make a row totally unique, so you combine multiple columns (like `class_id` + `student_roll_number`) to create a unique identifier.

### 6. What is a weak entity?
A weak entity is a piece of data that cannot exist on its own; it totally depends on another "parent" entity. For example, a `Room` in a hotel is a weak entity—if the `Hotel` is destroyed or deleted from the database, the `Room` ceases to exist too.

### 7. Why do we use constraints?
Constraints are the "rules" of the database. We use them to ensure the data entered is valid and accurate. For example, a constraint can ensure a user's age cannot be less than 0, or that an email address must be unique so two people can't register with the same email.

### 8. Explain many-to-many relationship.
This happens when multiple records in one table relate to multiple records in another table. For example, Students and Classes. One student can take many classes, and one class can have many students. To fix this in SQL, we usually create a third "bridge" table (like `Enrollment`) to connect them.

### 9. What is the difference between Clustered and Non-Clustered Index?
- **Clustered Index**: This changes the physical order of the table to match the index (like a phone book sorted alphabetically). You can only have one clustered index per table.
- **Non-Clustered Index**: This creates a separate list that points to the original data (like the index at the back of a textbook). You can have many non-clustered indexes on a table to speed up searches.

### 10. Explain Database Sharding and Partitioning. When would you use each?
- **Partitioning**: Splitting a massive table into smaller, more manageable pieces **within the same database server** (e.g., dividing sales data by year). Use this to speed up queries on giant tables on a single server.
- **Sharding**: Splitting a huge database across **multiple different servers** (e.g., US users on Server A, EU users on Server B). Use this when your database gets so massive that one single physical server can no longer handle the traffic or storage.
