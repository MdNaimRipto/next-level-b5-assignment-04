import { Button } from "@mui/material";
import { colorConfig } from "../../../configs/colorConfig";

const BasicButton = ({ title }: { title: string }) => {
  return (
    <Button
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
