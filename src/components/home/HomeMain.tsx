import Banner from "./banner/Banner";
import BestSellingBooks from "./bestSellingBooks/BestSellingBooks";
import BooksByGenre from "./booksByGenre/BooksByGenre";
import Reviews from "./reviews/Reviews";
import Subscribe from "./subscribe/Subscribe";

const HomeMain = () => {
  return (
    <>
      <Banner />
      <BestSellingBooks />
      <BooksByGenre />
      <Reviews />
      <Subscribe />
    </>
  );
};

export default HomeMain;
