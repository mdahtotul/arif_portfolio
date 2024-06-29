import { ReactNode } from "react";

export type TExperienceItem = {
  title: string;
  company_name: string;
  icon?: string | ReactNode;
  iconBg?: string;
  date: string;
  points: string[];
};
