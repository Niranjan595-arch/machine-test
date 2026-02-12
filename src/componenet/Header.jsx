export default function Header({ cartCount }) {
  return (
    <header className="w-full bg-white shadow sticky top-0 z-10">
      <div className="w-full flex justify-between items-center px-4 sm:px-6 lg:px-10 py-3 sm:py-4">
        
        <h1 className="text-lg sm:text-xl lg:text-2xl font-bold">
          UNI Resto Cafe
        </h1>

        <div className="relative text-xl sm:text-2xl cursor-pointer">
          🛒
          <span className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 bg-red-500 text-white text-[10px] sm:text-xs px-1.5 sm:px-2 py-[2px] rounded-full min-w-[18px] text-center">
            {cartCount}
          </span>
        </div>

      </div>
    </header>
  );
}
