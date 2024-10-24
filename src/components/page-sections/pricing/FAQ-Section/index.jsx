import React from 'react';
import Accardion from "@components/accardion"

const index = () => {
    return (
        <section>
            <div className="container mx-auto">

                <div className='py-[160px]'>
                    <h1 className='text-center font-bold text-[40px] text-[#2091F9] mb-[60px]'>FAQ</h1>

                    <div className=' flex flex-col md:flex md:justify-center md:flex-row items-center'>


                        <div className='w-[438px] h-[254px] mb-10 md:mb-0 p-10 md:p-0'>
                            <Accardion selectedId={1} /> <br />
                            <Accardion selectedId={2} /><br />
                            <Accardion selectedId={3} /><br />
                            <Accardion selectedId={4} /><br />

                        </div>

                        <div className='w-[438px] h-[254px] p-10 md:p-0'>
                            <Accardion selectedId={5} /><br />
                            <Accardion selectedId={6} /><br />
                            <Accardion selectedId={7} /><br />
                            <Accardion selectedId={8} /><br />

                        </div>

                    </div>

                </div>

                <div className='flex justify-center items-center'>
                    <div className='w-[884px] bg-[#E4E4E4] border-[3px] '></div>
                </div>

            </div>
        </section>
    );
};

export default index;