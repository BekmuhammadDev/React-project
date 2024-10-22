import React from 'react';
import Card from "@components/ui/About_card"


const CardSection = () => (
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
);

export default CardSection;
