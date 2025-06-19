"use client";

import React, { useEffect, useState } from "react";
import { projects } from "../../data/projects";
import { FeaturedProjectCard } from "./FeaturedProjectCard";
import { ProjectCard } from "./ProjectCard";
import "../../styles/style.css";

export default function ProjectsSection() {
  // SSR-safe mobile detection
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Only run on client
    const checkMobile = () => setIsMobile(window.innerWidth <= 767);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  let cards;
  if (isMobile) {
    // MOBILE: All projects as full-width ProjectCard
    cards = projects.map((project) => (
      <div key={project.id} className="w-full mb-8">
        <ProjectCard project={project} />
      </div>
    ));
  } else {
    // DESKTOP: 1 featured, 2 half, repeat
    cards = [];
    for (let i = 0; i < projects.length; ) {
      if (projects[i].featured) {
        cards.push(
          <div key={projects[i].id} className="mb-20">
            <FeaturedProjectCard project={projects[i]} />
          </div>
        );
        i++;
      } else {
        cards.push(
          <div key={`row-${i}`} className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="w-full md:w-1/2">
              <ProjectCard project={projects[i]} />
            </div>
            {projects[i + 1] && (
              <div className="w-full md:w-1/2">
                <ProjectCard project={projects[i + 1]} />
              </div>
            )}
          </div>
        );
        i += 2;
      }
    }
  }

  return (
    <section
      className="px-4 md:px-16 py-16 min-h-screen"
      id="projects"
      style={{ background: "#111827" }}
    >
      <span className="section-label projects" style={{ marginLeft:"60px",marginTop: "0px" }}>
        PROJECTS
      </span>
      <h2
        className="section-title imagination-title mb-12 text-center mx-auto"
        style={{
          color: "#fff",
          fontSize: "min(3.6rem,10vw)",
          fontWeight: 800,
          letterSpacing: "-0.02em",
          margin: "60px auto 3rem auto",
          lineHeight: 1.1,
          maxWidth: "100%",
          paddingLeft: 0,
        }}
      >
        Blueprints of a Curious Mind
      </h2>
      {cards}
    </section>
  );
}
