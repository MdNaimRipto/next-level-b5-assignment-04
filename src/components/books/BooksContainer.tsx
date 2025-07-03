import type { Dispatch, SetStateAction } from "react";
import { useGetAllBooksQuery } from "../../redux/features/bookApis";
import type { IBooks } from "../../types/books.types";
import Loader from "../common/Loader";
import NotFoundMessage from "../common/NotFoundMessage";
import BookCard from "../common/cards/BookCard";
import AddBookModal from "../common/modals/AddBookModal";

const BooksContainer = ({
  genre,
  openModal,
  setOpenModal,
}: {
  genre: string | null;
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}) => {
  const { data, isLoading, refetch } = useGetAllBooksQuery({
    limit: "null",
    genre: genre ? genre : "",
  });

  if (isLoading) {
    return <Loader />;
  }

  if (!data) {
    return <NotFoundMessage title="No Books Found!" />;
  }

  const books = data?.data?.data as IBooks[];

  if (!books?.length) {
    return <NotFoundMessage title="No Books Found!" />;
  }

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {books.map((book, index) => (
          <BookCard key={index} book={book} refetch={refetch} />
        ))}
      </div>
      {/* Add Book Modal */}
      <AddBookModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        refetch={refetch}
      />
    </>
  );
};

export default BooksContainer;
