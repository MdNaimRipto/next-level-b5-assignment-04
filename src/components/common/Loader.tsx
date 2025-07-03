import { CircularProgress } from "@mui/material";

const Loader = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <CircularProgress color="success" />
    </div>
  );
};

export default Loader;
