/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import type {
  IApiErrorResponse,
  IApiSuccessResponse,
} from "../../../types/apiResponseTypes";
import { SuccessToast } from "../toasts/SuccessToast";
import { ErrorToast } from "../toasts/ErrorToast";

const DeleteApiHandler = ({
  deleteFn,
  refetch,
  id,
}: {
  deleteFn: any;
  refetch: any;
  id: string;
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async () => {
    try {
      setIsLoading(true);

      const res: IApiSuccessResponse = await deleteFn({ id }).unwrap();
      if (res.success) {
        SuccessToast(res.message);
        refetch();
      }
    } catch (e) {
      const error = e as IApiErrorResponse;
      ErrorToast(error?.data?.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={() => handleDelete()}
      disabled={isLoading}
      className="px-4 py-2 bg-error text-white rounded hover:bg-red-600"
    >
      {isLoading ? "Deleting..." : "Delete"}
    </button>
  );
};

export default DeleteApiHandler;
