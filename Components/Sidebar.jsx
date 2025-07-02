import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoSettings } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";

import { MdDashboard } from "react-icons/md";
import { FiHelpCircle } from "react-icons/fi";

import { TfiEye } from "react-icons/tfi";
import { FaPuzzlePiece } from "react-icons/fa6";







const Sidebar = () => {
    return (
        <div className='flex flex-col justify-between w-full h-full  p-4'>
            {/* Top Links */}
            <div className='w-full flex flex-col gap-4'>
                <div className=' flex flex-row gap-3 h-12 p-2 text-[#2828284D]/30 font-[500] text-[18px]'>
                    <div className='pt-1 w-[12.69px] h-[12.69px]'>
                        <MdDashboard />
                    </div>
                    <div className='hidden md:block'>
                        <NavLink to="Dashboard">Dashboard</NavLink>
                    </div>

                </div>
                <div className=' flex flex-row gap-3 h-12 p-2 text-[#2828284D]/30 font-[500] text-[18px]'>
                    <div className='pt-1 w-[12.69px] h-[12.69px]'>
                        <FaUsers />

                    </div>
                    <div className='hidden md:block'>
                        <NavLink to="Users">Users</NavLink>
                    </div>

                </div>
                <div className=' flex flex-row gap-3 h-12 p-2 text-[#2828284D]/30 font-[500] text-[18px]'>
                    <div className='pt-1 w-[12.69px] h-[12.69px]'>
                        <FiHelpCircle />


                    </div>
                    <div className='hidden md:block'>
                        <NavLink to="/reports">Knowledge base</NavLink>
                    </div>

                </div>
                <div className=' flex flex-row gap-3 h-12 p-2 text-[#2828284D]/30 font-[500] text-[18px]'>
                    <div className='pt-1 w-[12.69px] h-[12.69px]'>
                        <TfiEye />


                    </div>
                    <div className='hidden md:block'>
                        <NavLink to="/reports">Hallucination</NavLink>
                    </div>

                </div>
                <div className=' flex flex-row gap-3 h-12 p-2 text-[#2828284D]/30 font-[500] text-[18px]'>
                    <div className='pt-1 w-[12.69px] h-[12.69px]'>
                        <FaPuzzlePiece />

                    </div>
                    <div className='hidden md:block'>
                        <NavLink to="/reports">Integrations</NavLink>
                    </div>

                </div>
                <div className=' flex flex-row gap-3 h-12 p-2 text-[#2828284D]/30 font-[500] text-[18px]'>
                    <div className='pt-1 w-[12.69px] h-[12.69px]'>
                        <IoSettings />
                    </div>
                    <div className='hidden md:block'>
                        <NavLink to="/reports">Settings</NavLink>
                    </div>

                </div>

            </div>

            {/* Bottom Link */}
            <div className=' border-[#FCC378] border-[1px] rounded-[12px] h-12 p-2 text-[#FCC378]'>
                <button className='w-full'>Logout</button>
            </div>
        </div>
    );
};

export default Sidebar;
