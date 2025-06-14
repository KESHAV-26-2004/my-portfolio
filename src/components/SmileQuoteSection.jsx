// src/components/SmileQuoteSection.jsx
"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function SmileQuoteSection() {
  const sectionRef = useRef(null);

  // Track scroll progress of this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.001", "end 2"] // Animation starts when section is 10% in view, ends when 200% visible
  });

  // Eye geometry
  const leftEye = { cx: 40, cy: 100, rx: 34, ry: 44 };
  const rightEye = { cx: 300, cy: 100, rx: 34, ry: 44 };
  const pupil = { rx: 13, ry: 17 };

  // Calculate pupil positions (bottom to center)
  const pupilStartCy = leftEye.cy + leftEye.ry - pupil.ry - 5; // Bottom of eye
  const pupilEndCy = leftEye.cy - 65; // Center (slightly lower for natural look)

  // Transform scroll progress to pupil position
  const pupilCy = useTransform(scrollYProgress, [0, 1], [pupilStartCy, pupilEndCy]);

  return (
    <section
      ref={sectionRef}
      style={{
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        zIndex: 2,
        padding: "5px 0 40px 0",
      }}
      id="smile-quote"
    >
      <svg
        width="340"
        height="220"
        viewBox="0 0 340 220"
        style={{
          display: "block",
          margin: "0 auto",
          maxWidth: "95vw",
        }}
      >
        {/* Left Eye */}
        <ellipse
          cx={leftEye.cx}
          cy={leftEye.cy}
          rx={leftEye.rx}
          ry={leftEye.ry}
          fill="#fff"
          stroke="#bfc7ce"
          strokeWidth="4"
        />
        {/* Left Pupil - Animated */}
        <motion.ellipse
          cx={leftEye.cx}
          style={{ cy: pupilCy }}
          rx={pupil.rx}
          ry={pupil.ry}
          fill="#222"
        />

        {/* Right Eye */}
        <ellipse
          cx={rightEye.cx}
          cy={rightEye.cy}
          rx={rightEye.rx}
          ry={rightEye.ry}
          fill="#fff"
          stroke="#bfc7ce"
          strokeWidth="4"
        />
        {/* Right Pupil - Animated */}
        <motion.ellipse
          cx={rightEye.cx}
          style={{ cy: pupilCy }}
          rx={pupil.rx}
          ry={pupil.ry}
          fill="#222"
        />
      </svg>

      {/* Static Quote with Fade-in Animation */}
      {/*<motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          marginTop: "24px",
          width: "100%",
          textAlign: "center",
          fontSize: "1.35rem",
          color: "#fff",
          fontWeight: 700,
          letterSpacing: "0.03em",
          textShadow: "0 2px 10px #000a",
          userSelect: "none"
        }}
      >
        Turning ideas into smiles, one project at a time!
      </motion.div>*/}
      <svg
  viewBox="0 0 1000 160"
  preserveAspectRatio="xMidYMid meet"
  style={{
    marginTop: "-50px",
    display: "block",
    width: "100%",
    height: "auto",
    maxWidth: "100vw",
    overflow: "visible",
  }}
>
  <defs>
    <path
      id="subtleSmile"
      d="M60,70 Q500,220 940,70"
      fill="none"
    />
  </defs>

  <text
    fontSize="28"
    fontWeight="700"
    fill="#ffffff"
    letterSpacing="0.02em"
    textAnchor="middle"
    style={{
      textShadow: "0 2px 10px #000a",
      userSelect: "none",
    }}
  >
    <textPath href="#subtleSmile" startOffset="50%" dominantBaseline="middle">
      Designing not just <tspan fill="#00d4e6">solutions</tspan>, but stories that <tspan fill="#00d4e6">smile</tspan>!
    </textPath>
  </text>
</svg>

    </section>
  );
}
