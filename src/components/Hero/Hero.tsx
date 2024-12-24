"use client";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";
import SplitText from "@gregoire.ciles/split-text";

import AnimatedShinyText from "../ui/animated-shiny-text";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const words = ["Web Apps", "Sass", "Big Things"];

  useGSAP(() => {
    // create wrapper element each word

    const elements = words.map((word, index) => {
      const div = document.createElement("div");

      div.textContent = word;
      div.className = `absolute top-2.5 lg:top-4 md:top-3.5 w-full lg:text-4xl  md:text-3xl text-4xl font-itim font-medium ${
        index === 0 && "dark:text-purple-500 text-orange-500"
      } ${index === 1 && "dark:text-sky-500 text-blue-500"} ${
        index === 2 && "dark:text-lime-500 text-green-500 "
      }`;
      containerRef.current?.appendChild(div);
      return div;
    });

    // Create the animation timeline
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.3 });

    elements.forEach((el, index) => {
      const splitText = new SplitText(el);
      tl.from(
        splitText.chars,
        {
          opacity: 0,
          y: 50,
          rotateX: -90,
          stagger: {
            each: 0.05,
            from: "start",
            ease: "power2.inOut",
          },
          duration: 0.5,
          // repeat: -1,
        },
        "<"
      ).to(
        splitText.chars,
        {
          opacity: 0,
          y: -50,
          rotateX: 90,
          stagger: {
            each: 0.05,
            from: "end",
            ease: "expo.inOut",
          },

          delay: 1.2,
          // repeat: -1,
        },
        "<1"
      );
    });

    // Cleanup
    return () => {
      tl.kill();
      elements.forEach((el) => el.remove());
    };
  }, []);

  return (
    <section className="mt-16">
      <div className="space-y-5">
        <div className="group rounded-full w-56 md:mx-0 mx-auto border-border bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200  dark:bg-neutral-900 dark:hover:bg-neutral-800">
          <AnimatedShinyText className="inline-flex items-center  w-full justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400 font-itim">
            <span className="text-sm lg:text-base">A Top Notch Web Agency</span>
          </AnimatedShinyText>
        </div>
        <div className="flex flex-col place-items-center md:place-items-start gap-2.5  md:gap-5 ">
          <span className=" lg:text-7xl text-4xl  font-semibold font-josefin-sans  ">
            Build Your
          </span>

          <div className="flex flex-col md:flex-row gap-1 lg:gap-3 items-center">
            <span className="lg:text-7xl text-4xl font-semibold font-josefin-sans">
              Dream
            </span>
            <div
              ref={containerRef}
              className="relative md:w-44 w-80 md:text-start text-center h-16   overflow-hidden  "
              // style={{ lineHeight: "60px", verticalAlign: "bottom" }}
            />
          </div>

          <span className="lg:text-4xl font-semibold  font-josefin-sans">
            With Us 🫂
          </span>
        </div>
      </div>
      {/* <div >
       
      </div> */}
    </section>
  );
};

export default Hero;
