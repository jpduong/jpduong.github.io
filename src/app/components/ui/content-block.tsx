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
    <a
      className="
      border
      border-blue-300
      rounded
      "
      href={href}
    >
      {/* transition duration-200 ease-in-out transform hover:-translate-y-1 duration-200 ease-in-out */}
      <div className="p-4">
        <h2 className="text-lg mb-4">{title}</h2>
        <p>{body}</p>
      </div>
    </a>
  );
};
