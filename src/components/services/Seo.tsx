import React from "react";

const Ecommerce = () => {
  return (
    <div className="flex items-center justify-center gap-4 flex-col lg:flex-row">
      <div className="w-full lg:h-[calc(100vh-100px)] max-w-md mx-auto bg-white dark:bg-[#09090B] lg:p-8   lg:border-r my-6 border-gray-300 relative ">
        <div className="flex justify-between text-sm font-medium text-black">
          <span>01</span>
          <span>/04</span>
        </div>

        <div className="flex flex-col justify-center h-full">
          <h2 className="text-3xl font-extrabold text-[#252422] dark:text-[#bababa] mt-6">
            Search Engine optimization <br />AKA SEO
          </h2>

          <p className="text-gray-600 mt-4 leading-relaxed font-semibold">
          Maximize your online presence with our expert SEO services.
          From on-page optimization to link building and mobile SEO.
          Enhance your website's visibility and attract more visitors with our SEO expertise.
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
      <div className="flex items-center justify-between overflow-x-scroll lg:overflow-auto">
        <div className=" group mx-auto lg:h-[calc(100vh-100px)] lg:p-7 p-1 dark:bg-[#09090B]  bg-white overflow-x-auto">
          <div className="flex flex-col justify-center h-full">
            <img
              src="https://static.vecteezy.com/system/resources/previews/012/335/181/non_2x/mobile-shopping-concept-a-man-and-a-woman-buy-things-in-the-online-store-through-a-big-smartphone-e-commerce-and-online-shopping-illustration-in-flat-style-vector.jpg"
              className="lg:w-full lg:h-[560px] h-72 w-60 object-cover group-hover:scale-95 scale-100 transition-all duration-300"
            />
            <div className="lg:p-6 p-1">
              <h2 className="lg:text-xl text-lg  text-[#252422] dark:text-[#bababa] font-bold mb-2">
                Innova
              </h2>
              <p className=" text-sm">
                VeraTech.COM — DESIGNING AN ELEVATED ONLINE
                EXPERIENCE FOR A ONE-OF-A-KIND PRODUCT.
              </p>
            </div>
          </div>
        </div>

        {/* Third section */}
        <div className="   group mx-auto lg:h-[calc(100vh-100px)] lg:p-7 p-1 dark:bg-[#09090B]  bg-white overflow-x-auto">
          <div className="flex flex-col justify-center h-full">
            <img
              src="https://static.vecteezy.com/system/resources/previews/012/335/181/non_2x/mobile-shopping-concept-a-man-and-a-woman-buy-things-in-the-online-store-through-a-big-smartphone-e-commerce-and-online-shopping-illustration-in-flat-style-vector.jpg"
              className="lg:w-full lg:h-[560px] h-[300px] w-[240px] object-cover group-hover:scale-95 scale-100 transition-all duration-300"
            />
            <div className="lg:p-6 p-1">
              <h2 className="text-xl text-[#252422] dark:text-[#bababa] font-bold mb-2">
                VeraTech
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

export default Ecommerce;
