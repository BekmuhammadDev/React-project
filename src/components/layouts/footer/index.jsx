import React from 'react';
import FooterIcon from "../../../assets/icons/footer-logo.svg"
import TwitterIcon from "../../../assets/icons/twitter.svg"
import facebookIcon from "../../../assets/icons/facebook.svg"
import linkedinIcon from "../../../assets/icons/linkedin.svg"

const index = () => {
    return (
        <footer>
            <div className="container mx-auto max-w-[1440px]">

                <div className='bg-[#FFFFFF] py-7 px-[115px] flex items-center justify-between'>
                    <img src={FooterIcon} alt="#" />
                    <div className='flex gap-6'>
                        <a href="#"><img src={TwitterIcon} width={33} height={27} alt="#" /></a>
                        <a href="#"><img src={facebookIcon} width={33} height={27} alt="#" /></a>
                        <a href="#"><img src={linkedinIcon} width={33} height={27} alt="#" /></a>
                    </div>
                    <p className='text-[#5C5C5C] text-xs font-bold'>Just type what's on your mind and we'll </p>
                </div>

            </div>
        </footer>
    );
};

export default index;