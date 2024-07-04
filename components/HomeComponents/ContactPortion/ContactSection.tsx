import SectionHeader from "@/components/Common/SectionHeader";
import ContactForm from "./ContactForm";
import RotateEarth from "./RotateEarth";
import StarsCanvas from "./StarsCanvas";

export default function ContactSection() {
  return (
    <section id="contact" className="mt-16 relative z-0">
      <SectionHeader
        badge="Contact"
        title="Get in touch"
        spanTitle={["touch"]}
        subtitle="I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions."
      />

      <div className="flex xl:flex-row flex-col-reverse gap-10 overflow-hidden mt-10">
        <ContactForm />

        <RotateEarth />
      </div>

      <StarsCanvas />
    </section>
  );
}
