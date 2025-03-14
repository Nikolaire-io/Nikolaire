"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

// Register the ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Team member data
const teamMembers = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Founder & CEO",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Creative Director",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Lead Developer",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 4,
    name: "Emma Rodriguez",
    role: "UX Designer",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 5,
    name: "David Kim",
    role: "Marketing Strategist",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 6,
    name: "Olivia Taylor",
    role: "Project Manager",
    image: "/placeholder.svg?height=400&width=300",
  },
];

export default function TeamSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Create a context to batch our animations
    const ctx = gsap.context(() => {
      // Animate the heading and subheading
      gsap.from(headingRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(subheadingRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Animate each team member individually with more dramatic effects
      const teamMembers = teamRef.current?.querySelectorAll(".team-member");
      if (teamMembers?.length) {
        teamMembers.forEach((member, index) => {
          // Create a separate ScrollTrigger for each team member
          gsap.from(member, {
            y: 100,
            opacity: 0,
            scale: 0.9,
            duration: 0.8,
            delay: index * 0.2, // Sequential delay based on index
            scrollTrigger: {
              trigger: member,
              start: "top 85%",
              toggleActions: "play none none none",
              id: `team-member-${index}`,
              markers: false,
            },
          });
        });
      }
    }, sectionRef);

    // Cleanup function
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 md:px-8 bg-black text-white min-h-screen flex flex-col justify-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 ref={headingRef} className="text-4xl md:text-5xl font-bold mb-4">
            Our Team
          </h2>
          <p
            ref={subheadingRef}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Meet the talented individuals behind Nikolaire Time who make
            everything possible.
          </p>
        </div>

        <div
          ref={teamRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16"
        >
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="team-member group relative overflow-hidden bg-gray-900 rounded-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-white/10"
            >
              <div className="aspect-[3/4] relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-500">
                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                <p className="text-gray-300 text-lg">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
