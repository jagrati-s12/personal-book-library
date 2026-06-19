import { useState, useEffect } from "react";

export default function Form({ selectedBook, onSave }) {
  const [book, setBook] = useState({
    title: "",
    author: "",
    genre: "",
    rating: 1,
    status: "Unread",
    description: "",
  });

  useEffect(() => {
    if (selectedBook) {
      setBook(selectedBook);
    } else {
      setBook({
        title: "",
        author: "",
        genre: "",
        rating: 1,
        status: "Unread",
        description: "",
      });
    }
  }, [selectedBook]);

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !book.title.trim() ||
      !book.author.trim() ||
      !book.genre.trim()
    ) {
      alert("Please fill all required fields.");
      return;
    }

    onSave(book);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg rounded-xl p-6 mb-8"
    >
      <h2 className="text-2xl font-bold text-blue-600 mb-5">
        {selectedBook ? "Update Book" : "Add New Book"}
      </h2>

      <div className="grid md:grid-cols-2 gap-4">

        <input
          type="text"
          name="title"
          placeholder="Book Title"
          value={book.title}
          onChange={handleChange}
          className="border rounded-lg p-3"
          required
        />

        <input
          type="text"
          name="author"
          placeholder="Author"
          value={book.author}
          onChange={handleChange}
          className="border rounded-lg p-3"
          required
        />

        <input
          type="text"
          name="genre"
          placeholder="Genre"
          value={book.genre}
          onChange={handleChange}
          className="border rounded-lg p-3"
          required
        />

        <input
          type="number"
          name="rating"
          min="1"
          max="5"
          value={book.rating}
          onChange={handleChange}
          className="border rounded-lg p-3"
        />

        <select
          name="status"
          value={book.status}
          onChange={handleChange}
          className="border rounded-lg p-3"
        >
          <option value="Read">Read</option>
          <option value="Unread">Unread</option>
        </select>

      </div>

      <textarea
        name="description"
        rows="5"
        placeholder="Book Description..."
        value={book.description}
        onChange={handleChange}
        className="border rounded-lg p-3 w-full mt-4"
      />

      <button
        type="submit"
        className="mt-5 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
      >
        {selectedBook ? "Update Book" : "Add Book"}
      </button>
    </form>
  );
}