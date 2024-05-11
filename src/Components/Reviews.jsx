import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Reviews = () => {
  useEffect(() => {
    const containers = gsap.utils.toArray(".a");
    const cards = gsap.utils.toArray(".card");

    cards.forEach((el,i)=> {
        gsap.from(el.children,{
            y:50,
            opacity:0,
            stagger: 1,
            scrollTrigger:{
                trigger:containers[i],
                start:"top, center",
                end:"top, 5% top",
                scrub: 1,
            }
        })
    })

  });
  return (
    <div className="Review-parent">
      <div className="flex items-center p-5 md:p-0 justify-center h-screen a sticky top-0 left-0">
        <div className="card text-white md:w-[60%] h-[70%] bg-slate-800 rounded-lg p-8">
          <p className="text-3xl font-Body">Mr. Chu</p>
          <p className="text-xs mt-2">Professor At St. Universiyt</p>
          <p className="text-xs">8 October 2024</p>
          <div className="my-5 md:w-[65%] border-b"></div>
          <p className="text-justify line-clamp-13">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perspiciatis blanditiis expedita, praesentium distinctio ea sunt
            earum omnis dicta fuga sit aperiam fugiat atque? Soluta unde, nemo
            aspernatur ad labore quaerat officiis quam asperiores repellendus
            quibusdam et? Quidem reiciendis consectetur repellat est iste, totam
            praesentium soluta, commodi cupiditate, obcaecati minus repellendus.
          </p>
        </div>
      </div>
       <div className="flex items-center p-5 md:p-0 justify-center h-screen a sticky top-0 left-0">
        <div className="card mt-4 text-white md:w-[60%] h-[70%] bg-slate-700 rounded-lg p-8">
          <p className="text-3xl font-Body">Mr. Alexandar Wang</p>
          <p className="text-xs mt-2">Manager At Logan Art and Licture</p>
          <p className="text-xs">22 December 2024</p>
          <div className="my-5 md:w-[65%] border-b"></div>
          <p className="text-justify line-clamp-13">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non labore
            alias fuga animi ducimus facilis error eveniet ipsum, inventore
            dolores omnis esse eaque blanditiis atque tempora laboriosam vero
            dignissimos, veniam quas recusandae nam. Animi magnam maxime
            laudantium? Rem, quod distinctio ut consequuntur molestiae aliquid
            odit a quidem numquam dolorum quasi nesciunt, soluta ad, fugiat
            alias porro? Voluptate nulla nihil quo quod accusamus provident, non
            numquam qui, vero veritatis eum, corrupti aliquam illo beatae
            doloremque? Fuga enim hic inventore ipsam doloremque.
          </p>
        </div>
      </div>
      <div className="flex items-center p-5 md:p-0 justify-center h-screen a sticky top-0 left-0">
        <div className="card mt-8 text-white md:w-[60%] h-[70%] bg-slate-600 rounded-lg p-8">
          <p className="text-3xl font-Body">Ms. Amy</p>
          <p className="text-xs mt-2">Teacher at California</p>
          <p className="text-xs">3 October 2020</p>
          <div className="my-5 md:w-[65%] border-b"></div>
          <p className="text-justify line-clamp-13">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat,
            veniam soluta voluptatibus praesentium modi quo eum quasi tempore
            nemo nobis inventore facere nisi, quod doloribus rem debitis vitae
            laudantium autem eligendi dolorum aliquam ad velit! Earum, nesciunt.
            Ea aut quia veniam assumenda.
          </p>
        </div>
      </div>
      <div className="flex items-center p-5 md:p-0 justify-center h-screen a sticky top-0 left-0">
        <div className="card mt-12 text-white md:w-[60%] h-[70%] bg-slate-500 rounded-lg p-8">
          <p className="text-3xl font-Body">Mr. Wembly</p>
          <p className="text-xs mt-2">Artist</p>
          <p className="text-xs">2 May 2024</p>
          <div className="my-5 md:w-[65%] border-b"></div>
          <p className="text-justify line-clamp-13">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            cupiditate provident beatae enim officia dicta ratione molestiae
            ipsa vitae voluptate recusandae odio nostrum, quod ea atque ab.
            Deleniti mollitia inventore soluta explicabo odio quae alias magnam,
            ad corrupti labore qui aut dicta fugit perspiciatis quis quidem quo
            earum aliquam eius hic non esse sunt! Cum eveniet provident dolorem
            deleniti.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
