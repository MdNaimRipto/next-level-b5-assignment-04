import { useNavigate, useSearchParams } from "react-router";

import type { BookGenreEnums } from "../../types/books.types";
import { useState } from "react";
import BooksContainer from "./BooksContainer";

const BooksMain = () => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);

  const [searchParams] = useSearchParams();
  const genre = searchParams.get("genre");

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
          <button
            onClick={() => navigate("/books")}
            className="bg-primary2 hover:bg-primary2/80 text-white px-4 py-2 rounded-md text-sm font-medium transition"
          >
            ALL
          </button>
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
      <BooksContainer
        genre={genre}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </div>
  );
};

export default BooksMain;
