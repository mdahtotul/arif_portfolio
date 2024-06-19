import { routerMatcher } from "@/lib/matcher";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IRoute } from "./routes";

export default function NavItem({ item }: { item: IRoute }) {
  const pathname = usePathname();
  const isActive = routerMatcher(pathname) === item.matcher;
  const activeClassName =
    "bg-secondary_orange text-primary_white dark:text-secondary_black hover:bg-secondary_orange transition-all duration-300 px-[18px]";
  return (
    <Link
      href={item.href}
      className={cn(
        "flex items-center gap-[10px] py-3 rounded-xl",
        isActive && activeClassName
      )}
    >
      <span className="inline-block xs:hidden sm:inline-block">
        {item?.icon}
      </span>
      <span
        className={cn(
          "font-title font-medium hidden xs:inline-block",
          isActive
            ? "text-primary_white dark:text-secondary_black"
            : "text-secondary_black dark:text-primary_white"
        )}
      >
        {item?.name}
      </span>
    </Link>
  );
}
