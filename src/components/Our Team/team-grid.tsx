"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useMediaQuery } from "@/hooks/use-media-query";

// Register GSAP plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Define member interface
interface TeamMember {
  id: number;
  name: string;
  role: string;
  image?: string;
  gridArea: {
    desktop: string;
    tablet: string;
    mobile: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Profib 001",
    role: "Founder & CEO",
    image: "/Tsnabil.png",
    gridArea: {
      desktop: "1 / 1 / 2 / 2",
      tablet: "1 / 1 / 2 / 3",
      mobile: "auto",
    },
  },
  {
    id: 2,
    name: "MThe001",
    role: "Creative Director",
    image: "/mthe001.png",
    gridArea: {
      desktop: "1 / 3 / 2 / 4",
      tablet: "1 / 3 / 2 / 5",
      mobile: "auto",
    },
  },
  {
    id: 3,
    name: "Ryne 68",
    role: "Lead Developer",
    image: "/nafizvai.png",
    gridArea: {
      desktop: "2 / 2 / 3 / 3",
      tablet: "2 / 1 / 3 / 3",
      mobile: "auto",
    },
  },
  {
    id: 4,
    name: "Mehedi Hasan",
    role: "Beckand developer",
    image: "/mhdi bro.png",
    gridArea: {
      desktop: "2 / 4 / 3 / 5",
      tablet: "2 / 3 / 3 / 5",
      mobile: "auto",
    },
  },
  {
    id: 5,
    name: "David Kim",
    role: "Marketing Strategist",
    image: "/placeholder.svg?height=400&width=400",
    gridArea: {
      desktop: "3 / 1 / 4 / 2",
      tablet: "3 / 1 / 4 / 3",
      mobile: "auto",
    },
  },
  {
    id: 6,
    name: "Olivia Taylor",
    role: "Project Manager",
    image: "/placeholder.svg?height=400&width=400",
    gridArea: {
      desktop: "3 / 3 / 4 / 4",
      tablet: "3 / 3 / 4 / 5",
      mobile: "auto",
    },
  },
];

export default function TeamGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const membersRef = useRef<(HTMLDivElement | null)[]>([]);
  const fogRef = useRef<HTMLDivElement>(null);

  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(min-width: 769px) and (max-width: 1024px)");

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate fog effect
      if (fogRef.current) {
        gsap.to(fogRef.current, {
          opacity: 0.4,
          duration: 10,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      // Animate team members
      membersRef.current.forEach((member, index) => {
        if (!member) return;

        // Initial state
        gsap.set(member, { opacity: 0, scale: 0.8 });

        // Create animation
        gsap.to(member, {
          opacity: 1,
          scale: 1,
          duration: 1,
          delay: index * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: member,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
          },
        });

        // Create hover animation for non-mobile devices
        if (!isMobile) {
          const enterHandler = () => {
            gsap.to(member.querySelector(".glow-effect"), {
              opacity: 0.8,
              duration: 0.5,
            });
            gsap.to(member.querySelector(".border-effect"), {
              borderColor: "rgba(255, 255, 255, 0.5)",
              boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)",
              duration: 0.5,
            });
            gsap.to(member.querySelector(".member-content"), {
              y: 0,
              opacity: 1,
              duration: 0.5,
            });
          };

          const leaveHandler = () => {
            gsap.to(member.querySelector(".glow-effect"), {
              opacity: 0,
              duration: 0.5,
            });
            gsap.to(member.querySelector(".border-effect"), {
              borderColor: "rgba(255, 255, 255, 0.2)",
              boxShadow: "0 0 10px rgba(255, 255, 255, 0.1)",
              duration: 0.5,
            });
            gsap.to(member.querySelector(".member-content"), {
              y: 20,
              opacity: 0,
              duration: 0.5,
            });
          };

          member.addEventListener("mouseenter", enterHandler);
          member.addEventListener("mouseleave", leaveHandler);

          // Cleanup function for event listeners
          return () => {
            member.removeEventListener("mouseenter", enterHandler);
            member.removeEventListener("mouseleave", leaveHandler);
          };
        } else {
          // For mobile, always show the content
          gsap.set(member.querySelector(".member-content"), {
            y: 0,
            opacity: 1,
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isMobile]);

  // Determine grid template based on screen size
  const getGridTemplate = () => {
    if (isMobile) {
      return {
        gridTemplateColumns: "1fr",
        gap: "2rem",
      };
    } else if (isTablet) {
      return {
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "1.5rem",
      };
    } else {
      return {
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "2rem",
      };
    }
  };

  // Get grid area based on screen size
  const getGridArea = (member: TeamMember) => {
    if (isMobile) {
      return member.gridArea.mobile;
    } else if (isTablet) {
      return member.gridArea.tablet;
    } else {
      return member.gridArea.desktop;
    }
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-background w-[96%] mx-auto py-20 px-4 md:px-8 relative border rounded-lg my-20 overflow-hidden"
      
    >
      {/* Grid background with dots */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Fog effect */}
      <div
        ref={fogRef}
        className="absolute inset-0 opacity-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)",
        }}
      />

      {/* Light beams */}
      <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
        <div
          className="absolute w-[200px] h-[800px] rotate-45 blur-[100px]"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.1))",
            top: "-200px",
            left: "30%",
            animation: "moveLight 20s infinite alternate ease-in-out",
          }}
        />
        <div
          className="absolute w-[200px] h-[800px] -rotate-45 blur-[100px]"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.1))",
            top: "20%",
            right: "10%",
            animation: "moveLight 15s infinite alternate-reverse ease-in-out",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Team
          </h2>
          <p className="text-gray-400 text-lg">
            The minds behind Nikolaire Time
          </p>
        </div>

        <div className="grid relative" style={getGridTemplate()}>
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              ref={(el) => {
                membersRef.current[index] = el; // Fixed ref assignment
              }}
              className="relative group"
              style={{
                gridArea: getGridArea(member),
              }}
            >
              <div
                className="border-effect relative aspect-square overflow-hidden rounded-lg p-[2px] transition-all duration-500"
                style={{
                  border: "2px dashed rgba(255, 255, 255, 0.2)",
                  boxShadow: "0 0 10px rgba(255, 255, 255, 0.1)",
                }}
              >
                <div className="relative w-full h-full overflow-hidden rounded-lg">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* Glow effect */}
                  <div
                    className="glow-effect absolute inset-0 opacity-0 transition-opacity duration-500"
                    style={{
                      background:
                        "radial-gradient(circle at center, rgba(255, 255, 255, 0.3) 0%, transparent 70%)",
                    }}
                  />

                  {/* Fog overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 100%)",
                    }}
                  />
                </div>
              </div>

              {/* Name and title - no glass effect */}
              <div
                className="member-content absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-20 opacity-0 md:translate-y-20 md:opacity-0 transition-all duration-500"
                style={{
                  background: isMobile ? "rgba(0, 0, 0, 0.7)" : "transparent",
                }}
              >
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-gray-300">{member.role}</p>
                </div>
                {/* Simple gradient overlay instead of glass */}
                {!isMobile && (
                  <div className="absolute inset-0 -z-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx global>{`
        @keyframes moveLight {
          0% {
            transform: translateY(0) rotate(45deg);
            opacity: 0.1;
          }
          50% {
            opacity: 0.2;
          }
          100% {
            transform: translateY(100px) rotate(45deg);
            opacity: 0.1;
          }
        }
      `}</style>
    </section>
  );
}