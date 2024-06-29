import {
  DramaIcon,
  GitCompareArrowsIcon,
  NotebookPenIcon,
  ProjectorIcon,
  RadarIcon,
} from "lucide-react";
import React from "react";

export interface IRoute {
  name: string;
  href: string;
  icon?: React.ReactNode;
  matcher: string;
}

export const routes: IRoute[] = [
  {
    name: "About",
    href: "/",
    icon: React.createElement(DramaIcon, { className: "w-5 h-5" }),
    matcher: "about",
  },
  {
    name: "Projects",
    href: "/projects",
    icon: React.createElement(ProjectorIcon, { className: "w-5 h-5" }),
    matcher: "projects",
  },
  {
    name: "Skills",
    href: "/skills",
    icon: React.createElement(RadarIcon, { className: "w-5 h-5" }),
    matcher: "skills",
  },
  {
    name: "Blogs",
    href: "/blogs",
    icon: React.createElement(NotebookPenIcon, { className: "w-5 h-5" }),
    matcher: "blogs",
  },
  {
    name: "Contact",
    href: "/contact",
    icon: React.createElement(GitCompareArrowsIcon, { className: "w-5 h-5" }),
    matcher: "contact",
  },
];
