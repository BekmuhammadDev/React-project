import React from 'react';

const index = () => {
    return (
        <section className='bg-[#FAFAFA]'>
            <div className="container mx-auto max-w-[1440px]">
                <div className='py-[120px] '>
                    <h1 className='text-2xl font-bold text-center text-[#737373] mb-[17px]'>PRICING</h1>
                    <div className='flex justify-center items-center  mb-[17px]'>
                        <h1 className='text-[45px] md:text-[58px] font-extrabold text-[#252B42] text-center md:text-left'>Pricing that <span className='text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-500'>scales with you</span></h1>
                    </div>
                    <p className='text-2xl font-medium text-[#737373] text-center'>Most calendars are <br className='md:hidden'/> designed for teams. <br className='md:hidden'/> Slate is designed <br />
                        for freelancers</p>
                </div>
            </div>
        </section>);
};

export default index;