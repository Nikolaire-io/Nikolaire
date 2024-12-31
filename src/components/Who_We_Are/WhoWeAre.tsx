"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useRef } from "react";
import { BorderBeam } from "@/components/ui/border-beam";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const WhoWeArePage = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    const textElement = textRef.current;
    const sectionElement = sectionRef.current;

    if (textElement && sectionElement) {
      gsap.from(textElement, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: sectionElement,
          start: "top 80%", // Triggers when the top of the section hits 80% from the top of viewport
          end: "top 20%", // Ends animation when the top of the section hits 20% from the top
          toggleActions: "play none none reverse", // play on enter, reverse on leave
          markers: false, // Set to true during development to see trigger points
        },
      });
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex h-[300px] max-w-7xl mx-4 px-2 xl:mx-auto flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
    >
      <p className="text-sm uppercase tracking-wider text-gray-500 mb-6 font-exo text-start">
        WHO WE ARE
      </p>
      <div className="max-w-5xl">
        <p ref={textRef} className="text-2xl text-center font-amaranth ">
          We are Nikolaire a top notch software agency focused on fostering
          relationships & work culture to deliver world-class digital products.
        </p>
      </div>
      <BorderBeam size={250} duration={12} delay={9} />
    </section>
  );
};

export default WhoWeArePage;
