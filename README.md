# 🐄 QurbaniHat

QurbaniHat is a modern web application built with Next.js that allows users to browse, explore, and book Qurbani animals online. It provides a smooth and responsive experience with authentication, sorting, and detailed animal information.

---

## 🌐 Live URL
https://your-live-site-url.com

---

## 🎯 Purpose

The purpose of this project is to digitize the traditional Qurbani animal buying process by providing an easy-to-use online platform where users can explore animals, view details, and make bookings after authentication.

---

## ✨ Features

### 🧭 Layout
- Responsive Navbar with dynamic authentication UI
- Footer with contact info, social links, and about section

### 🐐 Animal System
- JSON-based animal data (6+ animals)
- Includes: name, type, breed, price, weight, age, location, description, image, category

### 🏠 Home Page
- Hero section with banner and CTA button
- Featured animals section (4 items)
- Extra sections:
  - Qurbani Tips
  - Top Breeds

### 📋 All Animals Page
- Displays all animals in card layout
- Sort by price (low → high / high → low)
- Details button for each animal

### 📄 Animal Details Page (Private)
- Full animal details view
- Booking form (name, email, phone, address)
- Login required to access
- Success toast on booking
- Form resets after submission
- No database storage (as per requirement)

### 🔐 Authentication
- Email & Password login
- User registration system
- Google social login
- Error handling with toast notifications
- Redirect after login/register

### 👤 My Profile (Private)
- Displays logged-in user information:
  - Name
  - Email
  - Profile image

### ✏️ Update Profile (Challenge Feature)
- Update name and profile image
- Separate protected route
- Uses Better Auth user update system

### ⚡ Extra Features
- Toast notifications (react-hot-toast)
- Loading spinner while fetching data
- Custom 404 not found page
- Fully responsive UI

---

## 🎨 Animation

- Animate.css used for smooth UI animations
- Example classes:
  - animate__fadeIn
  - animate__backOutDown

---

## 📦 NPM Packages Used

- next
- react
- react-dom
- react-hook-form
- react-hot-toast
- react-icons
- animate.css
- better-auth
- @better-auth/mongo-adapter
- mongodb
- tailwindcss
- daisyui

---

## 🔐 Routes

### Public Routes
- `/` → Home Page  
- `/animals` → All Animals  
- `/login` → Login Page  
- `/register` → Register Page  

### Private Routes
- `/details-page` → Animal Details & Booking  
- `/my-profile` → User Profile (including profile update)