// src/App.jsx or src/pages/index.jsx
import Navbar from "../components/Navbar";
import StarBackground from "../components/StarBackground";
import HeroSection from "../components/HeroSection";
import JourneyScene from "../components/JourneyScene";
import ProjectsSection from "../sections/ProjectsSection/ProjectsSection";
import Skills from "../components/Skills";
import Connect from "../components/ConnectSection";
import SmileQuoteSection from "../components/SmileQuoteSection";
import "../styles/style.css";

export default function App() {
  return (
    <>
      <Navbar />
      <StarBackground />
      <HeroSection />
      <JourneyScene />
      <SmileQuoteSection />
      <ProjectsSection />
      <Skills />
      <Connect />
    </>
  );
}
