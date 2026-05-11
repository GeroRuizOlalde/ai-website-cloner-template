import { ArrowRightIcon } from "@/components/icons";
import { Reveal } from "@/components/Reveal";

interface VideoServiceSectionProps {
  videoSrc: string;
  title: string;
  description: string;
  boldName: string;
  buttons?: Array<{ label: string; href: string }>;
}

export function VideoServiceSection({
  videoSrc,
  title,
  description,
  boldName,
  buttons,
}: VideoServiceSectionProps) {
  const boldIndex = description.indexOf(boldName);
  const beforeBold = boldIndex >= 0 ? description.slice(0, boldIndex) : description;
  const afterBold = boldIndex >= 0 ? description.slice(boldIndex + boldName.length) : "";

  return (
    <section className="relative flex h-[500px] items-center justify-center overflow-hidden md:h-[680px]">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-0 h-full w-full object-cover"
      >
        <source src={videoSrc} />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-[1] bg-black/40" />

      {/* Content */}
      <Reveal className="relative z-[2] max-w-[900px] px-5 text-center">
        <h2 className="mb-2 font-heading text-[32px] font-semibold text-white md:text-[48px]">
          {title}
        </h2>

        {/* Red Separator */}
        <div className="mx-auto mb-5 h-[3px] w-[280px] bg-[#DD183B]" />

        <p className="text-center font-sans text-base leading-[1.65] text-white md:text-[19px]">
          {boldIndex >= 0 ? (
            <>
              {beforeBold}
              <strong>{boldName}</strong>
              {afterBold}
            </>
          ) : (
            description
          )}
        </p>

        {buttons && buttons.length > 0 && (
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 md:gap-[100px]">
            {buttons.map((button) => (
              <a
                key={button.href}
                href={button.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[#DD183B] px-6 py-3 text-[15px] font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c41534] hover:shadow-lg"
              >
                {button.label}
                <ArrowRightIcon className="h-4 w-4" />
              </a>
            ))}
          </div>
        )}
      </Reveal>
    </section>
  );
}
