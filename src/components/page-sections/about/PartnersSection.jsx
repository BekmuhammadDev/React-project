import AboutLogo1 from "../../../assets/icons/AboutLogo1.svg"
import AboutLogo2 from "../../../assets/icons/AboutLogo2.svg"
import AboutLogo3 from "../../../assets/icons/AboutLogo3.svg"
import AboutLogo4 from "../../../assets/icons/AboutLogo4.svg"
import AboutLogo5 from "../../../assets/icons/AboutLogo5.svg"
import AboutLogo6 from "../../../assets/icons/AboutLogo6.svg"
const PartnersSection = () => (
  <section>
    <div className="container mx-auto max-w-[1440px]">
      <div>
        <div className='mt-[78px] mb-[115px]'>
          <h1 className='text-[40px] font-bold text-[#252B42] text-center'>Partners</h1>
          <p className='text-2xl text-[#737373] font-medium text-center'>Most calendars are designed for teams. <br />
            Slate is designed for freelancers</p>
        </div>

        <div className='flex justify-center  gap-x-[60px] mb-[138px]'>
          <img src={AboutLogo1} alt="#" />
          <img src={AboutLogo2} alt="#" />
          <img src={AboutLogo3} alt="#" />
          <img src={AboutLogo4} alt="#" />
          <img src={AboutLogo1} alt="#" />
          <img src={AboutLogo5} alt="#" />
          <img src={AboutLogo6} alt="#" />



        </div>
      </div>
    </div>
  </section>
);

export default PartnersSection;