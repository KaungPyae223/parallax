import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  useEffect(() => {
    gsap.from(".Footer-Text", {
      opacity: 0,
      y: 150,
      duration: 1,
      scrollTrigger: {
        trigger: ".FooterContainer",
        start: "top, top",
        end: "25% top",
        
        pin: true,
        scrub: 1,
      },
    });
  });
  return (
    <div className="FooterContainer w-full h-screen flex items-center justify-center text-white">
      <div>
        <p className="Footer-Text text-4xl font-semibold">Thank You</p>
      </div>
    </div>
  );
};

export default Footer;
