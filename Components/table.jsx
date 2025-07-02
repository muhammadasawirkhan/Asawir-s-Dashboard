import React from 'react';

export const Table = ({ data }) => {
    return (
        <div className="overflow-x-auto  p-4 grid grid-cols-1">
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
                                <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                                    {row.Status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
           
        </div>
    );
};

export default Table;



















{/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 px-4 sm:py-4">
          <div className="border-[1px] border-[#FFF4EF] p-4 rounded-[12px]">
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
          <div className="border-[1px] border-[#FFF4EF] p-4 rounded-[12px]">
            <div className='flex flex-col'>


              <div className='flex flex-row justify-between'>
                <h1 className='font-[500] text-[18px]'>Happy <span className='text-[#F16A77]'>Responses</span></h1>
                <img src={Isolation1} alt="" />
              </div>
              <div>
                <h1 className='text-[34px] font-[500]'>1,000<span className='text-[#F16A77]'>k</span></h1>
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
          <div className="border-[1px] border-[#FFF4EF] p-4 rounded-[12px]">
            <div className='flex flex-col'>
              <div className='flex flex-row justify-between'>
                <h1 className='font-[500] text-[18px]'>Bad <span className='text-[#F16A77]'>Responses</span></h1>
                <img src={Isolation2} alt="" />
              </div>
              <div>
                <h1 className='text-[34px] font-[500]'>500<span className='text-[#F16A77]'>k</span></h1>
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
        <div className='w-full p-4'>

          <div className='border-[1px] '>

            <Table data={sampleData} />
          </div>
        </div> */}