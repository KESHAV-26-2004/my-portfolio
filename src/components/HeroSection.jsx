//src/components/HeroSection.jsx

"use client";

import { useEffect, useState } from "react";
import StarBackground from "./StarBackground";
import Lottie from "lottie-react";
import lottieData from "../assets/deskpc.json";

function useTypingText(text, speed = 100) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    setDisplayed("");
    let timeoutId;

    const type = () => {
      if (i < text.length) {
        setDisplayed(prev => prev + text.charAt(i));
        i++;
        timeoutId = setTimeout(type, speed);
      }
    };

    type();

    return () => clearTimeout(timeoutId);
  }, [text, speed]);

  return displayed;
}

export default function HeroSection() {
  const typed = useTypingText("Heey, I'm CS Student 👋", 120);

  return (
    <section className="hero" id="home">
      <StarBackground />
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="typing-text">{typed}</span>
        </h1>
        <p className="hero-subtitle">
          A CS undergrad building cool apps from scratch
        </p>
        <div style={{ margin: "32px auto", maxWidth: 360 }}>
          <Lottie animationData={lottieData} loop={true} />
        </div>
        <div className="hero-cta">
          <a href="#journey" className="btn btn--primary">Explore My Journey</a>
          <a href="#projects" className="btn btn--outline">View Projects</a>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-arrow" />
      </div>
    </section>
  );
}
