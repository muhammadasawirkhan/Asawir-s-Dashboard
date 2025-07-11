import React from 'react';
import { NavLink } from 'react-router-dom';

const AddTextModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white flex-flex-col rounded-lg p-6 w-[90%] max-w-md relative">
        <button onClick={onClose} className="absolute top-3 right-4 text-2xl text-orange-400">&times;</button>
        <h2 className="text-[24px] text-[#F16A77] font-[400] mb-4 text-center">Add Text</h2>
         <label className='font-[400] text-[14px]'>Text</label>
        <textarea
          id="message"
          rows="10"
          className="block mt-2 p-2.5 outline-none w-full text-sm text-gray-900 bg-[#FFF4EF] rounded-[16px] focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write here..."
        ></textarea>
        <div className='flex flex-row justify-between pt-3'>
            <div className=''>
                <NavLink>
                  <button className='bg-[#F16A77] text-[#fff] w-[99px] h-[36px] rounded-[4.5px]'>Cancel
                  </button>
                  </NavLink>
            </div>
            <div className=''>
                <NavLink>
                  <button className='bg-[#FCC378] text-[#fff] w-[99px] h-[36px] rounded-[4.5px]'>Save
                  </button>
                  </NavLink>
            </div>
        </div>
        
      </div>
    </div>
  );
};

export default AddTextModal;