import { useEffect, useState, useCallback } from "react";
import { dataFromServer } from "./data";

import { CardList } from "./components/CardList";
import { Cart } from "./components/Cart";
import { OrderConfirmed } from "./components/OrderConfirmed";

export const App = () => {
  const [data, setData] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [showConfirmed, setShowConfirmed] = useState(false);

  useEffect(() => {
    setData(dataFromServer);
  }, []);

  const handleSelected = useCallback((product) => {
    if (product.remove) {
      // Remove only the specific item from cart
      setCartItems((prev) => prev.filter((item) => item.name !== product.name));
      return;
    }

    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.name === product.name);
      if (existingItem) {
        // Update quantity if item exists
        return prev.map((item) =>
          item.name === product.name
            ? { ...item, quantity: product.quantity }
            : item
        );
      }
      // Add new item if it doesn't exist
      return [...prev, product];
    });
  }, []);

  const handleRemoveItem = (itemName) => {
    setCartItems((prev) => prev.filter((item) => item.name !== itemName));
  };

  const handleConfirm = () => {
    // show the confirmation modal
    setShowConfirmed(true);
  };

  const handleCloseConfirmed = () => {
    // clear cart and close modal
    setCartItems([]);
    setShowConfirmed(false);
  };

  return (
    <>
      <div className="flex flex-col w-[327px] md:w-[688px] lg:w-[1200px] justify-center mx-auto gap-8">
        <h1 className="text-rose900 font-bold text-4xl">Desserts</h1>
        <div className="flex flex-col lg:flex-row gap-8 justify-center items-start">
          <CardList
            datas={data}
            cartItems={cartItems}
            onHandleSelected={handleSelected}
          />
          <Cart
            cartItems={cartItems}
            onRemoveItem={handleRemoveItem}
            onConfirm={handleConfirm}
          />
        </div>
      </div>

      {showConfirmed && (
        <>
          <div className="fixed inset-0 bg-black/40 z-40" />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <OrderConfirmed
              onClose={handleCloseConfirmed}
              cartItems={cartItems}
              totalPrice={cartItems.reduce(
                (s, i) => s + i.price * i.quantity,
                0
              )}
            />
          </div>
        </>
      )}
    </>
  );
};
