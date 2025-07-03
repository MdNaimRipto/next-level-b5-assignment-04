/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Dialog } from "@mui/material";
import type { IBooks } from "../../../types/books.types";
import UpdateBookModal from "./UpdateBookModal";
import WarningModal from "./WarningModal";
import BorrowModal from "./BorrowModal";

interface BookDetailsModalProps {
  open: boolean;
  onClose: () => void;
  book: IBooks | null;
  refetch: any;
}

const BookDetailsModal: React.FC<BookDetailsModalProps> = ({
  open,
  onClose,
  book,
  refetch,
}) => {
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [openBorrowModal, setOpenBorrowModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  if (!book) return null;

  return (
    <>
      <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
        <div className="p-6 space-y-4 text-black bg-white">
          {/* Title & Author */}
          <div>
            <h2 className="text-2xl font-bold mb-1">{book.title}</h2>
            <p className="text-gray-700 text-sm">
              by <span className="font-medium">{book.author}</span>
            </p>
          </div>

          {/* Metadata */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Genre</p>
              <p className="text-base font-medium">
                {book.genre.replace("_", " ")}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">ISBN</p>
              <p className="text-base font-medium">{book.isbn}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Copies Available</p>
              <p className="text-base font-medium">{book.copies}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Status</p>
              <p
                className={`text-base font-semibold ${
                  book.available ? "text-green-600" : "text-red-600"
                }`}
              >
                {book.available ? "Available" : "Unavailable"}
              </p>
            </div>
          </div>

          {/* Description */}
          <div>
            <p className="text-sm text-gray-500 mb-1">Description</p>
            <p className="text-base">{book.description}</p>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-4">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-gray-400 text-gray-700 rounded hover:bg-gray-100"
            >
              Close
            </button>
            <button
              disabled={book.copies <= 0 ? true : false}
              onClick={() => setOpenBorrowModal(true)}
              className="px-4 py-2 bg-success text-white rounded hover:bg-primary2/80 disabled:bg-gray/30 disabled:cursor-not-allowed"
            >
              Borrow
            </button>
            <button
              onClick={() => setOpenUpdateModal(true)}
              className="px-4 py-2 bg-primary2 text-white rounded hover:bg-primary2/80"
            >
              Update
            </button>
            <button
              onClick={() => setOpenDeleteModal(true)}
              className="px-4 py-2 bg-error text-white rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      </Dialog>

      {/* Update Modal */}
      <UpdateBookModal
        open={openUpdateModal}
        onClose={() => setOpenUpdateModal(false)}
        book={book}
        refetch={refetch}
      />
      {/* Delete Warning Modal */}
      <WarningModal
        open={openDeleteModal}
        onClose={() => setOpenDeleteModal(false)}
        closeDetailsModal={() => onClose()}
        id={book._id}
        refetch={refetch}
      />

      {/* Borrow Modal */}
      <BorrowModal
        open={openBorrowModal}
        onClose={() => setOpenBorrowModal(false)}
        id={book._id}
        refetch={refetch}
      />
    </>
  );
};

export default BookDetailsModal;
