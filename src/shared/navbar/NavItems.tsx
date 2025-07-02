import { Button } from "@mui/material";
import { Link } from "react-router";
import { colorConfig } from "../../configs/colorConfig";

const NavItems = () => {
  const items = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Books",
      path: "/books",
    },
    {
      title: "Top Selling Books",
      path: "/#top-selling-books",
    },
    {
      title: "Blogs",
      path: "/#blogs",
    },
    {
      title: "Contact Us",
      path: "/#contactUs",
    },
  ];

  return (
    <ul className="lg:flex items-center lg:h-full gap-8 px-5 pt-6 md:pt-16 lg:pt-1">
      {items.map((item, i) => (
        <Link
          to={item.path}
          key={i}
          className="block lg:h-full lg:leading-[100px]"
        >
          <li className="px-2 font-normal navTitle text-xl lg:text-lg lg:hover:text-primary2 duration-700 h-[70px] leading-[70px] text-white lg:text-black lg:h-full lg:leading-[100px]">
            {item.title}
          </li>
        </Link>
      ))}
      <Button
        variant="contained"
        sx={{
          backgroundColor: colorConfig.white,
          color: colorConfig.primary2,
          width: "100%",
          display: {
            xs: "block",
            sm: "none",
          },
          mt: 3,
        }}
      >
        <span className="normal-case navTitle text-lg font-medium">
          View Summary
        </span>
      </Button>
    </ul>
  );
};

export default NavItems;
