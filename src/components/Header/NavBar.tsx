"use client";
import React, { useEffect, useState } from "react";
import { LetterPullup } from "@/components/ui/Letter-PulUp";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/Nav-Menu";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/Mode-Toggle";
import { Button } from "../ui/button";

const NavBar = () => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <nav className="fixed inset-x-0 max-w-screen-2xl mx-auto z-50 flex justify-between items-center py-4 px-3 backdrop-blur-xl bg-transparent  border-b border-border rounded-2xl  lg:px-8 h-[76px]">
      <LetterPullup words={"Nikoliare"} delay={0.05} />
      <NavBarMenu className="bg-transparent " />
      <div className="flex items-center space-x-3">
        <ModeToggle />
        <Button
          onClick={() => setActive(!active)}
          variant={"outline"}
          size={"icon"}
          className="md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6  "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={`${
                active
                  ? "M6 18 18 6M6 6l12 12"
                  : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              }`}
            />
          </svg>
        </Button>
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
        "md:fixed md:inline-block  hidden  inset-x-0 max-w-2xl mx-auto z-50",
        className
      )}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Algochurn"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
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
