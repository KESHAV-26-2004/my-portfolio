"use client";
import React, { useRef, useEffect, useState } from "react";
import Lottie from "lottie-react";
import jumpLottie from "../../assets/jump_lottie.json";

// Draw a pixel-art grass/dirt block (matches your reference)
function drawBlock(ctx, size = 80) {
  // Dirt base
  ctx.fillStyle = "#b97a56";
  ctx.fillRect(0, 0.2 * size, size, 0.8 * size);

  // Grass top
  ctx.fillStyle = "#4ecf4e";
  ctx.fillRect(0, 0, size, 0.22 * size);

  // Grass bumps
  ctx.fillStyle = "#2e5d2e";
  ctx.beginPath();
  ctx.arc(0.2 * size, 0.22 * size, size * 0.07, Math.PI, 0);
  ctx.arc(0.5 * size, 0.22 * size, size * 0.09, Math.PI, 0);
  ctx.arc(0.8 * size, 0.22 * size, size * 0.06, Math.PI, 0);
  ctx.fill();

  // (Optional) Outline for retro look
  ctx.strokeStyle = "#613a26";
  ctx.lineWidth = 3;
  ctx.strokeRect(0, 0, size, size);
}

// Canvas Block component
function Block({ x, y, size = 80 }) {
  const canvasRef = useRef();
  useEffect(() => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, size, size);
    drawBlock(ctx, size);
  }, [size]);
  return (
    <canvas
      ref={canvasRef}
      width={size}
      height={size}
      style={{
        position: "absolute",
        left: x,
        bottom: y,
        width: size,
        height: size,
        zIndex: 1,
        background: "none",
        pointerEvents: "none"
      }}
    />
  );
}

export default function GoUp() {
  const blockSize = 80;

  // Main jump blocks (for Lottie path)
  const jumpBlocks = [
  { x: 250, y: 100 },
  { x: 450, y: 300 },
  { x: 600, y: 500 },
  { x: 350, y: 650 }
];

  // Extra decorative blocks (not used for jumping)
  const extraBlocks = [
    { x: 600, y: 100 },
    { x: 200, y: 450 },
  ];

  const [blockIndex, setBlockIndex] = useState(0);
  const [canJump, setCanJump] = useState(false);
  const lottieRef = useRef();
  const sectionRef = useRef();

  // Detect if the section is fully in view
  useEffect(() => {
    const checkInView = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      setCanJump(rect.top <= 100 && rect.bottom >= window.innerHeight - 100);
    };
    window.addEventListener("scroll", checkInView);
    window.addEventListener("resize", checkInView);
    checkInView();
    return () => {
      window.removeEventListener("scroll", checkInView);
      window.removeEventListener("resize", checkInView);
    };
  }, []);

  // Auto-jump logic
  useEffect(() => {
    if (!canJump) return;
    if (blockIndex >= jumpBlocks.length - 1) return;

    const interval = setInterval(() => {
      setBlockIndex(idx => {
        if (idx < jumpBlocks.length - 1) return idx + 1;
        clearInterval(interval);
        return idx;
      });
    }, 1500); // 1.5 seconds per jump

    return () => clearInterval(interval);
  }, [canJump, blockIndex, jumpBlocks.length]);

  // Play Lottie animation on every jump
  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.goToAndPlay(0, true);
    }
  }, [blockIndex]);

  return (
    <div
      id="go-up-section"
      ref={sectionRef}
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        position: "relative",
        zIndex: 2,
        background: "url('/your-bg-tile.png') repeat", // Optional: for retro grid background
      }}
    >
      {/* Left: Project Info */}
      <div
        style={{
          width: "50%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center", // vertically center
          alignItems: "flex-start", // left align
          padding: "0 60px",
          boxSizing: "border-box",
          gap: 0, // control with margin below
        }}
      >
        <h3
          style={{
            position: "relative",
            top: "0px",      // Moves text 40px down
            left: "38px",
            color: "white",
            fontSize: "2.2rem",
            fontWeight: 700,
            marginBottom: 20,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          Go Up! – Pixel Platformer
        </h3>

        <p
          style={{
            position: "relative",
    top: "40px",      // Moves text 40px down
    left: "38px",
            color: "var(--color-text-secondary)",
            fontSize: "1.6rem",
            marginBottom: 18,
            fontWeight: 600,
            lineHeight: 1.5,
            maxWidth: 700,
          }}
        >
          A retro-inspired vertical platformer built in Python using Pygame. Your goal? Jump from block to block and reach the top. Each run feels fresh thanks to randomized terrain and dynamic physics.
        </p>

        <ul
          style={{
            position: "relative",
            top: "40px",      // Moves text 40px down
            left: "38px",
            color: "var(--color-text-secondary)",
            fontSize: "1.5rem",
            marginBottom: 22,
            paddingLeft: 18,
            lineHeight: 1.6,
            listStyle: "disc",
            maxWidth: 600,
          }}
        >
          <li>🟩 Smooth gravity-based jumping</li>
          <li>🧱 Pixel-styled block terrain</li>
          <li>🎮 Auto-jump preview on scroll to simulate gameplay</li>
        </ul>

        <div style={{ display: "flex", gap: 14, marginBottom: 0, marginTop: 8,position: "relative",
    top: "40px",      // Moves text 40px down
    left: "38px", }}>
          {/* SVG skill icons from /public/skill/ */}
          <img src="/skill/python.svg" alt="Python" width={64} height={64} />
          <img src="/skill/pygame.svg" alt="Pygame" width={124} height={124} />
          <img src="/skill/gamephysics.svg" alt="Game Physics" width={64} height={64} />
        </div>
        {/* GitHub Button */}
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline"
            style={{
              position: "relative",
              top: "80px",
              marginLeft: "38px",
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              fontWeight: 600,
              fontSize: "1.1rem",
              textDecoration: "none"
            }}
          >
            View on GitHub
          </a>
      </div>


      {/* Right: Game Demo */}
      <div
        style={{
          width: "50%",
          height: "100%",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Extra (decorative) blocks */}
        {extraBlocks.map((block, idx) => (
          <Block key={`extra-${idx}`} x={block.x} y={block.y} size={blockSize} />
        ))}
        {/* Main jump blocks */}
        {jumpBlocks.map((block, idx) => (
          <Block key={`jump-${idx}`} x={block.x} y={block.y} size={blockSize} />
        ))}
        {/* Lottie Character */}
        <div
          style={{
            position: "absolute",
            left: jumpBlocks[blockIndex].x + blockSize / 2,
            bottom: jumpBlocks[blockIndex].y + blockSize - 20,
            transform: "translateX(-50%)",
            width: 150,
            height: 150,
            zIndex: 2,
            transition: "left 0.4s cubic-bezier(.16,1,.3,1), bottom 0.4s cubic-bezier(.16,1,.3,1)",
          }}
        >
          <Lottie
            lottieRef={lottieRef}
            animationData={jumpLottie}
            loop={false}
            autoplay={false}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </div>
  );
}
