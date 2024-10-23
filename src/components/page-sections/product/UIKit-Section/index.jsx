import React from 'react';
import MckBook2 from "../../../../assets/img/MacbookPr-2.png"

const index = () => {
    return (
        <section>
            <div className="container mx-auto max-w-[1440px]">
                <div className=' md:flex md:justify-center items-center text-center md:text-left gap-x-[84px] md:mb-[300px]'>

                    <div className='p-10 px-[53px] md:px-0'>
                        <h1 className='text-2xl font-bold text-[#2091F9] mb-5 md:mb-[17px]'>UI KIT</h1>
                        <h1 className='text-[40px] font-bold text-[#252B42] mb-5 md:mb-[17px]'>Headings, body and other <br className='hidden md:flex'/>
                            common text elements</h1>
                        <p className='text-2xl font-medium text-[#737373]'>Most calendars are designed for <br className='hidden md:flex'/> teams. Slate is designed for <br /> freelancers</p>
                    </div>

                    <div className='hidden md:flex relative left-20'>
                        <img src={MckBook2} alt="#" />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default index;