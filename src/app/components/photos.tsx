import { Section } from "./shared/section";

type Photo = {
  src: string;
  alt: string;
};

const photos: Photo[] = [
  { src: "images/basketball.webp", alt: "basketball" },
  { src: "images/keyboard.webp", alt: "keyboard" },
  { src: "images/car.webp", alt: "car" },
];

export const Photos = () => {
  return (
    <Section title="photos">
      <div className="flex flex-wrap">
        {photos.map(({ src, alt }, idx) => (
          <div key={idx} className="w-full md:w-1/2 p-2">
            <img src={src} alt={alt} className="w-full h-auto" />
          </div>
        ))}
      </div>
    </Section>
  );
};
