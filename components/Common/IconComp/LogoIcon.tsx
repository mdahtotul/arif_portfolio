"use client";

import { TIconCompProps } from "@/types/commonTypes";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const LogoIcon = ({ className, hoverStroke, bg, onClick }: TIconCompProps) => {
  const { resolvedTheme } = useTheme();

  const [strokeColor, setStrokeColor] = useState("");
  const setHoverColor = () => setStrokeColor(hoverStroke || "#917AEB");
  const removeHoverColor = () => setStrokeColor("");

  useEffect(() => {
    if (resolvedTheme) {
      const stroke = resolvedTheme === "dark" ? "#FCFCFA" : "#0A0A0A";
      setStrokeColor(stroke);
    }
  }, [resolvedTheme]);

  return (
    <svg
      width="28"
      height="28"
      className={className}
      onClick={onClick}
      onMouseEnter={setHoverColor}
      onMouseLeave={removeHoverColor}
    >
      <path
        d="M 13.766 0.03 C 6.219 0.03 0.101 6.136 0.101 13.668 C 0.101 21.201 6.219 27.307 13.766 27.307 C 21.313 27.307 27.43 21.201 27.43 13.668 C 27.43 6.136 21.313 0.03 13.766 0.03 Z M 11.907 21.033 C 10.676 22.262 8.591 22.173 6.333 19.921 C 4.077 17.667 4.476 13.615 4.476 13.615 C 4.476 13.615 8.535 13.217 10.793 15.47 C 13.05 17.723 13.139 19.804 11.907 21.033 Z M 10.572 9.98 C 10.572 6.794 13.725 4.21 13.725 4.21 C 13.725 4.21 16.878 6.794 16.878 9.98 C 16.878 13.166 15.465 14.701 13.725 14.701 C 11.984 14.701 10.572 13.166 10.572 9.98 Z M 21.124 19.921 C 18.866 22.173 16.781 22.262 15.55 21.033 C 14.318 19.804 14.408 17.723 16.664 15.469 C 18.922 13.217 22.981 13.615 22.981 13.615 C 22.981 13.615 23.381 17.667 21.124 19.921 Z"
        fill={strokeColor}
      />
    </svg>
  );
};

export default LogoIcon;
