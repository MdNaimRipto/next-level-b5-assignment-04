/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IBorrow {
  book: any;
  quantity: number;
  dueDate: Date;
}

export interface IBorrowedBooksSummary {
  totalQuantity: number;
  book: {
    title: string;
    isbn: string;
  };
}
