import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header, Footer } from '@/components/layouts';
import { Checkbox } from "antd";
import AvatarImg from "../../assets/profile/avatar.png"
import UsbImg from "../../assets/img/USB.jpg"
const Register = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        address: '',
        country: '', 
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Form ma'lumotlarini backend'ga yuborish
        console.log(formData);
      };

    // const navigate = useNavigate(); // navigate hook'ini ishlatamiz

    // const handleChange = (e) => {
    //   setFormData({ ...formData, [e.target.name]: e.target.value });
    // };
  
    // const handleSubmit = (e) => {
    //   e.preventDefault();
      
    //   // Ro'yxatdan o'tish uchun backendga ma'lumotlarni yuboramiz
    //   fetch('http://localhost:5175', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(formData),
    //   })
    //   .then(response => {
    //     if (!response.ok) {
    //       throw new Error('Ro\'yxatdan o\'tishda xatolik yuz berdi!');
    //     }
    //     return response.json(); // Javobni JSON formatida qaytaramiz
    //   })
    //   .then(data => {
    //     console.log('Success:', data);
    //     // Ro'yxatdan o'tish muvaffaqiyatli bo'lsa, foydalanuvchini asosiy sahifaga o'tkazamiz
    //     navigate('/'); // Asosiy sahifaga o'tish
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error); // Xatoliklarni ushlaymiz
    //   });
    // };



    return (
        <>
            <Header />

            <div className="container mx-auto max-w-[1440px] flex">

                <div>
                    <img src={UsbImg} alt="#" />
                </div>

                <div className=" w-[734px] h-[913px] p-6 bg-[#F1F1F1] shadow-lg">
                    <h2 className="text-[40px] font-bold text-center text-[#2091F9] mb-[30px]">Register</h2>
                    <p className='text-base text-center text-[#252B42] font-medium mb-[15px]'>Most calendars are designed for teams. Slate <br />
                        is designed for freelancers</p>
                    <div className='flex justify-center items-center mb-[37px]'>
                        <img src={AvatarImg} alt="#" />
                    </div>
                    <form onSubmit={handleSubmit}>

                        <div className='flex justify-center items-center gap-x-[22px]'>
                            <input
                                type="text"
                                name="firstName"
                                placeholder="Name"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="block w-[253px] h-[54px] rounded-[10px] p-5 mb-4 border border-[#8EC2F2]"
                            />
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="block w-[253px] h-[54px] rounded-[10px] p-5 mb-4 border border-[#8EC2F2]"
                            />
                        </div>

                        <div className='flex justify-center items-center gap-x-[22px]'>
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                className="block w-[253px] h-[54px] rounded-[10px] p-5 mb-4 border border-[#8EC2F2]"
                            />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Your phone number"
                                value={formData.phone}
                                onChange={handleChange}
                                className="block w-[253px] h-[54px] rounded-[10px] p-5 mb-4 border border-[#8EC2F2]"
                            />
                        </div>

                        <div className='flex justify-center items-center gap-x-[22px]'>
                        <input
                                type="text"
                                name="country"
                                placeholder="Country"
                                value={formData.country}
                                onChange={handleChange}
                                className="block w-[253px] h-[54px] rounded-[10px] p-5 mb-4 border border-[#8EC2F2]"
                            />
                            <input
                                type="text"
                                name="address"
                                placeholder="Address"
                                value={formData.address}
                                onChange={handleChange}
                                className="block w-[253px] h-[54px] rounded-[10px] p-5 mb-4 border border-[#8EC2F2]"
                            />
                        </div>

                        <div className='flex justify-center items-center gap-x-[22px]'>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                className="block w-[253px] h-[54px] rounded-[10px] p-5 mb-4 border border-[#8EC2F2]"
                            />
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Reapet Password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className="block w-[253px] h-[54px] rounded-[10px] p-5 mb-4 border border-[#8EC2F2]"
                            />
                        </div>

                        <div className='flex justify-center items-center'>
                            <Checkbox className=' mt-[38px]'>I Agree will all <a href="#" className='text-blue-600 font-medium text-base'>conditions</a></Checkbox>
                        </div>

                        <div className='flex justify-center items-center mt-5'>
                        <button
                            type="submit"
                            className="w-[309px] h-[64px]  rounded-[10px] text-base font-bold bg-blue-500 text-white p-2"
                        >
                            Sign Up
                        </button>
                        </div>
                    </form>
                </div>
            </div>


            <Footer />

        </>
    );
};

export default Register;
