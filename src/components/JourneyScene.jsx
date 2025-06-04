"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lottie from "lottie-react";
import React, { useRef, useEffect, useState } from "react";
import walkingPersonData from "@/assets/walkingperson.json";
import scrollLottieData from "@/assets/scroll_lottie.json";
import Road from "./Road";
import CloudBackground from "./CloudBackground";
import "../styles/style.css";
import { vw } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

// Card data
const journeyCards = [
  {
    title: "School Years",
    period: "2019-2023",
    achievements: ["10th Grade: 92%", "12th Grade: 87%", "CBSE Board"],
    description: "Strong academic foundation in science and mathematics"
  },
  {
    title: "College Transition",
    period: "Aug 2023",
    achievements: ["JEE Main: 87 percentile", "Bennett University", "First coding experience"],
    description: "Started Computer Science journey"
  },
  {
    title: "1st Semester",
    period: "Aug-Dec 2023",
    achievements: ["Learned Python", "Go Up Game (Pygame)", "SGPA: 9.18"],
    description: "First programming language and game development"
  },
  {
    title: "2nd Semester",
    period: "Jan-May 2024",
    achievements: ["Mastered Java & OOP", "MySQL Integration", "SGPA: 9.24"],
    description: "Object-oriented programming and database systems"
  },
  {
    title: "3rd Semester",
    period: "Aug-Dec 2024",
    achievements: ["AI/ML Specialization", "C++ & Data Structures", "SGPA: 9.12"],
    description: "Advanced algorithms and artificial intelligence"
  },
  {
    title: "4th Semester",
    period: "Jan-May 2024",
    achievements: ["Flutter Laundry App", "FLAN-T5 AI Chatbot", "Full-stack Development"],
    description: "Mobile app development and AI integration"
  },
  {
    title: "Current Phase",
    period: "Summer 2025",
    achievements: ["Learning React/Next.js", "Dentist Clinic App", "Portfolio Development"],
    description: "Modern web development and professional portfolio"
  }
];

function JourneyCard({ card, style, isActive }) {
  return (
    <div
      className={`journey-card${isActive ? " active" : ""}`}
      style={{
        ...style,
        position: "absolute",
        top: "38%",
        width: 420,
        minHeight: 220,
        transform: `${style.transform} translateX(-50%)`,
        background: "var(--color-surface)",
        border: "1.5px solid var(--color-card-border)",
        borderRadius: "18px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
        padding: "32px 28px 24px 28px",
        color: "var(--color-text)",
        zIndex: isActive ? 10 : 5,
        opacity: style.opacity,
        transition: "transform 0.25s, opacity 0.25s",
        pointerEvents: isActive ? "auto" : "none",
        left: "50%"
      }}
    >
      <h3 style={{
        color: "var(--cyber-primary)",
        fontSize: "1.35rem",
        marginBottom: 8,
        fontWeight: 700
      }}>{card.title}</h3>
      <div style={{ color: "var(--color-text-secondary)", fontSize: 14, marginBottom: 18 }}>
        {card.period}
      </div>
      <div style={{ marginBottom: 12 }}>
        {card.achievements.map((ach, idx) => (
          <div key={idx} style={{
            background: "rgba(0,245,255,0.08)",
            borderRadius: 6,
            padding: "6px 14px",
            marginBottom: 6,
            marginLeft: idx === 1 ? 6 : 0,
            fontSize: 15,
            color: "var(--cyber-primary)",
            border: "1px solid rgba(0,245,255,0.13)",
            display: "inline-block"
          }}>{ach}</div>
        ))}
      </div>
      <div style={{
        color: "var(--color-text-secondary)",
        fontSize: 15,
        marginTop: 10
      }}>
        {card.description}
      </div>
    </div>
  );
}

export default function JourneyScene() {
  const journeyRef = useRef();
  const cardsRowRef = useRef();
  const personLottieRef = useRef();
  const sidewalkTopRef = useRef();
  const sidewalkBottomRef = useRef();

  const scrollState = useRef({ current: 0, target: 0 });
  const [scrollX, setScrollX] = useState(0);
  const [windowWidth, setWindowWidth] = useState(1200);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const sectionSpacing = 0.37 * windowWidth;
    const totalWidth = journeyCards.length * sectionSpacing;
    const minScroll = 0;
    const maxScroll = totalWidth;

    if (cardsRowRef.current) {
      cardsRowRef.current.style.width = `${totalWidth + windowWidth}px`;
    }

    const tl = gsap.to(cardsRowRef.current, {
      x: () => `-${totalWidth - windowWidth}`,
      ease: "none",
      scrollTrigger: {
        trigger: journeyRef.current,
        start: "top top",
        end: `+=${totalWidth}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const x = self.progress * totalWidth;
          setScrollX(x);
          scrollState.current.current = x;
          scrollState.current.target = x;

          const bgOffset = ((-x * 0.6) % 120 + 120) % 120;
          if (sidewalkTopRef.current) sidewalkTopRef.current.style.backgroundPositionX = `${bgOffset}px`;
          if (sidewalkBottomRef.current) sidewalkBottomRef.current.style.backgroundPositionX = `${bgOffset}px`;

          const atBounds =
            (x <= minScroll && scrollState.current.target <= minScroll) ||
            (x >= maxScroll && scrollState.current.target >= maxScroll);

          let pauseTimeout;
          if (personLottieRef.current) {
            if (!atBounds) {
              personLottieRef.current.play();
              clearTimeout(pauseTimeout);
              pauseTimeout = setTimeout(() => {
                personLottieRef.current.pause();
              }, 1000); // Pause after 300ms of no scroll
            } else {
              personLottieRef.current.pause();
            }
          }

        }
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
      tl.kill();
    };
  }, [windowWidth]);

  const sectionSpacing = 0.5 * windowWidth;

  return (
    <section
      ref={journeyRef}
      className="journey-container"
      style={{ position: "relative", height: "100vh", overflow: "hidden" }}
    >
      <CloudBackground />
      <Road sidewalkTopRef={sidewalkTopRef} sidewalkBottomRef={sidewalkBottomRef} />

      {/* Walking person */}
      <div style={{
        position: "absolute", bottom: 80, left: "50%",
        transform: "translateX(-50%)", zIndex: 3
      }}>
        <Lottie
          lottieRef={personLottieRef}
          animationData={walkingPersonData}
          loop
          autoplay={false}
          style={{ width: 120, height: 120 }}
        />
      </div>

      {/* Header */}
      <span className="section-label" style={{ position: "absolute", top: 15, left: 40, zIndex: 10 }}>TIMELINE</span>
      <h2 className="section-title" style={{ position: "absolute", top: 72, left: 40, zIndex: 10 }}>My Academic Journey</h2>
      <p className="section-desc" style={{ position: "absolute", top: 150, left: 40, zIndex: 10, maxWidth: 400 }}>
        A visual story of my academic and tech adventure, from school to Bennett University.
      </p>

      {/* Scroll prompt */}
      <div
        style={{
          position: "absolute",
          left: "30%",
          bottom: "8%",
          zIndex: 20,
          width: 800,
          height: 800,
          pointerEvents: "none",
          opacity: 1 - scrollX / (sectionSpacing * 0.5),
          transition: "opacity 0.5s",
          transform: "rotate(90deg)"
        }}
      >
        <Lottie animationData={scrollLottieData} loop autoplay style={{ width: "100%", height: "100%" }} />
      </div>

      {/* Card row with absolute cards */}
      <div ref={cardsRowRef} style={{ position: "absolute", height: "100%", display: "flex", alignItems: "center" }}>
        {journeyCards.map((card, i) => {
          const cardX = (i-0.5) * sectionSpacing - scrollX;
          const viewportCenter = windowWidth -(2600-((i-0.5)*280)); // Adjusted for better centering
          const distanceFromCenter = Math.abs(cardX - viewportCenter);
          
          // Animation ranges (adjust these values)
          const maxEffectDistance = windowWidth * 0.75; // Cards animate within 75% of viewport width
          const opacity = 1 - Math.min(distanceFromCenter / maxEffectDistance, 1);
          const scale = 1 - Math.min(distanceFromCenter / maxEffectDistance * 0.2, 0.2); // Scales from 0.8 to 1

          return (
            <JourneyCard
              key={i}
              card={card}
              isActive={distanceFromCenter < 50} // For active state if needed
              style={{
                transform: `translateX(${cardX}px) translateX(-50%) scale(${scale})`,
                opacity: opacity
              }}
            />
          );
        })}

      </div>
    </section>
  );
}
