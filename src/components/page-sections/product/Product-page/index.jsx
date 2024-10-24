import React from 'react';
import { Button } from "antd";
const index = () => {
    return (
        <section className='bg-[#FAFAFA]'>
            <div className="container mx-auto max-w-[1440px]">
                <div className='py-[120px]  px-[40px] md:px-0'>
                    <h1 className=' text-base md:text-2xl font-bold text-center text-[#737373] mb-2'>PRODUCT</h1>
                    <h1 className=' text-[40px] md:text-[58px] font-extrabold text-center text-[#252B42] mb-7 md:mb-0 '>A modular <br className='md:hidden'/> UI Kit for <span className=' text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-500  md:mb-2'>quick deployment</span> </h1>
                    
                    <p className='text-2xl font-medium text-center text-[#737373] mb-10'>Most calendars are <br className='md:hidden' /> designed for teams. <br className='md:hidden'/> Slate is designed <br />
                        for freelancers</p>
                    <div className='flex justify-center items-center '>
                        <Button type="primary" className='w-[236px] h-[68px] rounded-[10px] text-2xl font-bold'>Buy now</Button>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default index;