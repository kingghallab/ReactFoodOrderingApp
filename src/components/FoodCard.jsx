import { useCart } from "../CartContext";
import Button from "./Button";
import { useState } from "react";

export default function FoodCard({ imgSrc, title, description, id, price }) {
  const { addToCart, removeFromCart } = useCart();
  const [countItem, setCountItem] = useState(null);
  function handleAddToCart() {
    setCountItem((prevCount) => prevCount + 1);
    addToCart({ id, imgSrc, title, description, price });
  }
  function handleRemoveFromCart() {
    setCountItem((prevCount) => prevCount - 1);
    removeFromCart(id);
  }
  let contentRender;
  if (!countItem) {
    contentRender = (
      <Button content="Add To Cart" onClickProp={handleAddToCart} />
    );
  } else {
    contentRender = (
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <Button content="+" onClickProp={handleAddToCart} />
        <p
          style={{
            margin: 0,
            fontWeight: "bold",
            color: "var(--primary-color)",
            minWidth: "24px",
            textAlign: "center",
          }}
        >
          {countItem}
        </p>
        <Button content="-" onClickProp={handleRemoveFromCart} />
      </div>
    );
  }

  return (
    <div
      className="rounded-xl shadow-lg overflow-hidden flex flex-col items-center p-4 transition-transform hover:scale-105 border-2 mx-auto min-h-[340px]"
      style={{
        background: "var(--background-light)",
        borderColor: "var(--accent-color)",
        boxShadow: "0 4px 16px var(--shadow-color)",
      }}
    >
      <div
        className="w-full aspect-[4/3] flex items-center justify-center mb-4 overflow-hidden"
        style={{ height: "40%" }}
      >
        <img
          src={`http://localhost:3000/${imgSrc}`}
          alt={title}
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
      <h2
        className="text-xl font-bold mb-2 tracking-wide text-center"
        style={{ color: "var(--primary-color)" }}
      >
        {title}
      </h2>
      <p
        className="font-semibold rounded-md px-4 py-1 mb-2 text-center w-fit mx-auto"
        style={{
          background: "var(--accent-color)",
          color: "var(--primary-dark)",
        }}
      >
        ${price}
      </p>
      <p className="text-center mb-2" style={{ color: "var(--primary-light)" }}>
        {description}
      </p>
      {contentRender}
    </div>
  );
}
