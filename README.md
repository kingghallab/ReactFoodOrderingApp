# Plateful – React Food Ordering App

A modern, appetizing food ordering web application built with React, Tailwind CSS, and a Node.js/Express backend. The project features a beautiful purple-themed UI, a global cart with React Context, and a smooth checkout experience.

## Features

- **Modern UI**: Responsive, accessible, and visually appealing with a purple/yellow color palette.
- **Global Cart**: Add, remove, and update items in the cart from anywhere in the app using React Context API.
- **Dynamic Food Menu**: Fetches available meals from a backend and displays them as interactive cards.
- **Checkout Flow**: Users can fill out a form and submit their order, which is validated and sent to the backend.
- **Modal System**: Cart and checkout are displayed in modals for a seamless user experience.
- **Tailwind CSS**: Utility-first styling with custom CSS variables for easy theming.

## Tech Stack

- **Frontend**: React, Tailwind CSS
- **State Management**: React Context API, useState, useEffect
- **Backend**: Node.js, Express (see `/backend` folder)

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Installation
1. **Clone the repository**
   ```sh
   git clone <your-repo-url>
   cd PracticeProjectScratch
   ```
2. **Install dependencies**
   ```sh
   npm install
   # or
   yarn install
   ```
3. **Start the backend**
   ```sh
   cd backend
   npm install
   node app.js
   ```
   The backend will run on [http://localhost:3000](http://localhost:3000).
4. **Start the frontend**
   ```sh
   cd ..
   npm run dev
   # or
   yarn dev
   ```
   The frontend will run on [http://localhost:5173](http://localhost:5173) (Vite default).

## Project Structure

```
PracticeProjectScratch/
├── backend/           # Node.js/Express backend
├── public/            # Static assets
├── src/               # React source code
│   ├── components/    # Reusable React components
│   ├── hooks/         # Custom React hooks
│   ├── assets/        # Images and logos
│   ├── App.jsx        # Main app component
│   ├── CartContext.jsx# Cart context provider
│   ├── index.css      # Tailwind and custom CSS
│   └── main.jsx       # React entry point
├── tailwind.config.js # Tailwind configuration
├── postcss.config.js  # PostCSS configuration
└── ...
```

## Key Components

- **FoodCard**: Displays a meal with image, description, price, and add-to-cart controls.
- **CartModal**: Shows cart contents, allows item quantity changes, and proceeds to checkout.
- **CheckoutForm**: Collects user info and submits the order.
- **CartContext**: Provides cart state and actions globally.
- **Modal**: Reusable modal dialog for cart and checkout.

## Customization
- **Colors**: Easily change the color palette in `src/index.css` using CSS variables.
- **Meals**: Add or edit meals in `backend/data/available-meals.json`.

## License

This project is for educational and demonstration purposes.

---

**Enjoy building and customizing your own food ordering experience with React!**
