import React from 'react';
import mackbook3 from "../../../../assets/img/MacbookPro-3.png"
import MacImg from "../../../../assets/img/Macbook Pro.png";

const index = () => {
    return (
        <section>
            <div className="containercontainer mx-auto max-w-[1440px]">
                <div className=' md:flex md:justify-center items-center text-center md:text-left gap-x-[84px] mt-[100px] md:mt-[300px] mb-4 md:mb-[300px]'>

                    <div className='hidden md:flex relative right-20'>
                        <img src={mackbook3} alt="#" />
                    </div>

                    <div className='pt-24 px-14 md:px-0 '>
                        <h1 className='text-2xl font-bold text-[#2091F9] mb-[17px]'>COMPONENTS</h1>
                        <h1 className='text-[40px] font-bold text-[#252B42] mb-[17px]'>Toggle element based on <br className='hidden md:flex' />
                            the Card</h1>
                        <p className='text-2xl font-medium text-[#737373]'>Most calendars are designed for teams. <br /> Slate is designed for freelancers</p>
                    </div>

                </div>

                <div className='flex justify-center items-center pb-64 relative top-14 md:hidden'>
                    <img src={MacImg} alt="Macbook Pro" height='589px' className='w-[374px] md:w-[1054px]' />
                </div>

            </div>
        </section>
    );
};

export default index;