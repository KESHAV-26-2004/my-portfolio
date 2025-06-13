"use client";

import React from "react";
import { Github} from "../assets/AllSvgs";

const SOCIALS = [
  { name: "LinkedIn", icon: "/linkedin.svg", url: "https://linkedin.com/in/yourprofile" },
  { name: "Instagram", icon: "/instagram.svg", url: "https://instagram.com/yourusername" },
  // Add more as needed
];

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section"
      style={{
        background: "#267181",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 0,
      }}
    >
      <div className="contact-card"
        style={{
          position: "relative",
          background: "#18181b",
          borderRadius: "32px",
          boxShadow: "0 32px 64px 0 #000a, 0 8px 32px 0 #26718155",
          display: "flex",
          overflow: "visible",
        }}
      >
        {/* Social Icons - Top Right */}
        <div style={{
          position: "absolute",
          top: "32px",
          right: "32px",
          display: "flex",
          gap: "14px",
          zIndex: 3,
        }}>
            {/* GitHub Icon (React component) */}
        <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 36,
            height: 36,
            borderRadius: "50%",
            background: "#23272f",
            boxShadow: "0 2px 8px #0005",
            }}
            title="GitHub"
        >
            <Github width={36} height={36} fill="#fff" />
        </a>

        {/* Other social icons from /public */}
        {SOCIALS.map((s) => (
            <a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 38,
                height: 38,
                borderRadius: "50%",
                background: "#23272f",
                boxShadow: "0 2px 8px #0005",
            }}
            title={s.name}
            >
            <img src={s.icon} alt={s.name} style={{ width: 38, height: 38 }} />
            </a>
        ))}
        </div>

        {/* Left Side: Heading, Subtitle, Form */}
        <div style={{
          flex: 1,
          padding: "3.5rem 2.5rem 3.5rem 3rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          zIndex: 2,
          }}>
          <h2 style={{
            fontSize: "min(2.5rem,5vw)",
            fontWeight: 800,
            color: "#fff",
            marginBottom: 8,
            fontFamily: "'Montserrat', sans-serif"
          }}>
            Let’s <span style={{ color: "#267181" }}>talk</span>
          </h2>
          <p style={{
            color: "#b0b0b0",
            fontSize: "min(1.2rem,3vw)",
            marginBottom: 62,
            lineHeight: 1.5
          }}>
            Want to connect, collaborate, or just geek out about code? Send your message below and I’ll respond soon!
          </p>
          <form style={{ display: "flex", flexDirection: "column", gap: 16, width: "100%" }}>
            <input
              type="text"
              placeholder="Your Name"
              style={{
                background: "#23272f",
                border: "none",
                borderRadius: "14px",
                padding: "0.9em 1.2em",
                color: "#fff",
                fontSize: "min(1rem,4vw)",
                marginBottom: 8,
                outline: "none",
              }}
            />
            <input
              type="email"
              placeholder="Your Email"
              style={{
                background: "#23272f",
                border: "none",
                borderRadius: "14px",
                padding: "0.9em 1.2em",
                color: "#fff",
                fontSize: "min(1rem,4vw)",
                marginBottom: 8,
                outline: "none",
              }}
            />
            <textarea
              placeholder="Your Message"
              style={{
                background: "#23272f",
                border: "none",
                borderRadius: "14px",
                padding: "0.9em 1.2em",
                color: "#fff",
                fontSize: "min(1rem,4vw)",
                minHeight: "80px",
                marginBottom: 8,
                outline: "none",
                resize: "vertical",
              }}
            />
            <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "16px",
            marginTop: 16,
            }}>
            <button
                type="submit"
                style={{
                background: "#267181",
                color: "#fff",
                minWidth: "30%",
                fontWeight: 600,
                fontSize: "min(1rem, 3vw)",
                border: "none",
                borderRadius: "12px",
                padding: "0.9em 1.2em",
                boxShadow: "0 2px 8px #26718144",
                cursor: "pointer",
                transition: "background 0.2s",
                textAlign: "center",
                }}
            >
                Send Message
            </button>
            <a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                display: "inline-block",
                background: "transparent",
                color: "#267181",
                border: "2px solid #267181",
                borderRadius: "12px",
                padding: "0.9em 1.2em",
                fontWeight: 700,
                fontSize: "min(1rem, 3vw)",
                textDecoration: "none",
                minWidth: "30%",
                textAlign: "center",
                transition: "background 0.2s, color 0.2s",
                }}
                onMouseOver={e => { e.currentTarget.style.background = "#267181"; e.currentTarget.style.color = "#fff"; }}
                onMouseOut={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#267181"; }}
            >
                Resume
            </a>
            </div>

          </form>
        </div>
        
        {/* Right Side: Grouped Image & Blobs */}
          <div className="contact-right" style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            position: "relative",
          }}>
            <div style={{
              position: "relative",
              width: "clamp(250px, 30vw, 500px)",
              aspectRatio: "1 / 1",
            }}>
              {/* Inner Blob */}
              <img src="/Innerblob.svg" style={{
                position: "absolute",
                width: "100%",
                bottom: "-37%",
                right: "-6%",
                zIndex: 1,
              }} />

              {/* Outer Blob */}
              <img src="/Outerblob.svg" style={{
                position: "absolute",
                width: "82%",
                bottom: "-26%",
                right: "0",
                zIndex: 0,
                transform: "rotate(6deg) scale(1.3)",
              }} />

              {/* Clipped Image */}
              <svg
                viewBox="0 0 217 217"
                style={{
                  position: "absolute",
                  width: "108%",
                  bottom: "-45.2%",
                  right: "-14.2%",
                  zIndex: 2,
                }}
              >
                <defs>
                  <clipPath id="blobClip">
                    <path
                      d="M42.8,-73.4C52.7,-68.3,56.3,-51.4,63.5,-37.3C70.6,-23.1,81.3,-11.5,82.6,0.8C84,13.1,76,26.2,66.9,36.9C57.7,47.5,47.3,55.8,36,63.3C24.6,70.8,12.3,77.7,-1.2,79.8C-14.7,81.9,-29.5,79.3,-39.8,71.1C-50.1,63,-56,49.3,-59,36.6C-62,23.8,-62.1,11.9,-64.4,-1.3C-66.7,-14.6,-71.2,-29.2,-68.8,-43C-66.5,-56.8,-57.1,-69.8,-44.5,-73.4C-31.9,-77,-15.9,-71.1,0.2,-71.5C16.4,-71.9,32.8,-78.5,42.8,-73.4Z"
                      transform="translate(100 100)"
                    />
                  </clipPath>
                </defs>
                <image
                  href="/my_image_1.png"
                  x="15"
                  y="10"
                  width="170"
                  height="170"
                  clipPath="url(#blobClip)"
                  preserveAspectRatio="xMidYMid slice"
                />
              </svg>

              {/* Extra Image Layer */}
              <img
                src="/my_image_1_1.png"
                alt=""
                style={{
                  position: "absolute",
                  width: "83.2%",
                  bottom: "22.5%",
                  left: "14.5%",
                  zIndex: 3,
                }}
              />
            </div>
          </div>
        </div>

      {/* end of your main card div */}
        <div style={{
        textAlign: "center",
        color: "#fff",
        margin: "1.5rem",
        fontSize: "min(1.3rem,5vw)",
        opacity: 0.7,
        letterSpacing: "0.01em"
        }}>
        Designed and Developed with <span style={{ color: "#ff0080" }}>♥</span> by Keshav
        </div>
 
    </section>  
  );
}
