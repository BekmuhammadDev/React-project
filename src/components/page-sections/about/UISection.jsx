const UISection = () => (
    <section className='bg-[#252B42] py-[130px]'>
      <div className="container mx-auto max-w-[1440px] text-center">
        <h1 className='text-white text-[40px] font-bold'>A modular UI Kit</h1>
        <p className='text-[#BDBDBD] text-[24px] font-medium'>Most calendars are designed for teams. Slate is designed for freelancers</p>
        <div className='flex justify-center gap-4 mt-12'>
          <Button type="primary" className='w-[137px] h-[64px] rounded-[10px] text-base font-bold'>Buy now</Button>
          <Button size='large' className='w-[185px] h-[60px] text-base font-bold text-white bg-inherit'>Try for free</Button>
        </div>
      </div>
    </section>
  );

  export default UISection;