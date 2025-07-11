import React from 'react';

const Kbtable = ({ data }) => {
    return (
        <div className="overflow-x-auto  p-4 grid grid-cols-1">
            <table className=' text-left'>
                <thead className='bg-[#FCC378] text-[#fff]'>
                    <tr className=''>
                        <th className="px-4 py-2">ID</th>
                        <th className="px-4 py-2">Knowledge Base Type</th>
                        <th className="px-4 py-2">Agent</th>
                        <th className="px-4 py-2">Date added</th>
                        <th className="px-4 py-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row) => (
                        <tr key={row.id} className="hover:bg-[#FFF4EF] border-b-[1px]">
                            <td className="px-4 py-8">{row.id}</td>
                            <td className="px-4 py-2">{row.kbtype}</td>
                            <td className="px-4 py-2">{row.agent}</td>
                            <td className="px-4 py-2">{row.date}</td>
                            <td className="px-4 py-2">{row.action}</td>

                            
                        </tr>
                    ))}
                </tbody>
            </table>
           
        </div>
    );
};

export default Kbtable;



















