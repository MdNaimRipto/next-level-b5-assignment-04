/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Dialog } from "@mui/material";
import type { BookGenreEnums } from "../../../types/books.types";
import { useUploadBookMutation } from "../../../redux/features/bookApis";
import { postApiHandler } from "../apiHandlers/postApiHandler";

interface AddBookModalProps {
  open: boolean;
  onClose: () => void;
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

const AddBookModal: React.FC<AddBookModalProps> = ({ open, onClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [addBook] = useUploadBookMutation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    const option = {
      data: {
        title: form.bookTitle.value,
        author: form.author.value,
        genre: form.genre.value,
        isbn: form.isbn.value,
        description: form.description.value,
        copies: Number(form.copies.value),
      },
    };

    const optionalTasks = () => {
      form.reset();
      onClose();
    };

    await postApiHandler({
      mutateFn: addBook,
      options: option,
      setIsLoading: setIsLoading,
      optionalTasksFn: optionalTasks,
    });
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <form onSubmit={handleSubmit} className="p-6 space-y-4 bg-white">
        <h2 className="text-xl font-semibold mb-2">Add a New Book</h2>

        <input
          name="bookTitle"
          required
          placeholder="Title"
          className="w-full px-4 py-2 border rounded"
        />
        <input
          name="author"
          required
          placeholder="Author"
          className="w-full px-4 py-2 border rounded"
        />

        <select
          name="genre"
          required
          className="w-full px-4 py-2 border rounded"
        >
          <option value="">Select Genre</option>
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre.replace("_", " ")}
            </option>
          ))}
        </select>

        <input
          name="isbn"
          required
          placeholder="ISBN"
          className="w-full px-4 py-2 border rounded"
        />
        <textarea
          name="description"
          required
          placeholder="Description"
          rows={3}
          className="w-full px-4 py-2 border rounded"
        />
        <input
          name="copies"
          type="number"
          required
          placeholder="Copies"
          className="w-full px-4 py-2 border rounded"
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
            {isLoading ? "Uploading..." : "Upload"}
          </button>
        </div>
      </form>
    </Dialog>
  );
};

export default AddBookModal;
