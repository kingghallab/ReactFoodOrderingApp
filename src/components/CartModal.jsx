import Modal from "./Modal";
import Button from "./Button";
import { useCart } from "../CartContext";
import { useState } from "react";
import CheckoutForm from "./Checkout";
export default function CartModal({ modalIsOpen, setModalIsOpen }) {
  const { cart, addToCart, removeFromCart, clearCart } = useCart();
  const [checkoutState, setCheckoutState] = useState(false);
  const handleAddToCart = (item) => {
    addToCart({ ...item });
  };

  const handleRemoveFromCart = (id) => {
    removeFromCart(id);
  };

  const handleProceedCheckout = () => {
    setCheckoutState(true);
  };

  let totalPrice = cart.reduce(
    (acc, cur) => acc + cur.quantity * +cur.price,
    0
  );
  return (
    <>
      <Modal open={modalIsOpen}>
        {!checkoutState && (
          <>
            <h3 className="text-xl font-bold mb-4 text-center text-[var(--primary-color)]">Your Cart</h3>
            {cart.map((item) => (
              <div key={item.id} className="mb-4 p-3 rounded-lg bg-[var(--background-dark)] shadow flex flex-col gap-2">
                <p className="font-semibold text-[var(--primary-dark)]">
                  {item.title} - {item.quantity} × {item.price}
                </p>
                <div className="flex items-center gap-3 justify-center">
                  <Button content="+" onClickProp={() => handleAddToCart(item)} />
                  <p className="m-0 font-bold text-[var(--primary-color)] min-w-[24px] text-center">
                    {item.quantity}
                  </p>
                  <Button content="-" onClickProp={() => handleRemoveFromCart(item.id)} />
                </div>
              </div>
            ))}
            <p className="text-lg font-bold text-right text-[var(--primary-color)] mb-4">Total: {totalPrice}</p>
            <div className="flex gap-3 justify-end">
              <Button content="Close" onClickProp={() => setModalIsOpen(false)} />
              <Button content="Checkout" onClickProp={handleProceedCheckout} />
            </div>
          </>
        )}
        {checkoutState && <CheckoutForm />}
      </Modal>
    </>
  );
}
