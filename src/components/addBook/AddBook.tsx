import React, { useState } from "react";
import type { BookGenreEnums } from "../../types/books.types";
import { useUploadBookMutation } from "../../redux/features/bookApis";
import { postApiHandler } from "../common/apiHandlers/postApiHandler";
import { useNavigate } from "react-router";

const genres: BookGenreEnums[] = [
  "FICTION",
  "NON_FICTION",
  "SCIENCE",
  "HISTORY",
  "BIOGRAPHY",
  "FANTASY",
];

const AddBook: React.FC = () => {
  const navigate = useNavigate();
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
      navigate("/books");
    };

    await postApiHandler({
      mutateFn: addBook,
      options: option,
      setIsLoading,
      optionalTasksFn: optionalTasks,
    });
  };

  return (
    <div className="container py-16 flex items-center flex-col">
      <h1 className="text-3xl font-semibold mb-8">Add a New Book</h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl space-y-4 bg-white p-6 rounded shadow"
      >
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

        <div className="flex justify-center gap-3 pt-2">
          <button
            type="submit"
            className="px-6 py-2 bg-primary2 text-white rounded hover:bg-primary2/80"
          >
            {isLoading ? "Uploading..." : "Upload Book"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
