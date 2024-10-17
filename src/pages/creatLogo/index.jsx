import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ChevronRightIcon, CheckCircleIcon } from '@chakra-ui/icons'
import { Header} from '@/components/layouts';
import { Button, Stack } from '@chakra-ui/react'


const ProfileSavePage = () => {

    const [formData, setFormData] = useState({
        SiteName: '',
        Sitetype: 'hwllo',
        sitecolour: '',
        Slogan: '',
    });

    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);  // Har safar yuborishda xatoni tozalash

        try {
            // Ro'yxatdan o'tish ma'lumotlarini serverga yuborish
            const response = await axios.post('/api/register', formData);

            if (response.status === 200) {
                // Muvaffaqiyatli ro'yxatdan o'tgandan keyin foydalanuvchini boshqa sahifaga yo'naltiramiz
                navigate('/home');
            } else {
                setError('Ro\'yxatdan o\'tishda xatolik yuz berdi.');
            }
        } catch (error) {
            // Xato yuz berganda
            setError('Ro\'yxatdan o\'tishda xatolik: ' + error.response?.data?.message || error.message);
        }
    };


    const siteTypes = ["Blog", "E-commerce", "Portfolio", "Forum"];
    const siteColors = ["Red", "Blue", "Green", "Black", "Yellow"];

    const [selectedType, setSelectedType] = useState("");
    const [selectedColor, setSelectedColor] = useState("");

    const handleTypeChange = (e) => {
        setSelectedType(e.target.value);
    };

    const handleColorChange = (e) => {
        setSelectedColor(e.target.value);
    };

    return (
        <>
            <Header />
            <main>
                <section>
                    <div className="container mx-auto max-w-[1440px]">
                        <div className='py-[35px]'>
                            <h2 className='text-2xl text-[#737373] font-bold text-center '>USER</h2>
                            <h1 className='text-[58px] font-extrabold  text-[#252B42] text-center  bg-gradient-to-r from-orange-600 to-indigo-500 bg-clip-text text-transparent'>Create Your Logo</h1>

                        </div>
                    </div>
                </section>

                <section>
                    <div className="container mx-auto max-w-[1440px]">
                        <div className='flex justify-center'>
                            <div className='mt-[40px]'>

                                <div>
                                    <label className='text-base font-medium' htmlFor="firstName">Company Name</label>
                                    <div className="flex gap-[26px]">
                                        <input
                                            id='SiteName'
                                            type="text"
                                            name="Site Name"
                                            placeholder="Graphic Design"
                                           
                                            className="block w-[357px] h-[54px] rounded-[10px] mt-2 p-5 mb-[30px] border-2 border-[#E8E8E8]"
                                        />
                                        <CheckCircleIcon boxSize={10} color='#2187FF' mt='15px' />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="siteType" className='text-base font-medium'>Selected logo type:</label>
                                    <div className="flex gap-[26px]">
                                        <select id="siteType" value={selectedType} onChange={handleTypeChange} className="block text-[#B0B0B0] w-[357px] h-[54px] rounded-[10px] mt-2 px-5 mb-[30px] border-2 border-[#E8E8E8]" >
                                            <option value="">Minimalistic</option>
                                            {siteTypes.map((type, index) => (
                                                <option key={index} value={type}>
                                                    {type}
                                                </option>
                                            ))}
                                        </select>

                                        <CheckCircleIcon boxSize={10} color='#2187FF' mt='15px' />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="siteColor" className='text-base font-medium'>Selected site colour:</label>
                                    <div className="flex gap-[26px]">
                                        <select id="siteColor" value={selectedColor} onChange={handleColorChange} className="block text-[#B0B0B0] w-[357px] h-[54px] rounded-[10px] mt-2 px-5 mb-[30px] border-2 border-[#E8E8E8]">
                                            <option>Red</option>
                                            {siteColors.map((color, index) => (
                                                <option key={index} value={color}>
                                                    {color}
                                                </option>
                                            ))}
                                        </select>
                                        <CheckCircleIcon boxSize={10} color='#2187FF' mt='15px' />
                                    </div>
                                </div>

                                <div>
                                    <label className='text-base font-medium' htmlFor="Slogan">Slogan</label>
                                    <div className="flex gap-[26px]">
                                        <input
                                            id='Slogan'
                                            type="text"
                                            name="Slogan"
                                            placeholder="Figma"
                                           
                                            className="block w-[357px] h-[54px] rounded-[10px] mt-2 p-5 mb-[30px] border-2 border-[#E8E8E8]"
                                        />
                                        <CheckCircleIcon boxSize={10} color='#2187FF' mt='15px' />
                                    </div>
                                </div>

                                <div className='flex justify-center mt-[46px] mb-[74px]'>
                                    <Stack direction='row' spacing={4}>

                                        <Link to='/CardUntiteld'><Button rightIcon={<ChevronRightIcon boxSize={8} />} colorScheme='blue' w='145px' h='60px' fontSize={16} fontWeight='bold'>
                                            Create
                                        </Button></Link>
                                    </Stack>
                                </div>

                            </div>

                        </div>
                    </div>
                </section>
            </main>

        </>
    );
};

export default ProfileSavePage;
