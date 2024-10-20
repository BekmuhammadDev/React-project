import React from 'react';
import { Header, Footer } from '@/components/layouts';
import { Button, ButtonGroup } from '@chakra-ui/react'
import ProfileSave from "../../assets/img/ProfileSaveImg.png"
import { Link } from 'react-router-dom';

const ProfileSavePage = () => {

    return (
        <>
            <Header />

            <main>
                <section>
                    <div className='container mx-auto max-w-[1440px]'>
                        <div className='py-[120px] bg-[#FAFAFA]'>
                            <h2 className='text-2xl text-[#737373] font-bold text-center '>USER</h2>
                            <h1 className='text-[58px] font-semibold text-[#252B42] text-center'>PROFILE SETTINGS</h1>

                        </div>
                    </div>
                </section>

                <section>
                    <div className="container mx-auto max-w-[1440px]">



                        <div className='flex justify-center mt-9'>
                            <img src={ProfileSave} alt="#" />
                        </div>

                        <div className='flex justify-center mt-[77px]'>
                            <h1 className='text-[58px] font-extrabold'>Your Data Saved</h1>
                        </div>

                        <div className='flex justify-center mt-[87px] mb-[74px]'>
                           <Link to="/mainLayout"> <Button colorScheme='blue' w={236} h={68}>Thanks</Button></Link>
                        </div>


                    </div>

                </section>
            </main>

            <Footer />

        </>
    );
};

export default ProfileSavePage;
