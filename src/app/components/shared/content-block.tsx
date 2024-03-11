import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "./link";

type Props = {
  content: {
    title: string;
    body: string;
    href: string;
  };
};

export const ContentBlock = ({ content }: Props) => {
  const { href, title, body } = content;

  return (
    <Link href={href} className="border border-blue-300 rounded">
      <div className="p-4 flex justify-between">
        <h2 className="mb-4">{title}</h2>
        <FiArrowUpRight className="mt-1" />
      </div>
    </Link>
  );
};
