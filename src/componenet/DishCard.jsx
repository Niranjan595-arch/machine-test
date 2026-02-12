export default function DishCard({ dish, count, addToCart, removeFromCart }) {
  return (
    <div className="border-b py-5 flex flex-col sm:flex-row sm:justify-between gap-6 lg:gap-12">

      <div className="flex-1">
        <h3 className="font-semibold text-base sm:text-lg lg:text-xl">
          {dish.dish_name}
        </h3>

        <p className="text-sm mt-1">
          {dish.dish_currency} {dish.dish_price}
        </p>

        <p className="text-xs text-orange-500 mt-1">
          {dish.dish_calories} calories
        </p>

        <p className="text-xs text-gray-500 mt-2">
          {dish.dish_description}
        </p>

        {dish.addonCat?.length > 0 && (
          <p className="text-green-600 text-sm mt-2">
            Customizations available
          </p>
        )}

        {dish.dish_Availability && (
          <div className="flex items-center gap-4 mt-4">
            <button
              onClick={() => removeFromCart(dish)}
              disabled={count === 0}
              className="bg-gray-200 px-3 py-1 rounded disabled:opacity-50"
            >
              -
            </button>

            <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">
              {count}
            </span>

            <button
              onClick={() => addToCart(dish)}
              className="bg-green-600 text-white px-3 py-1 rounded"
            >
              +
            </button>
          </div>
        )}
      </div>

      <div className="w-full sm:w-28 h-40 sm:h-28">
        <img
          src={dish.dish_image}
          alt={dish.dish_name}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
}
