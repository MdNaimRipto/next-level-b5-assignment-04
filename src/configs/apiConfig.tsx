export const apiConfig = {
  baseUrl: "https://book-management-backend-ac-03.vercel.app/v1.0.0/apis",
  books: {
    upload: "/books/uploadBook",
    getAll: "/books/getAllBooks",
    getById: "/books/getBookById",
    update: "/books/updateBook",
    delete: "/books/deleteBook",
  },
  borrow: {
    borrow: "/borrow/borrowBook",
    getSummary: "/borrow/getBooksSummary",
  },
};
