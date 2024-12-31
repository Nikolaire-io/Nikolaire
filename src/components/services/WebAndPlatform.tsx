import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const WebAndPlatform = () => {
  
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(()=>{
    gsap.to("#second-display .second", {
      x: "-99%",
      scrollTrigger: {
        trigger: ".trigger-third",
        scroller: "body",
        start: "top 10%",
        end: "top -100%",
        scrub: 3,
        pin: true
      }
    })
  })
  return (
    <div className="flex trigger-third items-center justify-center gap-4 flex-col lg:flex-row">
      <div className="w-full lg:h-[calc(100vh-100px)] max-w-md mx-auto bg-white dark:bg-[#09090B] lg:p-8   lg:border-r my-6 border-gray-300 relative ">
        <div className="flex justify-between text-sm font-medium text-black">
          <span>01</span>
          <span>/04</span>
        </div>

        <div className="flex flex-col justify-center h-full">
          <h2 className="lg:text-3xl text-2xl md:text-2xl font-extrabold text-[#252422] dark:text-[#bababa] mt-6">
            Web Applications <br />+ Digital Platforms
          </h2>

          <p className="text-gray-600 mt-4 leading-relaxed text-sm md:text-base font-semibold">
            We craft unique identities, digital platforms,
            and engaging experiences that set brands apart
            and position them at the heart of culture.
          </p>
          <div className="mt-6">
            <button className="py-2 px-8 rounded-full text-sm font-semibold">
              <span className="text">Learn more</span>
              <span className="w-full">Learn more</span>
            </button>
          </div>
        </div>
      </div>

      {/* second section */}
      <div id="second-display" className="flex items-center justify-between overflow-x-hidden lg:overflow-x-hidden">

        {/* first display */}
        <div className=" mx-auto second flex lg:h-[calc(100vh-100px)] lg:p-5 p-1 dark:bg-[#09090B]  bg-white overflow-x-hidden overflow-hidden gap-6 justify-around flex-shrink-0 w-full">
          {/* first item */}
          <div  className="flex group  flex-col justify-center h-full">
            <img
              src="https://cdn.sanity.io/images/8nn8fua5/production/15e3db1ad0572de3c093faf5d2470fa7572b7e37-580x725.png?w=1024&fm=webp&q=65"
              className="lg:w-full lg:h-[560px] h-72 w-60 object-cover group-hover:scale-95 scale-100 transition-all duration-300"
            />
            <div className="lg:p-6 p-1">
              <h2 className="lg:text-xl text-lg  text-[#252422] dark:text-[#bababa] font-bold mb-2">
              first
              </h2>
              <p className=" text-sm">
                VeraTech.COM — DESIGNING AN ELEVATED ONLINE
                EXPERIENCE FOR A ONE-OF-A-KIND PRODUCT.
              </p>
            </div>
          </div>
          {/* second item */}
          <div className="flex group  flex-col justify-center h-full">
            <img
              src="https://cdn.sanity.io/images/8nn8fua5/production/15e3db1ad0572de3c093faf5d2470fa7572b7e37-580x725.png?w=1024&fm=webp&q=65"
              className="lg:w-full lg:h-[560px] h-72 w-60 object-cover group-hover:scale-95 scale-100 transition-all duration-300"
            />
            <div className="lg:p-6 p-1">
              <h2 className="lg:text-xl text-lg  text-[#252422] dark:text-[#bababa] font-bold mb-2">
              second
              </h2>
              <p className=" text-sm">
                VeraTech.COM — DESIGNING AN ELEVATED ONLINE
                EXPERIENCE FOR A ONE-OF-A-KIND PRODUCT.
              </p>
            </div>
          </div>
        </div>

        {/* second display */}
        
        <div className=" second mx-auto flex lg:h-[calc(100vh-100px)] lg:p-5 lg:pl-0 p-1 dark:bg-[#09090B]  bg-white overflow-x-auto gap-6 justify-around flex-shrink-0 w-full">
          {/* third item */}
          <div  className="flex group  flex-col justify-center h-full">
            <img
              src="https://cdn.sanity.io/images/8nn8fua5/production/15e3db1ad0572de3c093faf5d2470fa7572b7e37-580x725.png?w=1024&fm=webp&q=65"
              className="lg:w-full lg:h-[560px] h-72 w-60 object-cover group-hover:scale-95 scale-100 transition-all duration-300"
            />
            <div className="lg:p-6 p-1">
              <h2 className="lg:text-xl text-lg  text-[#252422] dark:text-[#bababa] font-bold mb-2">
                Third
              </h2>
              <p className=" text-sm">
                VeraTech.COM — DESIGNING AN ELEVATED ONLINE
                EXPERIENCE FOR A ONE-OF-A-KIND PRODUCT.
              </p>
            </div>
          </div>
          {/* fourth item */}
          <div className="flex group  flex-col justify-center h-full">
            <img
              src="https://cdn.sanity.io/images/8nn8fua5/production/15e3db1ad0572de3c093faf5d2470fa7572b7e37-580x725.png?w=1024&fm=webp&q=65"
              className="lg:w-full lg:h-[560px] h-72 w-60 object-cover group-hover:scale-95 scale-100 transition-all duration-300"
            />
            <div className="lg:p-6 p-1">
              <h2 className="lg:text-xl text-lg  text-[#252422] dark:text-[#bababa] font-bold mb-2">
              fourth
              </h2>
              <p className=" text-sm">
                VeraTech.COM — DESIGNING AN ELEVATED ONLINE
                EXPERIENCE FOR A ONE-OF-A-KIND PRODUCT.
              </p>
            </div>
          </div>
        </div>

      </div>
      
    </div>
  );
};

export default WebAndPlatform;
