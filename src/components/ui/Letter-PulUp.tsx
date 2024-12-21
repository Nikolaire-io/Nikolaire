"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

interface LetterPullupProps {
  className?: string;
  words: string;
  delay?: number;
}

export function LetterPullup({
  className,
  words,
  delay = 0.05,
}: LetterPullupProps) {
  const letters = words.split("");
  const letterRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const container = useRef(null);

  useGSAP(
    () => {
      // Create a timeline for sequencing the animations
      const tl = gsap.timeline();

      // Animate each letter
      letterRefs.current.forEach((letterRef, i) => {
        if (letterRef) {
          // Set initial state
          gsap.set(letterRef, {
            y: 100,
            opacity: 0,
          });

          // Add animation to timeline
          tl.to(
            letterRef,
            {
              y: 0,
              opacity: 1,
              duration: 0.5,
              ease: "back.out(1.7)",
              delay: i * delay,
            },
            i * delay
          ); // Start each animation after the delay
        }
      });
    },
    { scope: container }
  ); // Scope the animations to the container

  return (
    <div ref={container} className="flex justify-center">
      {letters.map((letter, i) => (
        <h1
          key={i}
          ref={(el) => {
            letterRefs.current[i] = el;
          }}
          className={cn(
            "font-display text-center text-4xl font-bold tracking-[-0.02em]  drop-shadow-sm text-primary md:text-4xl md:leading-[5rem] font-josefin-sans",
            className
          )}
        >
          {letter === " " ? <span>&nbsp;</span> : letter}
        </h1>
      ))}
    </div>
  );
}
