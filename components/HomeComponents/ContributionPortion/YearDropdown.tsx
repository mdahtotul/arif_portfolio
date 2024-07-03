"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter, useSearchParams } from "next/navigation";

export function YearDropdown({ years }: { years?: (number | string)[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const contributeYear = searchParams.get("contributeYear") || "last";

  const returnQueryParams = (year: number | string) => {
    let newParams = {};
    if (year) newParams = { ...newParams, contributeYear: year };
    return newParams;
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="z-40 w-32">
        <Button variant="outline" size="icon" className="z-40 capitalize">
          {contributeYear}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="z-40">
        {years?.map((item, idx) => (
          <DropdownMenuItem
            key={idx}
            className="z-40 capitalize"
            onClick={() =>
              router.push(`?${new URLSearchParams(returnQueryParams(item))}`)
            }
          >
            {item}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
