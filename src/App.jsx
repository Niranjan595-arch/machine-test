import { useState } from "react";
import Menu from "./pages/Menu";
import Header from "./componenet/Header";

export default function App() {
  const [cart, setCart] = useState({});

  const addToCart = (dish) => {
    setCart(prev => ({
      ...prev,
      [dish.dish_id]: (prev[dish.dish_id] || 0) + 1
    }));
  };

  const removeFromCart = (dish) => {
    setCart(prev => {
      const count = (prev[dish.dish_id] || 0) - 1;
      if (count <= 0) {
        const updated = { ...prev };
        delete updated[dish.dish_id];
        return updated;
      }
      return { ...prev, [dish.dish_id]: count };
    });
  };

  const cartCount = Object.values(cart).reduce((a, b) => a + b, 0);

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <Header cartCount={cartCount} />

      <main className="w-full px-4 sm:px-6 lg:px-12 py-4 sm:py-6">
        <Menu
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      </main>
    </div>
  );
}
