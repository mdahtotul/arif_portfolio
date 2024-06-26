"use client";

import { TIconCompProps } from "@/types/commonTypes";
import { useState } from "react";

export default function VSCodeIcon({
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
      className={className}
      onClick={onClick}
      onMouseEnter={setHoverColor}
      onMouseLeave={removeHoverColor}
      height="48px"
    >
      <linearGradient
        id="HjBUFHyNtcsDcBgnZBZ2Sa"
        x1="37.8"
        x2="37.8"
        y1="43.37"
        y2="7.42"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#29b6f6" />
        <stop offset="1" stopColor="#13b2f6" />
      </linearGradient>
      <path
        fill="url(#HjBUFHyNtcsDcBgnZBZ2Sa)"
        d="M34.176,4.249c0.188,0.092,5.688,2.716,8.374,3.998C43.437,8.67,44,9.564,44,10.546v26.86	c0,0.981-0.559,1.874-1.443,2.299c-2.548,1.228-7.611,3.666-7.948,3.826C34.361,43.649,33.709,44,33.181,44	c-0.678,0-1.133-0.316-1.58-0.73L34,35.711V5.715l-2.254-1.135C32.228,4.109,32.896,4,33.291,4C33.653,4,33.948,4.138,34.176,4.249z"
      />
      <linearGradient
        id="HjBUFHyNtcsDcBgnZBZ2Sb"
        x1="6.085"
        x2="34.793"
        y1="34.801"
        y2="7.173"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".115" stopColor="#0076bb" />
        <stop offset=".257" stopColor="#0069b0" />
        <stop offset=".28" stopColor="#0069b0" />
        <stop offset=".424" stopColor="#0069b0" />
        <stop offset=".491" stopColor="#0072b7" />
        <stop offset=".577" stopColor="#0076bb" />
        <stop offset=".795" stopColor="#0076bb" />
        <stop offset="1" stopColor="#006eb9" />
      </linearGradient>
      <path
        fill="url(#HjBUFHyNtcsDcBgnZBZ2Sb)"
        d="M9,33.896l25-19.023V5.83c0-1.299-1.662-1.808-2.337-1.184	C31.008,5.25,4.658,29.239,4.658,29.239c-0.9,0.83-0.849,2.267,0.107,3.032c0,0,1.324,1.232,1.803,1.574	C7.304,34.37,8.271,34.43,9,33.896z"
      />
      <path
        fill="#0288d1"
        d="M9,14.104l25,19.054v8.771c0,1.198-1.42,2.193-2.399,1.341L4.658,18.761	c-0.9-0.83-0.849-2.267,0.107-3.032c0,0,1.324-1.232,1.803-1.574C7.304,13.63,8.271,13.57,9,14.104z"
      />
    </svg>
  );
}
