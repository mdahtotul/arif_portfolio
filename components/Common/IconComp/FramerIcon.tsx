"use client";
import { TIconCompProps } from "@/types/commonTypes";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const FramerIcon = ({
  className,
  stroke,
  hoverStroke,
  onClick,
}: TIconCompProps) => {
  const { resolvedTheme } = useTheme();
  const [strokeColor, setStrokeColor] = useState(stroke || "#0A0A0A");
  const setHoverColor = () => setStrokeColor(hoverStroke || "#917AEB");
  const removeHoverColor = () => setStrokeColor(stroke || "#0A0A0A");

  useEffect(() => {
    if (resolvedTheme) {
      resolvedTheme === "dark"
        ? setStrokeColor("#FCFCFA")
        : setStrokeColor("#0A0A0A");
    }
  }, [resolvedTheme]);
  return (
    <svg
      height="48px"
      width="48px"
      viewBox="3.7 3.7 43.6 43.6"
      className={className}
    >
      <path
        d="m47.3 3.7v21.8l-10.9 10.9-10.9 10.9-10.9-10.9 10.9-10.9v.1-.1z"
        fill="#59529d"
      />
      <path d="m47.3 25.5v21.8l-10.9-10.9z" fill="#5271b4" />
      <path
        d="m25.5 25.5-10.9 10.9-10.9 10.9v-43.6l10.9 10.9z"
        fill="#bb4b96"
      />
    </svg>
  );
};

export default FramerIcon;
