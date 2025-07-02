import NavItems from "./NavItems";
import NavLogo from "./NavLogo";
import TopNav from "./TopNav";
import NavSideItems from "./NavSideItems";
import { useState } from "react";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div>
      <TopNav />
      <div className="h-[100px] leading-[100px] border-b border-b-primary1">
        <div className="container flex items-center justify-between h-full">
          <div className="flex items-center h-full">
            <NavLogo />
            <div className="hidden lg:block">
              <NavItems />
            </div>
          </div>
          <NavSideItems isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        </div>
      </div>
      <div
        className={`lg:hidden absolute top-0 w-4/5 md:w-2/5 h-full bg-primary2 z-50 ${
          isNavOpen ? "left-0" : "-left-full"
        } duration-700`}
      >
        <NavItems />
      </div>
    </div>
  );
};

export default Navbar;
