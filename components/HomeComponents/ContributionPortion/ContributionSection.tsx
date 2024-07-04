"use client";

import SectionHeader from "@/components/Common/SectionHeader";
import lottieDevAnimation from "@/public/lottie/dev.json";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { useTheme } from "next-themes";
import { useSearchParams } from "next/navigation";
import { Suspense, useRef } from "react";
import GithubCalendar from "react-github-calendar";
import { YearDropdown } from "./YearDropdown";

export default function ContributionSection() {
  const animationRef = useRef<LottieRefCurrentProps>(null);
  return (
    <section id="contributions" className="mt-16">
      <SectionHeader
        badge="Contributions"
        title="One Commit at a Time"
        spanTitle={["Commit"]}
        subtitle="Empowering innovation through company and community contributions"
      />

      <div className="max-w-[300px] xs:max-w-md mx-auto">
        <Lottie lottieRef={animationRef} animationData={lottieDevAnimation} />
      </div>

      <Suspense>
        <ShowGithubCalendar />
      </Suspense>
    </section>
  );
}

function ShowGithubCalendar() {
  const { resolvedTheme } = useTheme();
  const searchParams = useSearchParams();

  const contributeYear = searchParams.get("contributeYear") || "last";

  const getYears = () => {
    let years = [];
    for (let i = 2021; i < new Date().getFullYear(); i++) {
      years.push(i);
    }
    years.push("last");
    return years;
  };
  return (
    <div className="flex flex-col items-center mt-10">
      <div className="flex gap-2 items-center mb-5">
        Year Filter:
        <YearDropdown years={getYears()} />
      </div>
      <GithubCalendar
        username="mdahtotul"
        colorScheme={resolvedTheme === "light" ? "light" : "dark"}
        year={contributeYear !== "last" ? +contributeYear : contributeYear}
        style={{
          margin: "10px auto",
        }}
      />
    </div>
  );
}
