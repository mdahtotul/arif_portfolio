import SectionHeader from "@/components/Common/SectionHeader";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { dummyListTestimonial } from "@/data";

export default function ClientSection() {
  return (
    <section className="mt-16" id="testimonials">
      <SectionHeader
        badge="Testimonials"
        title="There's a reason people are raving about me"
        spanTitle={["raving"]}
        subtitle="I have worked with some amazing brands and clients."
      />

      <div className="mt-10 rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={dummyListTestimonial}
          direction="left"
          speed="slow"
        />
      </div>
    </section>
  );
}
