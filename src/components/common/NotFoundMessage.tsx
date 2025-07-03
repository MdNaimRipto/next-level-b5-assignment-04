import { FaExclamation } from "react-icons/fa";

const NotFoundMessage = ({ title }: { title: string }) => {
  return (
    <div className="h-screen flex flex-col gap-4 justify-center items-center">
      <FaExclamation className="p-4 text-6xl bg-primary2 bg-opacity-20 text-white rounded-full" />
      <p className="text-2xl font-poppins">{title}</p>
      <span className="text-sm font-inter">Please try again later.</span>
    </div>
  );
};

export default NotFoundMessage;
