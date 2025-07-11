
import Logo from "../../images/Logo.png"
import Img from "../../images/Subtract.png"
import { Eye, EyeOff } from "lucide-react"
import { Link } from "react-router-dom";
import React, { useState } from 'react';

export const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <div className='flex flex-row p-6 w-auto md:w-[100%]'>
        <img src={Logo} alt="" />
      </div>
      <div className="p-4">
      <div className=' container w-full  mx-auto md:w-[50%] lg:w-[25%] z-[1]  items-center justify-center' >
         <div className='font-[500] text-[44px] text-center'>
            Sign In
          </div>
        <div className='flex flex-col pt-10 pb-10 mt-auto md:mt-[251px] lg:mt-[150px] pb-4  justify-center items-center  w-full gap-3'>
         
          <div className='mr-auto px-5 font-[400] text-[14px]'>
            Enter Email
          </div>
          <div className='w-full px-5 pt-1 '>
            <input className='w-full h-12  rounded-md bg-[#FFF4EF]' style={{ boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.15)' }} type="text" name="" id="" />
          </div>
          <div className='mr-auto px-5'>
            Enter Password
          </div>
          <div className='w-full px-5 pt-1 flex flex-row '>
            <input className='w-full h-12  rounded-md bg-[#FFF4EF] ' style={{ boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.15)' }} type="text" name="" id="" onClick={() => setShowPassword(!showPassword)} />
            {showPassword ? <EyeOff className="absolute right-[930px] mt-[12px]" size={20} /> : <Eye className="absolute right-[930px] mt-[12px]" size={20} />}
          </div>
          <div className='w-full px-5 pt-1'>
            <button className='w-full bg-[#FCC378] h-12 rounded-md font-[500] text-[18px]'><Link to="Dashboard" className="">Signin</Link></button>
          </div>
          <div className='flex w-full justify-between px-4'>
            <div className='text-[12px] font-[400]'>
              Forgot Your Password
            </div>
            <div className='text-[#F16A77] text-[12px] font-[400]'>
              <Link to="/signup" className="text-[#F16A77] text-[12px] font-[400] hover:underline">Signup</Link>
            </div>

          </div>
          <div className=' fixed inset-  z-[-1] hidden sm:block'>
            <img src={Img} alt="" />
          </div>
        </div>
      </div>
      </div>

    </>
  )
}
export default Signin;