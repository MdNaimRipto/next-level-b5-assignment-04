import { useState } from "react";
import { Dialog } from "@mui/material";
import { useBorrowBookMutation } from "../../../redux/features/borrowApis";
import { postApiHandler } from "../apiHandlers/postApiHandler";
import { useNavigate } from "react-router";

/* Props */
interface BorrowModalProps {
  open: boolean;
  onClose: () => void;
  refetch: () => void;
  id: string;
}

const BorrowModal: React.FC<BorrowModalProps> = ({
  open,
  onClose,
  refetch,
  id,
}) => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [borrowBook] = useBorrowBookMutation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    const [year, month, day] = form.dueDate.value.split("-").map(Number);
    const formattedDueDate = new Date(
      Date.UTC(year, month - 1, day)
    ).toISOString();

    const option = {
      data: {
        book: id,
        quantity: Number(form.quantity.value),
        dueDate: formattedDueDate,
      },
    };

    const optionalTasks = () => {
      form.reset();
      onClose();
      refetch();
      navigate("/summary");
    };

    await postApiHandler({
      mutateFn: borrowBook,
      options: option,
      setIsLoading,
      optionalTasksFn: optionalTasks,
    });
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <form onSubmit={handleSubmit} className="p-6 space-y-4 bg-white">
        <h2 className="text-xl font-semibold mb-2">Borrow a Book</h2>

        {/* Quantity */}
        <input
          name="quantity"
          type="number"
          required
          min={1}
          placeholder="Quantity"
          className="w-full px-4 py-2 border rounded"
        />

        {/* Due Date */}
        <input
          name="dueDate"
          type="date"
          required
          className="w-full px-4 py-2 border rounded"
        />

        {/* Action Buttons */}
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
            {isLoading ? "Processing..." : "Confirm Borrow"}
          </button>
        </div>
      </form>
    </Dialog>
  );
};

export default BorrowModal;
