import { Link } from "react-router";

const SectionRedirectLink = ({
  path,
  title,
}: {
  path: string;
  title: string;
}) => {
  return (
    <div className="mt-6 flex justify-end">
      <Link
        to={path}
        className="text-primary2 text-lg font-medium underline underline-offset-2 hover:text-primary2/80 transition"
      >
        {title}
      </Link>
    </div>
  );
};

export default SectionRedirectLink;
