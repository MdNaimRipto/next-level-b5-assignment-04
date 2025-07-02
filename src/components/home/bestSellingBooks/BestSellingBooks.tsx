import BookCard from "../../common/cards/BookCard";
import TitleMain from "../../common/titles/TitleMain";
import SectionRedirectLink from "../../common/links/SectionRedirectLink";

interface Book {
  title: string;
  author: string;
  genre: string;
  available: boolean;
}

const dummyBooks: Book[] = [
  {
    title: "The Silent Patient",
    author: "Alex Michaelides",
    genre: "Thriller",
    available: true,
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-help",
    available: true,
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    available: false,
  },
  {
    title: "Educated",
    author: "Tara Westover",
    genre: "Memoir",
    available: true,
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    available: true,
  },
  {
    title: "Becoming",
    author: "Michelle Obama",
    genre: "Biography",
    available: false,
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    genre: "Sci-Fi",
    available: true,
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Adventure",
    available: true,
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    genre: "Sci-Fi",
    available: true,
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Adventure",
    available: true,
  },
];

const BestSellingBooks = () => {
  return (
    <div className="container mx-auto py-10" id="top-selling-books">
      <TitleMain title="Best Selling Books" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {dummyBooks.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
      <SectionRedirectLink title="View All" path="/books" />
    </div>
  );
};

export default BestSellingBooks;
