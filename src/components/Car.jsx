import Lottie from "lottie-react";
import movingcar from "../assets/movingcar.json";
import gsap from "gsap";
import { useRef, useEffect } from "react";

export default function Car() {
  const carRef = useRef();

  useEffect(() => {
    gsap.fromTo(".car-container", { x: 400 }, {
      x: 0,
      scrollTrigger: {
        trigger: ".car-container",
        start: "top center",
        end: "+=800",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="car-container fixed-center z-20">
      <Lottie animationData={movingcar} lottieRef={carRef} autoplay={false} loop={false} />
    </div>
  );
}