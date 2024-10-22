import React from 'react';
import AboutImgWork from '../../../assets/img/Aboutimgworker.png';

const WorkSection = () => (
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
);

export default WorkSection;
