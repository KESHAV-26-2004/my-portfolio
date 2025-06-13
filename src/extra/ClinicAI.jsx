"use client";
import React from "react";

export default function ClinicAI() {
  return (
    <>
      <div
        id="clinic-ai-section"
        style={{
          display: "flex",
          height: "100vh",
          width: "100vw",
          position: "relative",
          zIndex: 2,
          background: "url('/your-bg-tile.png') repeat", // Optional: for retro grid background
        }}
      >
        {/* Left: Clinic Management Info */}
        <div
          style={{
            width: "50%",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            padding: "0 60px",
            boxSizing: "border-box",
          }}
        >
          <h3
            style={{
              position: "relative",
              top: "0px",
              left: "38px",
              color: "var(--cyber-primary)",
              fontSize: "2.2rem",
              fontWeight: 700,
              marginBottom: 20,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Clinic Management System
          </h3>
          <p
            style={{
              position: "relative",
              top: "40px",
              left: "38px",
              color: "var(--color-text-secondary)",
              fontSize: "1.6rem",
              marginBottom: 18,
              fontWeight: 600,
              lineHeight: 1.5,
              maxWidth: 700,
            }}
          >
            A robust desktop application for clinics, built in Java using Swing. It streamlines patient records, appointments, billing, and inventory. Designed for usability and reliability in real-world healthcare settings.
          </p>
          <ul
            style={{
              position: "relative",
              top: "40px",
              left: "38px",
              color: "var(--color-text-secondary)",
              fontSize: "1.5rem",
              marginBottom: 22,
              paddingLeft: 18,
              lineHeight: 1.6,
              listStyle: "disc",
              maxWidth: 600,
            }}
          >
            <li>🗂️ Patient & appointment management</li>
            <li>💳 Billing & inventory modules</li>
            <li>🖥️ Built with Java Swing for desktop</li>
          </ul>
          <div
            style={{
              display: "flex",
              gap: 14,
              marginBottom: 0,
              marginTop: 8,
              position: "relative",
              top: "40px",
              left: "38px",
            }}
          >
            <img src="/skill/java.svg" alt="Java" width={54} height={54} />
            <img src="/skill/swing.svg" alt="Swing" width={54} height={54} />
            <img src="/skill/sql.svg" alt="SQL" width={54} height={54} />
          </div>
          <a
            href="https://github.com/yourusername/clinic-management"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline"
            style={{
              position: "relative",
              top: "80px",
              marginLeft: "38px",
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              fontWeight: 600,
              fontSize: "1.1rem",
              textDecoration: "none",
            }}
          >
            <img src="/skill/github.svg" alt="GitHub" width={26} height={26} />
            View on GitHub
          </a>
        </div>

        {/* Right: Go Up AI Demo */}
        <div
          style={{
            width: "50%",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            padding: "0 60px",
            boxSizing: "border-box",
          }}
        >
          <h3
            style={{
              position: "relative",
              top: "0px",
              left: "38px",
              color: "var(--cyber-primary)",
              fontSize: "2.2rem",
              fontWeight: 700,
              marginBottom: 20,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Go Up AI – Game AI Experiment
          </h3>
          <p
            style={{
              position: "relative",
              top: "40px",
              left: "38px",
              color: "var(--color-text-secondary)",
              fontSize: "1.6rem",
              marginBottom: 18,
              fontWeight: 600,
              lineHeight: 1.5,
              maxWidth: 700,
            }}
          >
            Prototype AI agent for the Go Up game, using Python and reinforcement learning. The AI learns to jump between blocks, adapting to randomized terrain and dynamic physics.
          </p>
          <div
            style={{
              display: "flex",
              gap: 14,
              marginBottom: 0,
              marginTop: 8,
              position: "relative",
              top: "40px",
              left: "38px",
            }}
          >
            <img src="/skill/python.svg" alt="Python" width={44} height={44} />
            <img src="/skill/ai.svg" alt="AI" width={44} height={44} />
            <img src="/skill/rl.svg" alt="Reinforcement Learning" width={44} height={44} />
          </div>
          <a
            href="https://github.com/yourusername/goup-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline"
            style={{
              position: "relative",
              top: "80px",
              marginLeft: "38px",
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              fontWeight: 600,
              fontSize: "1.1rem",
              textDecoration: "none",
            }}
          >
            <img src="/skill/github.svg" alt="GitHub" width={26} height={26} />
            View on GitHub
          </a>
        </div>
      </div>
    </>
  );
}
