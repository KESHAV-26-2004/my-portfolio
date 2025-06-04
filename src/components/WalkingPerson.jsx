import React, { useRef, useEffect } from "react";
import Lottie from "lottie-react";
import { gsap } from "gsap";
import walkingPersonData from "@/assets/walkingperson.json"; // Your Lottie JSON
import "../styles/style.css";

const journeyTexts = [
  "My 10th journey is this",
  "My 12th journey is that",
  "Semester 1 adventures",
  "Semester 2 growth"
];

export default function JourneyScene() {
  const containerRef = useRef();
  const personLottieRef = useRef();
  const textRefs = useRef([]);
  const scrollState = useRef({ target: 0, current: 0, ease: 0.15 });
  const lastScrollTime = useRef(Date.now());

  // Handle wheel for horizontal scroll
  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      scrollState.current.target += e.deltaY * 1.2; // Adjust scroll speed
      lastScrollTime.current = Date.now();
    };
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  // Animate texts and Lottie
  useEffect(() => {
    let frame;
    const sectionSpacing = 0.5 * window.innerWidth; // 50vw
    const totalWidth = (journeyTexts.length - 1) * sectionSpacing;

    function animate() {
      // Smooth scroll interpolation
      const { target, current, ease } = scrollState.current;
      scrollState.current.current += (target - current) * ease;
      const x = scrollState.current.current;

      // Animate texts: each text is offset by i*sectionSpacing minus scroll
      journeyTexts.forEach((_, i) => {
        if (textRefs.current[i]) {
          const tx = i * sectionSpacing - x;
          textRefs.current[i].style.transform = `translateX(${tx}px)`;
          textRefs.current[i].style.opacity = Math.abs(tx) < 60 ? 1 : 0.5;
        }
      });

      // Lottie: play while scrolling, pause if stopped
      if (personLottieRef.current) {
        const now = Date.now();
        if (Math.abs(target - current) > 0.1) {
          personLottieRef.current.play();
          lastScrollTime.current = now;
        } else if (now - lastScrollTime.current > 200) {
          personLottieRef.current.pause();
        }
      }

      frame = requestAnimationFrame(animate);
    }
    animate();
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div ref={containerRef} className="journey-container" style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      {/* Clouds and Road can be rendered here as before */}
      {/* Walking Person */}
      <div className="person" style={{
        position: "absolute", left: "50%", bottom: 80, transform: "translateX(-50%)", zIndex: 3
      }}>
        <Lottie
          lottieRef={personLottieRef}
          animationData={walkingPersonData}
          loop
          autoplay={false}
          style={{ width: 120, height: 120 }}
        />
      </div>
      {/* Journey Texts */}
      {journeyTexts.map((text, i) => (
        <div
          key={i}
          ref={el => textRefs.current[i] = el}
          className="journey-flyin-text"
          style={{
            position: "absolute",
            left: "50%",
            top: "30%",
            transform: `translateX(${i * 50}vw)`,
            fontSize: "2.5rem",
            color: "var(--cyber-primary)",
            fontWeight: 700,
            whiteSpace: "nowrap",
            transition: "opacity 0.2s"
          }}
        >
          {text}
        </div>
      ))}
    </div>
  );
}
