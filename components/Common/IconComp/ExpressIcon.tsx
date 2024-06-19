"use client";

import { TIconCompProps } from "@/types/commonTypes";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ExpressIcon = ({
  className,
  stroke,
  hoverStroke,
  onClick,
}: TIconCompProps) => {
  const { resolvedTheme } = useTheme();
  const [strokeColor, setStrokeColor] = useState(stroke || "#212121");
  const setHoverColor = () => setStrokeColor(hoverStroke || "#917AEB");
  const removeHoverColor = () => setStrokeColor(stroke || "#212121");

  useEffect(() => {
    if (resolvedTheme) {
      resolvedTheme === "dark"
        ? setStrokeColor("#FCFCFA")
        : setStrokeColor("#0A0A0A");
    }
  }, [resolvedTheme]);
  return (
    <svg
      viewBox="0 0 48 48"
      width="48px"
      height="48px"
      baseProfile="basic"
      className={className}
      onClick={onClick}
      onMouseEnter={setHoverColor}
      onMouseLeave={removeHoverColor}
    >
      <path
        fill={strokeColor}
        d="M23.697,37.56h1.18c0.84,0,1.631-0.392,2.139-1.061l7.485-9.847l7.485,9.847	c0.508,0.668,1.299,1.061,2.139,1.061h1.18L35.756,25l9.121-12h-1.18c-0.84,0-1.631,0.392-2.139,1.061L34.5,23.347l-7.059-9.287	C26.933,13.392,26.142,13,25.302,13h-1.18l9.121,12L23.697,37.56z"
      />
      <path
        fill={strokeColor}
        d="M24,26v-3c0-6.675-5.945-11.961-12.829-10.852C5.812,13.011,2,17.857,2,23.284L2,24v2v0.142	c0,6.553,4.777,11.786,10.868,11.858c5.092,0.06,9.389-3.344,10.707-7.999h-1.028c-0.62,0-1.182,0.355-1.451,0.913	c-1.739,3.595-5.789,5.862-10.228,4.842C6.776,34.815,4,30.981,4,26.783V26H24z M4,23.71c0-4.708,2.804-8.557,6.924-9.478	C16.798,12.92,22,17.352,22,23v1H4V23.71z"
      />
    </svg>
  );
};

export default ExpressIcon;
