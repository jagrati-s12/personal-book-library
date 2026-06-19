export default function Navbar({ search, setSearch, totalBooks }) {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">

        <div>
          <h1 className="text-3xl font-bold">
            📚 Personal Book Library
          </h1>
          <p className="text-sm">
            Total Books : {totalBooks}
          </p>
        </div>

        <input
          type="text"
          placeholder="Search by Title or Author..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-96 px-4 py-2 rounded-lg border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-300"
        />

      </div>
    </nav>
  );
}