import { listSkill } from "@/data";
import SkillSlider from "../Sliders/SkillSlider";

export default function SkillSection() {
  return (
    <section className="my-16 overflow-hidden">
      <p className="text-center text-secondary_gray font-medium mb-10">
        You&apos;re in good hands
      </p>

      <SkillSlider data={listSkill} />
    </section>
  );
}
