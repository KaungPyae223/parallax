import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const ArtistTitle = () => {
  useEffect(() => {
    gsap.from(".Artist-Text", {
      opacity: 0,
      y: 150,
      duration: 1,
      scrollTrigger: {
        trigger: ".ArtistParentContainer",
        start: "top, top",
        end: "25% top",
        pinSpacing: false,
        pin: true,
        scrub: 1,
      },
    });
  });

  return (
    <div className="ArtistParentContainer w-full h-screen flex items-center justify-center text-white">
      <div>
        <p className="Artist-Text text-3xl md:text-4xl font-medium md:font-semibold">Populara Artists</p>
      </div>
    </div>
  );
};

export default ArtistTitle;
