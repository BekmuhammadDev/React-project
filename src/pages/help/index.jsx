import React from 'react';
import { Header, Footer } from '@/components/layouts';
import { Button } from "antd";
import { Link } from 'react-router-dom';
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
                            <h1 className='text-2xl font-bold text-center text-[#737373] mb-2'>FAQ</h1>
                            <h1 className='text-[58px] font-extrabold text-center text-[#252B42] '>Help</h1>
                            <p className='text-base font-medium text-center text-[#737373] mt-5'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium <br />
                                doloremque laudantium, totam rem aperiam, eaque ipsa.
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container mx-auto max-w-[1440px]">
                        <div className='pt-[100px] flex justify-center'>

                                <div className='mb-[151px]'>

                                    <Accordion defaultIndex={[0]} allowMultiple>

                                        <AccordionItem border='none' w={812}>
                                            <h2>
                                                <AccordionButton>
                                                    <Box as='span' flex='1' textAlign='left' fontSize={20} >
                                                        Account Terms
                                                    </Box>
                                                    <AccordionIcon />
                                                </AccordionButton>
                                            </h2>
                                            <AccordionPanel pb={4}>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod,consectetur adipiscing elit, sed do eiusmod  adipiscing elit, sed do eiusmod

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