import FoodWrapper from "./components/FoodWrapper";
import Navbar from "./components/navbar";
import { CartProvider } from "./CartContext";
import CartModal from "./components/CartModal";
import { useState } from "react";
function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleOpenCart() {
    setModalIsOpen(true);
  }

  return (
    <CartProvider>
      <CartModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
      <Navbar onSelectCart={handleOpenCart} />
      <FoodWrapper />
    </CartProvider>
  );
}

export default App;
