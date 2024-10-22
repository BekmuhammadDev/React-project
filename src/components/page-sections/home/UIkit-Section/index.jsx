import React from 'react';
import MckBook2 from "../../../../assets/img/MacbookPr-2.png"
import MacImg from "../../../../assets/img/Macbook Pro.png";



const index = () => {
  return (
    <section>
    <div className="container mx-auto max-w-[1440px]">
      <div className='md:flex md:justify-center gap-x-[84px] items-center text-center md:text-left'>
  
        <div className='p-10'>
          <h1 className='text-2xl font-bold text-[#2091F9] mb-[17px]'>UI KIT</h1>
          <h1 className='text-[40px] font-bold px-3 md:px-0 text-[#252B42] mb-12 md:mb-[17px]'>Headings, body and other <br />
            common text elements</h1>
          <p className='text-2xl px-2 md:px-0 font-medium text-[#737373]'>Most calendars are designed for <br/> teams. Slate is designed for <br /> freelancers</p>
        </div>
  
        <div className=' hidden md:flex relative left-20 mt-10'>
          <img src={MckBook2} alt="#" />
        </div>

        <div className='flex justify-center items-center pb-64 relative top-14 md:hidden'>
          <img src={MacImg} alt="Macbook Pro" height='589px' className='w-[374px] md:w-[1054px]' />
        </div>

      </div>
    </div>
  </section>
  
  );
};

export default index;