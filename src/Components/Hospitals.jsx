import React from 'react'
import { CiSearch } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";
import { IoMdStarOutline } from "react-icons/io";
import { GiLeafSwirl } from "react-icons/gi";
import { MdVerified } from "react-icons/md";
import Doctor from '../Pages/Doctor';
import { Link } from 'react-router-dom';

const Hospitals = () => {


  return (
    <div>
    <div className='m-8 relative mx-auto flex md:w-11/12 max-w-maxContent 
    items-center font-mont'>
    <svg
          className="border-2 border-richblack-50  rounded-tl-2xl rounded-bl-2xl border-r-0 "
          width="35"
          height="36"
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
        <CiSearch className=" h-9 w-[3%]  border-2 border-richblack-50  rounded-tr-2xl rounded-br-2xl border-l-0  bg-richblack-25   " />
      </div>


      <div className='m-8  mx-auto flex md:w-11/12 max-w-maxContent justify-between
    items-center font-mont flex-col'>
        <h1 className=' w-11/12 max-w-maxContent flex flex-col justify-center
    items-center text-3xl font-semibold text-blue-100 '>Hospitals</h1>
       
<div className='flex space-x-10 my-24 md:w-11/12 max-w-maxContent '>
  <div className=' shadow-2xl shadow-black rounded-lg w-1/3 px-8 py-3 flex flex-col justify-between items-center'>
    <div><img className='shadow-2xl shadow-black rounded-lg ' src="https://i.pinimg.com/236x/91/9b/91/919b91f786329aeb8109741c044da1c0.jpg" alt="" /></div>
    <div className='flex flex-col justify-between items-center mt-3'>
      <h1 className='text-2xl font-semibold text-blue-500 text-transparent bg-clip-text'>Top doctors</h1>
      <p className='h-1/2 text-center text-blue-600 font-semibold'>Private online Consultation with verified doctor in all specialist</p>
      <div className='icons'>
        <div className='flex text-yellow-25 text-xl'><FaStar /><FaStar /><FaStar /><FaStarHalfStroke /><IoMdStarOutline /></div>
        <div className='flex text-4xl space-x-6 my-1 text-caribbeangreen-400'><GiLeafSwirl /><MdVerified />
</div>
      </div>
      <button className='border-2  font-semibold border-richblue-300 px-10 py-1 rounded-sm mt-2'><Link to="/doctor">Enquire Now</Link> </button>

    </div>
  </div>
  <div className=' shadow-2xl shadow-black rounded-lg w-1/3 px-8 py-3 flex flex-col justify-between items-center'>
    <div><img className='shadow-2xl shadow-black rounded-lg ' src="https://i.pinimg.com/236x/37/9d/dc/379ddcc32d24d5a7e712ab4d2a8a65cd.jpg" alt="" /></div>
    <div className='flex flex-col justify-between items-center mt-3'>
      <h1 className='text-2xl font-semibold text-blue-500 text-transparent bg-clip-text'>Top doctors</h1>
      <p className='h-1/2 text-center text-blue-600 font-semibold'>Private online Consultation with verified doctor in all specialist</p>
      <div className='icons'>
        <div className='flex text-yellow-25 text-xl'><FaStar /><FaStar /><FaStar /><FaStarHalfStroke /><IoMdStarOutline /></div>
        <div className='flex text-4xl space-x-6 my-1 text-caribbeangreen-400'><GiLeafSwirl /> <span className='text-richblack-50'><MdVerified /></span>
</div>
      </div>
      <button className='border-2   border-richblue-300 font-semibold px-10 py-1 rounded-sm mt-2'><Link to="/doctor">Enquire Now</Link> </button>

    </div>
  </div>
  <div className=' shadow-2xl shadow-black rounded-lg w-1/3 px-8 py-3 flex flex-col justify-between items-center'>
    <div><img className='shadow-2xl shadow-black rounded-lg h-[85%]' src="https://i.pinimg.com/236x/b3/3b/39/b33b392965fb485660e14d4d2a69cb77.jpg" alt="" /></div>
    <div className='flex flex-col justify-between items-center mt-3'>
      <h1 className='text-2xl font-semibold text-blue-500 text-transparent bg-clip-text'>Top doctors</h1>
      <p className='h-1/2 text-center text-blue-600 font-semibold'>Private online Consultation with verified doctor in all specialist</p>
      <div className='icons'>
        <div className='flex text-yellow-25 text-xl'><FaStar /><FaStar /><FaStar /><FaStarHalfStroke /><IoMdStarOutline /></div>
        <div className='flex text-4xl space-x-6 my-1 text-caribbeangreen-400'><GiLeafSwirl /> <span className='text-richblack-50'><MdVerified /></span>
</div>
      </div>
      <button className='border-2   border-richblue-300 px-10 py-1 rounded-sm mt-2  font-semibold'><Link to="/doctor">Enquire Now</Link> </button>

    </div>
  </div>
</div>
<div className='flex space-x-10 my-24 md:w-11/12 max-w-maxContent '>
  <div className=' shadow-2xl shadow-black rounded-lg w-1/3 px-8 py-3 flex flex-col justify-between items-center'>
    <div><img className='shadow-2xl shadow-black rounded-lg ' src="https://i.pinimg.com/236x/91/9b/91/919b91f786329aeb8109741c044da1c0.jpg" alt="" /></div>
    <div className='flex flex-col justify-between items-center mt-3'>
      <h1 className='text-2xl font-semibold text-blue-500 text-transparent bg-clip-text'>Top doctors</h1>
      <p className='h-1/2 text-center text-blue-600 font-semibold'>Private online Consultation with verified doctor in all specialist</p>
      <div className='icons'>
        <div className='flex text-yellow-25 text-xl'><FaStar /><FaStar /><FaStar /><FaStarHalfStroke /><IoMdStarOutline /></div>
        <div className='flex text-4xl space-x-6 my-1 text-caribbeangreen-400'><GiLeafSwirl /><MdVerified />
</div>
      </div>
      <button className='border-2   border-richblue-300 font-semibold px-10 py-1 rounded-sm mt-2'>Enquire now</button>

    </div>
  </div>
  <div className=' shadow-2xl shadow-black rounded-lg w-1/3 px-8 py-3 flex flex-col justify-between items-center'>
    <div><img className='shadow-2xl shadow-black rounded-lg ' src="https://i.pinimg.com/236x/e2/b5/20/e2b5203994c725fb2392820dbe1ec155.jpg" alt="" /></div>
    <div className='flex flex-col justify-between items-center mt-3'>
      <h1 className='text-2xl font-semibold text-blue-500 text-transparent bg-clip-text'>Top doctors</h1>
      <p className='h-1/2 text-center text-blue-600 font-semibold'>Private online Consultation with verified doctor in all specialist</p>
      <div className='icons'>
        <div className='flex text-yellow-25 text-xl'><FaStar /><FaStar /><FaStar /><FaStarHalfStroke /><IoMdStarOutline /></div>
        <div className='flex text-4xl space-x-6 my-1 text-caribbeangreen-400'><GiLeafSwirl /> <span className='text-richblack-50'><MdVerified /></span>
</div>
      </div>
      <button className='border-2  font-semibold border-richblue-300 px-10 py-1 rounded-sm mt-2'><Link to="/doctor">Enquire Now</Link> </button>

    </div>
  </div>
  <div className=' shadow-2xl shadow-black rounded-lg w-1/3 px-8 py-3 flex flex-col justify-between items-center'>
    <div><img className='shadow-2xl shadow-black rounded-lg ' src="https://i.pinimg.com/236x/38/fa/d1/38fad12cb39dfbc1b69c96143873e380.jpg" alt="" /></div>
    <div className='flex flex-col justify-between items-center mt-3'>
      <h1 className='text-2xl font-semibold text-blue-500 text-transparent bg-clip-text'>Top doctors</h1>
      <p className='h-1/2 text-center text-blue-600 font-semibold'>Private online Consultation with verified doctor in all specialist</p>
      <div className='icons'>
        <div className='flex text-yellow-25 text-xl'><FaStar /><FaStar /><FaStar /><FaStarHalfStroke /><IoMdStarOutline /></div>
        <div className='flex text-4xl space-x-6 my-1 text-caribbeangreen-400'><GiLeafSwirl /> <span className='text-richblack-50'><MdVerified /></span>
</div>
      </div>
      <Link to="/doctor"></Link>
      <button className='border-2  font-semibold  border-richblue-300 px-10 py-1 rounded-sm mt-2 ' >  <Link to="/doctor">Enquire Now</Link> </button>

    </div>
  </div>
</div>


        </div>
      
 </div>

  )
}

export default Hospitals