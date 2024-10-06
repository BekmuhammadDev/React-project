import React from 'react';
import { Header, Footer } from '@/components/layouts';
import Workimg from "../../assets/img/ContactImg.png"
import TwitterIcon from "../../assets/icons/twitter.svg"
import FacebookIcon from '../../assets/icons/facebook.svg'
import LinkedIcon from "../../assets/icons/linkedin.svg"
import Location from "../../assets/icons/Location.svg"
import PhoneIcon from "../../assets/icons/phoneLogo.svg"
import EmailIcon from "../../assets/icons/EmailIcon.svg"
import { Button } from "antd";


const index = () => {
  return (
    <>
      <Header />
      <main>

        <section className='bg-[#FAFAFA]'>
          <div className="container mx-auto max-w-[1440px]">

            <div className='py-[120px]'>
              <h1 className='text-2xl font-bold text-center text-[#737373] mb-2'>CONTACT</h1>
              <h1 className='text-[58px] font-extrabold text-center text-[#252B42] '>We’re here  </h1>
              <h1 className='text-[58px] font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-blue-500 mb-2'>to help</h1>
              <p className='text-2xl font-medium text-center text-[#737373] mb-10'>Most calendars are designed for teams. Slate is designed <br />
                for freelancers
              </p>
            </div>

            <div className='flex justify-center items-center'>
              <img src={Workimg} alt="#" />
            </div>
          </div>
        </section>

        <section>
          <div className="container mx-auto max-w-[1440px]">
            <div className='py-[160px]'>

              <div>
                <h1 className='text-[40px] font-bold text-[#252B42] text-center'>Get in touch</h1>
                <p className='text-2xl font-medium text-[#737373] text-center mt-5'>Most calendars are designed for teams. <br />
                  Slate is designed for freelancers</p>
              </div>

              <div className='flex justify-center items-center gap-x-12 mt-[77px]'>
                <img src={TwitterIcon} alt="#" />
                <img src={FacebookIcon} alt="#" />
                <img src={LinkedIcon} alt="#" />

              </div>

              <div className='flex justify-center items-center mt-[84px]'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60051.63172433774!2d69.20958396974243!3d41.29697981981707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2sTashkent%2C%20Uzbekistan!5e1!3m2!1sen!2s!4v1727958374189!5m2!1sen!2s" width="871" height="323" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

              </div>

              <div className='flex justify-center items-center gap-x-[27px] mt-[100px]'>

                <div>
                  <div className='flex justify-center'> <img src={Location} alt="#" /></div>
                  <p className='text-base font-medium mt-5  text-[#252B42]'>6386 Spring St undefined Anchorage, <br />
                    Georgia 12473 United States</p>
                </div>

                <div>
                  <div className='flex justify-center'><img src={PhoneIcon} alt="#" /></div>
                  <p className='text-base font-medium  mt-5 text-[#252B42]'>(843) 555-0130</p>
                </div>

                <div>
                  <div className='flex justify-center'><img src={EmailIcon} alt="#" /></div>
                  <p className='text-base font-medium  mt-5 text-[#252B42]'>willie.jennings@example.com</p>
                </div>

              </div>

              <div className='flex justify-center'>
                <div className=' w-[868px] h-[704px] rounded-[20px] shadow-md border py-[52px] px-[80px] mt-[114px] '>
                  <div>
                    <h1 className='text-2xl font-bold text-[#252B42] text-center'>Contact Us</h1>
                  </div>

                  <div className='flex justify-center mt-[45px]'>
                    <input type="text" placeholder='Your Name' className='w-[708px] h-[64px] bg-[#E6E6E6] pl-[25px] rounded-[10px]' />
                  </div>

                  <div className='flex justify-center mt-[45px]'>
                    <input type="text" placeholder='Your Email' className='w-[708px] h-[64px] bg-[#E6E6E6] pl-[25px] rounded-[10px]' />
                  </div>

                  <div className='flex justify-center mt-[45px]'>
                    <textarea placeholder='Your Message' className='w-[708px] h-[193px] rounded bg-[#E6E6E6] pt-[23px] pl-5'></textarea>
                  </div>

                  <div className=' mt-[45px]'>
                    <Button type="primary" className='w-[145px] h-[64px] text-base font-bold'>Send</Button>
                  </div>


                </div>
              </div>

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

      </main>
      <Footer />
    </>
  )
}

export default index;