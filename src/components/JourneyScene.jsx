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
        width: "min(50vw,50vh)",
        minHeight: "min(30vh,30vw)",
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
        fontSize: "min(3.5vw,2.5vh)",
        marginBottom: 8,
        fontWeight: 700
      }}>{card.title}</h3>
      <div style={{ color: "var(--color-text-secondary)", fontSize: "min(2.45vw,1.45vh)", marginBottom: 18 }}>
        {card.period}
      </div>
      <div style={{ marginBottom: 12, display: "flex", flexWrap: "wrap", gap: "8px", justifyContent: "flex-start"}}>
        {card.achievements.map((ach, idx) => (
          <div key={idx} style={{
            background: "rgba(0,245,255,0.08)",
            borderRadius: 6,
            padding: "6px 14px",
            fontSize: "min(2.6vw,1.6vh)",
            color: "var(--cyber-primary)",
            border: "1px solid rgba(0,245,255,0.13)",
            display: "inline-block",
            //flex: "1 1 45%", // ~2 badges per row
            //maxWidth: "48%", // prevent overflow
            //boxSizing: "border-box"
          }}>{ach}</div>
        ))}
      </div>
      <div style={{
        color: "var(--color-text-secondary)",
        fontSize: "min(2.6vw,1.6vh)",
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
          document.body.style.background = "#111827";
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
      id="journey"
      style={{ position: "relative",height:"min(100vh,100vw)",overflow: "hidden" }}
    >

      <div className="clouds-row"
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          zIndex: 2
        }}
      >
      <CloudBackground /></div>

      <Road sidewalkTopRef={sidewalkTopRef} sidewalkBottomRef={sidewalkBottomRef} />

      {/* Walking person */}
      <div className="lottie-wrapper" 
      style={{
        position: "absolute", bottom: "8%", left: "50%",
        transform: "translateX(-50%)", zIndex: 3
      }}>
        <Lottie
          lottieRef={personLottieRef}
          animationData={walkingPersonData}
          loop
          autoplay={false}
          style={{ width: "100%", height: "15vh" }}
        />
      </div>

      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "8%",
          width: "min(120px,20vw)",
          aspectRatio: "1",
          background: "radial-gradient(circle, #fff5cc, #ffd700)",
          borderRadius: "50%",
          boxShadow: "0 0 60px rgba(255, 255, 200, 0.6)",
          zIndex: 1
        }}
      ></div>

      {/* Header */}
        <span className="section-label journey"
          style={{
            position: "absolute",
            marginTop: "30px",
            marginLeft: "60px",
          }}>
          TIMELINE
        </span>
        <h2 className="section-title"
          style={{
            position: "absolute",
            paddingLeft: "8vw",
            top: "7vh",
            fontSize: "min(4.5vw,4.5vh)", // resizes with screen
            maxWidth: "80vw"
            
          }}>
          My Academic Journey
        </h2>
        <p className="section-desc"
          style={{
            position: "absolute",
            top: "15vh",
            paddingLeft: "8vw",
            fontSize: "min(2.5vh,2.5vw)",
            maxWidth: "60vw"
          }}>
          A visual story of my academic and tech adventure, from school to Bennett University.
        </p>

      {/* Scroll prompt */}
      <div
        style={{
          position: "absolute",
          left: "30%",
          bottom: "8%",
          zIndex: 20,
          width: "50%",
          height: "85%",
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
          const viewportCenter = windowWidth -(windowWidth*1.7-((i-0.5)*(windowWidth*0.19))); // Adjusted for better centering
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
