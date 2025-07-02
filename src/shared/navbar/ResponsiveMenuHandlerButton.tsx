import { IconButton } from "@mui/material";
import type { Dispatch, SetStateAction } from "react";

const ResponsiveMenuHandlerButton = ({
  isNavOpen,
  setIsNavOpen,
}: {
  isNavOpen: boolean;
  setIsNavOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const commonStyle = `w-6 h-[2px] rounded absolute bg-black left-0 duration-700`;
  return (
    <IconButton
      onClick={() => setIsNavOpen(!isNavOpen)}
      sx={{
        p: 0.3,
        "&:hover": {
          background: "none",
        },
        display: {
          xs: "block",
          md: "none",
        },
        width: 26,
        height: 20,
        overflow: "hidden",
        borderRadius: 0,
      }}
    >
      <div className="relative w-full h-[16px] overflow-hidden group">
        <p
          className={`${commonStyle} top-0 ${
            isNavOpen ? "opacity-0" : "opacity-100"
          }`}
        ></p>
        <p
          className={`${commonStyle} top-1/2 -translate-y-1/2 ${
            isNavOpen ? "rotate-45" : "rotate-0"
          }`}
        ></p>
        <p
          className={`${commonStyle} top-1/2 -translate-y-1/2 ${
            isNavOpen ? "-rotate-45" : "rotate-90   opacity-0"
          }`}
        ></p>
        <p
          className={`${commonStyle} bottom-0 ${
            isNavOpen ? "opacity-0" : "opacity-100"
          }`}
        ></p>
      </div>
    </IconButton>
  );
};

export default ResponsiveMenuHandlerButton;
