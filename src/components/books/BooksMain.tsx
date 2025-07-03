import { useNavigate } from "react-router";
import BookCard from "../common/cards/BookCard";
import type { BookGenreEnums, IBooks } from "../../types/books.types";
import { useState } from "react";
import AddBookModal from "../common/modals/AddBookModal";

const BooksMain = () => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);

  const dummyBooks: IBooks[] = [
    {
      title: "The Silent Patient",
      author: "Alex Michaelides",
      genre: "FICTION",
      isbn: "9781250301697",
      description: "A psychological thriller.",
      copies: 5,
      available: true,
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      genre: "NON_FICTION",
      isbn: "9780735211292",
      description: "Habit-building strategies.",
      copies: 10,
      available: true,
    },
  ];

  const genres: BookGenreEnums[] = [
    "FICTION",
    "NON_FICTION",
    "SCIENCE",
    "HISTORY",
    "BIOGRAPHY",
    "FANTASY",
  ];

  const handleGenreClick = (genre: string) => {
    navigate(`/books?genre=${genre}`);
  };

  return (
    <div className="container py-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <h2 className="text-3xl font-semibold">All Books</h2>

        <div className="flex flex-wrap gap-3">
          {genres.map((genre, index) => (
            <button
              key={index}
              onClick={() => handleGenreClick(genre)}
              className="bg-primary2 hover:bg-primary2/80 text-white px-4 py-2 rounded-md text-sm font-medium transition"
            >
              {genre.replace("_", " ")}
            </button>
          ))}
          <button
            onClick={() => setOpenModal(true)}
            className="bg-success hover:bg-success/90 text-white px-4 py-2 rounded-md text-sm font-medium transition"
          >
            Add Book
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {dummyBooks.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>

      {/* Add Book Modal */}
      <AddBookModal open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
};

export default BooksMain;
