import React from "react";
import { useGetBorrowSummaryQuery } from "../../redux/features/borrowApis";
import Loader from "../common/Loader";
import NotFoundMessage from "../common/NotFoundMessage";
import type { IBorrowedBooksSummary } from "../../types/borrow.types";

const Summary: React.FC = () => {
  const { data, isLoading } = useGetBorrowSummaryQuery({});

  if (isLoading) {
    return <Loader />;
  }

  if (!data) {
    return <NotFoundMessage title="No Books Summary Found!" />;
  }

  const borrowedBooks = data?.data as IBorrowedBooksSummary[];

  if (!borrowedBooks?.length) {
    return <NotFoundMessage title="No Books Summary Found!" />;
  }

  return (
    <div className="container py-16 min-h-screen">
      <h1 className="text-3xl font-semibold mb-8">Borrowed Books Summary</h1>

      <div className="space-y-4">
        {borrowedBooks.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white shadow px-6 py-4 rounded-lg border"
          >
            <div>
              <h2 className="text-lg font-bold text-primary2">
                {item.book.title}
              </h2>
              <p className="text-sm text-gray-600">ISBN: {item.book.isbn}</p>
            </div>
            <div className="mt-2 sm:mt-0">
              <p className="text-sm text-gray-500">Total Borrowed</p>
              <p className="text-xl font-bold text-success text-center">
                {item.totalQuantity}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Summary;
