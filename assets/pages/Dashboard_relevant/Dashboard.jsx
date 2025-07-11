import React from 'react'
import { CiAlarmOn } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import profile from '../../images/profile.png'
import Isolation from '../../images/Isolation_Mode.png';
import Isolation1 from '../../images/Isolation_Mode1.png';
import Isolation2 from '../../images/Isolation_Mode2.png';
import Ellipse1 from '../../images/Ellipse 1.png';
import Ellipse2 from '../../images/Ellipse 2.png';
import Ellipse3 from '../../images/Ellipse 3.png';
import Ellipse4 from '../../images/Ellipse 4.png';
import Ellipse5 from '../../images/Ellipse 5.png';
import Ellipse6 from '../../images/Ellipse 6.png';
import Ellipse7 from '../../images/Ellipse 7.png';
import Frame from '../../images/Frame.png';


import { FaPlus } from "react-icons/fa";
import Table from '../../../Components/table.jsx';

import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { NavLink } from 'react-router-dom';







const Dashboard = () => {

  const sampleData = [
    { id: 1, Username: 'Ali Raza', Phoneno: '+923001234567', email: 'ali.raza@example.com', Status: 'Active' },
    { id: 2, Username: 'Fatima Noor', Phoneno: '+923112345678', email: 'fatima.noor@example.com', Status: 'Active' },
    { id: 3, Username: 'Hassan Ali', Phoneno: '+923212345678', email: 'hassan.ali@example.com', Status: 'Active' },
    { id: 4, Username: 'Ayesha Khan', Phoneno: '+923331234567', email: 'ayesha.khan@example.com', Status: 'Active' },
    { id: 5, Username: 'Zainab Fatima', Phoneno: '+923441234567', email: 'zainab.fatima@example.com', Status: 'Active' },
    { id: 6, Username: 'Umer Farooq', Phoneno: '+923551234567', email: 'umer.farooq@example.com', Status: 'Active' },
    { id: 7, Username: 'Sara Iqbal', Phoneno: '+923661234567', email: 'sara.iqbal@example.com', Status: 'Active' },
    { id: 8, Username: 'Hamza Tariq', Phoneno: '+923771234567', email: 'hamza.tariq@example.com', Status: 'Active' },
    { id: 9, Username: 'Mariam Shah', Phoneno: '+923881234567', email: 'mariam.shah@example.com', Status: 'Active' },
    { id: 10, Username: 'Bilal Ahmed', Phoneno: '+923991234567', email: 'bilal.ahmed@example.com', Status: 'Active' },
    { id: 11, Username: 'Areeba Ali', Phoneno: '+923004567890', email: 'areeba.ali@example.com', Status: 'Active' },
    { id: 12, Username: 'Salman Khan', Phoneno: '+923114567890', email: 'salman.khan@example.com', Status: 'Active' },
    { id: 13, Username: 'Nimra Yousaf', Phoneno: '+923224567890', email: 'nimra.yousaf@example.com', Status: 'Active' },
    { id: 14, Username: 'Kashif Mehmood', Phoneno: '+923334567890', email: 'kashif.mehmood@example.com', Status: 'Active' },
    { id: 15, Username: 'Hina Malik', Phoneno: '+923445678901', email: 'hina.malik@example.com', Status: 'Active' },
    { id: 16, Username: 'Talha Siddiqui', Phoneno: '+923556789012', email: 'talha.siddiqui@example.com', Status: 'Active' },
    { id: 17, Username: 'Sana Javed', Phoneno: '+923667890123', email: 'sana.javed@example.com', Status: 'Active' },
    { id: 18, Username: 'Imran Ashraf', Phoneno: '+923778901234', email: 'imran.ashraf@example.com', Status: 'Active' },
    { id: 19, Username: 'Maha Qureshi', Phoneno: '+923889012345', email: 'maha.qureshi@example.com', Status: 'Active' },
    { id: 20, Username: 'Asad Ullah', Phoneno: '+923990123456', email: 'asad.ullah@example.com', Status: 'Active' },
    { id: 21, Username: 'Sadia Anwar', Phoneno: '+923001112233', email: 'sadia.anwar@example.com', Status: 'Active' },
  ];


  return (
    <>
      <div className='flex flex-col h-full w-full '>
        <div className='w-full flex flex-row justify-end p-4'>
          {/* <div className='text-[#FCC378] font-[750] text-[24px]'>
            Dashboard
          </div> */}
          <div className='flex rounded-[30px]  p-4  flex-row gap-2 items-center' style={{ boxShadow: '0px 2px 5px rgba(185, 170, 170, 0.08)' }}>
            <div>
              <CiAlarmOn className='w-8 h-8' />

            </div>
            <div >
              <IoIosNotificationsOutline className='w-8 h-8' />

            </div>
            <div>
              <img src={profile} alt="" />

            </div>
          </div>
        </div>
        {/* grid grid-cols */}
        <div className='flex flex-col md:flex md:flex-row gap-2 '>
          <div className=' md:w-[66.5%] p-4 md:p-0 flex flex-col gap-2'>
            <div className='flex overflow-x-auto flex-row grid grid-cols-1 sm:grid-cols-2 gap-2'>
              <div className="border-[1px] w-full border-[#FFF4EF] p-4 rounded-[12px]">
                <div className='flex flex-col gap-1'>
                  <div className='flex flex-row justify-between'>
                    <h1 className='font-[500] text-[18px]'>Total <span className='text-[#F16A77]'>Users</span></h1>
                    <img src={Isolation} alt="" />
                  </div>
                  <div>
                    <div>
                      <h1 className='text-[34px] font-[500]'>1,500<span className='text-[#F16A77]'>k</span></h1>
                    </div>
                  </div>
                  <div class="w-full bg-[#FFE8DF] rounded-full  ">
                    <div class="bg-[#FFC6AF] h-1 rounded-full w-3/5">
                    </div>
                  </div>
                  <div className='mt-3 flex flex-row'>
                    <img src={Ellipse1} alt="" />
                    <img src={Ellipse2} alt="" />
                    <img src={Ellipse3} alt="" />
                    <img src={Ellipse4} alt="" />
                    <img src={Ellipse5} alt="" />
                    <img src={Ellipse6} alt="" />

                    <div className='bg-[#2828284D]/30 p-[5px] w-[28px] h-[28px] rounded-2xl'>
                      <FaPlus className='text-[#fff]' />

                    </div>
                  </div>
                </div>
              </div>
              <div className="border-[1px] w-full border-[#FFF4EF] p-4 rounded-[12px]">

                <div className='flex flex-col gap-1'>
                  <div className='flex flex-row justify-between'>
                    <h1 className='font-[500] text-[18px]'>Total <span className='text-[#F16A77]'>Users</span></h1>
                    <img src={Isolation} alt="" />
                  </div>
                  <div>
                    <div>
                      <h1 className='text-[34px] font-[500]'>1,500<span className='text-[#F16A77]'>k</span></h1>
                    </div>
                  </div>
                  <div class="w-full bg-[#FFE8DF] rounded-full  ">
                    <div class="bg-[#FFC6AF] h-1 rounded-full w-3/5">
                    </div>
                  </div>
                  <div className='mt-3 flex flex-row'>
                    <img src={Ellipse1} alt="" />
                    <img src={Ellipse2} alt="" />
                    <img src={Ellipse3} alt="" />
                    <img src={Ellipse4} alt="" />
                    <img src={Ellipse5} alt="" />
                    <img src={Ellipse6} alt="" />

                    <div className='bg-[#2828284D]/30 p-[5px] w-[28px] h-[28px] rounded-2xl'>
                      <FaPlus className='text-[#fff]' />

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full p-4 border-[1px] border-[#FFF4EF] rounded-[12px]'>
              <div className='flex flex-row w-full p-4 justify-between'>
                <h1 className='font-[500] text-[18px]'>Active <span className='text-[#F16A77]'>Users</span></h1>
                <a className='font-[400] text-[16px] text-[#F16A77]' href="">See all</a>

              </div>

              <div className=' '>

                <Table data={sampleData} />
              </div>
            </div>

          </div>
          <div className='md:w-[32%]  p-4 md:p-0  flex flex-col gap-2'>
            <div className="border-[1px]  w-full border-[#FFF4EF] p-4 rounded-[12px]">

              <div className='flex flex-col gap-1'>
                <div className='flex flex-row justify-between'>
                  <h1 className='font-[500] text-[18px]'>Total <span className='text-[#F16A77]'>Users</span></h1>
                  <img src={Isolation} alt="" />
                </div>
                <div>
                  <div>
                    <h1 className='text-[34px] font-[500]'>1,500<span className='text-[#F16A77]'>k</span></h1>
                  </div>
                </div>
                <div class="w-full bg-[#FFE8DF] rounded-full  ">
                  <div class="bg-[#FFC6AF] h-1 rounded-full w-3/5">
                  </div>
                </div>
                <div className='mt-3 flex flex-row'>
                  <img src={Ellipse1} alt="" />
                  <img src={Ellipse2} alt="" />
                  <img src={Ellipse3} alt="" />
                  <img src={Ellipse4} alt="" />
                  <img src={Ellipse5} alt="" />
                  <img src={Ellipse6} alt="" />

                  <div className='bg-[#2828284D]/30 p-[5px] w-[28px] h-[28px] rounded-2xl'>
                    <FaPlus className='text-[#fff]' />

                  </div>
                </div>
              </div>
            </div>
            <div className='border-[1px] w-full border-[#FFF4EF] p-4 rounded-[12px]'>
              <div className='flex flex-row justify-between'>

                <h1 className='font-[500] text-[18px]'><span className='text-[#F16A77]'>User</span>Profle</h1>
                <div>
                  <button className='px-[10px] text-[#F16A77] rounded-[4px] py-[6px] bg-[#F16A7726]/15' style={{ boxShadow: '0px 2px 5px rgba(185, 170, 170, 0.15)' }}><NavLink to=''>See Conversation</NavLink></button>

                </div>
              </div>
              <div className='pt-6 flex flex-col gap-2 items-center '>
                <div className='w-[90px] h-[90px]'>
                  <img src={Ellipse7} alt="" />
                </div>
                <div>
                  <h1 className=' font-[500] text-[18px]'>Jenny William</h1>
                </div>
              </div>
              <div className='flex flex-col p-4 gap-[12px]'>
                <div className=' flex flex-row bg-[#FFF4EF] rounded-[8px] py-3 px-3  h-[48px] bg-opacity-[50%] justify-between'>
                  <h1 className='text-[14px] font-[400]  '>
                    ID:
                  </h1>
                  <h1 className='text-[14px] font-[400]'>
                    #12345
                  </h1>
                </div>
                <div className='flex flex-row bg-[#FFF4EF] rounded-[8px] py-3 px-3  h-[48px] bg-opacity-[50%] justify-between'>
                  <h1 className='text-[14px] font-[400]  '>
                    User Name
                  </h1>
                  <h1 className='text-[14px] font-[400]'>
                    Jenny William
                  </h1>
                </div>
                <div className='flex flex-row bg-[#FFF4EF] rounded-[8px] py-3 px-3  h-[48px] bg-opacity-[50%] justify-between'>
                  <h1 className='text-[14px] font-[400]  '>
                    Phone no
                  </h1>
                  <h1 className='text-[14px] font-[400]'>
                    +123456789
                  </h1>
                </div>
                <div className='flex flex-row bg-[#FFF4EF] rounded-[8px] py-3 px-3  h-[48px] bg-opacity-[50%] justify-between'>
                  <h1 className='text-[14px] font-[400]  '>
                    Email
                  </h1>
                  <h1 className='text-[14px] font-[400]'>
                    jennywilliam@gmail.com
                  </h1>
                </div>
              </div>
              <div className='flex flex-col p-4 gap-1'>
                <div className='flex p-[18px] flex-col gap-1 border-[1px] rounded-[12px]  border-[#FFF4EF] px-4'>
                  <h1 className='font-[500] text-[18px]'><span className='text-[#F16A77]'>Daily</span> Goals</h1>
                  <div className='flex flex-row gap-3'>
                    <img src={Frame} alt="" />
                    <img src={Frame} alt="" />
                    <img src={Frame} alt="" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

    </>
  )
}
export default Dashboard;
