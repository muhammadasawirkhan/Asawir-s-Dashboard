
import Logo from "../../images/Logo.png"
import Img from "../../images/Subtract.png"
import { Eye, EyeOff } from "lucide-react"
import { Link } from "react-router-dom";
import React, { useState } from 'react';


const Signup = () => {
     const [showPassword, setShowPassword] = useState(false);
  return(
     <>
      <div className='flex flex-row p-6 w-auto md:w-[100%]'>
             <img src={Logo} alt="" />
           </div>
           <div className=' w-auto  mx-auto md:w-[25%] z-[1]  items-center justify-center ' style={{ boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.15)' }}>
             <div className='flex py-16 flex-col mt-auto md:mt-[251px] pb-4  justify-center items-center  w-full gap-3'>
               <div className='font-[500] text-[44px]'>
                 Sign Up
               </div>
               <div className='mr-auto px-5 font-[400] text-[14px]'>
                 Enter Email
               </div>
               <div className='w-full px-5 pt-1 '>
                 <input className='w-full h-12  rounded-md bg-[#FFF4EF]'  style={{ boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.15)' }} type="text" name="" id=""  />
               </div>
               <div className='mr-auto px-5'>
                 Enter Password
               </div>
               <div className='w-full px-5 pt-1 flex flex-row '>
                 <input className='w-full h-12  rounded-md bg-[#FFF4EF] '  style={{ boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.15)' }} type="text" name="" id="" onClick={() => setShowPassword(!showPassword)}  />
     {showPassword ? <EyeOff className="absolute right-[930px] mt-[12px]" size={20} /> : <Eye className="absolute right-[930px] mt-[12px]" size={20} />}
               </div>
               <div className='mr-auto px-5'>
                 Confirm Password
               </div>
               <div className='w-full px-5 pt-1 flex flex-row '>
                 <input className='w-full h-12  rounded-md bg-[#FFF4EF] '  style={{ boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.15)' }} type="text" name="" id="" onClick={() => setShowPassword(!showPassword)}  />
     {showPassword ? <EyeOff className="absolute right-[930px] mt-[12px]" size={20} /> : <Eye className="absolute right-[930px] mt-[12px]" size={20} />}
               </div>
               <div className='w-full px-5 pt-1'>
                 <button className='w-full bg-[#FCC378] h-12 rounded-md font-[500] text-[18px]'>Sign in</button>
               </div>
               <div className='flex w-full justify-between px-4'>
                 <div className='text-[12px] font-[400]'>
                   Forgot Your Password
                 </div>
                
     
               </div>
               {/* <div className=' md:block absolute hidden md:bottom-[410px] z-[-1]'>
                 <img src={Img} alt="" />
               </div> */}
             </div>
           </div>
     </>
  )
}
export default Signup;