"use client";

import { routes } from "@/data/routes";
import { cn } from "@/lib/utils";
import Logo from "../Logo";
import { ThemeToggle } from "../ThemeToggle";
import NavItem from "./NavItem";

export default function Navbar({ className }: { className?: string }) {
  return (
    <nav
      className={cn("fixed w-full flex items-center justify-center", className)}
    >
      <div className="w-max bg-secondary_white dark:bg-secondary_black text-secondary_black dark:text-primary_white border dark:border-primary_gray rounded-xl px-6 py-3 overflow-hidden backdrop:blur-[10px]">
        <div className="flex gap-5 items-center z-40">
          {/* <LogoIcon className="hidden xs:block z-40 cursor-pointer" /> */}
          <Logo className="hidden xs:block z-40 cursor-pointer" />

          {routes.map((route) => (
            <NavItem key={route.name} item={route} />
          ))}

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
