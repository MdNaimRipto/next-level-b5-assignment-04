import React from "react";
import TitleMain from "../../common/titles/TitleMain";
import SectionRedirectLink from "../../common/links/SectionRedirectLink";
import { Link } from "react-router";

const genres = [
  "FICTION",
  "NON_FICTION",
  "SCIENCE",
  "HISTORY",
  "BIOGRAPHY",
  "FANTASY",
];

const BooksByGenre: React.FC = () => {
  return (
    <div className="container mx-auto py-10" id="books-by-genre">
      <TitleMain title="Browse by Genre" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {genres.map((genre, index) => (
          <Link
            to={`/books?genre=${genre}`}
            key={index}
            className="bg-primary1 hover:bg-primary2/40 transition-colors rounded-lg p-6 text-center font-medium text-lg uppercase tracking-wide"
          >
            {genre.replace("_", " ")}
          </Link>
        ))}
      </div>

      <SectionRedirectLink title="View All" path="/books" />
    </div>
  );
};

export default BooksByGenre;
