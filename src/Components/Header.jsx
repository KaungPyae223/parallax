import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  useEffect(() => {
    // Define ScrollTrigger configuration
    const scrollTriggerConfig = {
      trigger: ".HeaderBody",
      start: "top 50%",
      end: "top top",
      scrub: 1,
    };

    
    const headingTimeline = gsap.timeline({
      scrollTrigger: scrollTriggerConfig,
    });

    headingTimeline.from(".header-image",2, {
      opacity: 0,
      x: 300,
      stagger: 0.5,
    },"Header");

    headingTimeline.from(".title", {
      opacity: 0,
      y: 50,
      stagger: 0.3,
    },"Header");
  }, []);

  return (
    <div className="HeaderBody">
      <div className="Handaler"></div>
      <div className="  h-screen overflow-hidden my-5 md:my-0 mx-3 md:mx-6 xl:mx-12 flex gap-20 xl:gap-5 flex-col-reverse xl:flex-row justify-center xl:justify-between items-center  p-5">
        <div className="xl:basis-2/3 text-white ExitParagraph">
          <p className="title font-Body text-5xl font-semibold">
            Alexandar Art Galarry
          </p>
          <p className="title text-lg font-medium mt-3">
            Experience a curated collection of contemporary art.
          </p>
          <div className="title border-b border-b-white/50 w-[300px] mt-3"></div>
          <p className="title xl:w-[450px] my-6">
            Unveil a hidden dimension where imagination takes form. Alexandar
            Galarry presents a curated collection of captivating works, each
            whispering stories waiting to be discovered. Explore diverse styles
            from emerging and established talents, and find a piece that
            resonates with your soul. Let art ignite your curiosity and spark a
            conversation – within yourself, and with the world.
          </p>
        </div>
        <div className="ImageExit">
          <img
            className="xl:w-[400px] header-image"
            src="https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBhaW50aW5nfGVufDB8fDB8fHww"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
