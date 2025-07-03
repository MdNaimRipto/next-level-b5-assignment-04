import { Button } from "@mui/material";
import { colorConfig } from "../../../configs/colorConfig";
import type { Dispatch, SetStateAction } from "react";

const BasicButton = ({
  title,
  setOpen,
}: {
  title: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Button
      onClick={() => setOpen(true)}
      variant="contained"
      sx={{
        backgroundColor: colorConfig.primary2,
      }}
    >
      <span className="normal-case navTitle text-lg mb-[2px] font-medium">
        {title}
      </span>
    </Button>
  );
};

export default BasicButton;
