import { FaSearch } from "react-icons/fa"


const Header = ({ search , setSearch}: {search: string; setSearch: (search: string) => void; }) => {
  return (
    <header className="fixed z-100 top-0 left-0 right-0 w-full bg-white shadow">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between gap-4">
        <h1 className="text-xl md:text-2xl font-bold text-blue-600">SkiHub</h1>
        <div className="relative w-full max-w-[35rem]">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="search resources..."
            className="px-4 pl-10 py-2 rounded-full text-gray-600 border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
          />
          <FaSearch className="absolute top-3 left-4 text-gray-400" />
        </div>
      </div>
    </header>
  );
};

export default Header