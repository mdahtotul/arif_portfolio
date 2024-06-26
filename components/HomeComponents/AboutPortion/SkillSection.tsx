import SkillSlider from "@/components/Sliders/SkillSlider";
import { listSkill } from "@/data";

export default function SkillSection() {
  return (
    <section className=" my-6 mt-0 sm:my-16 overflow-hidden">
      <p className="text-center text-secondary_gray font-medium mb-10">
        You&apos;re in good hands
      </p>

      <SkillSlider data={listSkill} />
    </section>
  );
}
