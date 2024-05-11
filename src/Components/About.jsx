import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const About = () => {

    useEffect(() => {
        gsap.from(".About",{
            y:150,
            opacity:0,
            stagger:1,
            scrollTrigger: {
                trigger: ".AboutContainer",
                start: "top, top",
                end: '2000',
                pin: true,
                scrub: 1
                
            }
        })
    },[])
  return (
    <div className="w-full md:h-screen py-5 md:py-0 AboutContainer">
      <p className="About text-center font-Body text-3xl font-medium text-white my-6">
        About Us
      </p>
      <div className="w-full flex flex-col xl:flex-row gap-10 xl:gap-0 xl:justify-evenly items-center xl:items-stretch gap mt-11 text-white">
        <div className="About p-6 border-white border-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-20 stroke-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
            />
          </svg>
          <p className="mt-5 text-2xl w-[350px] xl:w-[280px]">Art from over 240 regions</p>
          <p className="w-[350px] xl:w-[280px mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vero
            illo numquam impedit, voluptatum ipsum quod a eum accusamus! At nam
            dolores earum corporis rerum voluptatum veritatis dicta non?
            Inventore beatae veniam amet autem earum.
          </p>
        </div>
        <div className="About p-6 border-white border-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-20 stroke-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>

          <p className="mt-5 text-2xl w-[350px] xl:w-[280px">Over 200K+ Arts</p>
          <p className="w-[350px] xl:w-[280px mt-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi quae
            esse blanditiis tenetur, at sapiente eius atque dolorem beatae
            alias?
          </p>
        </div>
        <div className="About p-6 border-white border-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-20 stroke-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>

          <p className="mt-5 text-2xl w-[350px] xl:w-[280px">Over 2M visitors</p>
          <p className="w-[350px] xl:w-[280px mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
            odit molestias laboriosam illo quis repellendus voluptas error ad
            provident autem distinctio eum, explicabo repellat reiciendis!
            Aliquid veritatis sequi explicabo omnis et eaque doloribus
            accusantium sit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
