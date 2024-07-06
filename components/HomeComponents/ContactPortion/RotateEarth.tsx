"use client";

import { slideIn } from "@/lib/motion";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import EarthCanvas from "./EarthCanvas";

export default function RotateEarth() {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={slideIn("right", "tween", 0.2, 1)}
      className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] "
    >
      <EarthCanvas />
    </motion.div>
  );
}
