import ComparisonCard from "@/components/Common/Cards/ComparisonCard";
import SectionHeader from "@/components/Common/SectionHeader";

export default function ComparisonSection() {
  const other = [
    "Lack of debugging experience",
    "Unable to write clean and error-free code",
    "Shy to communicate with team members and stakeholders",
    "Lazy to learn the latest technologies",
    "Impatient with collaborative environments",
  ];
  const me = [
    "Identify and resolve issues efficiently",
    "Deliver clean, error-free code",
    "Effectively communicate with team members and stakeholders",
    "Quickly learn and implement new technologies",
    "Thrive in collaborative environments, working well with diverse groups",
  ];
  return (
    <section>
      <SectionHeader
        badge="Comparison"
        title="But, Why Work with Me?"
        spanTitle={["Work"]}
        subtitle=""
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 h-max mb-10 lg::mb-auto">
        <ComparisonCard title="Others" data={other} />
        <ComparisonCard title="Me" data={me} />
      </div>
    </section>
  );
}
