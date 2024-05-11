import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const ReviewTitle = () => {
    useEffect(() => {
        gsap.from(".Review-Text", {
          opacity: 0,
          y: 150,
          duration: 1,
          scrollTrigger: {
            trigger: ".ReviewParentContainer",
            start: "top, top",
            end: "25% top",
            pinSpacing: false,
            pin: true,
            scrub: 1,
          
          },
        });
      });
  return (
    <div className="ReviewParentContainer w-full h-screen flex items-center justify-center text-white">
      <div>
        <p className="Review-Text text-3xl md:text-4xl font-medium md:font-semibold">Reviews</p>
      </div>
    </div>
  );
};

export default ReviewTitle;
