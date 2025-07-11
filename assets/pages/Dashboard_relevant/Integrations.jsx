import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CiAlarmOn } from 'react-icons/ci';
import { IoIosNotificationsOutline } from 'react-icons/io';
import profile from '../../images/profile.png';
import { IoImagesOutline } from "react-icons/io5";
import { Eye, EyeOff } from "lucide-react"

const Integrations = () => {
    return (
        <>
            <div className='flex flex-col   h-full w-full p-4'>
                <div className='w-full flex justify-end p-4'>
                    <div className='flex rounded-[30px] p-4 gap-2 items-center shadow-sm'>
                        <CiAlarmOn className='w-8 h-8' />
                        <IoIosNotificationsOutline className='w-8 h-8' />
                        <img src={profile} alt="Profile" />
                    </div>
                </div>
                <div className='border-[1px] border-[#FFF4EF] px-6 py-4 h-full w-full rounded-[12px]'>
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-[24px] font-[400] font-semibold'><span className='text-[#F16A77]'>Twilio</span> Integrations</h2>
                        <div className=' flex flex-col'>
                            <label htmlFor="">Default SID</label>
                            <div className=''>
                                <input type="text" className='my-2 outline-none flex flex-row gap-3 bg-[#FFF4EF] w-full sm:w-[401px] sm:h-[48px] rounded-[8px] p-3' placeholder='account_sid' />
                            </div>
                        </div>
                        <div className=' flex flex-col'>
                            <label htmlFor="">Default Auth Token</label>
                            <div className=''>
                                <input type="text" className='my-2 outline-none flex flex-row gap-3 bg-[#FFF4EF] w-full sm:w-[401px] sm:h-[48px] rounded-[8px] p-3' placeholder='auth_token' />
                            </div>
                        </div>
                        <div className=' flex flex-col'>
                            <label htmlFor="">Twilio</label>
                            <div className=''>
                                <input type="text" className='my-2 outline-none flex flex-row gap-3 bg-[#FFF4EF] w-full sm:w-[401px] sm:h-[48px] rounded-[8px] p-3' placeholder='Numbers' />

                            </div>
                        </div>
                        <div className='flex flex-row justify-between sm:w-[401px] px-1 py-2 gap-1'>

                            <button className=' bg-[#FCC378] w-full sm:w-[124px] h-[48px] rounded-[8px]'>Update</button>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Integrations;

