import React from 'react';
import { Header, Footer } from '@/components/layouts';
import { Button } from "antd";
import ErrorIMg from "../../assets/img/Error.png"

const index = () => {
  return (
    <>
      <Header />
      <main>

        <section className='bg-[#FAFAFA]'>
          <div className="container mx-auto max-w-[1440px]">

            <div className='py-[120px]'>
              <h1 className='text-2xl font-bold text-center text-[#737373] mb-2'>404</h1>
              <h1 className='text-[58px] font-extrabold text-center text-[#252B42] '>Page Not Found</h1>
              <p className='text-base font-medium text-center text-[#737373] mt-5'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium <br />
                doloremque laudantium, totam rem aperiam, eaque ipsa.
              </p>

              <div className='flex justify-center mt-[40px]'>
                <img src={ErrorIMg} alt="#" />
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