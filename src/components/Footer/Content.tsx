"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

export default function Content() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (sectionRef.current && containerRef.current) {
      gsap.from(sectionRef.current, {
        opacity: 0,
        z: -100,
        scale: 0.9,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none reverse",
          scrub: false,
        },
      });
    }
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
      className="relative"
    >
      <div
        ref={sectionRef}
        className="bg-primary-foreground py-8 px-5 lg:px-12 h-full w-full flex flex-col justify-between rounded-lg"
        style={{
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
        }}
      >
        <div className="flex shrink-0 gap-5">
          <Link className={buttonVariants({ variant: "ghost" })} href="/">
            Home
          </Link>
          <Link className={buttonVariants({ variant: "ghost" })} href="/about">
            Services
          </Link>
          <Link
            className={buttonVariants({ variant: "ghost" })}
            href="/contact"
          >
            Works
          </Link>
          <Link
            className={buttonVariants({ variant: "ghost" })}
            href="/contact"
          >
            Products
          </Link>
        </div>
        <section>
          <div>
            <h1 className="lg:text-7xl text-3xl leading-[0.8] mt-10 font-josefin-sans font-semibold ">
              Nikolaire
            </h1>
            <p className="text-muted-foreground text-base lg:text-lg mt-5">
              Focus On Delivering World-Class Digital Products
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
