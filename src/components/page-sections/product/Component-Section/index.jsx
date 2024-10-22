import React from 'react';
import mackbook3 from "../../../../assets/img/MacbookPro-3.png"

const index = () => {
    return (
        <section>
            <div className="containercontainer mx-auto max-w-[1440px]">
                <div className='flex justify-center gap-x-[84px] mt-[300px] mb-[300px]'>

                    <div className='relative right-20'>
                        <img src={mackbook3} alt="#" />
                    </div>

                    <div className='pt-24'>
                        <h1 className='text-2xl font-bold text-[#2091F9] mb-[17px]'>COMPONENTS</h1>
                        <h1 className='text-[40px] font-bold text-[#252B42] mb-[17px]'>Toggle element based on <br />
                            the Card</h1>
                        <p className='text-2xl font-medium text-[#737373]'>Most calendars are designed for teams. <br /> Slate is designed for freelancers</p>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default index;