"use client";

import { cn } from "@/lib/utils";
import LogoIcon from "../IconComp/LogoIcon";
import { ThemeToggle } from "../ThemeToggle";
import NavItem from "./NavItem";
import { routes } from "./routes";

export default function Navbar({ className }: { className?: string }) {
  return (
    <nav
      className={cn("fixed w-full flex items-center justify-center", className)}
    >
      <div className="w-max bg-primary_white dark:bg-secondary_black text-secondary_black dark:text-primary_white border dark:border-primary_gray rounded-xl px-6 py-3 overflow-hidden backdrop:blur-[10px] z-40">
        <div className="flex gap-5 items-center">
          <LogoIcon className="hidden xs:block" />

          {routes.map((route) => (
            <NavItem key={route.name} item={route} />
          ))}

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}