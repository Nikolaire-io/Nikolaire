"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";

// Spring-like ease for similar animation feel
const springConfig = {
  duration: 0.5,
  ease: "elastic.out(1, 0.75)",
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  const menuItemRef = useRef(null);
  const dropdownRef = useRef(null);

  useGSAP(
    () => {
      if (active === item && dropdownRef.current) {
        // Reset to initial state
        gsap.set(dropdownRef.current, {
          opacity: 0,
          scale: 0.85,
          y: 10,
        });

        // Animate to visible state
        gsap.to(dropdownRef.current, {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: springConfig.duration,
          ease: springConfig.ease,
        });
      }
    },
    { dependencies: [active], scope: menuItemRef }
  );

  return (
    <div
      ref={menuItemRef}
      onMouseEnter={() => setActive(item)}
      className="relative"
    >
      <p className="cursor-pointer  hover:opacity-[0.9] text-primary font-exo">
        {item}
      </p>
      {active !== null && active === item && (
        <div
          ref={dropdownRef}
          className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4"
        >
          <div className="bg-primary-foreground backdrop-blur-sm rounded-2xl overflow-hidden border border-border shadow-xl">
            <div className="w-max h-full p-4">{children}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  const menuRef = useRef(null);

  useGSAP(
    () => {
      // You can add entrance animations for the menu here if needed
      gsap.from(menuRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    },
    { scope: menuRef }
  );

  return (
    <nav
      ref={menuRef}
      onMouseLeave={() => setActive(null)}
      className="relative rounded-full border border-transparent bg-transparent text-primary shadow-input flex justify-center space-x-4 px-8 py-6"
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link
      href={href}
      className="flex space-x-2 hover:scale-105 duration-150 transition-all ease-linear"
    >
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-primary">{title}</h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link {...rest} className="text-primary hover:text-muted-foreground">
      {children}
    </Link>
  );
};
