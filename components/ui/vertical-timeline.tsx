"use client";
import { cn } from "@/lib/utils";
import { TExperienceItem } from "@/types/experienceTypes";
import { motion } from "framer-motion";
import { Fragment } from "react";
import { useInView } from "react-intersection-observer";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.9,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function VerticalTimeline({
  data,
}: {
  data: TExperienceItem[];
}) {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  if (!data || data?.length === 0) return <div ref={ref}></div>;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className={cn(
        "relative max-w-7xl mt-10 mx-auto after:content-[''] after:absolute after:w-[6px] after:h-full after:bg-secondary_orange after:top-0 after:left-8 md:after:left-1/2 after:z-[1] after:-ml-[2px] after:rounded-md"
      )}
    >
      {Array.isArray(data) &&
        data.map((item, index) => (
          <Fragment key={index}>
            <motion.div variants={itemVariants}>
              <Timeline
                index={index}
                title={item.title}
                date={item.date}
                icon={item.icon}
                company_name={item.company_name}
                points={item.points}
              />
            </motion.div>
          </Fragment>
        ))}
      <div></div>
    </motion.div>
  );
}

function Timeline({
  index,
  title,
  date,
  icon,
  company_name,
  points,
}: TExperienceItem & { index: number }) {
  return (
    <motion.div
      className={cn(
        "relative pl-20 pr-6 md:px-[50px] md:py-[10px] w-full md:w-1/2 mb-5",
        index % 2 === 0 ? "left-0" : "left-0 md:left-1/2"
      )}
    >
      <motion.div
        className={cn(
          "absolute w-10 h-10 border-2 rounded-full border-secondary_orange z-10 top-6 md:top-8 flex items-center justify-center bg-primary_white dark:bg-primary_black",
          index % 2 !== 0
            ? "left-3 md:-left-5"
            : "left-3 md:left-auto md:-right-5"
        )}
      >
        {icon}
      </motion.div>

      <motion.div className="relative px-8 py-5 bg-secondary_white dark:bg-secondary_black rounded-lg border border-primary_gray text-secondary_gray">
        <h3 className="text-xl font-title font-bold line-clamp-1 text-primary_black dark:text-primary_white">
          {title}
        </h3>
        <p className="text-lg line-clamp-1 my-2">{company_name}</p>
        <small>{date}</small>

        <span
          className={cn(
            "absolute h-0 w-0 top-7 z-10 border-t-[15px] border-b-[15px] border-t-transparent border-b-transparent",
            index % 2 !== 0
              ? "border-r-[15px] border-r-secondary_white dark:border-r-primary_gray left-[-15px]"
              : "border-r-[15px] border-r-secondary_white dark:border-r-primary_gray left-[-15px] md:border-r-auto md:left-auto md:-right-[15px] md:rotate-180"
          )}
        />
      </motion.div>
    </motion.div>
  );
}
