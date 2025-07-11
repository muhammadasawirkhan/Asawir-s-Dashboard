import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CiAlarmOn } from 'react-icons/ci';
import { IoIosNotificationsOutline } from 'react-icons/io';
import profile from '../../images/profile.png';
import { IoImagesOutline } from "react-icons/io5";
import { Eye, EyeOff } from "lucide-react"
import Hallucination_Table from '../../../Components/Hallucination_table';

const Hallucination = () => {
    const sampleData = [
        { id: 1, Username: 'Ali Raza', Phoneno: '+923001234567', email: 'ali.raza@example.com', Status: 'Feedback' },
        { id: 2, Username: 'Fatima Noor', Phoneno: '+923112345678', email: 'fatima.noor@example.com', Status: 'Feedback' },
        { id: 3, Username: 'Hassan Ali', Phoneno: '+923212345678', email: 'hassan.ali@example.com', Status: 'Feedback' },
        { id: 4, Username: 'Ayesha Khan', Phoneno: '+923331234567', email: 'ayesha.khan@example.com', Status: 'Feedback' },
        { id: 5, Username: 'Zainab Fatima', Phoneno: '+923441234567', email: 'zainab.fatima@example.com', Status: 'Feedback' },
        { id: 6, Username: 'Umer Farooq', Phoneno: '+923551234567', email: 'umer.farooq@example.com', Status: 'Feedback' },
        { id: 7, Username: 'Sara Iqbal', Phoneno: '+923661234567', email: 'sara.iqbal@example.com', Status: 'Feedback' },
        { id: 8, Username: 'Hamza Tariq', Phoneno: '+923771234567', email: 'hamza.tariq@example.com', Status: 'Feedback' },
        { id: 9, Username: 'Mariam Shah', Phoneno: '+923881234567', email: 'mariam.shah@example.com', Status: 'Feedback' },
        { id: 10, Username: 'Bilal Ahmed', Phoneno: '+923991234567', email: 'bilal.ahmed@example.com', Status: 'Feedback' },
        { id: 11, Username: 'Areeba Ali', Phoneno: '+923004567890', email: 'areeba.ali@example.com', Status: 'Feedback' },
        { id: 12, Username: 'Salman Khan', Phoneno: '+923114567890', email: 'salman.khan@example.com', Status: 'Feedback' },
        { id: 13, Username: 'Nimra Yousaf', Phoneno: '+923224567890', email: 'nimra.yousaf@example.com', Status: 'Feedback' },
        { id: 14, Username: 'Kashif Mehmood', Phoneno: '+923334567890', email: 'kashif.mehmood@example.com', Status: 'Feedback' },
        { id: 15, Username: 'Hina Malik', Phoneno: '+923445678901', email: 'hina.malik@example.com', Status: 'Feedback' },
        { id: 16, Username: 'Talha Siddiqui', Phoneno: '+923556789012', email: 'talha.siddiqui@example.com', Status: 'Feedback' },
        { id: 17, Username: 'Sana Javed', Phoneno: '+923667890123', email: 'sana.javed@example.com', Status: 'Feedback' },
        { id: 18, Username: 'Imran Ashraf', Phoneno: '+923778901234', email: 'imran.ashraf@example.com', Status: 'Feedback' },
        { id: 19, Username: 'Maha Qureshi', Phoneno: '+923889012345', email: 'maha.qureshi@example.com', Status: 'Feedback' },
        { id: 20, Username: 'Asad Ullah', Phoneno: '+923990123456', email: 'asad.ullah@example.com', Status: 'Feedback' },
        { id: 21, Username: 'Sadia Anwar', Phoneno: '+923001112233', email: 'sadia.anwar@example.com', Status: 'Feedback' },
        { id: 22, Username: 'Sadia Anwar', Phoneno: '+923001112233', email: 'sadia.anwar@example.com', Status: 'Feedback' },
        { id: 23, Username: 'Sadia Anwar', Phoneno: '+923001112233', email: 'sadia.anwar@example.com', Status: 'Feedback' },
        { id: 24, Username: 'Sadia Anwar', Phoneno: '+923001112233', email: 'sadia.anwar@example.com', Status: 'Feedback' },
        { id: 25, Username: 'Sadia Anwar', Phoneno: '+923001112233', email: 'sadia.anwar@example.com', Status: 'Feedback' },
        

    ];

    // const [isModalOpen,setIsModalOpen] = useState(false);
    // const [activeFormModal,setActiveFormModal] =useState(null);
    // const [modalStep,setModalStep]=useState(1);

    return (
        <>
            <div className="flex flex-col   h-full w-full p-4">
                <div className='w-full flex justify-end p-4'>
                    <div className='flex rounded-[30px] p-4 gap-2 items-center shadow-sm'>
                        <CiAlarmOn className='w-8 h-8' />
                        <IoIosNotificationsOutline className='w-8 h-8' />
                        <img src={profile} alt="Profile" />
                    </div>
                </div>

                <div className='border-[1px] border-[#FFF4EF] px-6 py-4 h-full w-full rounded-[12px]'>
                    <div className=' '>

                        <Hallucination_Table data={sampleData} />
                    </div>
                </div>
                
            </div>
            
        </>
    )
}
export default Hallucination;
