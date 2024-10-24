import React, { useState } from 'react';
import { Button } from "antd";

const index = () => {

    const [isYearly, setIsYearly] = useState(false);

    const handleYearlyClick = () => {
        setIsYearly(true);
    };

    const handleMonthlyClick = () => {
        setIsYearly(false);
    };

    return (
        <section>

            <div className="container mx-auto max-w-[1440px]">
                <div className='py-[100px]'>

                    <div className='flex justify-center items-center'>

                        <div className=' w-[334px] h-[48px] '>

                            <Button onClick={handleMonthlyClick}
                                className={` w-[131px] h-[48px] font-bold rounded-l-md rounded-r-none border ${isYearly ? 'bg-[#EEEEEE] border-[#E9E9E9] text-[#D1D1D1] border-2' : ' text-[#2091F9] border-gray'
                                    }`}>Monthly</Button>

                            <Button onClick={handleYearlyClick}
                                className={` ${isYearly ? 'w-[105px] h-[48px] rounded-r-md rounded-l-none' : 'w-[203px] h-[48px]'} font-bold rounded-none border ${isYearly ? 'bg-[#1A9CF1] text-white ' : 'bg-gray-100 text-[#2091F9] border-gray rounded-r-md rounded-l-none'
                                    }`}
                            > {isYearly ? 'Yearly' : 'Yearly ( save 20% )'}</Button>
                        </div>

                    </div>

                    <div className='flex justify-center items-center gap-[50px] mt-[60px]'>

                        {!isYearly && (
                            <div className='w-[343px] md:w-[400px] h-[861px] rounded-[10px] border border-[#2091F9] p-10 shadow-md'>

                                <div className='py-[30px] '>
                                    <h1 className='text-2xl font-bold text-[#252B42] text-center mb-[16px]'>FREE</h1>
                                    <p className='text-base font-bold text-[#737373] text-center'>Organize across all <br />
                                        apps by hand</p>
                                </div>

                                <div className='flex justify-center items-center gap-[10px] my-[42px]'>
                                    <h1 className='text-[58px] font-extrabold text-[#2091F9]'>0</h1>
                                    <div>
                                        <h1 className='text-2xl font-bold text-[#2091F9]'>$</h1>
                                        <p className='text-base font-bold text-[#8EC2F2]'>Per Month</p>
                                    </div>
                                </div>

                                <div className='flex justify-center items-center '>
                                    <div className="w-[277px] h-[364px]  border-blue-300">

                                        <ul className='mb-[67px]'>
                                            <li className="flex items-center mt-7">
                                                <svg className="w-[35px] h-[35px] text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                                </svg>
                                                <span className='text-base font-medium text-[#252B42]'>Unlimited product updates</span>
                                            </li>

                                            <li className="flex items-center mt-7">
                                                <svg className="w-[35px] h-[35px] text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                                </svg>
                                                <span className='text-base font-medium text-[#252B42]'>Unlimited Shares</span>
                                            </li>

                                            <li className="flex items-center mt-7">
                                                <svg className="w-[35px] h-[35px] text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                                </svg>
                                                <span className='text-base font-medium text-[#252B42]'>Every feature in Figmaland</span>
                                            </li>

                                            <li className="flex items-center mt-7">
                                                <svg className="w-[35px] h-[35px] text-gray-300 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                                </svg>
                                                <span className='text-base font-medium text-[#252B42]'>1GB Cloud storage</span>
                                            </li>

                                            <li className="flex items-center mt-7">
                                                <svg className="w-[35px] h-[35px] text-gray-300 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                                </svg>
                                                <span className='text-base font-medium text-[#252B42]'>Email and community <br /> support</span>
                                            </li>
                                        </ul>

                                        <button className="w-[277px] h-[64px] bg-blue-500 text-white font-bold rounded-[10px] hover:bg-blue-600">
                                            Order Now
                                        </button>
                                    </div>


                                </div>

                            </div>
                        )}


                        <div className={`${isYearly ? ' w-[343px] md:w-[750px] h-[861px]' : 'w-[450px] h-[861px] hidden md:block'} pt-[40px] rounded-[10px] border border-[#2091F9]  bg-gradient-to-tr from-teal-300 to-blue-500`}>

                            <div className='flex justify-center items-center mt-[20px]'>
                                <div className='w-[238px] h-[166px]'>
                                    <h1 className='text-center text-[40px] font-bold text-[#FFFFFF]'>STANDARD</h1>
                                    <p className='text-[22px] font-bold text-[#FFFFFF] text-center'>Organize across all
                                        apps by hand</p>
                                </div>
                            </div>

                            <div className='flex justify-center items-center gap-[10px] my-[27px]'>
                                <h1 className='text-[58px] font-extrabold text-white'>120</h1>
                                <div>
                                    <h1 className='text-[36px] font-bold text-white mb-6'>$</h1>

                                </div>
                            </div>

                            <div className='flex justify-center items-center'>
                                <div className="w-[277px] h-[364px]  border-blue-300">

                                    <ul className='mb-[67px]'>
                                        <li className="flex items-center mt-7">
                                            <svg className="w-[35px] h-[35px] text-white mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                            </svg>
                                            <span className='text-base font-medium text-white'>100+ Ui/UX Designs for you</span>
                                        </li>

                                        <li className="flex items-center mt-7">
                                            <svg className="w-[35px] h-[35px] text-white mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                            </svg>
                                            <span className='text-base font-medium text-white'>Unlimited Shares</span>
                                        </li>

                                        <li className="flex items-center mt-7">
                                            <svg className="w-[35px] h-[35px] text-white mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                            </svg>
                                            <span className='text-base font-medium text-white'>Every feature in Figmaland</span>
                                        </li>

                                        <li className="flex items-center mt-7">
                                            <svg className="w-[35px] h-[35px] text-white mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                            </svg>
                                            <span className='text-base font-medium text-white'>1GB Cloud storage</span>
                                        </li>

                                        <li className="flex items-center mt-7">
                                            <svg className="w-[35px] h-[35px] text-white mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                            </svg>
                                            <span className='text-base font-medium text-white'>Email and community <br /> support</span>
                                        </li>
                                    </ul>

                                    <button className="w-[277px] h-[64px] bg-white text-[#2091F9] font-bold rounded-[10px] hover:bg-slate-100">
                                        Order Now
                                    </button>
                                </div>


                            </div>

                            <div>

                            </div>

                        </div>


                    </div>

                </div>
            </div>
        </section>
    );
};

export default index;