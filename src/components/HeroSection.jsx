// src/components/HeroSection.jsx

"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import lottieData from "../assets/deskpc.json";
import useHasMounted from "../hooks/useHasMounted";
import "../styles/style.css";

const phrases = [
  "I love building cool apps from scratch",
  "I love crafting immersive user experiences",
  "I love turning imagination into code",
];

export default function HeroSection() {
  const hasMounted = useHasMounted();
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    //if (!hasMounted) return;
    const currentPhrase = phrases[index];
    const nextPhrase = phrases[(index + 1) % phrases.length];

    let timeout;

    const getCommonPrefix = (a, b) => {
      let i = 0;
      while (i < a.length && i < b.length && a[i] === b[i]) i++;
      return a.slice(0, i);
    };

    if (!isDeleting) {
      // Typing characters
      timeout = setTimeout(() => {
        setDisplayText(currentPhrase.substring(0, displayText.length + 1));
        if (displayText === currentPhrase) {
          setTimeout(() => setIsDeleting(true), 3000);
        }
      }, 100);
    } else {
      // Deleting only differing part
      const common = getCommonPrefix(currentPhrase, nextPhrase);
      timeout = setTimeout(() => {
        if (displayText !== common) {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % phrases.length);
        }
      }, 40);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index]);

  return (
    <section className="hero relative" id="home">
      <div className="hero-content text-center z-10 relative px-6 py-20">
        <h1 className="hero-title font-bold leading-relaxed animate-fade-in delay-100">
          Hey, I’m Keshav👋
        </h1>

        <p className="hero-subtitle mt-4 text-lg sm:text-xl animate-fade-in delay-300 typing-text">
          {displayText}
        </p>

        <div
          className="mt-8 mx-auto w-full animate-fade-in delay-500"
          style={{ width: "40%", height: "auto" }}
        >
          <Lottie animationData={lottieData} loop={true} style={{ width: "100%", height: "100%" }} />
        </div>

        <div className="hero-cta mt-6 flex justify-center gap-4 animate-fade-in delay-700">
          <a href="#journey" className="btn btn--primary">Explore My Journey</a>
          <a href="#projects" className="btn btn--outline text-base sm:text-lg">View Projects</a>
        </div>
      

      <div className="scroll-indicator">
        <div className="scroll-arrow" />
      </div>
      </div>
    </section>
  );
}
