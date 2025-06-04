// components/Road.jsx
import React from "react";
import "../styles/style.css";

export default function Road({ sidewalkTopRef, sidewalkBottomRef }) {
  return (
    <div className="road-wrapper">
      <div className="sidewalk sidewalk--top" ref={sidewalkTopRef} />
      <div className="road-main">
        {/* Static yellow center line */}
        <div className="road-center-line"></div>
      </div>
      <div className="sidewalk sidewalk--bottom" ref={sidewalkBottomRef} />
    </div>
  );
}
