import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoSettings } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";

import { MdDashboard } from "react-icons/md";
import { FiHelpCircle } from "react-icons/fi";

import { TfiEye } from "react-icons/tfi";
import { FaPuzzlePiece } from "react-icons/fa6";
import { useState } from 'react';
import Logo from "../assets/images/Logo.png"






const Sidebar = () => {

    const [isOpen,setIsOpen] = useState(false);
 const [isModalOpen, setIsModalOpen] = useState(false);
    return (


        
        <div className={`flex flex-col justify-between w-full h-full  p-4 ${isModalOpen ? 'blur-sm' : ''}`}>
            <button
                className="md:hidden p-3 fixed top-4 left-4 z-50 bg-white rounded shadow"
                onClick={() => setIsOpen(true)}
            >
                <div className="space-y-1">
                    <span className="block w-6 h-0.5 bg-black"></span>
                    <span className="block w-6 h-0.5 bg-black"></span>
                    <span className="block w-6 h-0.5 bg-black"></span>
                </div>
            </button>
            
            {/* Top Links */}
            <div className='w-full flex flex-col gap-4'>
                <div className='hidden md:block'>
                          <img src={Logo} alt="Logo" />
                        </div>
                        
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
                        <NavLink to="Knowledge_base">Knowledge base</NavLink>
                    </div>

                </div>
                <div className=' flex flex-row gap-3 h-12 p-2 text-[#2828284D]/30 font-[500] text-[18px]'>
                    <div className='pt-1 w-[12.69px] h-[12.69px]'>
                        <TfiEye />


                    </div>
                    <div className='hidden md:block'>
                        <NavLink to="Hallucination">Hallucination</NavLink>
                    </div>

                </div>
                <div className=' flex flex-row gap-3 h-12 p-2 text-[#2828284D]/30 font-[500] text-[18px]'>
                    <div className='pt-1 w-[12.69px] h-[12.69px]'>
                        <FaPuzzlePiece />

                    </div>
                    <div className='hidden md:block'>
                        <NavLink to="Integrations">Integrations</NavLink>
                    </div>

                </div>
                <div className=' flex flex-row gap-3 h-12 p-2 text-[#2828284D]/30 font-[500] text-[18px]'>
                    <div className='pt-1 w-[12.69px] h-[12.69px]'>
                        <IoSettings />
                    </div>
                    <div className='hidden md:block'>
                        <NavLink to="Dashboard_Settings">Settings</NavLink>
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
