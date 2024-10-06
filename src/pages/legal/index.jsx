import React from 'react';
import { Header, Footer } from '@/components/layouts';
import { Button } from "antd";
import { Link } from 'react-router-dom';
import "./style.scss"
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
} from '@chakra-ui/react'

const index = () => {
    return (
        <>
            <Header />
            <main>

                <section className='bg-[#FAFAFA]'>
                    <div className="container mx-auto max-w-[1440px]">

                        <div className='py-[120px]'>
                            <h1 className='text-2xl font-bold text-center text-[#737373] mb-2'>LEGAL</h1>
                            <h1 className='text-[58px] font-extrabold text-center text-[#252B42] '>Terms of Service</h1>
                            <p className='text-2xl font-medium text-center text-[#737373] mt-5'>Updated Dec 09, 19</p>

                            <div className='flex justify-center mt-[40px]'>
                                <Button type="primary" className='w-[236px] h-[68px] text-2xl font-bold'>Print Terms</Button>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container mx-auto max-w-[1440px]">
                        <div className='pt-[100px] flex justify-center gap-x-[70px]'>
                            <div>
                                <Link href="#" className='text-base font-bold text-[#737373]'>Standard Terms of Use</Link> <br /> <br />
                                <Link href="#" className=' text-base font-bold text-[#737373]'>Additional Terms</Link> <br /> <br />
                                <Link href="#" className=' text-base font-bold text-[#737373]'>Acceptable Use</Link> <br /><br />
                                <Link href="#" className=' text-base font-bold text-[#737373]'>Privacy Policy </Link> <br /><br />
                                <Link href="#" className=' text-base font-bold text-[#737373]'>Privacy Policy</Link> <br /><br />
                                <Link href="#" className=' text-base font-bold text-[#737373]'>Copyright and Trademark Policy</Link> <br /><br />
                                <Link href="#" className=' text-base font-bold text-[#737373]'>Cookie Statement</Link> <br /><br />
                            </div>

                            <div>
                                <div>
                                    <h1 className='text-2xl font-bold mb-6'>Introduction :</h1>
                                    <p className='text-base font-medium text-[#000000]'>Dolor sit amet, consectetur adipiscing elit. Phasellus feugiat elit vitae enim lacinia semper. <br />
                                        Cras nulla lectus, porttitor vitae urna iaculis, melisandre tincidunt lectus. Brienne nec tellus <br />
                                        sit amet massa auctor imperdiet id vitae diam. <br /> <br />

                                        Aenean Gendry est nec diam suscipit iaculis. Praesent urna velit, auctor nec turpis et, <br />
                                        vehicula lobortis sem. Vivamus convallis mi sagittis eleifend laoreet. Praesent vitae <br />
                                        venenatis enim. Nulla tincidunt Varys et lectus rhoncus laoreet. Aenean Gendry est nec <br />
                                        diam suscipit iaculis. Praesent urna velit, auctor nec turpis et, vehicula lobortis sem. Vivamus <br />
                                        convallis mi sagittis eleifend laoreet. Praesent vitae venenatis enim. Nulla tincidunt Varys <br />
                                        et lectus rhoncus laoreet.</p>
                                </div>

                                <div className='mt-6 mb-[125px]'>

                                    <Accordion defaultIndex={[0]} allowMultiple>

                                        <AccordionItem border='none'>
                                            <h2>
                                                <AccordionButton>
                                                    <Box as='span' flex='1' textAlign='left' fontSize={20} >
                                                        Account Terms
                                                    </Box>
                                                    <AccordionIcon />
                                                </AccordionButton>
                                            </h2>
                                            <AccordionPanel pb={4}>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod

                                            </AccordionPanel>
                                        </AccordionItem>

                                        <AccordionItem>
                                            <h2>
                                                <AccordionButton>
                                                    <Box as='span' flex='1' textAlign='left' fontSize={20}>
                                                        Referral fees/commissions and <br /> payment
                                                    </Box>
                                                    <AccordionIcon />
                                                </AccordionButton>
                                            </h2>
                                            <AccordionPanel pb={4}>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            </AccordionPanel>
                                        </AccordionItem>

                                        <AccordionItem>
                                            <h2>
                                                <AccordionButton>
                                                    <Box as='span' flex='1' textAlign='left' fontSize={20}>
                                                        Links/graphics on your site, in your emails, or <br /> other <br /> communications

                                                    </Box>
                                                    <AccordionIcon />
                                                </AccordionButton>
                                            </h2>
                                            <AccordionPanel pb={4}>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            </AccordionPanel>
                                        </AccordionItem>

                                        <AccordionItem>
                                            <h2>
                                                <AccordionButton>
                                                    <Box as='span' flex='1' textAlign='left' fontSize={20}>
                                                        Payments by PayPal

                                                    </Box>
                                                    <AccordionIcon />
                                                </AccordionButton>
                                            </h2>
                                            <AccordionPanel pb={4}>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            </AccordionPanel>
                                        </AccordionItem>

                                        <AccordionItem>
                                            <h2>
                                                <AccordionButton>
                                                    <Box as='span' flex='1' textAlign='left' fontSize={20}>
                                                        Payment <br /> schedule

                                                    </Box>
                                                    <AccordionIcon />
                                                </AccordionButton>
                                            </h2>
                                            <AccordionPanel pb={4} fontSize={16}>
                                                As long as your current affiliate earning are over $100, you'll be paid roughly every 45 days. <br />
                                                If you haven't earned $100 since your last payment, we'll pay you roughly 45 days after <br />
                                                you've crossed the threshold. Payments are only made via PayPal. <br />
                                            </AccordionPanel>
                                        </AccordionItem>

                                    </Accordion>

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
    );
};

export default index;