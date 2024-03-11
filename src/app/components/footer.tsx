import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "./shared/link";

const FOOTER_LINKS = [
  {
    href: "https://www.instagram.com/jamesduong",
    Icon: FaInstagram,
  },
  {
    href: "https://www.linkedin.com/in/james-duong-9168a89a",
    Icon: FaLinkedin,
  },
  {
    href: "https://github.com/jpduong",
    Icon: FaGithub,
  },
];

export const Footer = () => {
  return (
    <footer className="flex flex-row gap-4 py-4">
      {FOOTER_LINKS.map(({ href, Icon }) => (
        <Link key={href} href={href}>
          <button className="text-lg">
            <Icon />
          </button>
        </Link>
      ))}
    </footer>
  );
};
