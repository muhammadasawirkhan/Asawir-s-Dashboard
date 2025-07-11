import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CiAlarmOn } from 'react-icons/ci';
import { IoIosNotificationsOutline } from 'react-icons/io';
import profile from '../../images/profile.png';
import { IoImagesOutline } from "react-icons/io5";
import { Eye, EyeOff } from "lucide-react"




const Dashboard_Settings = () => {
  const [activeSettings, setActiveSettings] = useState('Notification_Setting');

  const [fileName, setFileName] = useState("");
  const fileInputRef = useRef(null);

  const handleFileClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  const getTranslateClass = () => {
    if (activeSettings === 'Profile_Settings') return 'translate-x-[140px]';
    if (activeSettings === 'Security_Settings') return 'translate-x-[285px]';
    return '';
  };

  const [showPassword, setShowPassword] = useState(false);

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
        <div className='flex flex-col p-8 border-[1px] border-[#FFF4EF] flex flex-col border-[1px] border-[#FFF4EF]  h-full w-full p-4'>
          <div className='flex flex-row'>
            <div className="bg-orange-50 rounded-md flex relative w-[478px] sm:w-[428px] h-[64px]">
              <div className={`absolute top-1 left-1 h-[56px] w-[130px] rounded-md bg-orange-300 transition-transform duration-300 ${getTranslateClass()}`}></div>

              <button onClick={() => setActiveSettings('Notification_Setting')} className={`flex-1 z-10 font-medium ${activeSettings === 'Notification_Setting' ? 'text-white' : 'text-gray-800'}`}>
                <NavLink to="Notification_Setting">Notifications</NavLink>
              </button>

              <button onClick={() => setActiveSettings('Profile_Settings')} className={`flex-1 z-10 font-medium ${activeSettings === 'Profile_Settings' ? 'text-white' : 'text-gray-800'}`}>
                <NavLink to="Profile_Settings">Profile Settings</NavLink>
              </button>

              <button onClick={() => setActiveSettings('Security_Settings')} className={`flex-1 z-10 font-medium ${activeSettings === 'Security_Settings' ? 'text-white' : 'text-gray-800'}`}>
                <NavLink to="Security_Settings">Security Settings</NavLink>
              </button>

            </div>

          </div>
          <div className='mt-6'>


            {activeSettings === 'Notification_Setting' && (
              <div className='flex flex-col gap-2'>
                {/* Replace with your Notification component or content */}
                <h2 className='text-[24px] font-[400] font-semibold'><span className='text-[#F16A77]'>Notification</span> Settings</h2>
                <div className='flex p-4 flex-row justify-between border-[1px] border-[#FFF4EF] w-auto md:w-[50%] lg:w-[22%]'>
                  <div className='text-[16px] font-[400]'>
                    Email Notifications
                  </div>
                  <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="relative w-11 h-6 bg-[#FCC378] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#FCC378] dark:peer-focus:ring-[#FCC378] rounded-full peer dark:bg-[#FCC378] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-[#FCC378] after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-[#FCC378] peer-checked:bg-[#FCC378] dark:peer-checked:bg-blue-600"></div>

                  </label>


                </div>
              </div>
            )}

            {activeSettings === 'Profile_Settings' && (
              <div className='flex flex-col gap-2' >

                <h2 className='text-[24px] font-[400] font-semibold'><span className='text-[#F16A77]'>Profile</span> Settings</h2>
                <div className=' flex flex-col'>
                  <label htmlFor="">Change Profile Image</label>
                  <div className='my-2 flex flex-row gap-3 bg-[#FFF4EF] sm:w-[401px] sm:h-[48px] rounded-[8px] p-3'>
                    <IoImagesOutline className="w-[20px] h-[20px] text-[#FCC378] " />

                    <p className="text-gray-500 flex">{fileName || "Upload Image"}</p>
                    <input
                      type="file"
                      ref={fileInputRef}
                      className="hidden"
                      onChange={handleFileChange}
                    />
                  </div>
                </div>
                <div className=' flex flex-col'>
                  <label htmlFor="">User Name</label>
                  <div className=''>
                    <input type="text" className='my-2 outline-none flex flex-row gap-3 bg-[#FFF4EF] w-full sm:w-[401px] sm:h-[48px] rounded-[8px] p-3' placeholder='Jenny William' />
                  </div>
                </div>
                <div className=' flex flex-col'>
                  <label htmlFor="">Email</label>
                  <div className=''>
                    <input type="email" className='my-2 outline-none flex flex-row gap-3 bg-[#FFF4EF] w-full sm:w-[401px] sm:h-[48px] rounded-[8px] p-3' placeholder='@gmail.com' />
                  </div>
                </div>
                <div className=' flex flex-col'>
                  <label htmlFor="">Phone no</label>
                  <div className=''>
                    <input type="number" className='my-2 outline-none flex flex-row gap-3 bg-[#FFF4EF] w-full sm:w-[401px] sm:h-[48px] rounded-[8px] p-3' placeholder='+123456789' />
                  </div>
                </div>


                <div className='flex flex-row justify-between sm:w-[401px] px-1 gap-1'>
                  <button className='border-[1px] text-[#FCC378] border-[#FCC378] w-full sm:w-[191px] h-[48px] rounded-[8px]'>discard</button>
                  <button className=' bg-[#FCC378] w-full sm:w-[191px] h-[48px] rounded-[8px]'>Save</button>

                </div>

              </div>
            )}

            {activeSettings === 'Security_Settings' && (
              <div className='flex flex-col gap-2'>
                <h2 className='text-[24px] font-[400] font-semibold'><span className='text-[#F16A77]'>Profile</span> Settings</h2>
                <label htmlFor="">Old Password</label>
                <div className='relative flex flex-row w-auto sm:w-[401px]'>
                  <input
                    type={showPassword ? "text" : "password"}
                    className='w-full h-12 rounded-md bg-[#FFF4EF] pl-4 pr-10'
                    style={{ boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.15)' }}
                  />
                  <div
                    className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </div>
                </div>
                <label htmlFor="">News Password</label>
                <div className='relative flex flex-row w-auto sm:w-[401px]'>
                  <input
                    type={showPassword ? "text" : "password"}
                    className='w-full h-12 rounded-md bg-[#FFF4EF] pl-4 pr-10'
                    style={{ boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.15)' }}
                  />
                  <div
                    className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </div>
                </div>
                <label htmlFor="">Confirm Password</label>
                <div className='relative flex flex-row w-auto sm:w-[401px]'>
                  <input
                    type={showPassword ? "text" : "password"}
                    className='w-full h-12 rounded-md bg-[#FFF4EF] pl-4 pr-10'
                    style={{ boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.15)' }}
                  />
                  <div
                    className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </div>
                </div>
                <div className='flex flex-row justify-between sm:w-[401px] px-1 py-2 gap-1'>
                  <button className='border-[1px] text-[#FCC378] border-[#FCC378] w-full sm:w-[191px] h-[48px] rounded-[8px]'>discard</button>
                  <button className=' bg-[#FCC378] w-full sm:w-[191px] h-[48px] rounded-[8px]'>Save</button>

                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </>

  )
}
export default Dashboard_Settings;

