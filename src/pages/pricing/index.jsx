// import React from 'react';
import { Header, Footer } from '@/components/layouts';
import { Button } from "antd";
import React, { useState } from 'react';
import CardIcon1 from "../../assets/icons/restaurantmenu1.svg"
import CardIcon2 from "../../assets/icons/restaurant-menu2.svg"
import CardIcon3 from "../../assets/icons/restaurant-menu3.svg"
import Accardion from "@components/accardion"
import Card from "@components/ui/pricing_card"

import "./style.scss"

const index = () => {

  const [isYearly, setIsYearly] = useState(false);

  const handleYearlyClick = () => {
    setIsYearly(true);
  };

  const handleMonthlyClick = () => {
    setIsYearly(false);
  };


  return (
    <>
      <Header />

      <section className='bg-[#FAFAFA]'>
        <div className="container mx-auto max-w-[1440px]">
          <div className='py-[120px] '>
            <h1 className='text-2xl font-bold text-center text-[#737373] mb-[17px]'>PRICING</h1>
            <div className='flex justify-center items-center  mb-[17px]'>
              <h1 className='text-[58px] font-extrabold text-[#252B42]'>Pricing that <span className='text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-500'>scales with you</span></h1>
            </div>
            <p className='text-2xl font-medium text-[#737373] text-center'>Most calendars are designed for teams. Slate is designed <br />
              for freelancers</p>
          </div>
        </div>
      </section>

      <section>

        <div className="container mx-auto max-w-[1440px]">
          <div className='py-[100px]'>

            <div className='flex justify-center items-center'>

              <div className=' w-[334px] h-[48px] rounded-sm'>

                <Button onClick={handleMonthlyClick}
                  className={` w-[131px] h-[48px] font-bold rounded-none border ${isYearly ? 'bg-[#EEEEEE] border-[#E9E9E9] text-[#D1D1D1] border-2' : ' text-[#2091F9] border-gray'
                    }`}>Monthly</Button>


                <Button onClick={handleYearlyClick}
                  className={` ${isYearly ? 'w-[105px] h-[48px]' : 'w-[203px] h-[48px]'} font-bold rounded-none border ${isYearly ? 'bg-[#1A9CF1] text-white rounded-sm' : 'bg-gray-100 text-[#2091F9] border-gray'
                    }`}
                > {isYearly ? 'Yearly' : 'Yearly ( save 20% )'}</Button>
              </div>

            </div>

            <div className='flex justify-center items-center gap-[50px] mt-[60px]'>

              {!isYearly && (
                <div className='w-[400px] h-[861px] rounded-[10px] border border-[#2091F9] p-10 shadow-md'>

                  <div className='py-[30px] '>
                    <h1 className='text-2xl font-bold text-[#252B42] text-center mb-[16px]'>FREE</h1>
                    <p className='text-base font-bold text-[#737373] text-center'>Organize across all <br />
                      apps by hand</p>
                  </div>

                  <div className='flex justify-center items-center gap-[10px] my-[42px]'>
                    <h1 className='text-[58px] font-extrabold text-[#2091F9]'>0</h1>
                    <div>
                      <h1 className='text-2xl font-bold text-[#2091F9]'>$</h1>
                      <p className='text-base font-bold text-[#8EC2F2]'>Per Month</p>
                    </div>
                  </div>

                  <div className='flex justify-center items-center'>
                    <div className="w-[277px] h-[364px]  border-blue-300">

                      <ul className='mb-[67px]'>
                        <li className="flex items-center mt-7">
                          <svg className="w-[35px] h-[35px] text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                          </svg>
                          <span className='text-base font-medium text-[#252B42]'>Unlimited product updates</span>
                        </li>

                        <li className="flex items-center mt-7">
                          <svg className="w-[35px] h-[35px] text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                          </svg>
                          <span className='text-base font-medium text-[#252B42]'>Unlimited Shares</span>
                        </li>

                        <li className="flex items-center mt-7">
                          <svg className="w-[35px] h-[35px] text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                          </svg>
                          <span className='text-base font-medium text-[#252B42]'>Every feature in Figmaland</span>
                        </li>

                        <li className="flex items-center mt-7">
                          <svg className="w-[35px] h-[35px] text-gray-300 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                          </svg>
                          <span className='text-base font-medium text-[#252B42]'>1GB Cloud storage</span>
                        </li>

                        <li className="flex items-center mt-7">
                          <svg className="w-[35px] h-[35px] text-gray-300 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                          </svg>
                          <span className='text-base font-medium text-[#252B42]'>Email and community <br /> support</span>
                        </li>
                      </ul>

                      <button className="w-[277px] h-[64px] bg-blue-500 text-white font-bold rounded-[10px] hover:bg-blue-600">
                        Order Now
                      </button>
                    </div>


                  </div>

                </div>
              )}


              <div className={`${isYearly ? 'w-[750px] h-[861px]' : 'w-[450px] h-[861px]'} pt-[40px] rounded-[10px] border border-[#2091F9]  bg-gradient-to-tr from-teal-300 to-blue-500`}>

                <div className='flex justify-center items-center mt-[20px]'>
                  <div className='w-[238px] h-[166px]'>
                    <h1 className='text-center text-[40px] font-bold text-[#FFFFFF]'>STANDARD</h1>
                    <p className='text-[22px] font-bold text-[#FFFFFF] text-center'>Organize across all
                      apps by hand</p>
                  </div>
                </div>

                <div className='flex justify-center items-center gap-[10px] my-[27px]'>
                  <h1 className='text-[58px] font-extrabold text-white'>120</h1>
                  <div>
                    <h1 className='text-[36px] font-bold text-white mb-6'>$</h1>

                  </div>
                </div>

                <div className='flex justify-center items-center'>
                  <div className="w-[277px] h-[364px]  border-blue-300">

                    <ul className='mb-[67px]'>
                      <li className="flex items-center mt-7">
                        <svg className="w-[35px] h-[35px] text-white mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                        <span className='text-base font-medium text-white'>100+ Ui/UX Designs for you</span>
                      </li>

                      <li className="flex items-center mt-7">
                        <svg className="w-[35px] h-[35px] text-white mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                        <span className='text-base font-medium text-white'>Unlimited Shares</span>
                      </li>

                      <li className="flex items-center mt-7">
                        <svg className="w-[35px] h-[35px] text-white mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                        <span className='text-base font-medium text-white'>Every feature in Figmaland</span>
                      </li>

                      <li className="flex items-center mt-7">
                        <svg className="w-[35px] h-[35px] text-white mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                        <span className='text-base font-medium text-white'>1GB Cloud storage</span>
                      </li>

                      <li className="flex items-center mt-7">
                        <svg className="w-[35px] h-[35px] text-white mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                        <span className='text-base font-medium text-white'>Email and community <br /> support</span>
                      </li>
                    </ul>

                    <button className="w-[277px] h-[64px] bg-white text-[#2091F9] font-bold rounded-[10px] hover:bg-slate-100">
                      Order Now
                    </button>
                  </div>


                </div>

                <div>

                </div>

              </div>


            </div>

          </div>
        </div>
      </section>

      <section className='bg-[#F4F4F4]'>
        <div className="container mx-auto max-w-[1440px]">

          <div className='py-[160px] flex justify-center items-center gap-[52px] '>

            <div className='w-[294px] h-[160px]'>
              <div className='flex text-2xl font-bold text-[#252B42] items-center gap-[20px] mb-[10px]'>
                <img src={CardIcon1} alt="#" />
                <h1>A modular UI kit</h1>
              </div>
              <div className='pl-1'>
                <p className='text-base font-medium text-[#737373]'>Slate helps you see how many <br />
                  more days you need to work to <br />
                  reach your financial goal.</p>
              </div>
            </div>

            <div className='w-[294px] h-[160px]'>
              <div className='flex text-2xl font-bold text-[#252B42] items-center gap-[20px] mb-[10px]'>
                <img src={CardIcon2} alt="#" />
                <h1>Handy plugins
                </h1>
              </div>
              <div className='pl-1'>
                <p className='text-base font-medium text-[#737373]'>Slate helps you see how many <br />
                  more days you need to work to <br />
                  reach your financial goal.</p>
              </div>
            </div>

            <div className='w-[294px] h-[160px]'>
              <div className='flex text-2xl font-bold text-[#252B42] items-center gap-[20px] mb-[10px]'>
                <img src={CardIcon3} alt="#" />
                <h1>Speedy build tools
                </h1>
              </div>
              <div className='pl-1'>
                <p className='text-base font-medium text-[#737373]'>Slate helps you see how many <br />
                  more days you need to work to <br />
                  reach your financial goal.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section>
        <div className="container mx-auto">

          <div className='py-[160px]'>
            <h1 className='text-center font-bold text-[40px] text-[#2091F9] mb-[60px]'>FAQ</h1>

            <div className='flex justify-center items-center'>


              <div className='w-[438px] h-[254px]'>
                <Accardion selectedId={1} /> <br />
                <Accardion selectedId={2} /><br />
                <Accardion selectedId={3} /><br />
                <Accardion selectedId={4} /><br />

              </div>

              <div className='w-[438px] h-[254px]'>
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

      <Footer />
    </>
  )
}

export default index;