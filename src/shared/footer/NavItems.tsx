import { Link } from "react-router";
import { HashLink } from "react-router-hash-link";

const NavItems = () => {
  const items = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "All Books",
      path: "/books",
    },
    {
      title: "Add Book",
      path: "/create-book",
    },
    {
      title: "Top Selling Books",
      path: "/#top-selling-books",
    },
    {
      title: "Contact Us",
      path: "/#contactUs",
    },
  ];

  return (
    <ul className="md:flex items-center lg:h-full gap-8 md:gap-4 lg:gap-8 px-5 md:px-0 pt-6 md:pt-16 lg:pt-1">
      {items.map((item, i) => (
        <div key={i}>
          {item.path.startsWith("/#") ? (
            <HashLink
              to={item.path}
              className="block lg:h-full lg:leading-[100px]"
            >
              <li className="px-2 font-normal navTitle text-xl md:text-sm lg:text-lg lg:hover:text-primary2 duration-700 h-[70px] leading-[70px] text-black lg:h-full lg:leading-[100px]">
                {item.title}
              </li>
            </HashLink>
          ) : (
            <Link to={item.path} className="block lg:h-full lg:leading-[100px]">
              <li className="px-2 font-normal navTitle text-xl md:text-sm lg:text-lg lg:hover:text-primary2 duration-700 h-[70px] leading-[70px] text-black lg:h-full lg:leading-[100px]">
                {item.title}
              </li>
            </Link>
          )}
        </div>
      ))}
    </ul>
  );
};

export default NavItems;
