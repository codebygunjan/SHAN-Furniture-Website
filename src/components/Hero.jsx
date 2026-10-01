import { useRef } from "react";
import hero1 from "../assets/heroSection/hero1.png";
import gsap from "gsap";

const Hero = ({ curatedRef }) => {
  const heroImgRef = useRef();

  return (
    <div className="overflow-hidden flex">
      <img
        ref={heroImgRef}
        src={hero1}
        onLoad={() => {
          gsap.from(heroImgRef.current, {
            scale: 0.08,
            opacity: 0,
            duration: 1.5,
            delay: 0.3,
            ease: "power2.out",
            onComplete: () => {
              curatedRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            },
          });
          console.log("img loaded");
        }}
        className="lg:h-screen h-70 mt-25 lg:mt-10 lg:px-8 w-full shrink-0 object-cover bg-center"
        alt="hero1"
      />
    </div>
  );
};

export default Hero;
