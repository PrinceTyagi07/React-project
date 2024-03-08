import React, { useEffect, useState } from "react";
import formimg from "../Data/form.jpg";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const ContactUsForm = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        email: "",
        firstname: "",
        lastname: "",
        message: "",
        phoneNo: "",
        instaid: "",
      });
      navigate("/mail");
    }
  }, [reset, isSubmitSuccessful]);

  return (
    <div className=" shadow-2xl  rounded-2xl shadow-richblack-200 relative mb-5 mt-5 font-mont text-lg mx-auto flex flex-row  w-11/12 max-w-maxContent gap-4 justify-evenly ">

      <div>
        {loading ? (
            <div>
            <div className="spinner"></div>
            <p>Please Wait</p>
          </div>
        ) : (
            <form className="flex flex-col gap-5 mb-3 ">
              <div className=" text-3xl text-richblack-200 font-bold  ">Get in Touch</div>
            <div className="flex gap-7 flex-row">
              <div className="flex flex-col gap-2 xl:w-[48%] lg:w-[48%]">
                
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder="Name"
                  className="form-style"
                  {...register("firstname", { required: true })}
                />
                {errors.firstname && (
                  <span className="-mt-1 text-[12px] text-black">
                    Please enter your name.
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="form-style  text-richblue-900"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="-mt-1 text-[12px] text-yellow-100">
                    Please enter your Email address.
                  </span>
                )}
              </div>
            </div>

            <div className="flex  md:gap-5 sm:gap-2 ">
              <div className="flex w-[47%] flex-col gap-2">
                <input
                  type="number"
                  name="phonenumber"
                  id="phonenumber"
                  placeholder="Contact No"
                  className="form-style "
                  {...register("phoneNo", {
                    required: {
                      value: true,
                      message: "Please enter your Phone Number.",
                    },
                    maxLength: { value: 12, message: "Invalid Phone Number" },
                    minLength: { value: 10, message: "Invalid Phone Number" },
                  })}
                />
              </div>
              {errors.phoneNo && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  {errors.phoneNo.message}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="5"
                placeholder="Please enter your query"
                className="form-style bg-richblack-200  text-richblue-900"
                {...register("message", { required: true })}
              />
              {errors.message && (
                <span className="-mt-1 text-[12px] text-richblue-900">
                  Please enter your Message.
                </span>
              )}
            </div>

            <button
              disabled={loading}
              type="submit"
              className={` mx-auto bg-gradient-to-r from-richblue-1  to-richblue-2 rounded-md bg-richblue px-6 py-3 text-center text-[13px] font-bold text-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] sm+:w-fit sm:w-full flex items-center justify-center
         ${
           !loading &&
           "transition-all duration-200 hover:scale-95 hover:shadow-none sm:mb-4 md:mb-0"
         }  disabled:bg-richblack-500 sm:text-[16px] `}
            >
              <div className="flex items-center gap-2 ">SUBMIT</div>
            </button>
          </form>
        )}
      </div>

      <div className=" w-[40%] gap-4  p-10 border-richblack-700 h-96  mb-2 flex  ">
        <img src={formimg} alt="img"></img>
      </div>
    </div>
  );
};

export default ContactUsForm;
