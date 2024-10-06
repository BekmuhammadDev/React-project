import React from 'react';
import { Header, Footer } from '@/components/layouts';
import { Button } from "antd";
import Card from "@components/ui/About_card"
import AboutImg from "../../assets/img/AboutImg.png"
import AboutImgWork from "../../assets/img/Aboutimgworker.png"

import AboutLogo1 from "../../assets/icons/AboutLogo1.svg"
import AboutLogo2 from "../../assets/icons/AboutLogo2.svg"
import AboutLogo3 from "../../assets/icons/AboutLogo3.svg"
import AboutLogo4 from "../../assets/icons/AboutLogo4.svg"
import AboutLogo5 from "../../assets/icons/AboutLogo5.svg"
import AboutLogo6 from "../../assets/icons/AboutLogo6.svg"







const index = () => {
    return (
        <>
            <Header />

            <main>

                <section className='bg-[#FAFAFA]'>
                    <div className="container mx-auto max-w-[1440px]">

                        <div className='py-[120px]'>
                            <h1 className='text-2xl font-bold text-center text-[#737373] mb-2'>ABOUT</h1>
                            <h1 className='text-[58px] font-extrabold text-center text-[#252B42] '>A feisty group of </h1>
                            <h1 className='text-[58px] font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-500 mb-2'>change makers</h1>
                            <p className='text-2xl font-medium text-center text-[#737373] mb-10'>Most calendars are designed for teams. Slate is designed <br />
                                for freelancers
                            </p>
                        </div>

                        <div className='flex justify-center items-center'>
                            <img src={AboutImg} alt="#" />
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container mx-auto max-w-[1440px]">
                        <div className='flex justify-center gap-x-[65px] py-[100px]'>
                            <div className='pt-8'>
                                <h1 className='text-2xl font-bold text-[#252B42]'>Rename files and more. All <br />
                                    without opening a single <br />
                                    tab.
                                </h1> <br />

                                <p className='text-base font-semibold text-[#737373]'>Ever wondered if you're too reliant on <br />
                                    a client for work? Slate helps you <br />
                                    identify when you need to diversify <br />
                                    your client base.</p>
                            </div>

                            <div>
                                <img src={AboutImgWork} alt="#" />
                            </div>
                        </div>

                        <div className='flex justify-center items-center'>
                            <div className='w-[884px] bg-[#E4E4E4] border-[3px] mt-[116px]'></div>
                        </div>

                    </div>
                </section>

                <section>
                    <div className="container mx-auto max-w-[1440px]">

                        <div>


                            <div className='py-[110px]'>
                                <h1 className='text-[40px] font-bold text-[#252B42] text-center mb-5'>We glow all the way up</h1>
                                <p className='text-base font-semibold text-[#737373] text-center'>Ever wondered if you're too reliant on a client for work? <br />
                                    Slate helps you identify when you need to diversify <br />
                                    your client base.</p>
                            </div>



                            <div className='flex justify-center items-center'>
                                <div className='flex gap-[100px]'>
                                    <Card SelectId={1} />
                                    <Card SelectId={2} />
                                    <Card SelectId={3} />

                                </div>
                            </div>

                            <div className='flex justify-center items-center'>
                                <div className='flex gap-x-[100px]'>
                                    <Card SelectId={4} />
                                    <Card SelectId={5} />
                                    <Card SelectId={6} />

                                </div>
                            </div>

                            <div className='flex justify-center items-center'>
                                <div className='w-[884px] bg-[#E4E4E4] border-[3px] mt-[295px]'></div>
                            </div>

                        </div>


                    </div>
                </section>

                <section>
                    <div className="container mx-auto max-w-[1440px]">
                        <div>
                            <div className='mt-[78px] mb-[115px]'>
                                <h1 className='text-[40px] font-bold text-[#252B42] text-center'>Partners</h1>
                                <p className='text-2xl text-[#737373] font-medium text-center'>Most calendars are designed for teams. <br /> 
                                Slate is designed for freelancers</p>
                            </div>

                            <div className='flex justify-center  gap-x-[60px] mb-[138px]'>
                                <img src={AboutLogo1} alt="#" />
                                <img src={AboutLogo2} alt="#" />
                                <img src={AboutLogo3} alt="#" />
                                <img src={AboutLogo4} alt="#" />
                                <img src={AboutLogo1} alt="#" />
                                <img src={AboutLogo5} alt="#" />
                                <img src={AboutLogo6} alt="#" />
                                
                                

                            </div>
                        </div>
                    </div>
                </section>

                <section className='bg-[#252B42]'>
                    <div className="container mx-auto max-w-[1440px]">
                        <div className=' py-[130px]'>
                            <h1 className='text-center text-white text-[40px] font-bold mt-[10px]'>A modular UI Kit</h1>
                            <p className='text-center text-[#BDBDBD] text-[24px] font-medium'>Most calendars are designed for teams. <br />
                                Slate is designed for freelancers</p>

                            <div className='flex justify-center items-center gap-4 mt-12'>
                                <Button type="primary" className='w-[137px] h-[64px] rounded-[10px] text-base font-bold'>
                                    Buy now
                                </Button>
                                <Button size='large' className='w-[185px] h-[60px] text-base font-bold text-white bg-inherit'>Try for free</Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />

        </>
    );
};

export default index;