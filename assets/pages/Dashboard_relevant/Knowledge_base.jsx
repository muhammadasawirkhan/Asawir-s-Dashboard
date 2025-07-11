import React, { useState } from 'react';
import profile from '../../images/profile.png';
import Frame1 from '../../images/Frame1.png';
import Frame3 from '../../images/Frame3.png';
import { CiAlarmOn } from 'react-icons/ci';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import Kbtable from '../../../Components/kbtable';
import { FiUpload, FiLink, FiType, FiChevronRight } from 'react-icons/fi';
import UploadDocumentModal from '../../../Components/UploadDocumentModal';
import AddUrlModal from '../../../Components/AddUrlModal';
import AddTextModal from '../../../Components/AddTextModal';

const Knowledge_base = () => {
  const [activeAgent, setActiveAgent] = useState('Suzi');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMyModalOpen, setIsMyModalOpen] = useState(false);
  const [modalStep, setModalStep] = useState(1);
  const [activeFormModal, setActiveFormModal] = useState(null);
  const [myModalStep, setMyModalStep] = useState(1);

  const sampleData = [
    { id: '#0010', kbtype: 'Uploaded file', agent: 'Suzi', date: 'Nov 14,2024 10:20 Am', action: 'Active' },
    { id: '#0011', kbtype: 'Uploaded text', agent: 'Suzi', date: 'Nov 15,2024 11:30 Am', action: 'Active' },
    { id: '#0012', kbtype: 'Uploaded link', agent: 'Suzi', date: 'Nov 16,2024 09:15 Am', action: 'Active' },
  ];

  const options = [
    { key: 'upload', icon: <FiUpload className="text-orange-400 text-2xl" />, title: 'Upload Document' },
    { key: 'url', icon: <FiLink className="text-orange-400 text-2xl" />, title: 'Add URL' },
    { key: 'text', icon: <FiType className="text-orange-400 text-2xl" />, title: 'Add Text' },
  ];

  return (
    <>
      <div className={`flex flex-col gap-2 h-full w-full p-4 ${isModalOpen ? 'blur-sm' : ''}`}>
        {/* Top bar */}
        <div className='w-full flex justify-end p-4'>
          <div className='flex rounded-[30px] p-4 gap-2 items-center shadow-sm'>
            <CiAlarmOn className='w-8 h-8' />
            <IoIosNotificationsOutline className='w-8 h-8' />
            <img src={profile} alt="Profile" />
          </div>
        </div>

        {/* Content card */}
        <div className='border rounded-[12px] h-full p-4'>
          <div className='flex justify-between items-center mb-4'>
            <h1 className='text-xl font-medium'>Knowledge <span className='text-[#F16A77]'>Base</span></h1>
            <div className='flex gap-3'>

              <button onClick={() => setIsMyModalOpen(true)} className='bg-[#FFC6AF] text-white rounded-[8px] py-2 px-4 text-center'>Test</button>
              <button onClick={() => setIsModalOpen(true)} className='bg-[#F16A77] text-white rounded-[8px] py-2 px-4'>Create</button>
            </div>
          </div>

          {/* Agent toggle */}
          <div className='flex justify-between mb-4'>
            <div className="bg-orange-50 rounded-md flex relative w-[270px] h-[64px]">
              <div className={`absolute top-1 left-1 h-[56px] w-[130px] rounded-md bg-orange-300 transition-transform ${activeAgent === 'Jake' ? 'translate-x-[136px]' : ''}`}></div>
              <button onClick={() => setActiveAgent('Suzi')} className={`flex-1 z-10 font-medium ${activeAgent === 'Suzi' ? 'text-white' : 'text-gray-800'}`}>Agent Suzi</button>
              <button onClick={() => setActiveAgent('Jake')} className={`flex-1 z-10 font-medium ${activeAgent === 'Jake' ? 'text-white' : 'text-gray-800'}`}>Agent Jake</button>
            </div>
            <input type='text' placeholder='Search' className='bg-[#FFF4EF] w-[286px] h-[40px] rounded-[8px] px-2' />
          </div>

          {/* Table */}
          <Kbtable data={sampleData} />
        </div>
      </div>

      {/* test agent */}

      {isMyModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-[90%] max-w-md relative">
            <button onClick={() => { setIsMyModalOpen(false); setMyModalStep(1); }} className="absolute top-3 right-4 text-2xl text-orange-400">&times;</button>

            {myModalStep === 1 ? (
              <>
                <h2 className='text-xl font-semibold text-center mb-4'><span className='text-[#F16A77]'>Create</span> Knowledge Base</h2>


                <button
                  onClick={() => setMyModalStep(2)}
                  className=''
                >

                  <div className='flex flex-col justify-center'>
                    <div className='flex flex-row gap-2 justify-center sm: p-8'>
                      <div className='flex flex-col bg-[#FFF4EF] rounded-[12px] items-center sm:p-8 p-5 '>
                        <div className=''>
                          <img src={Frame1} alt="" />
                        </div>
                        <div>
                          <h1>Suzy</h1>
                        </div>
                        <div className='pt-2 '>
                          <button className='text-[12px] font-[400] bg-[#FCC378] h-[28px] w-[91px] rounded-[4px]'>Test Agent</button>
                        </div>
                      </div>
                      <div className=' flex flex-col p-5 sm:p-8 lg:p-8 items-center bg-[#FFF4EF] rounded-[12px]'>
                        <div>
                          <img src={Frame3} alt="" />
                        </div>
                        <div>
                          <h1>Suzy</h1>
                        </div>
                        <div className='pt-2  '>
                          <button className='text-[12px] font-[400] bg-[#FCC378] h-[28px] w-[91px] rounded-[4px]'>Test Agent</button>
                        </div>
                      </div>
                    </div>
                  </div>


                </button>

              </>
            ) : (
              <div className='flex flex-col gap-4'>
                <h2 className='text-xl font-semibold text-center'><span className='text-[#F16A77]'>Create</span> Knowledge Base</h2>
                <h2 className='text-center'>Add file to Knowledge Base</h2>
                <h2 className='text-[#282828]/30 text-center'>Tap to continue</h2>
                {options.map((option) => (
                  <div key={option.key} onClick={() => { setActiveFormModal(option.key); setIsModalOpen(false); }} className='flex items-center justify-between bg-[#fff] rounded p-4 cursor-pointer hover:bg-orange-100 shadow-md'>
                    <div className='flex items-center gap-3'>
                      {option.icon}
                      <span>{option.title}</span>
                    </div>
                    <FiChevronRight />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Multi-step modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-[90%] max-w-md relative">
            <button onClick={() => { setIsModalOpen(false); setModalStep(1); }} className="absolute top-3 right-4 text-2xl text-orange-400">&times;</button>

            {modalStep === 1 ? (
              <>
                <h2 className='text-xl font-semibold text-center mb-4'><span className='text-[#F16A77]'>Create</span> Knowledge Base</h2>
                <h1 className='text-center font-[400] text-[16px] text-[#282828]/30'>Please Select to continue</h1>
                <div className='flex flex-row gap-2 items-center p-10 px-0 sm:px-14'>
                  <div className='flex flex-col p-4 py-8 bg-[#FFF4EF] rounded-[12px]'>
                    <div className='mx-6'>
                      <img src={Frame3} alt="" />
                    </div>
                    <div className='text-center mt-2'>
                      <h1 className='text-[14px] font-[600] '>
                        Add Knowledge Base in Suzy
                      </h1>
                    </div>
                  </div>
                  <div className='flex flex-col p-4 py-8  bg-[#FFF4EF] rounded-[12px]'>
                    <div className='mx-6'>
                      <img src={Frame1} alt="" />
                    </div>
                    <div className='text-center mt-2'>
                      <h1 className='text-[14px] font-[600] '>
                        Add Knowledge Base in Suzy
                      </h1>
                    </div>
                  </div>
                </div>
                <div className='px-14'>
                  <button
                    onClick={() => setModalStep(2)}
                    className='w-full font-[400] text-[18px] text-[#282828] rounded-[8px] h-[48px] bg-[#FCC378]'
                  >
                    Continue
                  </button>
                </div>
              </>
            ) : (
              <div className='flex flex-col gap-4'>
                <h2 className='text-xl font-semibold text-center'><span className='text-[#F16A77]'>Create</span> Knowledge Base</h2>
                <h2 className='text-center'>Add file to Knowledge Base</h2>
                <h2 className='text-[#282828]/30 text-center'>Tap to continue</h2>
                {options.map((option) => (
                  <div key={option.key} onClick={() => { setActiveFormModal(option.key); setIsModalOpen(false); }} className='flex items-center justify-between bg-[#fff] rounded p-4 cursor-pointer hover:bg-orange-100 shadow-md'>
                    <div className='flex items-center gap-3'>
                      {option.icon}
                      <span>{option.title}</span>
                    </div>
                    <FiChevronRight />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Independent modals */}
      {activeFormModal === 'upload' && <UploadDocumentModal isOpen onClose={() => setActiveFormModal(null)} />}
      {activeFormModal === 'url' && <AddUrlModal isOpen onClose={() => setActiveFormModal(null)} />}
      {activeFormModal === 'text' && <AddTextModal isOpen onClose={() => setActiveFormModal(null)} />}
    </>
  );
};

export default Knowledge_base;

