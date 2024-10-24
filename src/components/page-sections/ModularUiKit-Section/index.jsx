import React from 'react';
import { Button } from "antd";

const index = () => {
    return (
        <section className='bg-[#252B42]'>
            <div className="container mx-auto max-w-[1440px]">
                <div className=' py-[130px] px-16'>
                    <h1 className='text-center text-white text-[40px] font-bold mt-[10px]'>A modular <br className='md:hidden' /> UI Kit</h1>
                    <p className='text-center text-[#BDBDBD] text-[24px] font-medium'>Most calendars are designed for teams. <br />
                        <span className='hidden md:inline '>Slate is designed for freelancers</span></p>

                    <div className='flex justify-center items-center gap-4 mt-12'>
                        <Button type="primary" className='w-[137px] h-[64px] rounded-[10px] text-base font-bold'>
                            Buy now
                        </Button>
                        <Button size='large' className='w-[185px] h-[60px] text-base font-bold text-white bg-inherit'>Try for free</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default index;
