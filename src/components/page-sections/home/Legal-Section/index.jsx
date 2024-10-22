import React from 'react';
import { Button } from "antd";
import { Link } from 'react-router-dom';
const index = () => {
    return (
        <section className='hidden md:flex'>
            <div className="container mx-auto max-w-[1440px]">

                <div className='py-[120px] mt-[170px]'>
                    <h1 className='text-2xl font-bold text-center text-[#737373] mb-2'>LEGAL</h1>
                    <h1 className='text-[58px] font-extrabold text-center text-[#252B42] '>Terms of Service</h1>
                    <div className='flex justify-center mt-[40px]'>
                        <Link to="/legal"><Button type="primary" className='w-[236px] h-[68px] text-2xl font-bold'>See Terms</Button></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default index;