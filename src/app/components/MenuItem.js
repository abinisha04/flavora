
"use client";

import { motion } from "motion/react";

export default function MenuItem({
  image,
  name,
  price,
  description,
  direction = -80,
}) {
  return (
    <div
      style={{
        perspective: "700px",
      }}
    >
      <motion.div
        initial={{
          opacity: 0,
          x: direction,
          rotateY: direction < 0 ? -30 : 30,
          rotateX: 12,
          scale: 0.85,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          rotateY: 0,
          rotateX: 0,
          scale: 1,
        }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        whileHover={{
          rotateY: direction < 0 ? 12 : -12,
          rotateX: -8,
          scale: 1.05,
          z: 35,
          transition: { duration: 0.3 },
        }}
        style={{
          transformStyle: "preserve-3d",
          transformOrigin: "center center",
          willChange: "transform",
        }}
        className="flex items-start gap-5"
      >
        <motion.img
          src={image}
          alt={name}
          className="h-16 w-16 shrink-0 rounded-full object-cover"
          style={{
            transform: "translateZ(30px)",
          }}
        />

        <div
          className="flex-1"
          style={{
            transform: "translateZ(15px)",
          }}
        >
          <div className="flex items-center gap-2">
            <h3 className="whitespace-nowrap font-semibold text-white">
              {name}
            </h3>

            <div className="flex-1 border-b border-dotted border-gray-500" />

            <span className="font-bold text-amber-600">
              {price}
            </span>
          </div>

          <p className="mt-2 text-sm italic leading-6 text-gray-400">
            {description}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
