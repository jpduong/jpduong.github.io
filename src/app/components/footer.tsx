import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { LINK_INSTAGRAM, LINK_LINKED_IN, LINK_GITHUB } from "../constants";

export const Footer = () => {
  return (
    <footer className="flex flex-row gap-4 py-16">
      <a href={LINK_INSTAGRAM} target="_blank" className="text-blue-300">
        <button className="text-lg">
          <FaInstagram />
        </button>
      </a>
      <a href={LINK_LINKED_IN} target="_blank" className="text-blue-300">
        <button className="text-lg">
          <FaLinkedin />
        </button>
      </a>
      <a href={LINK_GITHUB} target="_blank" className="text-blue-300">
        <button className="text-lg">
          <FaGithub />
        </button>
      </a>
    </footer>
  );
};
