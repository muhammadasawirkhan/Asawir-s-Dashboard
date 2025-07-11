import React from 'react'
import profile from '../../images/profile.png'
import { CiAlarmOn } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import Ellipse7 from '../../images/Ellipse 7.png';
import Frame from '../../images/Frame.png';
import Table from '../../../Components/table.jsx';
import { NavLink } from 'react-router-dom';

const Users = () => {
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
    { id: 22, Username: 'Sadia Anwar', Phoneno: '+923001112233', email: 'sadia.anwar@example.com', Status: 'Active' },
    { id: 23, Username: 'Sadia Anwar', Phoneno: '+923001112233', email: 'sadia.anwar@example.com', Status: 'Active' },
    { id: 24, Username: 'Sadia Anwar', Phoneno: '+923001112233', email: 'sadia.anwar@example.com', Status: 'Active' },
    { id: 25, Username: 'Sadia Anwar', Phoneno: '+923001112233', email: 'sadia.anwar@example.com', Status: 'Active' },
    { id: 26, Username: 'Sadia Anwar', Phoneno: '+923001112233', email: 'sadia.anwar@example.com', Status: 'Active' },

  ];

  return (
    <>
      <div className='flex flex-col gap-2 h-full w-full '>
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
        <div className='lg:flex lg:flex-row p-4 lg:p-0 flex flex-col gap-2'>


          <div className='flex flex-col lg:w-[66.5%] border-[1px] border-[#FFF4EF] rounded-[12px]'>
            <div className='flex flex-row justify-between p-4'>
              <h1 className='font-[500] text-[18px]'>Total <span className='text-[#F16A77]'>Users</span></h1>
              <div>
                <div className="relative">
                  <select className="appearance-none w-full border-[1px] border-[#FFF4EF] rounded-md p-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">Filter out user</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <svg
                      className="w-[18px] h-[18px] text-[#FCC378]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 111.08 1.04l-4.24 4.25a.75.75 0 01-1.08 0l-4.24-4.25a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

              </div>

            </div>
            <div className=' '>

              <Table data={sampleData} />
            </div>

          </div>
          <div className='flex flex-col lg:w-[32%] '>
            <div className='border-[1px] w-full border-[#FFF4EF] p-4 rounded-[12px]'>
              <div className='flex flex-row justify-between'>

                <h1 className='font-[500] text-[18px]'><span className='text-[#F16A77]'>User</span>Profle</h1>
                <div>
                  <button className='px-[10px] text-[#F16A77] rounded-[4px] py-[6px] bg-[#F16A7726]/15' style={{ boxShadow: '0px 2px 5px rgba(185, 170, 170, 0.15)' }}><NavLink to=''>See Conversation</NavLink></button>

                </div>
              </div>
              <div className='pt-6 flex flex-col gap-2 items-center '>
                <div>

                  <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                    <span className="ms-3  text-[12px] font-[400] text-[#F16A77]">Block User</span>
                  </label>


                </div>
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
                  <div className='sm:flex items-center flex flex-col sm:flex-row gap-3'>
                    <img className='w-[90px]' src={Frame} alt="" />
                    <img className='w-[90px]' src={Frame} alt="" />
                    <img className='w-[90px]' src={Frame} alt="" />
                  </div>
                </div>
              </div>
              <div className='p-4'>
                <div className='border-[1px] w-full border-[#FFF4EF] p-1 rounded-[12px]'>
                  <div className="bg-white   p-4  ">
                    {/* Left blue border */}


                    {/* Header */}
                    <h2 className="text-[16px] font-semibold mb-2">
                      <span className="text-red-500">User</span> Activity
                    </h2>

                    {/* Grid + Bars */}
                    <div className="flex">
                      {/* Y-axis */}
                      <div className="flex flex-col justify-between text-[10px] text-red-300 mr-2">
                        <span>9h</span>
                        <span>8h</span>
                        <span>7h</span>
                      </div>

                      {/* Grid + Bars */}
                      <div className="flex-1 relative">
                        {/* Horizontal lines */}
                        <div className="absolute top-0 left-0 w-full border-t border-red-100"></div>
                        <div className="absolute top-1/3 left-0 w-full border-t border-red-100"></div>
                        <div className="absolute top-2/3 left-0 w-full border-t border-red-100"></div>

                        {/* Bars */}
                        <div className="flex items-end justify-between h-full px-12">
                          <div className="bg-red-200 w-3 h-[60%] rounded-md"></div>
                          <div className="bg-red-200 w-3 h-[40%] rounded-md"></div>
                          <div className="bg-red-200 w-3 h-[35%] rounded-md"></div>
                          <div className="bg-red-200 w-3 h-[45%] rounded-md"></div>
                          <div className="bg-red-200 w-3 h-[25%] rounded-md"></div>
                        </div>
                      </div>
                    </div>
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
export default Users;
