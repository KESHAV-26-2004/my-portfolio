// src/App.jsx or src/pages/index.jsx
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import JourneyScene from "../components/JourneyScene";
import ProjectsSection from "../sections/ProjectsSection/ProjectsSection";
import "../styles/style.css";

export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <JourneyScene />
      <ProjectsSection />
    </>
  );
}
