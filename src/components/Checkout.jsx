import Button from "./Button";
import Input from "./Input";
import { fetchSendOrders } from "../http";
import { useState } from "react";
import { useCart } from "../CartContext";
export default function CheckoutForm() {
  const [errorUpdatingLocalData, setErrorUpdatingLocalData] = useState({});
  const { cart } = useCart();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    // Structure the payload as expected by backend
    const order = {
      customer: {
        name: data.name,
        email: data.email,
        street: data.street,
        "postal-code": data.postal,
        city: data.city,
      },
      items: cart,
    };
    try {
      console.log({ order });
      console.log(data);
      await fetchSendOrders({ order });
    } catch (err) {
      setErrorUpdatingLocalData({
        message: err.message || "failed to update places",
      });
    }
    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input name="name" type="text" label="Full Name" />
      <Input name="email" type="email" label="E-mail Adress" />
      <Input name="street" type="text" label="Street" />
      <div className="flex gap-4">
        <div className="flex-1">
          <Input name="postal" type="text" label="Postal Code" />
        </div>
        <div className="flex-1">
          <Input name="city" type="text" label="City" />
        </div>
      </div>
      <Button content="Submit Order" onClickProp={() => {}} className="mt-10" />
    </form>
  );
}
