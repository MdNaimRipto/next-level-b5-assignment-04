/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Dialog } from "@mui/material";
import type { BookGenreEnums, IBooks } from "../../../types/books.types";
import { useUpdateBookMutation } from "../../../redux/features/bookApis";
import { postApiHandler } from "../apiHandlers/postApiHandler";

interface UpdateBookModalProps {
  open: boolean;
  onClose: () => void;
  book: IBooks;
  refetch: any;
}

const genres: BookGenreEnums[] = [
  "FICTION",
  "NON_FICTION",
  "SCIENCE",
  "HISTORY",
  "BIOGRAPHY",
  "FANTASY",
];

const UpdateBookModal: React.FC<UpdateBookModalProps> = ({
  open,
  onClose,
  book,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const [updateBook] = useUpdateBookMutation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    const option = {
      data: {
        title: form.bookTitle.value,
        author: form.bookAuthor.value,
        genre: form.bookGenre.value,
        isbn: form.bookIsbn.value,
        description: form.bookDescription.value,
        copies: Number(form.bookCopies.value),
      },
      id: String(book._id),
    };

    const optionalTasks = () => {
      form.reset();
      onClose();
    };

    await postApiHandler({
      mutateFn: updateBook,
      options: option,
      setIsLoading: setIsLoading,
      optionalTasksFn: optionalTasks,
    });
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <form onSubmit={handleSubmit} className="p-6 space-y-4 bg-white">
        <h2 className="text-xl font-semibold mb-2">Update Book</h2>

        <input
          name="bookTitle"
          required
          defaultValue={book.title}
          className="w-full px-4 py-2 border rounded"
          placeholder="Title"
        />

        <input
          name="bookAuthor"
          required
          defaultValue={book.author}
          className="w-full px-4 py-2 border rounded"
          placeholder="Author"
        />

        <select
          name="bookGenre"
          required
          defaultValue={book.genre}
          className="w-full px-4 py-2 border rounded"
        >
          <option value="">Select Genre</option>
          {genres.map((g) => (
            <option key={g} value={g}>
              {g.replace("_", " ")}
            </option>
          ))}
        </select>

        <input
          name="bookIsbn"
          required
          defaultValue={book.isbn}
          className="w-full px-4 py-2 border rounded"
          placeholder="ISBN"
        />

        <textarea
          name="bookDescription"
          required
          defaultValue={book.description}
          rows={3}
          className="w-full px-4 py-2 border rounded"
          placeholder="Description"
        />

        <input
          name="bookCopies"
          type="number"
          required
          defaultValue={book.copies}
          className="w-full px-4 py-2 border rounded"
          placeholder="Copies"
        />

        <div className="flex justify-end gap-3 pt-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-primary2 text-white rounded hover:bg-primary2/80"
          >
            {isLoading ? "Updating..." : "Save Changes"}
          </button>
        </div>
      </form>
    </Dialog>
  );
};

export default UpdateBookModal;
