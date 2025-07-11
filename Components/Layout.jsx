import React from 'react';
import Sidebar from '../Components/Sidebar';
import { Outlet } from 'react-router-dom';
import Logo from "../assets/images/Logo.png";

const Layout = () => {
  return (
    <div className="flex p-4 h-screen bg-[#FFF4EF] w-full ">
      {/* Sidebar */}
      <div className='w-auto h-full hidden sm:flex bg-white md:w-[15%] p-5 flex flex-col rounded-l-xl'>
        {/* <div className='p-4'>
          <img src={Logo} alt="Logo" /> 
        </div> */}
        <Sidebar />
      </div>

      {/* Main Content w-auto changed to w-full */}
      <main className="w-full sm:w-[85%] md:w-[85%] bg-white overflow-y-auto rounded-r-xl">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
