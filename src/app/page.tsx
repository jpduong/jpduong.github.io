"use client";

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import {
  CONTENT_PROJECTS,
  LINK_GITHUB,
  LINK_INSTAGRAM,
  LINK_LEONARDO,
  LINK_LINKED_IN,
} from "./constants";
import { ContentBlock } from "./components/ui/content-block";

export default function Home() {
  return (
    <main className="py-8">
      <div className="container max-w-xl mx-auto pt-32">
        <div className="flex justify-between items-center">
          <div className="avatar mb-8">
            <img
              className="rounded-full w-24 h-24 object-cover"
              src="avatar.jpg"
              alt="James Duong"
            />
          </div>
          <div className="flex flex-col gap-4">
            <a href={LINK_INSTAGRAM} target="_blank" className="text-blue-300">
              <button>
                <FaInstagram />
              </button>
            </a>
            <a href={LINK_LINKED_IN} target="_blank" className="text-blue-300">
              <button>
                <FaLinkedin />
              </button>
            </a>
            <a href={LINK_GITHUB} target="_blank" className="text-blue-300">
              <button>
                <FaGithub />
              </button>
            </a>
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-4">jd</h1>
        <ul className="mb-16 list-disc">
          <li>
            senior software engineer @{" "}
            <a href={LINK_LEONARDO} className="text-blue-300">
              leonardo.ai
            </a>
          </li>
          <li>passionate in tech + basketball</li>
        </ul>
        <h3 className="font-bold mb-4">Posts</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {CONTENT_PROJECTS.map((content, idx) => (
            <ContentBlock content={content} key={idx} />
          ))}
        </div>
      </div>
    </main>
  );
}
