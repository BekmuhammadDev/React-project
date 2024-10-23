import React from 'react';
import { Button } from "antd";
const index = () => {
    return (
        <section className='bg-[#FAFAFA]'>
            <div className="container mx-auto max-w-[1440px]">
                <div className='py-[120px]  px-[68px] md:px-0'>
                    <h1 className=' text-base md:text-2xl font-bold text-center text-[#737373] mb-2'>PRODUCT</h1>
                    <h1 className=' text-[40px] md:text-[58px] font-extrabold text-center text-[#252B42] '>A modular UI Kit for </h1>
                    <h1 className=' text-[40px] md:text-[58px] font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-500 mb-4 md:mb-2'>quick deployment</h1>
                    <p className='text-2xl font-medium text-center text-[#737373] mb-10'>Most calendars are designed for teams. Slate is designed <br />
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