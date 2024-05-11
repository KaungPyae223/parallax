import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Intro = () => {
  const timeline = gsap.timeline();
  useEffect(() => {
    timeline
      .from(".Header", 1, { opacity: 0,y: 50, stagger: 0.3, delay: 0.5 })
      .from("#sub-title", 1, { opacity: 0, y: 20, duration: 1 })
      .from(".container>div", 1, {
        opacity: 0,
        y: 100,
        duration: 1,
        stagger: 0.5,
      })
      .to(".Header-Content", {
        y: -250, // Change to a positive value for downward movement
        opacity: 0,
        scrollTrigger: {
          trigger: ".IntroBody",
          start: "top, top",
          end: "center",
          scrub: 1,
          pinSpacing: false,
          pin: true,
        },
      });
  }, []);

  return (
    <div className="IntroBody w-full overflow-hidden h-screen flex flex-col items-center justify-center relative">
      <div className="flex flex-row Header-Content text-5xl lg:text-[6.5rem] z-10 text-white font-Logo font-medium  stroke-2">
        <span className="Header">A</span>
        <span className="Header">L</span>
        <span className="Header">E</span>
        <span className="Header">X</span>
        <span className="Header">A</span>
        <span className="Header">N</span>
        <span className="Header">D</span>
        <span className="Header">A</span>
        <span className="Header">R</span>
      </div>
      <div className="Header-Content">
        <p id="sub-title" className="text-white z-10 font-Body lg:text-lg">
          The Best Art Online Art Gallary in the World
        </p>
      </div>

      <div className="container w-full h-screen absolute top-0 left-0 hidden sm:grid grid-cols-2 xl:grid-cols-3">
        <div className=" relative">
          <img
            className="Header-Content w-[250px] left-14 top-16 absolute opacity-70"
            src={
              "https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
        </div>

        <div className="relative ">
          <img
            className="Header-Content w-[250px] top-24 right-[50%] transform translate-x-[50%] absolute opacity-30"
            src={
              "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
        </div>
        <div className="relative ">
          <img
            className="Header-Content w-[250px] absolute right-14 top-14 opacity-70"
            src={
              "https://images.unsplash.com/photo-1579541814924-49fef17c5be5?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
        </div>
        <div className="relative ">
          <img
            className="Header-Content w-[250px] absolute -right-11 bottom-8 opacity-55"
            src={
              "https://images.unsplash.com/photo-1482160549825-59d1b23cb208?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
        </div>
        <div className="relative"></div>
        <div className="relative ">
          <img
            className="Header-Content w-[250px] absolute bottom-8 -left-28 opacity-40"
            src={
              "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
