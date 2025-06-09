# ReactFoodOrderingApp

A modern, visually appealing food ordering web application built with React, Tailwind CSS, and a Node.js/Express backend. The app features a beautiful purple-themed UI, global cart management, and a smooth ordering experience.

## Features

- 🍽️ **Browse Meals:** View a variety of delicious meals with appetizing images and descriptions.
- 🛒 **Cart System:** Add, remove, and update meal quantities in a persistent cart using React Context API.
- 🧾 **Checkout:** Simple, styled checkout form with validation-ready structure.
- 💅 **Modern UI:** Fully responsive, purple-themed design using Tailwind CSS and the Quicksand font for a friendly, food-appropriate feel.
- ⚡ **Fast & Modular:** Built with Vite for fast development and modular React components.
- 🔗 **Backend Integration:** Node.js/Express backend for meal data and order submission.

## Tech Stack

- **Frontend:** React, Tailwind CSS, Quicksand font
- **State Management:** React Context API
- **Backend:** Node.js, Express

## Getting Started

### 1. Clone the repository
```sh
git clone https://github.com/yourusername/ReactFoodOrderingApp.git
cd ReactFoodOrderingApp
```

### 2. Install dependencies for both servers: Backend, and Frontend
```sh
npm install
```

### 3. Start the backend server
```sh
cd backend
npm install
node app.js
```

### 4. Start the frontend (in a new terminal)
```sh
cd ..
npm run dev
```

### 5. Open in your browser
Visit [http://localhost:5173](http://localhost:5173) to view the app.

## Project Structure

```
ReactFoodOrderingApp/
├── backend/           # Node.js/Express backend
├── public/            # Static assets
├── src/               # React source code
│   ├── components/    # UI components (Navbar, FoodCard, CartModal, etc.)
│   ├── hooks/         # Custom React hooks
│   ├── assets/        # Images and logos
│   ├── CartContext.jsx# Cart state management
│   ├── App.jsx        # Main app component
│   └── index.css      # Global styles and Tailwind config
├── package.json
└── README.md
```

## Customization
- **Colors & Fonts:** Easily change the color palette and font in `src/index.css`.
- **Meals Data:** Add or edit meals in `backend/data/available-meals.json`.


