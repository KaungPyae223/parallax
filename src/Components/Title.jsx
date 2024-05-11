import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
const Title = () => {
  useEffect(() => {
    gsap.from(".Text", {
      opacity: 0,
      y: 150,
      duration: 1,
      scrollTrigger: {
        trigger: ".ParentContainer",
        start: "top, top",
        end: "25% top",
        pinSpacing: false,
        pin: true,
        scrub: 1,
        
      },
    });
  });

  return (
    <div className="ParentContainer w-full h-screen flex items-center justify-center text-white">
      <div>
        <p className="Text text-3xl md:text-4xl font-medium md:font-semibold">
          The most popular ART works
        </p>
      </div>
    </div>
  );
};

export default Title;
