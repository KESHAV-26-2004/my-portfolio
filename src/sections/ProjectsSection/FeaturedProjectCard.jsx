import React from "react";
import { Github } from "../../assets/AllSvgs";

export function FeaturedProjectCard({ project }) {
  // Border settings
  const borderRadius = 24; // px
  const borderTop = 0.5;
  const borderSides = 4;
  const borderBottom = 7;
  // Inner radius = outer - max border thickness
  const innerRadius = borderRadius - Math.max(borderTop, borderSides, borderBottom);

  return (
    <div
      className="relative mb-18"
      style={{
        height: "480px", // fixed height for landscape card
        width: "100%",
        borderTop: `${borderTop}px solid #fff`,
        borderLeft: `${borderSides}px solid #fff`,
        borderRight: `${borderSides}px solid #fff`,
        borderBottom: `${borderBottom}px solid #fff`,
        borderRadius: `${borderRadius}px`,
        background: "#fff", // border color for anti-aliasing
        boxSizing: "border-box",
        padding: 0,
        display: "flex",
        alignItems: "stretch",
      }}
    >
      <div
        className="flex flex-col md:flex-row w-full"
        style={{
          background: "#111827", // your card background
          borderRadius: `${innerRadius}px`,
          margin: `${borderTop}px ${borderSides}px ${borderBottom}px ${borderSides}px`,
          width: "calc(100% - 2 * 4px)", // adjust for border
          boxSizing: "border-box",
          padding: "1.5rem 2rem",
          display: "flex",
          alignItems: "center",
        }}
      >
        <a
        href={project.demo}
        target="_blank"
        rel="noopener noreferrer"
        className="project-image-container group"
        style={{
            display: "block",
            height: "100%",
            width: "50%",
            overflow: "hidden",
            borderRadius: "1rem", // matches your card's rounded corners
            boxShadow: "0 2px 16px #0006",
            background: "#15171a", // fallback bg
        }}
        >
        <img
            src={project.image}
            alt={project.title}
            className="project-image"
            style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.4s cubic-bezier(.16,1,.3,1)",
            display: "block",
            }}
        />
        </a>

        {/* Right: Project Info */}
        <div className="flex-1 flex flex-col justify-center md:pl-10 mt-6 md:mt-0 h-full">
          <div className="text-cyan-400 font-semibold mb-2">{project.feature}</div>
          <h3 className="text-3xl font-bold mb-3 text-white">{project.title}</h3>
          <p className="text-lg text-gray-300 mb-5">{project.description}</p>
          
          {/* Bottom Row: GitHub, Skills, Visit */}
          <div className="flex flex-wrap items-center gap-4 mt-4">
            {/* GitHub Icon */}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-300"
              style={{ display: "inline-block" }}
            >
              <Github width={36} height={36} fill="#fff" />
            </a>
            {/* Skill SVGs */}
            {project.skills && project.skills.map((skill) => {
            // Set default size
            let size = 38;
            // If the skill is "pygame", use a larger size, e.g. 48
            if (skill === "pygame") size = 88;
            // You can add more conditions for other SVGs if needed

            return (
                <img
                key={skill}
                src={`/skill/${skill}.svg`}
                alt={skill}
                width={size}
                height={size}
                style={{ display: "inline-block" }}
                />
            );
            })}
            {/* Visit Project Button */}
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-lg bg-white text-black font-semibold shadow transition"
              style={{
                fontSize: "min(1.08rem,1.2vw)",
                fontWeight: 600,
                letterSpacing: "0.01em",
                boxShadow: "0 2px 8px #0002",
              }}
            >
              Visit Project
            </a>
          </div>
          </div>
        {/* End of Project Info */}
      </div>
    </div>
  );
}
