import BookCard from "../../common/cards/BookCard";
import TitleMain from "../../common/titles/TitleMain";
import SectionRedirectLink from "../../common/links/SectionRedirectLink";
import { useGetAllBooksQuery } from "../../../redux/features/bookApis";
import Loader from "../../common/Loader";
import type { IBooks } from "../../../types/books.types";
import NotFoundMessage from "../../common/NotFoundMessage";

const BestSellingBooks = () => {
  const { data, isLoading, refetch } = useGetAllBooksQuery({});

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
    <div className="container mx-auto py-10" id="top-selling-books">
      <TitleMain title="Best Selling Books" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {books.map((book, index) => (
          <BookCard key={index} book={book} refetch={refetch} />
        ))}
      </div>
      <SectionRedirectLink title="View All" path="/books" />
    </div>
  );
};

export default BestSellingBooks;
