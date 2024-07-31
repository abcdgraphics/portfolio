import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "../components/ui/CanvasRevealEffect.tsx";
import { useState } from "react";

export default function Card({ title, icon }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`flex flex-col lg:flex-row overflow-hidden items-center justify-center  w-full gap-4 mx-auto px-8 relative ${
        hovered ? "bg-black" : "bg-white"
      }`}>
      <p
        className={`md:text-2xl text-2xl font-medium text-center text-white relative z-20 max-w-2xl mx-auto ${
          hovered ? "block" : "hidden"
        }`}>
        {title}
      </p>
      <img className={`${hovered ? "hidden" : "block"}`} src={icon} />
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full w-full absolute inset-0">
            <CanvasRevealEffect
              animationSpeed={5.1}
              containerClassName="bg-emerald-900"
            />
          </motion.div>
        )}
      </AnimatePresence>
      <div
        className={`absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90 ${
          hovered ? "opacity-1" : "opacity-0"
        } `}
      />
    </div>
  );
}
