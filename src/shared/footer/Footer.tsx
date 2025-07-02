import NavItems from "../navbar/NavItems";
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
      <div className="container flex items-center justify-between h-[200px]">
        <div className="w-28 h-28">
          <NavLogo />
        </div>
        <NavItems />
        <div className="flex items-center h-full gap-6">
          {icons.map((icon, i) => (
            <icon.icon key={i} className="h-full w-[18px] cursor-pointer" />
          ))}
        </div>
      </div>
      <div className="bg-primary1/30 h-[60px]">
        <div className="container flex items-center h-full justify-between">
          <span className="text-black font-semibold">{`©Copyright E-Vault 2026`}</span>
          <div className="flex items-center gap-4">
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
