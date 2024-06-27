import SectionHeader from "@/components/Common/SectionHeader";
import SocialLinks from "@/components/Common/SocialLinks";
import { TypewriterEffectSmooth } from "../../ui/typewriter-effect";
import SphericalSkills from "./SphericalSkills";

export default function AboutSection() {
  const words = [
    {
      text: "Hi,",
      className: "text-xl xs:text-3xl sm:text-5xl",
    },
    {
      text: "I'm",
      className: "text-xl xs:text-3xl sm:text-5xl",
    },
    {
      text: "MD",
      className:
        "text-xl xs:text-3xl sm:text-5xl text-secondary_orange dark:text-primary_orange",
    },
    {
      text: "Ariful",
      className:
        "text-xl xs:text-3xl sm:text-5xl text-secondary_orange dark:text-primary_orange",
    },
    {
      text: "Hasan",
      className:
        "text-xl xs:text-3xl sm:text-5xl text-secondary_orange dark:text-primary_orange",
    },
  ];
  return (
    <section className="mt-16">
      <SectionHeader
        badge="About Me"
        title="Who am I?"
        spanTitle={["Who"]}
        subtitle="Let me Introduce myself in a few lines"
      />

      <div className="grid grid-cols-1 xl:grid-cols-[1fr_max-content] gap-4 px-1 xs:px-0 mt-5 justify-center">
        <div className="w-full h-max my-auto">
          <TypewriterEffectSmooth
            words={words}
            className="text-xl xs:text-3xl sm:text-5xl"
            cursorClassName="bg-primary_orange h-10"
          />
          <p className="font-subtitle text-secondary_gray text-base sm:text-xl font-medium my-7">
            A versatile web developer based in Bangladesh with over two years of
            expertise in React.js and Next.js, and six months of experience in
            Python and Django. I specialize in creating dynamic, user-friendly
            web applications and am committed to delivering innovative and
            efficient solutions.
          </p>

          <SocialLinks />
        </div>

        <SphericalSkills />

        {/* <figure className="relative w-60 h-60 xs:w-80 xs:h-80 mx-auto lg:ml-auto">
          <Image
            className="w-full h-full object-cover rounded-full"
            src={"/me.png"}
            alt="My photo"
            width={0}
            height={0}
            sizes="100%"
          />
        </figure> */}
      </div>
    </section>
  );
}
