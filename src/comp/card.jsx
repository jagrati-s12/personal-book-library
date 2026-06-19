export default function Card({ book, onEdit, onDelete }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-5 hover:shadow-2xl transition duration-300">

      <h2 className="text-2xl font-bold text-blue-600 mb-3">
        {book.title}
      </h2>

      <p className="mb-2">
        <span className="font-semibold">Author:</span> {book.author}
      </p>

      <p className="mb-2">
        <span className="font-semibold">Genre:</span> {book.genre}
      </p>

      <p className="mb-2">
        <span className="font-semibold">Rating:</span> ⭐ {book.rating}/5
      </p>

      <p className="mb-2">
        <span className="font-semibold">Status:</span>

        <span
          className={`ml-2 font-semibold ${
            book.status === "Read"
              ? "text-green-600"
              : "text-red-600"
          }`}
        >
          {book.status}
        </span>
      </p>

      <p className="text-gray-600 mt-3">
        {book.description}
      </p>

      <div className="flex gap-3 mt-5">

        <button
          onClick={() => onEdit(book)}
          className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg"
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(book.id)}
          className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg"
        >
          Delete
        </button>

      </div>

    </div>
  );
}