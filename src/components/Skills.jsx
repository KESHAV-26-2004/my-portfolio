"use client";

import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Example skill data
const skillGroups = [
  {
    label: "Tech Stack Arsenal",
    skills: [
      { name: "React", icon: "/skill/react.svg", level: 90, tip: "My go-to for modern UIs" },
      { name: "Next.js", icon: "/skill/nextjs.svg", level: 85, tip: "SSR & SSG for blazing speed" },
      { name: "JavaScript", icon: "/skill/javascript.svg", level: 92, tip: "First love in code" },
      { name: "Tailwind", icon: "/skill/tailwind.svg", level: 80, tip: "For rapid, beautiful layouts" },
      { name: "Python", icon: "/skill/python.svg", level: 88, tip: "From games to AI" },
      { name: "Pygame", icon: "/skill/pygame.svg", level: 75, tip: "Built my first game" },
      { name: "Java", icon: "/skill/java.svg", level: 70, tip: "Swing & OOP mastery" },
      { name: "Flutter", icon: "/skill/flutter.svg", level: 78, tip: "Mobile apps, fast" },
    ],
  },
  {
    label: "Creative Suite",
    skills: [
      { name: "Figma", icon: "/skill/figma.svg", level: 85, tip: "Wireframes & prototypes" },
      { name: "Photoshop", icon: "/skill/photoshop.svg", level: 70, tip: "Visual polish" },
      { name: "Illustrator", icon: "/skill/illustrator.svg", level: 65, tip: "Icon & logo design" },
    ],
  },
  {
    label: "Automation & AI",
    skills: [
      { name: "AI", icon: "/skill/ai.svg", level: 60, tip: "RL & ML experiments" },
      { name: "huggingface", icon: "/skill/huggingface.svg", level: 55, tip: "AI assistant in Flutter" },
      { name: "Flask", icon: "/skill/flask.svg", level: 60, tip: "APIs for AI projects" },
    ],
  },
  {
    label: "Superpowers",
    skills: [
      { name: "Git", icon: "/skill/git.svg", level: 85, tip: "Version control" },
      { name: "Firebase", icon: "/skill/firebase.svg", level: 70, tip: "Realtime backend" },
      { name: "MySQL", icon: "/skill/mysql.svg", level: 68, tip: "Relational DBs" },
      { name: "Expo", icon: "/skill/expo.svg", level: 60, tip: "React Native toolkit" },
      { name: "CSS", icon: "/skill/css.svg", level: 90, tip: "From basics to custom animations" },
    ],
  },
];

// Circular skill icon with progress bar and tooltip
function SkillCircle({ icon, name, level, tip }) {
  return (
    <div
      className="group relative flex flex-col items-center justify-center"
      style={{ width: "78px", height: "78px", margin: "0.6rem" }}
      tabIndex={0}
    >
      {/*
      <CircularProgressbar
        value={level}
        strokeWidth={7}
        styles={buildStyles({
          pathColor: "var(--cyber-primary)",
          trailColor: "#222a35",
          strokeLinecap: "round",
        })}
      >
        {/* Not using children here, icon is outside */}
      <img
        src={icon}
        alt={name}
        style={{
          width: "min(68px,15vw)",
          height: "min(68px,15vw)",
          position: "absolute",
          left: "20%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          background: "#18181b",
          borderRadius: "50%",
          padding: 4,
          boxShadow: "0 2px 8px #0007",
        }}
      />
      {/* Tooltip on hover/focus */}
      <span
        className="absolute z-10 px-3 py-1 rounded bg-[#232b3a] text-xs text-cyan-200 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition pointer-events-none"
        style={{
          bottom: -32,
          left: "50%",
          transform: "translateX(-50%)",
          whiteSpace: "nowrap",
          boxShadow: "0 2px 8px #0007",
        }}
      >
        {tip || name}
      </span>
    </div>
  );
}

export default function Skills() {
  return (
    <section className="skills-section" id="skills" style={{padding: "64px 0 32px 0", background: "#111827" }}>  {/*#09090B  ,  #111827(skill section)*/}
      <span className="section-label" style={{ marginTop: "-35px", marginLeft: "60px" }}>SKILLS</span>
      <h2
        className="section-title"
        style={{
          color: "#fff",
          textAlign: "left",
          fontSize: "min(2.8rem,8vw)",
          fontWeight: 800,
          letterSpacing: "-0.02em",
          margin: "0 0 1.5rem 0",
          lineHeight: 1.1,
          fontFamily: "'Montserrat', 'Inter', sans-serif",
        }}
      >
        What Powers My Code
      </h2>
      <div
        className="skills-groups"
        style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "36px 64px",
            paddingLeft: "60px", // or 3rem, adjust as needed
            paddingRight: "40px",
        }}
        >
      <p className="skills-desc" style={{
        color: "var(--color-text-secondary)",
        fontSize: "min(1.2rem,5vw)",
        marginBottom: "2.5rem",
        maxWidth: 600,
        fontWeight: 500,
      }}>
        I like to take responsibility to craft aesthetic user experience using modern frontend architecture.
      </p>
      <div className="skills-groups" style={{ display: "flex", flexWrap: "wrap", gap: "36px 64px" }}>
        {skillGroups.map(group => (
          <div key={group.label} style={{ minWidth: 300 }}>
            <h3 style={{
              color: "white",
              fontWeight: 700,
              fontSize: "1.1rem",
              letterSpacing: "0.04em",
              marginBottom: "1.2rem",
              textTransform: "uppercase"
            }}>
              {group.label}
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {group.skills.map(skill => (
                <SkillCircle key={skill.name} {...skill} />
              ))}
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}
