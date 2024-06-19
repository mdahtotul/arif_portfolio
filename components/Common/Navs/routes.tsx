import {
  DramaIcon,
  GitCompareArrowsIcon,
  NotebookPenIcon,
  ProjectorIcon,
  RadarIcon,
} from "lucide-react";

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
    icon: <DramaIcon className="w-5 h-5" />,
    matcher: "about",
  },
  {
    name: "Projects",
    href: "/projects",
    icon: <ProjectorIcon className="w-5 h-5" />,
    matcher: "projects",
  },
  {
    name: "Skills",
    href: "/skills",
    icon: <RadarIcon className="w-5 h-5" />,
    matcher: "skills",
  },
  {
    name: "Blogs",
    href: "/blogs",
    icon: <NotebookPenIcon className="w-5 h-5" />,
    matcher: "blogs",
  },
  {
    name: "Contact",
    href: "/contact",
    icon: <GitCompareArrowsIcon className="w-5 h-5" />,
    matcher: "contact",
  },
];
