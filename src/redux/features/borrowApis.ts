import { apiConfig } from "../../configs/apiConfig";
import type { IBorrow } from "../../types/borrow.types";
import { apiSlice } from "../apis/apiSlice";

const borrowApis = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //
    // * Borrow Book
    //
    borrowBook: builder.mutation({
      query: ({ data }: { data: IBorrow }) => ({
        url: apiConfig.borrow.borrow,
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      }),
      invalidatesTags: ["AllBooks", "borrowedBooks"],
    }),
    //
    // Get all books
    //
    getBorrowSummary: builder.query({
      query: () => ({
        url: apiConfig.borrow.getSummary,
        headers: {
          "Content-type": "application/json",
        },
      }),
      providesTags: ["borrowedBooks"],
    }),
  }),
});

export const { useBorrowBookMutation, useGetBorrowSummaryQuery } = borrowApis;
