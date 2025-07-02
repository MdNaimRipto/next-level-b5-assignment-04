import { SlHandbag } from "react-icons/sl";
import { TfiSearch } from "react-icons/tfi";
import { Button } from "@mui/material";
import { colorConfig } from "../../configs/colorConfig";
import ResponsiveMenuHandlerButton from "./ResponsiveMenuHandlerButton";
import type { Dispatch, SetStateAction } from "react";

const NavSideItems = ({
  isNavOpen,
  setIsNavOpen,
}: {
  isNavOpen: boolean;
  setIsNavOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex items-center h-full gap-6">
      <TfiSearch size={18} />
      <SlHandbag size={18} />
      <ResponsiveMenuHandlerButton
        isNavOpen={isNavOpen}
        setIsNavOpen={setIsNavOpen}
      />
      <Button
        variant="contained"
        sx={{
          backgroundColor: colorConfig.primary2,
          display: {
            xs: "none",
            sm: "block",
          },
        }}
      >
        <span className="normal-case navTitle text-lg mb-[2px] font-medium">
          View Summary
        </span>
      </Button>
    </div>
  );
};

export default NavSideItems;
