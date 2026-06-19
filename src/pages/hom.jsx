import { useState } from "react";
import Navbar from "../comp/navbar";
import Form from "../comp/form";
import Card from "../comp/card";

export default function Hom() {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "Atomic Habits",
      author: "James Clear",
      genre: "Self Help",
      rating: 5,
      status: "Read",
      description:
        "A practical guide to building good habits and breaking bad ones."
    },
    {
      id: 2,
      title: "The Alchemist",
      author: "Paulo Coelho",
      genre: "Fiction",
      rating: 4,
      status: "Read",
      description:
        "A novel about following your dreams and listening to your heart."
    },
    {
      id: 3,
      title: "Deep Work",
      author: "Cal Newport",
      genre: "Productivity",
      rating: 5,
      status: "Unread",
      description:
        "Rules for focused success in a distracted world."
    }
  ]);

  const [search, setSearch] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);

  // Add or Update Book
  const handleSave = (book) => {
    if (selectedBook) {
      setBooks(
        books.map((b) =>
          b.id === selectedBook.id
            ? { ...book, id: selectedBook.id }
            : b
        )
      );
      setSelectedBook(null);
    } else {
      const newBook = {
        ...book,
        id: Date.now(),
      };

      setBooks([newBook, ...books]);
    }
  };

  // Edit Book
  const handleEdit = (book) => {
    setSelectedBook(book);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Delete Book
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this book?"
    );

    if (confirmDelete) {
      setBooks(books.filter((book) => book.id !== id));
    }
  };

  // Search
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar
        search={search}
        setSearch={setSearch}
        totalBooks={filteredBooks.length}
      />

      <div className="max-w-7xl mx-auto p-6">

        <Form
          selectedBook={selectedBook}
          onSave={handleSave}
        />

        {filteredBooks.length === 0 ? (
          <div className="text-center text-gray-500 mt-10 text-xl">
            No Books Found 📚
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {filteredBooks.map((book) => (
              <Card
                key={book.id}
                book={book}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}

          </div>
        )}

      </div>
    </div>
  );
}