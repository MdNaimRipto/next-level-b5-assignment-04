/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dialog } from "@mui/material";
import { useDeleteBookMutation } from "../../../redux/features/bookApis";
import type {
  IApiErrorResponse,
  IApiSuccessResponse,
} from "../../../types/apiResponseTypes";
import { SuccessToast } from "../toasts/SuccessToast";
import { ErrorToast } from "../toasts/ErrorToast";
import { useState } from "react";

interface WarningModalProps {
  open: boolean;
  onClose: () => void;
  closeDetailsModal: () => void;
  refetch: any;
  id: string;
}

const WarningModal: React.FC<WarningModalProps> = ({
  open,
  onClose,
  refetch,
  id,
  closeDetailsModal,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const [deleteBook] = useDeleteBookMutation();
  const handleDelete = async () => {
    try {
      setIsLoading(true);

      const res: IApiSuccessResponse = await deleteBook({
        id: String(id),
      }).unwrap();
      if (res.success) {
        SuccessToast(res.message);
        onClose();
        refetch();
        closeDetailsModal();
      }
    } catch (e) {
      const error = e as IApiErrorResponse;
      ErrorToast(error?.data?.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <div className="p-6 bg-white space-y-4">
        <h2 className="text-xl font-semibold text-red-600">Are you sure?</h2>
        <p className="text-gray-700">
          Once Deleted, You Cannot Recover This Book
        </p>
        <div className="flex justify-end gap-3 pt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={() => handleDelete()}
            disabled={isLoading}
            className="px-4 py-2 bg-error text-white rounded hover:bg-red-600"
          >
            {isLoading ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </Dialog>
  );
};

export default WarningModal;
