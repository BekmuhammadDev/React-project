import React from 'react';
import Card from "@components/ui/pricing_card"
import { Button } from "antd";

const index = () => {
    return (
        <section>
            <div className="container mx-auto max-w-[1440px]">

                <div className='mt-[170px]'>
                    {/* --------------Cards----------------------------------- */}

                    <div className='flex justify-center items-center mb-[58px]'>
                        <div className='flex gap-[60px]'>
                            <Card selectID={1} />
                            <Card selectID={2} />
                            <Card selectID={3} />
                        </div>
                    </div>

                    <div className='flex justify-center items-center'>
                        <div className='flex gap-[60px]'>
                            <Card selectID={4} />
                            <Card selectID={5} />
                            <Card selectID={6} />
                        </div>
                    </div>

                    {/* --------------Cards end----------------------------------- */}

                </div>

                <div className='flex justify-center items-center mt-[110px] mb-[160px]'>
                    <Button className='w-[325px] h-[68px] rounded-[10px] bg-[#2091F9] text-white text-2xl font-bold'>More Testimonials</Button>
                </div>

            </div>
        </section>
    );
};

export default index;