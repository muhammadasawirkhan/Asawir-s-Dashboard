import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiUpload, FiLink, FiType, FiChevronRight } from 'react-icons/fi';
import frame4 from '../assets/images/frame4.png'
import call from '../assets/images/call.png'
import capa_1 from '../assets/images/capa_1.png'
import animoji from '../assets/images/animoji.png'
import ChatCircleDots from '../assets/images/ChatCircleDots.png'
import { FaRegCirclePlay } from "react-icons/fa6";


export const Hallucination_Table = ({ data }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeFormModal, setActiveFormModal] = useState(null);
    const [modalStep, setModalStep] = useState(1);
    return (
        <>
            <div className={`overflow-x-auto  p-4 grid grid-cols-1 ${isModalOpen ? 'blur-sm' : ''}`}>
                <div className='w-full flex flex-row justify-between px-2 py-2'>
                    <h2 className='text-[24px] font-[400] font-semibold'><span className='text-[#F16A77]'>Hallucinated</span> Users</h2>

                    <select name="" id="" className='border-[1px] border-[#FFF4EF] outline-none px-3' >

                        <option value="">Filter Out User</option>
                        <option value="1">Filter by Time</option>
                        <option value="2">Filter by date </option>
                        <option value="3">Blocked Users</option>

                    </select>
                </div>
                <table className=' text-left'>
                    <thead className='bg-[#FFF4EF]'>
                        <tr>
                            <th className="px-4 py-2">ID</th>
                            <th className="px-4 py-2">User Name</th>
                            <th className="px-4 py-2">Phone no</th>
                            <th className="px-4 py-2">Email</th>
                            <th className="px-4 py-2">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row) => (
                            <tr key={row.id} className="hover:bg-[#FFF4EF]">
                                <td className="px-4 py-2">{row.id}</td>
                                <td className="px-4 py-2">{row.Username}</td>
                                <td className="px-4 py-2">{row.Phoneno}</td>
                                <td className="px-4 py-2">{row.email}</td>
                                <td className="px-4 py-2">

                                    <NavLink to='' onClick={() => setIsModalOpen(true)}><span className='text-[#FCC378]'>{row.Status}</span></NavLink>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>


            </div>
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-40 p-3 flex  items-center justify-center z-50">
                    <div className="bg-white border-b-[10px] border-[#FFC6AF] rounded-[16px] p-6 w-full max-w-md relative shadow-[0_0_4px_0_rgba(0,0,0,0.25)]">
                        <button onClick={() => { setIsModalOpen(false); setModalStep(1); }} className="absolute top-3 right-4 text-2xl text-orange-400">&times;</button>

                        {modalStep === 1 ? (
                            <>
                                <div className='flex flex-col'>
                                    <h2 className='text-xl font-semibold text-center mb-0'>User <span className='text-[#F16A77]'>Feedback</span> </h2>

                                    <div className='flex flex-col gap-2  p-2 px-0 sm:px-6'>
                                        <label htmlFor="">Response</label>
                                        <div className=''>
                                            <textarea className="p-2 w-full bg-[#FFF4EF] rounded-[8px] outline-none" type="textarea" name="" id="" rows={4} />
                                        </div>


                                    </div>
                                    <div className='flex flex-col gap-2 pb-6  px-0 sm:px-6'>
                                        <label htmlFor="">Response</label>
                                        <div className=''>
                                            <textarea className="p-2 w-full bg-[#FFF4EF] rounded-[8px] outline-none" type="text" name="" id="" rows={4} />
                                        </div>


                                    </div>
                                    <div className='px-6'>
                                        <button
                                            onClick={() => setModalStep(2)}
                                            className='w-full font-[400] text-[18px] text-[#282828] rounded-[8px] h-[48px] bg-[#FCC378]'
                                        >
                                            View Chat
                                        </button>
                                    </div>
                                </div>
                            </>
                        ) : modalStep === 2 ? (
                            <div className="fixed w-full inset-0 bg-black bg-opacity-40 flex flex-col  overflow-y-auto sm:flex sm:flex-row px-[25px] sm:px-[100px] py-[10px] sm:py-[75px] gap-2 z-50">
                                {/* First Modal: 20% */}
                                <div className="bg-white border-b-[10px] border-[#FFC6AF] rounded-[16px] p-6 sm:w-[15%]  relative shadow-[0_0_4px_0_rgba(0,0,0,0.25)] overflow-y-auto max-h-[90vh]">

                                    <div className='flex flex-col gap-1'>

                                        <h2 className='text-[20px] text-[#282828] font-[400] font-semibold text-center mb-4'>History</h2>
                                        <hr />
                                        <div className='flex w-full flex-row gap-1 py-2  '>
                                            <h1 className='border-[1px] border-[#FFF4EF] p-[6px] '>All</h1>
                                            <h1 className='border-[1px] border-[#FFF4EF] p-[6px] w-full'>Today</h1>
                                            <h1 className='border-[1px] border-[#FFF4EF] p-[6px] w-full'>Yesterday</h1>

                                        </div>
                                        <div className='flex w-full flex-row gap-1 py-1  '>

                                            <h1 className='border-[1px] border-[#FFF4EF] p-[6px] w-full'>Last Week</h1>
                                            <h1 className='border-[1px] border-[#FFF4EF] p-[6px] w-full'>Last Month</h1>

                                        </div>
                                        <div className='my-3'>
                                            <h1>Today</h1>
                                            <hr className='border-[#FFC6AF] mt-[10px]' />
                                        </div>

                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <div className='bg-gray-100 px-2 py-3 rounded-[8px]'>
                                            <h1>Tell me about service y...</h1>
                                        </div>
                                        <div className='bg-gray-100 px-2 py-3 rounded-[8px]'>
                                            <h1>Tell me about service y...</h1>
                                        </div>
                                        <div className='bg-gray-100 px-2 py-3 rounded-[8px]'>
                                            <h1>Tell me about service y...</h1>
                                        </div>
                                        <div className='bg-gray-100 px-2 py-3 rounded-[8px]'>
                                            <h1>Tell me about service y...</h1>
                                        </div>
                                        <div className='bg-gray-100 px-2 py-3 rounded-[8px]'>
                                            <h1>Tell me about service y...</h1>
                                        </div>
                                        <div className='bg-gray-100 px-2 py-3 rounded-[8px]'>
                                            <h1>Tell me about service y...</h1>
                                        </div>
                                        <div className='bg-gray-100 px-2 py-3 rounded-[8px]'>
                                            <h1>Tell me about service y...</h1>
                                        </div>
                                        <div className='bg-gray-100 px-2 py-3 rounded-[8px]'>
                                            <h1>Tell me about service y...</h1>
                                        </div>
                                    </div>
                                </div>

                                {/* Second Modal: 80% */}
                                <div className="bg-white border-b-[10px] border-[#FFC6AF] rounded-[16px] p-6  sm:w-[85%]  relative shadow-[0_0_4px_0_rgba(0,0,0,0.25)] overflow-y-auto max-h-[90vh]">
                                    <div className='flex flex-col gap-1'>
                                        <div className='sm:flex sm:flex-row flex flex-col gap-2 justify-between border-b-[1px] pb-2'>
                                            <div className='flex flex-row gap-2'>
                                                <div>
                                                    <img src={frame4} alt="" />
                                                </div>
                                                <div>
                                                    <h1>Jack</h1>
                                                    <div className='flex flex-row gap-1'>
                                                        <div className='w-[10px] bg-[#F16A77] rounded-[50px] h-[10px] mt-2'>

                                                        </div>
                                                        <h1>Online</h1>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='flex flex-col gap-2 sm:flex sm:flex-row sm:gap-2'>
                                                <div className=' sm:w-[158px] sm:h-[44px] bg-[#FFF4EF] text-center py-4 sm:pt-2 rounded-[8px]'>
                                                    <div className='px-4 flex flex-row gap-2'>
                                                        <img src={call} alt="" />
                                                        <button onClick={() => setModalStep(3)} className='text-[#FCC378] font-[700]><h1 '>Recordings</button>
                                                    </div>
                                                </div>
                                                <div className=' sm:w-[273px] sm:h-[44px] bg-[#FCC378] text-center py-4 sm:pt-2 rounded-[8px]'>
                                                    <div className='px-7 flex flex-row gap-2 '>
                                                        <img src={capa_1} alt="" />
                                                        <h1 className='text-[#fff] font-[700]'>Update Knowledge Base</h1>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                        <div className='flex flex-row gap-2 justify-start pt-4'>
                                            <div>
                                                <img src={frame4} alt="" />
                                            </div>
                                            <div className='bg-[#FFF4EF] text-center px-4 rounded-[12px]'>
                                                <p className='mt-2'>omg this is amazing</p>
                                            </div>

                                        </div>

                                        <div className='flex flex-row gap-2 justify-end pt-4'>

                                            <div className='bg-[#FFC6AF] text-center px-4 rounded-[12px]'>
                                                <p className='mt-2'>How are you?</p>
                                            </div>
                                            <div>
                                                <img src={animoji} alt="" />
                                            </div>

                                        </div>

                                        <div className='flex flex-row gap-2 justify-start pt-4'>
                                            <div>
                                                <img src={frame4} alt="" />
                                            </div>
                                            <div className='flex flex-col gap-2'>
                                                <div className='bg-[#FFF4EF] text-center px-4 py-2 rounded-[12px]'>
                                                    <p className=''>just ideas for next time</p>


                                                </div>
                                                <div className='bg-[#FFF4EF] text-center px-4 py-2 rounded-[12px]'>
                                                    <p className=''>I'll be there in 2 mins ⏰</p>


                                                </div>
                                            </div>


                                        </div>

                                        <div className='flex flex-row gap-2 justify-end pt-4'>

                                            <div className='flex flex-col gap-2'>
                                                <div className='bg-[#FFC6AF] ml-[95px] w-fit text-center px-4 py-2 rounded-[12px]'>
                                                    <p className=''>woohoooo</p>


                                                </div>
                                                <div className='bg-[#FFC6AF] w-fit text-center px-4 py-2 rounded-[12px]'>
                                                    <p className=''>Haha that's terrifying 😂</p>


                                                </div>
                                            </div>
                                            <div>
                                                <img src={animoji} alt="" />
                                            </div>


                                        </div>

                                        <div className='flex flex-row gap-2 justify-start pt-4'>
                                            <div>
                                                <img src={frame4} alt="" />
                                            </div>
                                            <div className='flex flex-col gap-2'>
                                                <div className='bg-[#FFF4EF] w-fit text-center px-4 py-2 rounded-[12px]'>
                                                    <p className=''>aww</p>


                                                </div>
                                                <div className='bg-[#FFF4EF] w-fit text-center px-4 py-2 rounded-[12px]'>
                                                    <p className=''>omg, this is amazing</p>


                                                </div>
                                                <div className='bg-[#FFF4EF] w-fit text-center px-4 py-2 rounded-[12px]'>
                                                    <p className=''>woohoooo 🔥</p>


                                                </div>
                                            </div>


                                        </div>

                                    </div>




                                </div>
                            </div>

                        ) : modalStep === 3 ? (
                            <div className='flex flex-col gap-1  '>
                                <div className='flex flex-row justify-between border-b-[1px] mt-5 py-2'>
                                    <h1 className='py-2 text-[20px] font-[400]'>Recordings</h1>


                                    <div className='flex px-4 font-700 text-[#FCC378] text-[18px] flex-row gap-1 rounded-[8px] bg-[#FFF4EF] sm:w-[137px] sm:h-[44px] items-center'>
                                        <img className='w-[24px] h-[24px]' src={ChatCircleDots} alt="" />

                                        <button onClick={() => setModalStep(2)} className=' '>Chatting</button>
                                    </div>

                                </div>
                                <div className='flex flex-row border-b-[#FFC6AF] border-b-[1px] font-[400] text-[12px] p-3'>
                                    <p>Today</p>
                                </div>
                                <div className='rounded-[16px] flex flex-col mt-3 gap-2 p-3 border-b-[#FFC6AF] border-b-[2px]' style={{ boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.15)' }}>
                                    <div className='flex flex-row gap-1 items-center'>
                                        <div className='bg-[#FFC6AF] h-[5px] w-full rounded-[6px]'>
                                        </div>
                                        <p className='font-400 text-[12px]'>0:00/0:01</p>



                                    </div>
                                    <div className='flex flex-row justify-between items-center'>
                                        <FaRegCirclePlay size={19} className='text-[#FCC378]' />
                                        <p className='font-400 text-[12px] text-[#282828]/30'>06/07/2024 03:51pm</p>



                                    </div>

                                </div>
                                <div className='rounded-[16px] flex flex-col mt-3 gap-2 p-3 border-b-[#FFC6AF] border-b-[2px]' style={{ boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.15)' }}>
                                    <div className='flex flex-row gap-1 items-center'>
                                        <div className='bg-[#FFC6AF] h-[5px] w-full rounded-[6px]'>
                                        </div>
                                        <p className='font-400 text-[12px]'>0:00/0:01</p>



                                    </div>
                                    <div className='flex flex-row justify-between items-center'>
                                        <FaRegCirclePlay size={19} className='text-[#FCC378]' />
                                        <p className='font-400 text-[12px] text-[#282828]/30'>06/07/2024 03:51pm</p>



                                    </div>

                                </div>
                                <div className='rounded-[16px] flex flex-col mt-3 gap-2 p-3 border-b-[#FFC6AF] border-b-[2px]' style={{ boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.15)' }}>
                                    <div className='flex flex-row gap-1 items-center'>
                                        <div className='bg-[#FFC6AF] h-[5px] w-full rounded-[6px]'>
                                        </div>
                                        <p className='font-400 text-[12px]'>0:00/0:01</p>



                                    </div>
                                    <div className='flex flex-row justify-between items-center'>
                                        <FaRegCirclePlay size={19} className='text-[#FCC378]' />
                                        <p className='font-400 text-[12px] text-[#282828]/30'>06/07/2024 03:51pm</p>



                                    </div>

                                </div>
                                <div className='rounded-[16px] flex flex-col mt-3 gap-2 p-3 border-b-[#FFC6AF] border-b-[2px]' style={{ boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.15)' }}>
                                    <div className='flex flex-row gap-1 items-center'>
                                        <div className='bg-[#FFC6AF] h-[5px] w-full rounded-[6px]'>
                                        </div>
                                        <p className='font-400 text-[12px]'>0:00/0:01</p>



                                    </div>
                                    <div className='flex flex-row justify-between items-center'>
                                        <FaRegCirclePlay size={19} className='text-[#FCC378]' />
                                        <p className='font-400 text-[12px] text-[#282828]/30'>06/07/2024 03:51pm</p>



                                    </div>

                                </div>
                                <div className='rounded-[16px] flex flex-col mt-3 gap-2 p-3 border-b-[#FFC6AF] border-b-[2px]' style={{ boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.15)' }}>
                                    <div className='flex flex-row gap-1 items-center'>
                                        <div className='bg-[#FFC6AF] h-[5px] w-full rounded-[6px]'>
                                        </div>
                                        <p className='font-400 text-[12px]'>0:00/0:01</p>



                                    </div>
                                    <div className='flex flex-row justify-between items-center'>
                                        <FaRegCirclePlay size={19} className='text-[#FCC378]' />
                                        <p className='font-400 text-[12px] text-[#282828]/30'>06/07/2024 03:51pm</p>



                                    </div>

                                </div>
                                <div className='rounded-[16px] flex flex-col mt-3 gap-2 p-3 border-b-[#FFC6AF] border-b-[2px]' style={{ boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.15)' }}>
                                    <div className='flex flex-row gap-1 items-center'>
                                        <div className='bg-[#FFC6AF] h-[5px] w-full rounded-[6px]'>
                                        </div>
                                        <p className='font-400 text-[12px]'>0:00/0:01</p>



                                    </div>
                                    <div className='flex flex-row justify-between items-center'>
                                        <FaRegCirclePlay size={19} className='text-[#FCC378]' />
                                        <p className='font-400 text-[12px] text-[#282828]/30'>06/07/2024 03:51pm</p>



                                    </div>

                                </div>
                                <div className='rounded-[16px] flex flex-col mt-3 gap-2 p-3 border-b-[#FFC6AF] border-b-[2px]' style={{ boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.15)' }}>
                                    <div className='flex flex-row gap-1 items-center'>
                                        <div className='bg-[#FFC6AF] h-[5px] w-full rounded-[6px]'>
                                        </div>
                                        <p className='font-400 text-[12px]'>0:00/0:01</p>



                                    </div>
                                    <div className='flex flex-row justify-between items-center'>
                                        <FaRegCirclePlay size={19} className='text-[#FCC378]' />
                                        <p className='font-400 text-[12px] text-[#282828]/30'>06/07/2024 03:51pm</p>



                                    </div>

                                </div>
                                <div className='flex flex-col sm:flex-row gap-2 bg-[#FCC378] w-full mt-2 p-3 sm:p-4 justify-center text-[#FFFFFF] text-[18px] font-[700] items-center rounded-[8px]'>
                                    <img src={capa_1} alt="" className="w-[24px] h-[24px]" />
                                    <button className='bg-[#FCC378] w-full sm:w-auto text-center'>
                                        Update Knowledge Base
                                    </button>
                                </div>

                            </div>
                        ) : null}
                    </div>
                </div>
            )}
        </>);
};

export default Hallucination_Table;
