"use client";
import { useRef, useState } from "react";
import { LetterPullup } from "@/components/ui/Letter-PulUp";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/Nav-Menu";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/Mode-Toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const NavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navbarRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!navbarRef.current) return;

    // Initial state - fixed at top with 65% width
    gsap.set(navbarRef.current, {
      width: "65%",
      left: "50%",
      xPercent: -50,
      position: "fixed",
      top: "1rem",
    });

    // Animation for width expansion on scroll
    gsap.to(navbarRef.current, {
      width: "80%", // Expands to 90% width when scrolling
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "+=300",
        scrub: 0.5, // Smooth scrubbing
        toggleActions: "play none none reverse",
      },
      ease: "power2.out",
      duration: 0.5,
    });

    return () => {
      // Clean up ScrollTrigger
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const navlinks = [
    {
      label: "Services",
      links: [
        { label: "Web Development", href: "/web-dev" },
        { label: "Interface Design", href: "/interface-design" },
        { label: "Search Engine Optimization", href: "/seo" },
        { label: "Branding", href: "/branding" },
      ],
    },
    {
      label: "Products",
      links: [
        {
          title: "Algochurn",
          href: "https://algochurn.com",
          src: "https://assets.aceternity.com/demos/algochurn.webp",
          description: "Prepare for tech interviews like never before.",
        },
        {
          title: "Tailwind Master Kit",
          href: "https://tailwindmasterkit.com",
          src: "https://assets.aceternity.com/demos/tailwindmasterkit.webp",
          description:
            "Production ready Tailwind css components for your next project",
        },
        {
          title: "Moonbeam",
          href: "https://gomoonbeam.com",
          src: "https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png",
          description:
            "Never write from scratch again. Go from idea to blog in minutes.",
        },
        {
          title: "Rogue",
          href: "https://userogue.com",
          src: "https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png",
          description:
            "Respond to government RFPs, RFIs and RFQs 10x faster using AI",
        },
      ],
    },
    {
      label: "Pricing",
      links: [
        { label: "Hobby", href: "/hobby" },
        { label: "Individual", href: "/individual" },
        { label: "Team", href: "/team" },
        { label: "Enterprise", href: "/enterprise" },
      ],
    },
  ];

  return (
    <nav
      ref={navbarRef}
      className="z-50 flex justify-between items-center py-4 px-3 backdrop-blur-xl bg-transparent border-b border-border rounded-2xl lg:px-8 h-[76px]"
    >
      <Link
        href={"/"}
        children={<LetterPullup words={"Nikoliare"} delay={0.05} />}
      />
      <NavBarMenu className="bg-transparent" />
      <div className="flex items-center space-x-3">
        <ModeToggle />
        <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
          <SheetTrigger asChild>
            <Button variant={"outline"} size={"icon"} className="md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={`${
                    isSidebarOpen
                      ? "M6 18 18 6M6 6l12 12"
                      : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  }`}
                />
              </svg>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader className="mt-4">
              <SheetTitle className="font-josefin-sans text-xl font-semibold">
                Nikolaire
              </SheetTitle>
              <SheetDescription>
                <p className="text-sm text-gray-500">
                  We build products that empower people
                </p>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default NavBar;

function NavBarMenu({ className }: { className: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "md:fixed md:inline-block hidden inset-x-0 max-w-2xl mx-auto z-50",
        className
      )}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">
              BackEnd Development
            </HoveredLink>
            <HoveredLink href="/seo">App Development</HoveredLink>
            <HoveredLink href="/branding">
              Infrastructure Development
            </HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}