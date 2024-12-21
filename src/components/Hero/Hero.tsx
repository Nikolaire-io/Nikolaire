"use client";
import { useGSAP } from "@gsap/react";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import SplitText from "@gregoire.ciles/split-text";
import { cn } from "@/lib/utils";

const Hero = () => {
  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.2 });
    const titles = gsap.utils.toArray(".text-wrapper p");
    titles.forEach((title: any, index: number) => {
      const splitText = new SplitText(title);
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
          duration: 1,
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
          delay: 1,
          // repeat: -1,
        },
        "<1"
      );
    });
  }, []);
  return (
    // className="container mx-auto flex justify-center items-center "
    <section className="mt-16">
      <div className="space-y-5">
        <p className="font-exo text-muted-foreground text-sm  pl-5">
          A Top Notch Web Agency{" "}
        </p>
        <div className="flex flex-col items-start gap-5">
          <span className="text-7xl font-semibold font-josefin-sans">
            Build Your
          </span>
          <div className="flex items-center gap-4">
            <span className="text-7xl font-semibold font-josefin-sans">
              Dream
            </span>
            <div className="text-wrapper ">
              <p className="text-3xl font-amaranth mt-5 leading-[0px]  ">
                Web Apps
              </p>
              <p className="text-3xl font-exo -mt-2 font-semibold leading-[0px]">
                Sass
              </p>
              <p className="text-3xl font-quicksand font-semibold -mt-2 leading-[0px]">
                Big Things
              </p>
            </div>
          </div>
        </div>
        <div>
          <span className="text-4xl font-semibold font-josefin-sans">
            With Us
          </span>
        </div>
      </div>
      {/* <div >
       
      </div> */}
    </section>
  );
};

export default Hero;
