import Banner from "./banner/Banner";
import BestSellingBooks from "./bestSellingBooks/BestSellingBooks";
import Blogs from "./blogs/Blogs";
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
      <Blogs />
      <Subscribe />
    </>
  );
};

export default HomeMain;
