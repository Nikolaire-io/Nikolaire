"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const isDarkMode = theme === "dark";
  const svgRef = React.useRef(null);
  const centerCircleRef = React.useRef(null);
  const maskedCircleRef = React.useRef(null);
  const linesRef = React.useRef(null);

  const properties = {
    dark: {
      circle: { r: 9 },
      mask: { cx: "50%", cy: "23%" },
      svg: { rotation: 40 },
      lines: { opacity: 0 },
    },
    light: {
      circle: { r: 5 },
      mask: { cx: "100%", cy: "0%" },
      svg: { rotation: 90 },
      lines: { opacity: 1 },
    },
  };

  useGSAP(() => {
    const mode = isDarkMode ? "dark" : "light";
    const config = properties[mode];

    // Create a timeline for synchronized animations
    const tl = gsap.timeline({
      defaults: {
        duration: 0.7,
        ease: "elastic.out(1, 0.75)", // Similar to spring config
      },
    });

    // Animate SVG container rotation
    tl.to(svgRef.current, {
      rotation: config.svg.rotation,
      transformOrigin: "center",
    });

    // Animate center circle radius
    tl.to(
      centerCircleRef.current,
      {
        attr: { r: config.circle.r },
      },
      "<"
    ); // Start at same time as svg rotation

    // Animate masked circle position
    tl.to(
      maskedCircleRef.current,
      {
        attr: {
          cx: config.mask.cx,
          cy: config.mask.cy,
        },
      },
      "<"
    );

    // Animate lines opacity
    tl.to(
      linesRef.current,
      {
        opacity: config.lines.opacity,
      },
      "<"
    );
  }, [isDarkMode]); // Re-run when theme changes

  const toggleDarkMode = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  return (
    <svg
      ref={svgRef}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="currentColor"
      onClick={toggleDarkMode}
      style={{ cursor: "pointer" }}
      className="dark:stroke-white stroke-black "
    >
      <mask id="theme-toggle-mask">
        <rect x="0" y="0" width="100%" height="100%" fill="white" />
        <circle ref={maskedCircleRef} r="9" fill="black" />
      </mask>

      <circle
        ref={centerCircleRef}
        cx="12"
        cy="12"
        className="dark:fill-white fill-black"
        mask="url(#theme-toggle-mask)"
      />

      <g ref={linesRef} stroke="currentColor">
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </g>
    </svg>
  );
}
