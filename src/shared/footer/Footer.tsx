import NavItems from "./NavItems";
import NavLogo from "../navbar/NavLogo";
import {
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";

const Footer = () => {
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
    <div>
      <div className="container flex flex-col md:flex-row md:items-center md:justify-between h-[500px] md:h-[200px]">
        <div className="w-28 h-28">
          <NavLogo />
        </div>
        <NavItems />
        <div className="flex items-center h-full gap-6 px-7">
          {icons.map((icon, i) => (
            <icon.icon key={i} className="h-full w-[18px] cursor-pointer" />
          ))}
        </div>
      </div>
      <div className="bg-primary1/30 h-[60px]">
        <div className="container flex items-center h-full justify-between">
          <span className="text-black font-semibold">{`©Copyright E-Vault 2026`}</span>
          <div className="hidden md:flex items-center gap-4">
            <span className="text-black font-semibold cursor-pointer">
              Terms & Condition
            </span>
            <span className="text-black font-semibold cursor-pointer">
              Privacy Policy
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
