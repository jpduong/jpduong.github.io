"use client";

import { ContentBlock } from "./components/ui/content-block";
import { CONTENT_PROJECTS, LINK_LEONARDO } from "./constants";

export default function Home() {
  return (
    <>
      <div className="flex justify-between items-center">
        <img
          className="rounded-full w-36 h-36 object-cover mb-8"
          src="avatar.jpg"
          alt="James Duong"
        />
      </div>
      <h1 className="text-4xl font-bold mb-4">jd</h1>
      <ul className="mb-16 list-disc list-inside">
        <li>
          senior software engineer @{" "}
          <a href={LINK_LEONARDO} className="text-blue-300">
            leonardo.ai
          </a>
        </li>
        <li>passionate in tech + basketball</li>
      </ul>
      <h3 className="font-bold mb-4">posts</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {CONTENT_PROJECTS.map((content, idx) => (
          <ContentBlock content={content} key={idx} />
        ))}
      </div>
    </>
  );
}
