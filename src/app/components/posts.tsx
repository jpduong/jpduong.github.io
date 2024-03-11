import { ContentBlock } from "./shared/content-block";
import { Section } from "./shared/section";

export const POSTS = [
  {
    title: "My Journey To Code",
    body: "My career transition to code",
    href: "https://medium.com/@jamesphongduong/my-personal-journey-to-code-618e4b75e9b",
  },
];

export const Posts = () => {
  return (
    <Section title="posts">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {POSTS.map((content, idx) => (
          <ContentBlock content={content} key={idx} />
        ))}
      </div>
    </Section>
  );
};
