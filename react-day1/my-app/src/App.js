import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper";
import "swiper/css"; // Swiper styles
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { BsFillHeartFill } from "react-icons/bs";

const App = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="container max-w-screen-lg bg-beige w-full h-4/5 overflow-auto">
        {/* Header */}
        <div className="header flex items-center justify-between p-4 border-b-2 border-gray-400 sticky top-0 z-10 bg-beach">
          <a href="#" className="menu-icon mr-4">
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </a>
          <img
            className="logo w-28"
            src="https://cdn.shopify.com/s/files/1/0689/1443/files/CLOSCA-LOGO-WEB-BLACK_130x@2x.png?v=1559116993"
            alt="Logo"
          />
          <div className="header-menu flex space-x-8 hidden md:flex">
            <a href="#">Mask</a>
            <a href="#">Helmet</a>
            <a href="#">Bottle</a>
            <a href="#">Accessories</a>
          </div>
          <div className="header-icons flex items-center space-x-6">
            <FaSearch size={20} />
            <BsFillHeartFill size={20} />
            <FaShoppingCart size={20} />
          </div>
        </div>

        {/* Swiper Section */}
        <Swiper
          modules={[Navigation, Pagination, EffectFade]}
          navigation={{
            nextEl: ".swiper-next-button",
            prevEl: ".swiper-prev-button",
          }}
          effect="fade"
          loop={true}
          pagination={{ el: ".swiper-pagination", type: "fraction" }}
          className="mySwiper"
        >
          <SwiperSlide className="main" id="beach">
            <div className="left-side flex flex-col justify-between max-w-xs md:max-w-lg lg:max-w-xl">
              <h3 className="text-sm font-semibold uppercase tracking-widest">
                Closca Bottle
              </h3>
              <h1 className="text-6xl md:text-7xl font-semibold text-beach">
                Beach
              </h1>
              <h2 className="text-xl text-beach">€ 39.90</h2>
              <div className="main-content mt-6">
                <p className="text-2xl font-serif italic mb-4">
                  In 20 years, there could be more plastic in our oceans than
                  fish.
                </p>
                <p className="text-sm mb-8">
                  Plastic pollution injures more than 100,000 marine animals
                  every year. It takes around 450 years for one plastic bottle
                  to decompose.
                </p>
                <div className="more-menu flex items-center text-sm font-semibold text-white cursor-pointer">
                  Shop Now
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeWidth="1.7"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-2 w-6 h-6"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1="-5" y1="12" x2="19" y2="12" />
                    <line x1="15" y1="16" x2="19" y2="12" />
                    <line x1="15" y1="8" x2="19" y2="12" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="center flex justify-center mt-8 md:mt-0">
              <div className="relative">
                <img
                  className="bottle-bg w-72 h-96 object-cover rounded-full"
                  src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=80&w=2902&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Beach Bottle"
                />
                <img
                  className="bottle-img absolute top-1/4 left-0 transform scale-125"
                  src="https://www.designforfinland.com/product-images/Closca_Bottle_Wave_Antarctica_450ml_Close.png/2083089000004207012/1100x1100"
                  alt="Bottle"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Navigation Buttons */}
        <div className="button-wrapper flex justify-between absolute top-0 left-0 right-0 z-20 p-6">
          <div className="swiper-prev-button w-12 h-12 flex items-center justify-center border-2 border-white rounded-full bg-gradient-to-r from-white to-transparent hover:bg-white hover:fill-gray-900">
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
          <div className="swiper-next-button w-12 h-12 flex items-center justify-center border-2 border-white rounded-full bg-gradient-to-l from-white to-transparent hover:bg-white hover:fill-gray-900">
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default App;
