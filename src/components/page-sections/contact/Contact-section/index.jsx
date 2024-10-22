import React from 'react';
import Workimg from "../../../../assets/img/ContactImg.png"

const index = () => {
    return (
        <section className='bg-[#FAFAFA]'>
            <div className="container mx-auto max-w-[1440px]">

                <div className='py-[120px]'>
                    <h1 className='text-2xl font-bold text-center text-[#737373] mb-2'>CONTACT</h1>
                    <h1 className='text-[58px] font-extrabold text-center text-[#252B42] '>We’re here  </h1>
                    <h1 className='text-[58px] font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-blue-500 mb-2'>to help</h1>
                    <p className='text-2xl font-medium text-center text-[#737373] mb-10'>Most calendars are designed for teams. Slate is designed <br />
                        for freelancers
                    </p>
                </div>

                <div className='flex justify-center items-center'>
                    <img src={Workimg} alt="#" />
                </div>
            </div>
        </section>
    );
};

export default index;