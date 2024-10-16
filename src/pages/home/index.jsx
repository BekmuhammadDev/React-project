
import "./style.scss"
import { Header, Footer } from '@/components/layouts';
import { Button, Input } from "antd";
import MacImg from "../../assets/img/Macbook Pro.png"
import georgesIcon from "../../assets/icons/spoonfork.svg"
import PerfomenceIcon from "../../assets/icons/muzzel.svg"
import CotnetIcon from "../../assets/icons/message.svg"
import MckBook2 from "../../assets/img/MacbookPr-2.png"
import mackbook3 from "../../assets/img/MacbookPro-3.png"
import { Link } from "react-router-dom";
const index = () => {

  return (
    <>
      <Header />
        <main>
          <section>

            <div className='container mx-auto max-w-[1440px] '>

              <div className='bgimg'>
                <h1 className='text-[58px] font-extrabold text-white text-center pt-[80px] mb-[17px]'>Lightning fast prototyping </h1>
                <p className='text-center text-2xl font-medium text-white mb-[50px]'>Most calendars are designed for teams. Slate is designed <br />
                  for freelancers</p>
                <div className='flex justify-center items-center'>
                  <Button size='large' className='w-[236px] h-[68px] text-2xl font-bold text-[#2091F9]'>Try For Free</Button>
                </div>

                <div className='flex justify-center items-center pb-64 relative top-14 '>
                  <img src={MacImg} alt="#" width='1054px' height='589px' />
                </div>

                <div className='flex justify-center items-center'>
                  <div className='w-[884px] bg-[#E4E4E4] border-[3px] mt-[156px]'></div>
                </div>
              </div>


            </div>


          </section>

          <section>

            <div className="container mx-auto max-w-[1440px]">

              <div className='pt-[160px]'>
                <h1 className='text-center text-[40px] font-bold text-[#252B42] mb-4'>AMAZING FEATURES</h1>
                <p className='text-center text-2xl font-medium text-[#737373]'>Most calendars are designed for teams. <br />
                  Slate is designed for freelancers</p>
                <div>


                  <div className='flex justify-center  gap-[50px]'>

                    <div className='w-[344px] h-[409px] rounded-[10px] shadow-md px-[51px] py-10 mb-[160px] mt-[120px]'>

                      <div className='flex items-center justify-center mb-7'>
                        <img src={georgesIcon} alt="#" />
                      </div>

                      <div>
                        <h1 className='text-center text-2xl font-bold mb-7'>Gorgeous design</h1>
                        <p className='text-center text-base font-medium mb-7 text-[#737373]'>Slate helps you see how <br />
                          many more days you need <br />
                          to work to reach your <br />
                          financial goal </p>
                      </div>

                      <div className='flex items-center justify-center text-[#2091F9] text-base font-semibold'><a href="#">Learn more</a></div>
                    </div>

                    <div className='w-[344px] h-[409px] rounded-[10px] shadow-md px-[51px] py-10 mb-[160px] mt-[120px]'>

                      <div className='flex items-center justify-center mb-7'>
                        <img src={PerfomenceIcon} alt="#" />
                      </div>

                      <div>
                        <h1 className='text-center text-2xl font-bold mb-7'>Performance</h1>
                        <p className='text-center text-base font-medium mb-7 text-[#737373]'>Slate helps you see how <br />
                          many more days you need <br />
                          to work to reach your <br />
                          financial goal </p>
                      </div>

                      <div className='flex items-center justify-center text-[#2091F9] text-base font-semibold'><a href="#">Learn more</a></div>
                    </div>

                    <div className='w-[344px] h-[409px] rounded-[10px] shadow-md px-[51px] py-10 mb-[160px] mt-[120px]'>

                      <div className='flex items-center justify-center mb-7'>
                        <img src={CotnetIcon} alt="#" />
                      </div>

                      <div>
                        <h1 className='text-center text-2xl font-bold mb-7'>Content</h1>
                        <p className='text-center text-base font-medium mb-7 text-[#737373]'>Slate helps you see how <br />
                          many more days you need <br />
                          to work to reach your <br />
                          financial goal </p>
                      </div>

                      <div className='flex items-center justify-center text-[#2091F9] text-base font-semibold'><a href="#">Learn more</a></div>
                    </div>

                  </div>

                </div>
              </div>
            </div>


          </section>

          <section>
            <div className="container mx-auto max-w-[1440px]">
              <div className='flex justify-center gap-x-[84px] '>

                <div className='p-10'>
                  <h1 className='text-2xl font-bold text-[#2091F9] mb-[17px]'>UI KIT</h1>
                  <h1 className='text-[40px] font-bold text-[#252B42] mb-[17px]'>Headings, body and other <br />
                    common text elements</h1>
                  <p className='text-2xl font-medium text-[#737373]'>Most calendars are designed for <br /> teams. Slate is designed for <br /> freelancers</p>
                </div>

                <div className='relative left-20'>
                  <img src={MckBook2} alt="#" />
                </div>
              </div>

            </div>
          </section>

          <section>
            <div className="containercontainer mx-auto max-w-[1440px]">
              <div className='flex justify-center gap-x-[84px] mt-[300px]'>

                <div className='relative right-20'>
                  <img src={mackbook3} alt="#" />
                </div>

                <div className='pt-24'>
                  <h1 className='text-2xl font-bold text-[#2091F9] mb-[17px]'>COMPONENTS</h1>
                  <h1 className='text-[40px] font-bold text-[#252B42] mb-[17px]'>Toggle element based on <br />
                    the Card</h1>
                  <p className='text-2xl font-medium text-[#737373]'>Most calendars are designed for teams. <br /> Slate is designed for freelancers</p>
                </div>

              </div>

            </div>
          </section>

          <section>
            <div className="container mx-auto max-w-[1440px]">
              <div className='flex justify-center gap-x-[84px] mt-[300px]'>

                <div className='p-10'>
                  <h1 className='text-2xl font-bold text-[#2091F9] mb-[17px]'>CODE</h1>
                  <h1 className='text-[40px] font-bold text-[#252B42] mb-[17px]'>Used for adding notices</h1>
                  <p className='text-2xl font-medium text-[#737373]'>Most calendars are designed for <br /> teams. Slate is designed for <br /> freelancers</p>
                </div>

                <div className='relative left-20'>
                  <img src={MckBook2} alt="#" />
                </div>
              </div>

            </div>
          </section>

          <section>
            <div className="container mx-auto max-w-[1440px]">

              <div className='py-[120px] mt-[170px]'>
                <h1 className='text-2xl font-bold text-center text-[#737373] mb-2'>LEGAL</h1>
                <h1 className='text-[58px] font-extrabold text-center text-[#252B42] '>Terms of Service</h1>
                <div className='flex justify-center mt-[40px]'>
                  <Link to="/legal"><Button type="primary" className='w-[236px] h-[68px] text-2xl font-bold'>See Terms</Button></Link>
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