import { useEffect, useRef } from "react";

// Helper to draw a soft cloud shape
function drawCloud(ctx, x, y, scale, opacity) {
  ctx.save();
  ctx.globalAlpha = opacity;
  ctx.beginPath();
  ctx.arc(x, y, 32 * scale, Math.PI * 0.5, Math.PI * 1.5);
  ctx.arc(x + 40 * scale, y - 32 * scale, 40 * scale, Math.PI * 1, Math.PI * 1.85, false);
  ctx.arc(x + 80 * scale, y - 20 * scale, 28 * scale, Math.PI * 1.37, Math.PI * 0.37, false);
  ctx.arc(x + 80 * scale, y + 20 * scale, 28 * scale, Math.PI * 1.5, Math.PI * 0.5, false);
  ctx.arc(x + 60 * scale, y + 32 * scale, 32 * scale, Math.PI * 0, Math.PI, false);
  ctx.closePath();
  ctx.fillStyle = "#fff";
  ctx.shadowColor = "#b6e0ff";
  ctx.shadowBlur = 24 * scale;
  ctx.fill();
  ctx.restore();
}

// Helper to draw a soft moon
function drawMoon(ctx, x, y, radius) {
  ctx.save();
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
  ctx.fillStyle = "#fffbe6";
  ctx.shadowColor = "#ffeebb";
  ctx.shadowBlur = 100;
  ctx.fill();
  ctx.restore();
}

export default function CloudBackground({ className = "", style = {} }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas size to container size (not window)
    function resizeCanvas() {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
    }
    resizeCanvas();

    // Generate cloud particles
    const CLOUDS = 12;
    let width = canvas.width;
    let height = canvas.height;
    // Clouds start with random positions and properties
    let clouds = Array.from({ length: CLOUDS }, () => ({
      x: Math.random() * width,
      y: Math.random() * (height / 2) * 0.35, // top 35% of section
      scale: Math.random() * 0.6 + 0.6,
      speed: Math.random() * 0.15 + 0.25,
      opacity: Math.random() * 0.3 + 0.28,
    }));

    // Moon position and size (fixed)
    const moonX = width * 0.85;
    const moonY = height * 0.20;
    const moonRadius = 60;

    function animate() {
      width = canvas.width;
      height = canvas.height;
      ctx.clearRect(0, 0, width, height);

      // 1. Draw the moon first (background)
      drawMoon(ctx, moonX, moonY, moonRadius);

      // 2. Draw all clouds (some may overlap the moon)
      clouds.forEach(cloud => {
        drawCloud(ctx, cloud.x, cloud.y + 250, cloud.scale, cloud.opacity);
      });

      // 3. Draw clouds that are in front of the moon (i.e., overlapping area)
      {/*clouds.forEach(cloud => {
        // Compute cloud center
        const cx = cloud.x + 40 * cloud.scale;
        const cy = cloud.y + 250;
        // If cloud center is within moon radius, redraw cloud (over the moon)
        const dist = Math.hypot(cx - moonX, cy - moonY);
        if (dist < moonRadius + 40 * cloud.scale) {
          // Draw again, this time "over" the moon
          drawCloud(ctx, cloud.x, cloud.y + 250, cloud.scale, cloud.opacity);
        }
      });*/}

      // Move clouds
      clouds.forEach(cloud => {
        cloud.x += cloud.speed;
        if (cloud.x - 100 * cloud.scale > width) {
          cloud.x = -120 * cloud.scale;
          cloud.y = Math.random() * height * 0.15;
          cloud.scale = Math.random() * 0.6 + 0.6;
          cloud.opacity = Math.random() * 0.3 + 0.28;
        }
      });

      requestAnimationFrame(animate);
    }
    animate();

    // Resize on section resize
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`clouds-section-bg ${className}`}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 2,
        pointerEvents: "none",
        ...style,
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
        }}
      />
    </div>
  );
}
