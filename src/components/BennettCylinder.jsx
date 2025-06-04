// ✅ components/BennettCylinder.jsx
import bennettLogo from "../assets/bennett_logo.png";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function BennettCylinder() {
  const cylinderRef = useRef();

  useEffect(() => {
    gsap.to(cylinderRef.current, {
      rotateY: 720,
      scrollTrigger: {
        trigger: cylinderRef.current,
        start: "top center",
        end: "+=1000",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="bennett-cylinder" ref={cylinderRef}>
      <div className="cylinder-text">BENNETT</div>
      <img src={bennettLogo} alt="Bennett Logo" className="cylinder-logo" />
    </div>
  );
}