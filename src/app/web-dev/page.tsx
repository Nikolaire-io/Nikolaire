"use client";
import React, { useState } from "react";
import "@/app/web-dev/button.css";
import Ecommerce from "@/components/services/Ecommerce";
import WebAndPlatform from "@/components/services/WebAndPlatform";
import BrandingOrAdvertise from "@/components/services/BrandingOrAdvertise";
import Seo from "@/components/services/Seo";

const Services = () => {
  return (
    <div>
      <h1 className="uppercase mt-20 xl:text-8xl md:text-4xl text-3xl font-semibold mb-20 md:w-4/5 text-[#252422] dark:text-[#bababa]">
        Simple to comprehend.
        <br />● Unforgettable to overlook.
      </h1>
      <div className="flex justify-between flex-col-reverse  md:flex-row items-start md:items-end my-10 text-[#252422] dark:text-[#bababa]">
        <div>
          <h2 className="uppercase mt-20 text-[15px] md:text-base">
            our services
          </h2>
        </div>

        <div className="md:w-1/3 text-sm md:text-base">
          We craft websites that blend clarity with
          innovation, creating engaging digital experiences
          that connect brands to their audience through
          shared values and seamless functionality.
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#252422] dark:bg-[#bababa]"></div>

      {/* services section */}
      <div>
        <Ecommerce></Ecommerce>
        <div className="w-full h-[1px] bg-[#252422] dark:bg-[#bababa]"></div>
        <WebAndPlatform></WebAndPlatform>
        <div className="w-full h-[1px] bg-[#252422] dark:bg-[#bababa]"></div>
        <BrandingOrAdvertise></BrandingOrAdvertise>
        <div className="w-full h-[1px] bg-[#252422] dark:bg-[#bababa]"></div>
        <Seo></Seo>
      </div>
    </div>
  );
};

export default Services;
