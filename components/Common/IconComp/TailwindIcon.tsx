"use client";

import { TIconCompProps } from "@/types/commonTypes";
import { useState } from "react";

export default function TailwindIcon({
  className,
  stroke,
  hoverStroke,
  bg,
  onClick,
}: TIconCompProps) {
  const [strokeColor, setStrokeColor] = useState(stroke || "#00acc1");
  const setHoverColor = () => setStrokeColor(hoverStroke || "#917AEB");
  const removeHoverColor = () => setStrokeColor(stroke || "#00acc1");

  return (
    <svg
      viewBox="0 0 48 48"
      width="48px"
      height="48px"
      className={className}
      onClick={onClick}
      onMouseEnter={setHoverColor}
      onMouseLeave={removeHoverColor}
    >
      <path
        fill={strokeColor}
        d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z"
      />
    </svg>
  );
}
