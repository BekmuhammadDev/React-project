import React from 'react';
import AssisAi from "../../../assets/icons/assistai.jpg"
import TwitterIcon from "../../../assets/icons/twitter.svg"
import facebookIcon from "../../../assets/icons/facebook.svg"
import linkedinIcon from "../../../assets/icons/linkedin.svg"

const index = () => {
    return (
        <footer>
            <div className="container mx-auto max-w-[1440px]">

                <div className='bg-[#FFFFFF] py-7 md:px-[115px] mt-[155px] md:mt-0 md:flex items-center justify-between'>
                    <div className='w-20 h-20 hidden md:flex '>
                        <img
                            src={AssisAi}
                            alt="#"
                            width={186}
                            height={58}
                            className='rounded-[30%]'
                        />
                    </div>
                    <div className='flex gap-6 mb-12 md:mb-0 justify-center md:flex'>
                        <a href="#"><img src={TwitterIcon} width={33} height={27} alt="#" /></a>
                        <a href="#"><img src={facebookIcon} width={33} height={27} alt="#" /></a>
                        <a href="#"><img src={linkedinIcon} width={33} height={27} alt="#" /></a>
                    </div>
                    <p className='text-[#5C5C5C] text-xs font-bold text-center md:flex'>Just type what's on your mind and we'll </p>
                </div>

            </div>
        </footer>
    );
};

export default index;