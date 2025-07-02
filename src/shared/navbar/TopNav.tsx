import { Link } from "react-router";
import {
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";

const TopNav = () => {
  const icons = [
    {
      icon: FaLinkedinIn,
    },
    {
      icon: FaTwitter,
    },
    {
      icon: FaFacebook,
    },
    {
      icon: FaInstagram,
    },
  ];

  return (
    <div className="bg-primary2 text-white text-xs h-[60px] leading-[60px] hidden md:block">
      <div className="container flex items-center justify-between h-full">
        <div className="flex items-center h-full gap-2">
          <Link className="border-x border-x-white px-2" to="">
            info@eVault.com
          </Link>
          <Link className="border-r border-r-white pr-2" to="">
            +8801632970990
          </Link>
        </div>
        <div className="flex items-center h-full gap-6">
          {icons.map((icon, i) => (
            <icon.icon key={i} className="h-full w-[18px] cursor-pointer" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopNav;
