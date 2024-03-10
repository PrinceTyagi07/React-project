import React from "react";
import { useRef } from "react";
import Banner from "../Components/banner";
import Appoint from "../Components/Appoint";
import { CiSearch } from "react-icons/ci";
import Consult from "../Components/Consult";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, FreeMode, Navigation,Pagination } from "swiper/modules";
import "../index.css";

const Home = () => {
  const SlideRef = useRef();
  return (
    <div
      className="  relative mx-auto flex w-11/12 max-w-maxContent flex-col 
    items-center font-mont  text-richblue-1 "
    >
      <div className="flex items-center justify-center w-full mt-8  ">
        <svg
          className="border border-richblack-50"
          width="35"
          height="35"
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M34.8334 16.5001C34.8334 14.8148 34.5014 13.146 33.8565 11.589C33.2115 10.032 32.2662 8.61723 31.0746 7.42554C29.8829 6.23386 28.4681 5.28856 26.9111 4.64363C25.3541 3.99869 23.6853 3.66675 22 3.66675C20.3147 3.66675 18.6459 3.99869 17.0889 4.64363C15.5319 5.28856 14.1172 6.23386 12.9255 7.42554C11.7338 8.61723 10.7885 10.032 10.1436 11.589C9.49863 13.146 9.16669 14.8148 9.16669 16.5001C9.16669 19.0429 9.91652 21.4079 11.1925 23.4026H11.1779L22 40.3334L32.8222 23.4026H32.8094C34.131 21.343 34.8334 18.9472 34.8334 16.5001ZM22 22.0001C20.5413 22.0001 19.1424 21.4206 18.1109 20.3892C17.0795 19.3577 16.5 17.9588 16.5 16.5001C16.5 15.0414 17.0795 13.6424 18.1109 12.611C19.1424 11.5795 20.5413 11.0001 22 11.0001C23.4587 11.0001 24.8577 11.5795 25.8891 12.611C26.9206 13.6424 27.5 15.0414 27.5 16.5001C27.5 17.9588 26.9206 19.3577 25.8891 20.3892C24.8577 21.4206 23.4587 22.0001 22 22.0001Z"
            fill="#D8D8D8"
          />
        </svg>
        <input
          type="text"
          className=" w-full border-2 border-richblack-50 h-9 "
        ></input>
        <CiSearch className=" h-9 w-[3%] border border-richblack-50 bg-richblack-25  " />
      </div>

      <Swiper
        pagination={true}
        modules={[FreeMode, Pagination, Navigation, Autoplay]}
        ref={SlideRef}
        className="mySwiper mt-8 w-full"
        loop={true}
        freeMode={true}
        slidesPerView={1}
        spaceBetween={25}
        autoplay={{
          delay: 1000,
        }}
      >
        <SwiperSlide>
          <Banner />
        </SwiperSlide>
        <SwiperSlide>
          <Banner />
        </SwiperSlide>
        <SwiperSlide>
          <Banner />
        </SwiperSlide>
        <SwiperSlide>
          <Banner />
        </SwiperSlide>
      </Swiper>

      <Appoint />
      <Consult />
      
    </div>
  );
};

export default Home;
