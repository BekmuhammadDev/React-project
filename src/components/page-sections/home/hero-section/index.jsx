import React from 'react';
import { Button } from "antd";
import MacImg from "../../../../assets/img/Macbook Pro.png";
import "./style.scss";

const HeroSection = () => {
  return (
    <section className='relative'>
      <div className='bgimg'></div>
      <div className='container mx-auto max-w-[1440px] relative z-10'>
        <h1 className='text-[40px] md:text-[58px] font-extrabold text-white text-center pt-[120px] md:pt-[80px] mb-[28px]'>
          Lightning fast prototyping
        </h1>
        <p className='text-center text-2xl font-medium text-white mb-[65px] md:mb-[50px]'>
          Most calendars are designed for teams. Slate is designed <br />
          for freelancers
        </p>
        <div className='flex justify-center items-center'>
          <Button size='large' className='w-[236px] h-[68px] text-2xl font-bold text-[#2091F9]'>Try For Free</Button>
        </div>
        <div className='flex justify-center items-center pb-64 relative top-32 md:top-14'>
          <img src={MacImg} alt="Macbook Pro" height='589px' className='w-[374px] md:w-[1054px]' />
        </div>
      </div>

    

    </section>
  );
};

export default HeroSection;
