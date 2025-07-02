import logo from "../../assets/logo.svg";

const NavLogo = () => {
  return (
    <div className="h-full overflow-hidden">
      <img src={logo} alt="logo" className="w-full h-full object-contain" />
    </div>
  );
};

export default NavLogo;
