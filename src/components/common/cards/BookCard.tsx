/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import bookImg from "../../../assets/book.jpeg";
import BasicButton from "../../common/buttons/BasicButton";
import BookDetailsModal from "../modals/BookDetailsModal";
import type { IBooks } from "../../../types/books.types";

const BookCard = ({ book, refetch }: { book: IBooks; refetch: any }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="rounded-lg p-4 shadow hover:shadow-md transition">
        <div className="relative w-full overflow-hidden">
          <p
            className={`absolute text-white top-4 right-4 px-2 py-1 text-xs font-semibold rounded-full ${
              book.available ? "bg-success" : "bg-error"
            }`}
          >
            {book.available ? "Available" : "Unavailable"}
          </p>
          <img
            src={bookImg}
            alt={book.title}
            className="w-full object-contain mb-3 rounded"
          />
        </div>
        <h3 className="font-semibold text-lg text-center mb-1">{book.title}</h3>
        <p className="text-sm text-gray-600 text-center mb-3">{book.author}</p>
        <p className="text-sm text-gray-600 text-center mb-3">
          Genre: {book.genre}
        </p>
        <div className="w-full text-center">
          <BasicButton title="View Details" setOpen={setOpen} />
        </div>
      </div>

      <BookDetailsModal
        open={open}
        onClose={() => setOpen(false)}
        book={book}
        refetch={refetch}
      />
    </>
  );
};

export default BookCard;
