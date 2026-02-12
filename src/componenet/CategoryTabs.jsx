export default function CategoryTabs({ categories, active, setActive }) {
  return (
    <div className="w-full border-b overflow-x-auto scrollbar-hide">

      <div className="flex min-w-max px-6 sm:px-10 lg:px-20 gap-8 sm:gap-12 lg:gap-20">
        {categories.map((cat, index) => (
          <button
            key={cat.menu_category_id}
            onClick={() => setActive(index)}
            className={`py-4 text-base sm:text-lg lg:text-xl whitespace-nowrap transition-all ${
              active === index
                ? "border-b-2 border-red-500 text-red-500 font-semibold"
                : "text-gray-600"
            }`}
          >
            {cat.menu_category}
          </button>
        ))}
      </div>

    </div>
  );
}
