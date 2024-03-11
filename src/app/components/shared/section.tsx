type Props = { children: JSX.Element | JSX.Element[]; title: string };

export const Section = ({ children, title }: Props) => {
  return (
    <section className="mb-16">
      <h3 className="font-bold mb-4">{title}</h3>
      {children}
    </section>
  );
};
