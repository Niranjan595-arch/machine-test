import { useEffect, useState } from "react";
import DishCard from "../componenet/DishCard";
import CategoryTabs from "../componenet/CategoryTabs";

export default function Menu({ cart, addToCart, removeFromCart }) {
  const [menu, setMenu] = useState([]);
  const [active, setActive] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://zartek-task.vercel.app/api/resto-cafe")
      .then((res) => res.json())
      .then((response) => {
        const categories = response?.data?.[0]?.table_menu_list || [];
        setMenu(categories);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        Loading menu...
      </div>
    );
  }

  return (
    <>
      <CategoryTabs
        categories={menu}
        active={active}
        setActive={setActive}
      />

      <div className="mt-6 space-y-6">
        {menu[active]?.category_dishes?.map((dish) => (
          <DishCard
            key={dish.dish_id}
            dish={dish}
            count={cart[dish.dish_id] || 0}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        ))}
      </div>
    </>
  );
}
