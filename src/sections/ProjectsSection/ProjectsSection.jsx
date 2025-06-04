// src/sections/ProjectsSection/ProjectsSection.jsx

"use client";
"use client";

import React from "react";
import StarBackground from "../../components/StarBackground"; // Adjust path if needed
import "../../styles/style.css";

export default function ProjectsSection() {
  return (
    <section
      className="projects-section"
      style={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
        background: "var(--cyber-bg)", // matches your theme
      }}
    >
      {/* Star Background */}
      <StarBackground />

      {/* Fixed "My Projects" header */}
      <span className="section-label" style={{ position: "absolute", top: 15, left: 40, zIndex: 10 }}>PROJECTS</span>
      <h2 className="section-title" style={{ position: "absolute", top: 72, left: 40, zIndex: 10 }}>My Works</h2>


      {/* Future project cards container here */}
    </section>
  );
}
