import React from 'react';
import { Header, Footer } from '@/components/layouts';
import { Button } from "antd";
import "./style.scss"
import LegalSection from "@components/page-sections/legal/Legal-Section"
import IntroSection from "@components/page-sections/legal/Intro-Section"

const index = () => {
    return (
        <>
            <Header />
            <main>
                <LegalSection/>
                <IntroSection/>
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