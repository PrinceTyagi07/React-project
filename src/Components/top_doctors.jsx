import React from "react";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";
import "../index.css";
import doc1 from "../Data/female_doc.avif";
import doc2 from "../Data/male_doc.jpg";

const Topdoctors = () => {
  const SlideRef = useRef();
  return (
    <div
      className="  mt-10 relative mx-auto flex s md:w-11/12 max-w-maxContent flex-col 
    items-center font-mont"
    >
      <div className="flex flex-col items-center justify-start">
        <p className="text-3xl">Top Doctors</p>
        <p>
          Private Online consultations withverified doctors in all specialities
        </p>
      </div>
      <Swiper
        pagination={true}
        modules={[FreeMode, Pagination, Navigation, Autoplay]}
        ref={SlideRef}
        className="mySwiper mt-8 w-full"
        loop={true}
        freeMode={true}
        slidesPerView={2}
        spaceBetween={30}
        autoplay={{
          delay: 1000,
        }}
      >
        <SwiperSlide>
          <div className=" bg-richblack-300">
            <div className="h-1/2 w-1/2 ">
              <img className=" rounded-full  " src={doc2} alt="profile" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className=" rounded-full" src={doc1} alt="profile" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Topdoctors;
