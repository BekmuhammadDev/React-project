import React from 'react';
import { Button } from "antd";

const index = () => {
    return (
        <section className='bg-[#FAFAFA]'>
            <div className="container mx-auto max-w-[1440px]">

                <div className='py-[120px]'>
                    <h1 className='text-2xl font-bold text-center text-[#737373] mb-2'>LEGAL</h1>
                    <h1 className='text-[58px] font-extrabold text-center text-[#252B42] '>Terms of Service</h1>
                    <p className='text-2xl font-medium text-center text-[#737373] mt-5'>Updated Dec 09, 19</p>

                    <div className='flex justify-center mt-[40px]'>
                        <Button type="primary" className='w-[236px] h-[68px] text-2xl font-bold'>Print Terms</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default index;