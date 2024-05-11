import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const PopularArt = () => {
  const container = useRef(null);
  useEffect(() => {
    const containerWidth = container.current.getBoundingClientRect().width;
    const pagesArray = gsap.utils.toArray(".page");

    let scrolltween = gsap.to(pagesArray, {
      xPercent: -100 * (pagesArray.length - 1),
      scrollTrigger: {
        trigger: ".artContainer",
        start: "top top",
        pin: true,
        scrub: 1,
        end: () => "+=" + containerWidth,
      },
    });

    pagesArray.forEach((el) => {
      let data = el.querySelectorAll(".data");

      gsap.from(data, {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        scrollTrigger: {
          trigger: el,
          containerAnimation: scrolltween,
          start: "left, 75% left",
          
        },
      });
    });
  }, []);

  return (
    <div className="w-full min-h-screen overflow-hidden">
      <div
        ref={container}
        className="artContainer min-h-screen flex flex-row items-start"
      >
        <div className="page min-w-full min-h-screen flex flex-col-reverse xl:flex-row justify-around items-center p-10">
          <div className="text-white">
            <p className="font-Body text-3xl font-medium">Lorem, ipsum dolor</p>
            <p className="text-sm mt-1.5">Leonardo da Vinci</p>
            <p className="text-sm mb-3">1503</p>
            <div className="border-b w-[350px]"></div>
            <p className="mt-3 xl:w-[300px]">
              The Mona Lisa is perhaps the most famous painting in the world,
              known for its enigmatic smile. Painted by Leonardo da Vinci in the
              early 16th century, it is a portrait of Lisa Gherardini, the wife
              of Florentine merchant Francesco del Giocondo. The painting is
              housed in the Louvre Museum in Paris, France.
            </p>
          </div>
          <img
            className="xl:h-[80vh] h-[50vh] border-8 border-white"
            src="https://images.unsplash.com/photo-1578301978018-3005759f48f7?q=80&w=2044&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
        <div className="page min-w-full min-h-screen flex flex-col-reverse xl:flex-row  justify-around items-center p-10">
          <div className="text-white ">
            <p className="font-Body text-3xl font-medium data">Starry Night</p>
            <p className="text-sm mt-1.5 data">Vincent van Gog</p>
            <p className="text-sm mb-3 data">1889</p>
            <div className="border-b xl:w-[350px] data"></div>
            <p className="mt-3 xl:w-[300px] data">
              Starry Night is one of Vincent van Gogh's most well-known works,
              painted in 1889. This post-impressionist masterpiece depicts the
              view from Van Gogh's asylum room window at Saint-Rémy-de-Provence,
              just before sunrise. The swirling clouds and vibrant stars evoke a
              sense of movement and emotion. It is currently part of the
              collection at the Museum of Modern Art in New York City.
            </p>
          </div>
          <img
            className="xl:h-[80vh] h-[40vh] border-8 border-white"
            src="https://images.unsplash.com/photo-1579541814924-49fef17c5be5?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
        <div className="page min-w-full min-h-screen flex flex-col-reverse xl:flex-row justify-around items-center p-10">
          <div className="text-white">
            <p className="font-Body text-3xl font-medium data">The Scream</p>
            <p className="text-sm mt-1.5 data">Edvard Munch</p>
            <p className="text-sm mb-3 data">1503</p>
            <div className="border-b xl:w-[350px] data"></div>

            <p className="mt-3 xl:w-[300px] data">
              The Scream is a series of expressionist paintings by Edvard Munch,
              created in the late 19th and early 20th centuries. The most famous
              version, painted in 1893, depicts a figure with a haunting,
              distorted face standing on a bridge overlooking a fjord. The
              painting is a powerful representation of existential angst and has
              become an iconic symbol of modern anxiety. It is currently housed
              in the National Gallery of Norway in Oslo.
            </p>
          </div>
          <img
            className="xl:h-[80vh] h-[50vh] border-8 border-white"
            src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1945&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
        <div className="page min-w-full min-h-screen flex flex-col-reverse xl:flex-row justify-around items-center p-10">
          <div className="text-white">
            <p className="font-Body text-3xl font-medium data">
              The Persistence of Memory
            </p>
            <p className="text-sm mt-1.5 data">Salvador Dalí</p>
            <p className="text-sm mb-3 data">1931</p>
            <div className="border-b w-[350px] data"></div>
            <p className="mt-3 xl:w-[300px] data">
              The Persistence of Memory is a surrealist masterpiece painted by
              Salvador Dalí in 1931. This iconic work features melting clocks
              draped over various objects in a dreamlike landscape. Dalí's
              exploration of time and reality challenges the viewer's perception
              and invites interpretation. The painting is currently on display
              at the Museum of Modern Art in New York City.
            </p>
          </div>
          <img
            className="xl:h-[80vh] h-[50vh] border-8 border-white"
            src="https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=1919&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </div>
    </div>
  );
};

export default PopularArt;
