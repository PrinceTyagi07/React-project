import React from "react";
import Consult from "../Components/Consult";

import "../index.css";
import ContactUsForm from "../Components/form";
import AboutUs from "../Components/aboutUs";
import Topdoctors from "../Components/top_doctors";
const Doctor = () => {
  
  return (
    <div
      className="  relative mx-auto flex w-11/12 max-w-maxContent flex-col 
    items-center font-mont  text-richblue-1 "
    >
      <Topdoctors/>
      
      <AboutUs/>
      <ContactUsForm/>
    </div>
  );
};

export default Doctor;
