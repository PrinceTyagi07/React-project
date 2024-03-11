import React from "react";
import tempimg from "../Data/logo.jpg";

const AboutUs = () => {
  return (
    <div
      className=" relative mx-auto flex w-11/12 max-w-maxContent flex-col 
    items-center font-mont text-richblack-900"
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl ">Photography</h1>
          <p>professional Graphics Designer and Video Creator</p>
        </div>
        <img className="h-1/4 w-1/4" src={tempimg}></img>
      </div>

      <div className="flex items-center justify-between">
        <img className="h-1/4 w-1/4" src={tempimg}></img>
        <div>
          <h1 className="text-2xl ">Photography</h1>
          <p>professional Graphics Designer and Video Creator</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl ">Photography</h1>
          <p>professional Graphics Designer and Video Creator</p>
        </div>
        <img className="h-1/4 w-1/4" src={tempimg}></img>
      </div>
    </div>
  );
};

export default AboutUs;
