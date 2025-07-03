import { apiConfig } from "../../configs/apiConfig";
import type { IBookFilters, IBooks } from "../../types/books.types";
import { apiSlice } from "../apis/apiSlice";

const bookApis = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //
    // * Upload Book
    //
    uploadBook: builder.mutation({
      query: ({ data }: { data: IBooks }) => ({
        url: apiConfig.books.upload,
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      }),
      invalidatesTags: ["AllBooks"],
    }),
    //
    // Get all books
    //
    getAllBooks: builder.query({
      query: (data: IBookFilters) => {
        const queryParameters = new URLSearchParams();
        if (data.genre) {
          queryParameters.append("genre", data.genre);
        }
        if (data.limit) {
          queryParameters.append("limit", data.limit);
        }
        return `${apiConfig.books.getAll}?${queryParameters.toString()}`;
      },
      providesTags: ["AllBooks"],
    }),
    //
    // * Get Book Details
    //
    getBookDetails: builder.query({
      query: ({ bookId }: { bookId: string }) => ({
        url: `${apiConfig.books.getById}/${bookId}`,
        headers: {
          "Content-type": "application/json",
        },
      }),
    }),
    //
    // * Update Book
    //
    updateBook: builder.mutation({
      query: ({ bookId, data }: { bookId: string; data: Partial<IBooks> }) => ({
        url: `${apiConfig.books.update}/${bookId}`,
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      }),
      invalidatesTags: [],
    }),
    //
    // * Delete book
    //
    deleteBook: builder.mutation({
      query: ({ bookId }: { bookId: string }) => ({
        url: `${apiConfig.books.update}/${bookId}`,
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      }),
    }),
  }),
});

export const {
  useUploadBookMutation,
  useGetAllBooksQuery,
  useGetBookDetailsQuery,
  useUpdateBookMutation,
  useDeleteBookMutation,
} = bookApis;
