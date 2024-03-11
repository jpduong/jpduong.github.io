type Props = {
  children: JSX.Element | JSX.Element[] | string;
  href: string;
  className?: string;
};

export const Link = ({ children, href, className }: Props) => {
  const baseClass = `custom-hover text-blue-300`;

  return (
    <a
      className={`${baseClass} ${className}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};
