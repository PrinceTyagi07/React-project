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
import { useNavigate } from 'react-router-dom';
// import Hospitals from "./Hospitals"



const Topdoctors = () => {
  const navigate = useNavigate();
  const SlideRef = useRef();
  return (
    <div
      className="  mt-10 relative mx-auto flex s md:w-11/12 max-w-maxContent flex-col 
    items-center font-mont"
    >
      <div className="flex flex-col items-center justify-start">
        <p className="text-3xl font-bold text-blue-200  mb-4">Top Doctors</p>
        <p>
          Private Online consultations withverified doctors in all specialities
        </p>
      </div>
      {/* <Swiper
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
          <div className=" bg-richblack-300 border-2">
            <div className="h-1/2 w-1/2 ">
              <img className=" rounded-full  " src={doc2} alt="profile" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className=" rounded-full" src={doc1} alt="profile" />
        </SwiperSlide>
      </Swiper> */}

      <div className="flex space-x-32 rounded-lg shadow-2xl shadow-black  my-10 mb-16 w-full   p-2 ">
        <div className="image">
          <img className="rounded-lg shadow-2xl shadow-black " src="https://i.pinimg.com/236x/1e/e7/af/1ee7af7a0dd863abae0af4a109422b39.jpg" alt="" />
        </div>
        <div className=" items-center flex flex-col w-[30%] ">
          <h1 className="font-semibold text-xl">Top Doctors</h1>
          <p className="font-semibold text-center text-blue-400">Private online Consultation with verified doctor in all specialist</p>
        </div>
        <div className="flex flex-col mt-5">
          <button className="border-2 my-2 py-1 px-6 font-semibold rounded-sm">View Profile</button>
          <button onClick={() => { navigate("/hospital") }} className="border-2 my-2 py-1 px-6 text-white font-semibold bg-gradient-to-r from-richblue-1  to-richblue-2 rounded-sm">Book Appointment</button>
        </div>
      </div>
      <div className="flex space-x-32 rounded-lg shadow-2xl shadow-black  my-10 mb-16 w-full  p-2 ">
        <div className="image">
          <img className="rounded-lg shadow-2xl shadow-black " src="https://i.pinimg.com/236x/94/3c/89/943c89e93509e7eb042f8f16d0101f2b.jpg" alt="" />
        </div>
        <div className=" items-center flex flex-col w-[30%] ">
          <h1 className="font-semibold text-xl">Top Doctors</h1>
          <p className="font-semibold text-center text-blue-400">Private online Consultation with verified doctor in all specialist</p>
        </div>
        <div className="flex flex-col mt-5">
          <button className="border-2 my-2 py-1 px-6 font-semibold rounded-sm ">View Profile</button>
          <button onClick={() => { navigate("/hospital") }} className="border-2 my-2 py-1 px-6 text-white font-semibold bg-gradient-to-r from-richblue-1  to-richblue-2 rounded-sm">Book Appointment</button>
        </div>
      </div>
      <div className="flex space-x-32 rounded-lg shadow-2xl shadow-black  my-10 mb-16 w-full  p-2 ">
        <div className="image">
          <img className="rounded-lg shadow-2xl shadow-black " src="https://i.pinimg.com/236x/f3/0d/2b/f30d2bd6980a6297f54d6b695414b323.jpg" alt="" />
        </div>
        <div className=" items-center flex flex-col w-[30%] ">
          <h1 className="font-semibold text-xl">Top Doctors</h1>
          <p className="font-semibold text-center text-blue-400">Private online Consultation with verified doctor in all specialist</p>
        </div>
        <div className="flex flex-col mt-5">
          <button className="border-2 my-2 py-1 px-6 font-semibold rounded-sm ">View Profile</button>
          <button onClick={() => { navigate("/hospital") }} className="border-2 my-2 py-1 px-6 text-white font-semibold bg-gradient-to-r from-richblue-1  to-richblue-2 rounded-sm">Book Appointment</button>
        </div>
      </div>

    </div>
  );
};

export default Topdoctors;
