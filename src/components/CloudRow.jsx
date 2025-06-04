import React from "react";
import Lottie from "lottie-react";
import cloudsData from "../assets/cloudsmoving.json";

const CLOUD_COUNT = 20; // Or as many as you want

export default function CloudRow() {
  const cloudWidthVW = 15; // Each cloud is 8vw wide (adjust as needed)
  const cloudHeightVH = 21; // Each cloud is 14vh tall (adjust as needed)
  return (
    <div className="clouds-row">
      {Array.from({ length: CLOUD_COUNT }).map((_, i) => (
        <div
          className="clouds-row__item"
          key={i}
          style={{
            left: `${i * cloudWidthVW}vw`,
            width: `${cloudWidthVW}vw`,
            height: `${cloudHeightVH}vh`,
            top: "2vh", // Adjust vertical position as needed
          }}
        >
          <Lottie
            animationData={cloudsData}
            loop
            autoplay
            style={{ width: "150%", height: "100%" }}
          />
        </div>
      ))}
    </div>
  );
}
