import cloudsmoving from "../assets/cloudsmoving.json";
import Lottie from "lottie-react";

export default function WeatherOverlay() {
  return (
    <div className="clouds-overlay">
      <Lottie animationData={cloudsmoving} loop autoplay />
    </div>
  );
}