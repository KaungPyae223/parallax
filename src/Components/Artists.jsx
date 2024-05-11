import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import ArtistData from "./ArtistData";
gsap.registerPlugin(ScrollTrigger);

const Artists = () => {
  const artists = [
    {
      name: "Leonardo da Vinci",
      dateOfBirth: "April 15, 1452",
      dateOfDeath: "May 2, 1519",
      nationality: "Italian",
      shortBio:
        "Leonardo da Vinci was an Italian polymath of the High Renaissance who was active as a painter, draughtsman, engineer, scientist, theorist, sculptor and architect. He is widely considered to be one of the greatest artists of all time.",
    },
    {
      name: "Vincent van Gogh",
      dateOfBirth: "March 30, 1853",
      dateOfDeath: "July 29, 1890",
      nationality: "Dutch",
      shortBio:
        "Vincent van Gogh was a Dutch Post-Impressionist painter who is among the most famous and influential figures in the history of Western art. In a decade, he created about 2,100 artworks, including around 860 oil paintings, most of which date from the last two years of his life.",
    },
    {
      name: "Frida Kahlo",
      dateOfBirth: "July 6, 1907",
      dateOfDeath: "July 13, 1954",
      nationality: "Mexican",
      shortBio:
        "Frida Kahlo was a Mexican painter known for her many portraits, self-portraits, and works inspired by the nature and artifacts of Mexico. Inspired by the country's popular culture, she employed a naïve folk art style to explore questions of identity, postcolonialism, gender, class, and race in Mexican society.",
    },
    {
      name: "Pablo Picasso",
      dateOfBirth: "October 25, 1881",
      dateOfDeath: "April 8, 1973",
      nationality: "Spanish",
      shortBio:
        "Pablo Picasso was a Spanish painter, sculptor, printmaker, ceramicist and theatre designer who spent most of his adult life in France. Regarded as one of the most influential artists of the 20th century, he is known for co-founding the Cubist movement, the invention of constructed sculpture, the co-invention of collage, and for the wide variety of styles that he helped develop and explore.",
    },
  ];

  useEffect(() => {
    ScrollTrigger.create({
      trigger: ".artistContainer",
      start: "top top",
      end: "bottom bottom",
      pin: ".right",
    });

    const photos = gsap.utils.toArray(".photo:not(:first-child)");

    gsap.set(photos, { yPercent: 101 });

    const details = gsap.utils.toArray(".details:not(:first-child)");

    let mm = gsap.matchMedia();
    mm.add("(min-width:1280px)", () => {
      details.forEach((details, i) => {
        gsap.to(photos[i], {
          yPercent: 0,
          scrollTrigger: {
            trigger: details,
            start: "top, 80% top",
            end: "top, 20% top",
            scrub: 1,
            
          },
        });
      });
    });

    mm.add("(max-width:1279px)", () => {
      details.forEach((details, i) => {
        gsap.to(photos[i], {
          yPercent: 0,
          scrollTrigger: {
            trigger: details,
            start: "top, bottom",
            end: "top, center",
            scrub: 1,
            
          },
        });
      });

      const mobileDetails = gsap.utils.toArray(".details");

      mobileDetails.forEach((el)=>{
        gsap.to(el, {
          opacity: 0,
          scrollTrigger: {
            trigger: el,
            start: "bottom 70% top ",
            end: "bottom center ",
            scrub: true,
            
          },
        });
      })
      
    });
  });

  return (
    <div className="artistContainer grid xl:grid-cols-2 p-10 xl:p-0">
      <div>
        {artists.map((el, i) => {
          return <ArtistData key={i} data={el} />;
        })}
      </div>

      <div className="h-[50vh] xl:h-screen row-start-1 xl:col-start-2 flex items-center justify-center">
        <div className="overflow-hidden border-8 relative border-red-800 xl:w-[75%] xl:h-[75%] w-full h-[90%]  right">
          <div
            className="photo absolute w-full min-h-full bg-fixed bg-cover object-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1486413869840-a99ac0a4c031?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          ></div>

          <div
            className="photo absolute w-full min-h-full bg-fixed bg-cover object-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1628359355624-855775b5c9c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          ></div>

          <div
            className="photo absolute w-full min-h-full bg-fixed bg-cover object-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1551180452-45cc5da51c3a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          ></div>

          <div
            className="photo absolute w-full min-h-full bg-fixed bg-cover object-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1584598788860-2695a3a6c874?q=80&w=1897&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Artists;
