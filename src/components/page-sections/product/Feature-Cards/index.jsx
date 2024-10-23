import React from 'react';
import CardIcon1 from "../../../../assets/icons/restaurantmenu1.svg"
import CardIcon2 from "../../../../assets/icons/restaurant-menu2.svg"
import CardIcon3 from "../../../../assets/icons/restaurant-menu3.svg"
const index = () => {
    return (
        <section>
            <div className="container mx-auto max-w-[1440px]">

                <div className='flex flex-col pt-[140px] md:py-[160px] md:flex-row justify-center items-center gap-[52px] '>

                    <div className='w-[294px] h-[160px]'>
                        <div className='flex text-2xl font-bold text-[#252B42] items-center gap-[20px] mb-[10px]'>
                            <img src={CardIcon1} alt="#" />
                            <h1>A modular UI kit</h1>
                        </div>
                        <div className='pl-1'>
                            <p className='text-base font-medium text-[#737373]'>Slate helps you see how many <br />
                                more days you need to work to <br />
                                reach your financial goal.</p>
                        </div>
                    </div>

                    <div className='w-[294px] h-[160px]'>
                        <div className='flex text-2xl font-bold text-[#252B42] items-center gap-[20px] mb-[10px]'>
                            <img src={CardIcon2} alt="#" />
                            <h1>Handy plugins
                            </h1>
                        </div>
                        <div className='pl-1'>
                            <p className='text-base font-medium text-[#737373]'>Slate helps you see how many <br />
                                more days you need to work to <br />
                                reach your financial goal.</p>
                        </div>
                    </div>

                    <div className='w-[294px] h-[160px]'>
                        <div className='flex text-2xl font-bold text-[#252B42] items-center gap-[20px] mb-[10px]'>
                            <img src={CardIcon3} alt="#" />
                            <h1>Speedy build tools
                            </h1>
                        </div>
                        <div className='pl-1'>
                            <p className='text-base font-medium text-[#737373]'>Slate helps you see how many <br />
                                more days you need to work to <br />
                                reach your financial goal.</p>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center items-center'>
                    <div className='w-[884px] bg-[#E4E4E4] border-[3px] mt-[160px]'></div>
                </div>
            </div>
        </section>
    );
};

export default index;