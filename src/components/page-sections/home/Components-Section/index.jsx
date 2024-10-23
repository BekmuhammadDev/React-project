import React from 'react';
import mackbook3 from "../../../../assets/img/MacbookPro-3.png"
import MacImg from "../../../../assets/img/Macbook Pro.png";

const index = () => {
  return (
    <section>
      <div className="containercontainer mx-auto max-w-[1440px]">
        <div className='md:flex md:justify-center gap-x-[84px] md:text-left items-center text-center md:mt-[300px]'>

          <div className=' hidden md:flex relative right-20'>
            <img src={mackbook3} alt="#" />
          </div>

          <div className=' md:pt-24'>
            <h1 className='text-2xl font-bold text-[#2091F9] mb-10 md:mb-[17px]'>COMPONENTS</h1>
            <h1 className='text-[40px] font-bold text-[#252B42] px-14 md:px-0 mb-10  md:mb-[17px]'>Toggle element based on <br className='hidden md:flex' />
              the Card</h1>
            <p className='text-2xl font-medium text-[#737373] px-16 md:px-0'>Most calendars are designed for teams. <br /> Slate is designed for freelancers</p>
          </div>

        </div>

        <div className='flex justify-center items-center pb-64 relative top-14 md:hidden'>
          <img src={MacImg} alt="Macbook Pro" height='589px' className='w-[374px] md:w-[1054px]' />
        </div>

      </div>
    </section>
  );
};

export default index;