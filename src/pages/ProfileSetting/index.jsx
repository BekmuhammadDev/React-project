import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header, Footer } from '@/components/layouts';
import { Button, Stack } from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon, WarningIcon } from '@chakra-ui/icons'
import AvatarPng from "../../assets/profile/avatar.png"

const ProfileSetting = () => {

    // /////////////// rasm yuklash //////////////////////
    const [preview, setPreview] = useState(null);

    useEffect(() => {
        const savedImage = localStorage.getItem('profileImage');
        if (savedImage) {
            setPreview(savedImage);
        }
    }, []);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64Image = reader.result;
                setPreview(base64Image); // Fayl preview qilish uchun

                // LocalStorage'ga saqlash
                localStorage.setItem('profileImage', base64Image);

                // Sahifani yangilash
                window.location.reload();
            };
            reader.readAsDataURL(file); // Faylni base64 formatiga o‘qish
        }
    };

    const handleImageClick = () => {
        document.getElementById('file-input').click(); // Fayl tanlash inputini bosish
    };

    // /////////////////////////////////////////////////////

    // ///////////////////////// Form //////////////////////////
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        country: '',
        address: '',
        zip: ''
    });

    const [formErrors, setFormErrors] = useState({});
    const navigate = useNavigate();


    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };


    const validateForm = () => {
        let errors = {};
        if (!formData.firstName) errors.firstName = 'First Name is required';
        if (!formData.lastName) errors.lastName = 'Last Name is required';
        if (!formData.email) errors.email = 'Email is required';
        if (!formData.phone) errors.phone = 'Phone Number is required';
        if (!formData.company) errors.company = 'Company is required';
        if (!formData.country) errors.country = 'Country is required';
        if (!formData.address) errors.address = 'Address is required';
        if (!formData.zip) errors.zip = 'Zip Code is required';
        return errors;
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        const errors = validateForm();
        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {

            localStorage.setItem('formData', JSON.stringify(formData));


            navigate('/profileSave');
        }
    };

    // /////////////////////////////////////////////////////


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
                            <div className="profile">

                                {preview ? (
                                    <img
                                        src={preview}
                                        alt="Selected"
                                        width="177"
                                        height="177"
                                        className="rounded-[50%] cursor-pointer"
                                        onClick={handleImageClick}
                                    />
                                ) : (
                                    <div
                                        style={{
                                            width: '177px',
                                            height: '177px',
                                            borderRadius: '50%',
                                            backgroundColor: '#f0f0f0',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            cursor: 'pointer',
                                        }}
                                        onClick={handleImageClick}
                                    >
                                        <img
                                            src={AvatarPng}
                                            alt="Avatar"
                                            width="177"
                                            height="177"
                                        />
                                    </div>
                                )}

                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    style={{ display: 'none' }}
                                    id="file-input"
                                />
                            </div>
                        </div>
                        <form onSubmit={handleSubmit}>


                            <div className='flex justify-center items-center gap-x-[30px]'>
                                <div>
                                    <label className='text-base font-medium' htmlFor="firstName">First Name</label>
                                    {formErrors.firstName && <p className="text-red-500">{formErrors.firstName}</p>}
                                    <input
                                        id='firstName'
                                        type="text"
                                        name="firstName"
                                        placeholder="Name"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        className="block w-[357px] h-[54px] rounded-[10px] mt-2 p-5 mb-[30px] border-2 border-[#E8E8E8]"
                                    />
                                </div>

                                <div>
                                    <label className='text-base font-medium' htmlFor="lastName">Last Name</label>
                                    {formErrors.lastName && <p className="text-red-500">{formErrors.lastName}</p>}
                                    <input
                                        id='lastName'
                                        type="text"
                                        name="lastName"
                                        placeholder="Last Name"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        className="block w-[357px] h-[54px] rounded-[10px] mt-2 p-5 mb-[30px] border-2 border-[#E8E8E8]"
                                    />
                                </div>
                            </div>

                            <div className='flex justify-center items-center gap-x-[22px]'>
                                <div>
                                    <label className='text-base font-medium' htmlFor="email">E-mail Address</label>
                                    {formErrors.email && <p className="text-red-500">{formErrors.email}</p>}
                                    <input
                                        id='email'
                                        type="email"
                                        name="email"
                                        placeholder="example@gmail.com"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="block w-[357px] h-[54px] rounded-[10px] mt-2 p-5 mb-[30px] border-2 border-[#E8E8E8]"
                                    />
                                </div>

                                <div>
                                    <label className='text-base font-medium' htmlFor="phone">Phone Number</label>
                                    {formErrors.phone && <p className="text-red-500">{formErrors.phone}</p>}
                                    <input
                                        id='phone'
                                        type="tel"
                                        name="phone"
                                        placeholder="Your phone number"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="block w-[357px] h-[54px] rounded-[10px] mt-2 p-5 mb-[30px] border-2 border-[#E8E8E8]"
                                    />
                                </div>
                            </div>


                            <div className='flex justify-center items-center gap-x-[22px]'>
                                <div>
                                    <label className='text-base font-medium' htmlFor="company">Company</label>
                                    {formErrors.company && <p className="text-red-500">{formErrors.company}</p>}
                                    <input
                                        id='company'
                                        type="text"
                                        name="company"
                                        placeholder="Company"
                                        value={formData.company}
                                        onChange={handleInputChange}
                                        className="block w-[357px] h-[54px] rounded-[10px] mt-2 p-5 mb-[30px] border-2 border-[#E8E8E8]"
                                    />
                                </div>

                                <div>
                                    <label className='text-base font-medium' htmlFor="country">Country</label>
                                    {formErrors.country && <p className="text-red-500">{formErrors.country}</p>}
                                    <input
                                        id='country'
                                        type="text"
                                        name="country"
                                        placeholder="Country"
                                        value={formData.country}
                                        onChange={handleInputChange}
                                        className="block w-[357px] h-[54px] rounded-[10px] mt-2 p-5 mb-[30px] border-2 border-[#E8E8E8]"
                                    />
                                </div>
                            </div>


                            <div className='flex justify-center items-center gap-x-[22px]'>
                                <div>
                                    <label className='text-base font-medium' htmlFor="address">Address</label>
                                    {formErrors.address && <p className="text-red-500">{formErrors.address}</p>}
                                    <input
                                        id='address'
                                        type="text"
                                        name="address"
                                        placeholder="Address"
                                        value={formData.address}
                                        onChange={handleInputChange}
                                        className="block w-[357px] h-[54px] rounded-[10px] mt-2 p-5 mb-[30px] border-2 border-[#E8E8E8]"
                                    />
                                </div>

                                <div>
                                    <label className='text-base font-medium' htmlFor="zip">Zip Code</label>
                                    {formErrors.zip && <p className="text-red-500">{formErrors.zip}</p>}
                                    <input
                                        id='zip'
                                        type="text"
                                        name="zip"
                                        placeholder="560000"
                                        value={formData.zip}
                                        onChange={handleInputChange}
                                        className="block w-[357px] h-[54px] rounded-[10px] mt-2 p-5 mb-[30px] border-2 border-[#E8E8E8]"
                                    />
                                </div>
                            </div>


                            <div className='mt-[200px]'>
                                <Stack direction='row' spacing={1} className='justify-between'>
                                    <Button leftIcon={<ChevronLeftIcon />} colorScheme='blue' variant='outline'>
                                        Back
                                    </Button>
                                    <Button rightIcon={<ChevronRightIcon />} type='submit' colorScheme='blue' variant='solid'>
                                        Save
                                    </Button>
                                </Stack>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
            <Footer />

        </>
    );
};

export default ProfileSetting;
