import React from "react";
import Content from "./Content";

export default function Footer() {
  return (
    <div
      className="relative h-auto   mt-10 "
      // style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative  ">
        <div className="h-auto sticky ">
          <Content />
        </div>
      </div>
    </div>
  );
}
