import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

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
    <footer className="flex flex-row gap-4 py-24">
      {FOOTER_LINKS.map(({ href, Icon }) => (
        <a href={href} target="_blank" className="text-blue-300" key={href}>
          <button className="text-lg">
            <Icon />
          </button>
        </a>
      ))}
    </footer>
  );
};
