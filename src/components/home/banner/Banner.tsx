import { useEffect, useState } from "react";
import { Link } from "react-router";
import banner01 from "../../../assets/banner/banner01.jpg";
import banner02 from "../../../assets/banner/banner02.jpg";
import { Button } from "@mui/material";
import { colorConfig } from "../../../configs/colorConfig";

const banners = [
  {
    image: banner01,
    title: "Explore Bestsellers",
    description:
      "Dive into top books from around the world and uncover stories that inspire, educate, and entertain.",
  },
  {
    image: banner02,
    title: "Discover Your Next Read",
    description:
      "Browse genres, find your perfect book match, and start a new literary journey today.",
  },
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[500px] md:h-screen overflow-hidden">
      {/* All images rendered together, only current one visible with fade */}
      {banners.map((banner, index) => (
        <img
          key={index}
          src={banner.image}
          alt={`Banner ${index}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100 z-0" : "opacity-0 z-0"
          }`}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-2xl md:text-6xl font-bold text-white mb-8">
          {banners[currentIndex].title}
        </h1>
        <p className="text-lg md:text-xl md:w-[500px] md:leading-[30px] text-white mb-6">
          {banners[currentIndex].description}
        </p>
        <Link to="/books">
          <Button
            variant="contained"
            sx={{
              backgroundColor: colorConfig.primary2,
            }}
          >
            <span className="normal-case navTitle text-lg mb-[2px] font-medium">
              Browse Books
            </span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
