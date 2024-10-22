import React from 'react';
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
    );
};

export default index;