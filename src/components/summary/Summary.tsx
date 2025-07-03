import React from "react";

interface BorrowedBookSummary {
  totalQuantity: number;
  book: {
    title: string;
    isbn: string;
  };
}

// Dummy data simulation
const borrowedBooks: BorrowedBookSummary[] = [
  {
    totalQuantity: 12,
    book: {
      title: "Atomic Habits",
      isbn: "9780735211292",
    },
  },
  {
    totalQuantity: 7,
    book: {
      title: "The Hobbit",
      isbn: "9780547928227",
    },
  },
  {
    totalQuantity: 4,
    book: {
      title: "1984",
      isbn: "9780451524935",
    },
  },
];

const Summary: React.FC = () => {
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
