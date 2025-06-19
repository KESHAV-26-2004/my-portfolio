import React from "react";
import { Github} from "../../assets/AllSvgs";

export function ProjectCard({ project }) {
  // Border thickness
  const borderTop = 0.5;
  const borderSides = 4;
  const borderBottom = 8;
  const borderRadius = 16; // px
  // Inner radius = outer - max border thickness
  const innerRadius = borderRadius - Math.max(borderTop, borderSides, borderBottom);

  return (
    <div
      className="relative mb-8"
      style={{
        height: "auto", // full height for flex layout
        borderTop: `${borderTop}px solid #fff`,
        borderLeft: `${borderSides}px solid #fff`,
        borderRight: `${borderSides}px solid #fff`,
        borderBottom: `${borderBottom}px solid #fff`,
        borderRadius: `${borderRadius}px`,
        background: "#fff", // border color for anti-aliasing
        boxSizing: "border-box",
        padding: 0,
        overflow: "visible",
      }}
    >
      <div
        className="flex flex-col shadow-md w-full"
        style={{
          background: "#111827", // your card background
          borderRadius: `${innerRadius}px`,
          margin: `${borderTop}px ${borderSides}px ${borderBottom}px ${borderSides}px`,
          padding: "1rem 1rem 0.8rem 1rem",
          height: `calc(100% - ${borderTop + borderBottom}px)`,
          width: `calc(100% - ${borderSides * 2}px)`,
          boxSizing: "border-box",
        }}
      >
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="project-image-container group mb-4"
          style={{
            display: "block",
            aspectratio: 4 / 3,
            width: "100%",
            height: "auto", // adjust as needed for your card height
            overflow: "hidden",
            borderRadius: "0.5rem",
            background: "#15171a",
            boxShadow: "0 2px 16px #0006",
            marginBottom: "0.6rem",
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
            // Zoom effect on hover via CSS below
          />
        </a>
        <h4 className="text-xl font-bold mb-0">{project.title}</h4>
        <p className="text-gray-300 mb-0"
        style={{ fontSize: "0.9rem" }}>{project.description}</p>
        <div className="flex items-center justify-between mb-0 pt-0" style={{ marginTop: "0.1rem" }}>
            {/* Visit link */}
            <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-300 text-base font-semibold hover:underline"
                style={{ marginRight: "1.2rem", marginBottom: "0 rem", fontSize: "0.8rem" }}
            >
                Visit
            </a>
          {/* SVG Icons */}
          <div className="flex items-center gap-3">
            {/* Render skill SVGs dynamically */}
            {project.skills && project.skills.map((skill) => (
              <img
                key={skill}
                src={`/skill/${skill}.svg`}
                alt={skill}
                width={38}
                height={38}
                style={{ display: "inline-block" }}
              />
            ))}
            {/* GitHub icon, always white */}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-300"
              style={{ display: "inline-block" }}
            >
              <Github width={36} height={36} fill="#fff" />
            </a>
            </div>
        </div>
      </div>
    </div>
  );
}
