import SectionHeader from "@/components/Common/SectionHeader";
import GlowCardBlue from "@/components/HomeComponents/AboutPortion/GlowEffect/GlowCardBlue";
import GlowCardBlueOrange from "@/components/HomeComponents/AboutPortion/GlowEffect/GlowCardBlueOrange";
import GlowCardOrange from "@/components/HomeComponents/AboutPortion/GlowEffect/GlowCardOrange";

export default function LanguageSection() {
  return (
    <section className="mt-16 h-[900px] xs:h-[850px] md:h-auto">
      <SectionHeader
        badge="Language"
        title="How can I Help You?"
        spanTitle={["Help"]}
        subtitle="From JavaScript, to React.js, to Next.js, and even Backend development with Django and Node.js, I've got you covered."
      />

      <div className="h-[528px] grid grid-cols-1">
        {/* 1st part */}
        <div className="relative mt-10 grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-6">
          <div className="relative w-full h-[200px] md:h-auto">
            <GlowCardBlue />
          </div>
          <div className="relative w-full h-[200px] md:h-auto">
            <GlowCardOrange />
          </div>
        </div>
        {/* 2nd part */}
        <div className="relative grid w-full ">
          <GlowCardBlueOrange />
        </div>
      </div>
    </section>
  );
}
