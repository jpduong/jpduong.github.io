export const LINK_LEONARDO = `https://app.leonardo.ai`;

export const Header = () => {
  return (
    <header>
      <div className="flex justify-between items-center">
        <img
          className="rounded-full w-36 h-36 object-cover mb-8"
          src="images/avatar.jpg"
          alt="James Duong"
        />
      </div>
      <h1 className="text-4xl font-bold mb-4">jd</h1>
      <ul className="mb-16 list-disc list-inside">
        <li>
          senior software engineer @{" "}
          <a href={LINK_LEONARDO} className="text-blue-300" target="_blank">
            leonardo.ai
          </a>
        </li>
        <li>passionate in tech + basketball</li>
      </ul>
    </header>
  );
};
