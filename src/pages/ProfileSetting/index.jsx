import React, { useState } from 'react';
import { Header, Footer } from '@/components/layouts';
import { Button, Flex, Stack } from '@chakra-ui/react'
import AvatarImg from "../../assets/profile/avatar.png"
import { ChevronLeftIcon, ChevronRightIcon, WarningIcon } from '@chakra-ui/icons'

const Register = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        country: '',
        company: '',
        address: '',
        zip: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form ma'lumotlarini backend'ga yuborish
        console.log(formData);
    };


    return (
        <>
            <Header />

            <div className="container mx-auto max-w-[1440px]">

                <div className='py-[120px] bg-[#FAFAFA]'>
                    <h2 className='text-2xl text-[#737373] font-bold text-center '>USER</h2>
                    <h1 className='text-[58px] font-semibold text-[#252B42] text-center'>PROFILE SETTINGS</h1>

                </div>

                <div className='flex justify-center mt-[165px]'>
                    <div className=" p-6 ">
                        <div className='flex justify-center items-center mb-[52px]'>
                            <img src={AvatarImg} alt="#" />
                        </div>
                        <form onSubmit={handleSubmit}>

                            <div className='flex justify-center items-center gap-x-[30px]'>

                                <div>
                                    <label className='text-base font-medium' htmlFor="firstName">First Name</label>
                                    <input
                                        id='firstName'
                                        type="text"
                                        name="firstName"
                                        placeholder="Name"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="block w-[357px] h-[54px] rounded-[10px] mt-2 p-5 mb-[30px] border-2 border-[#E8E8E8]"
                                    />
                                </div>

                                <div>
                                    <label className='text-base font-medium' htmlFor="LastName">Last Name</label>
                                    <input
                                        id='LastName'
                                        type="text"
                                        name="lastName"
                                        placeholder="Last Name"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="block w-[357px] h-[54px] rounded-[10px] mt-2 p-5 mb-[30px] border-2 border-[#E8E8E8]"
                                    />
                                </div>
                            </div>

                            <div className='flex justify-center items-center gap-x-[22px]'>
                                <div>
                                    <label className='text-base font-medium' htmlFor="email">E-mail Address</label>
                                    <input
                                        id='email'
                                        type="email"
                                        name="email"
                                        placeholder="example@gmail.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="block w-[357px] h-[54px] rounded-[10px] mt-2 p-5 mb-[30px] border-2 border-[#E8E8E8]"
                                    />
                                </div>

                                <div>
                                    <label className='text-base font-medium' htmlFor="Phone Number">Phone Number</label>
                                    <input
                                        id='Phone Number'
                                        type="tel"
                                        name="phone"
                                        placeholder="Your phone number"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="block w-[357px] h-[54px] rounded-[10px] mt-2 p-5 mb-[30px] border-2 border-[#E8E8E8]"
                                    />
                                </div>
                            </div>

                            <div className='flex justify-center items-center gap-x-[22px]'>

                                <div>
                                    <label className='text-base font-medium' htmlFor="Company">Company</label>
                                    <input
                                        id='Company'
                                        type="text"
                                        name="Company"
                                        placeholder="example.com"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="block w-[357px] h-[54px] rounded-[10px] mt-2 p-5 mb-[30px] border-2 border-[#E8E8E8]"
                                    />
                                </div>

                                <div>
                                    <label className='text-base font-medium' htmlFor="Country">Country</label>
                                    <input
                                        id='Country'
                                        type="text"
                                        name="country"
                                        placeholder="Country"
                                        value={formData.country}
                                        onChange={handleChange}
                                        className="block w-[357px] h-[54px] rounded-[10px] mt-2 p-5 mb-[30px] border-2 border-[#E8E8E8]"
                                    />

                                </div>

                            </div>

                            <div className='flex justify-center items-center gap-x-[22px]'>


                                <div>
                                    <label className='text-base font-medium' htmlFor="Address">Address</label>
                                    <input
                                        id='Address'
                                        type="text"
                                        name="Address"
                                        placeholder="Address"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className="block w-[357px] h-[54px] rounded-[10px] mt-2 p-5 mb-[30px] border-2 border-[#E8E8E8]"
                                    />
                                </div>

                                <div>
                                    <label className='text-base font-medium' htmlFor="Zip Code">Zip Code</label>
                                    <input
                                        id='Zip Code'
                                        type="number"
                                        name="Zip Code"
                                        placeholder="560000"
                                        value={formData.zip}
                                        onChange={handleChange}
                                        className="block w-[357px] h-[54px] rounded-[10px] mt-2 p-5 mb-[30px] border-2 border-[#E8E8E8]"
                                    />
                                </div>

                            </div>
                        </form>

                        <div className=' mt-[200px]'>
                            <Stack direction='row' spacing={1} className='justify-between'>
                                <Button leftIcon ={<ChevronLeftIcon />} colorScheme='blue' variant='outline'>
                                    Back
                                </Button>
                                <Button rightIcon={<ChevronRightIcon />} colorScheme='blue' variant='solid'>
                                    Save
                                </Button>
                            </Stack>
                        </div>

                    </div>
                </div>
            </div>


            <Footer />

        </>
    );
};

export default Register;
