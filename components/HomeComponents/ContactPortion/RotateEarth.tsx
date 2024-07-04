"use client";

import { slideIn } from "@/lib/motion";
import { motion } from "framer-motion";
import EarthCanvas from "./EarthCanvas";

export default function RotateEarth() {
  return (
    <motion.div
      variants={slideIn("right", "tween", 0.2, 1)}
      className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] "
    >
      <EarthCanvas />
    </motion.div>
  );
}
