import React, { useState, useEffect } from 'react';
import "./style.scss"
import { Button } from "antd";
import { Link } from 'react-router-dom';
import { FaBell } from "react-icons/fa";
import Profile from "../../../assets/profile/ProfileImgNov.png"
import AssisAi from "../../../assets/icons/assistai.jpg"
const index = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [registerData, setRegisterData] = useState(false);
    
    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    useEffect (()=>{
        const RegisterData=localStorage.getItem('RegisterData');
        if (RegisterData) {
            setRegisterData(true)
        }
    },[])

    // ///////////////////////////////////////////
    const [profileImage, setProfileImage] = useState(null);

    // Sahifa yuklanganda localStorage'dan suratni olish
    useEffect(() => {
        const savedImage = localStorage.getItem('profileImage');
        if (savedImage) {
            setProfileImage(savedImage); // Saqlangan suratni yuklash
        }
    }, []);



    return (
        <header>
            <div className="container mx-auto max-w-[1440px]">
                <div className='flex justify-between py-[50px] px-5  items-center '>
                    <div className='justify-start'>
                        <Link to="/"> <img src={AssisAi} alt="#" width={100} height={20} className='rounded-[30%]' /></Link>
                    </div>

                    <div className='flex gap-[127px]'>
                        <ul className='flex gap-10 items-center'>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/product">Product</Link></li>
                            <li><Link to="/pricing">Pricing</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/help">Help</Link></li>

                        </ul>

                        { (isLoggedIn || registerData ) ? (
                            <>
                                <div className='flex items-center gap-[70px] ml-2'>
                                    <Link to="/"><FaBell size={39} color='#BDBDBD' /></Link>
                                    <Link to="/ProfileSetting">
                                
                                {profileImage ? (
                                    <img src={profileImage} alt="Profile" width="88" height="88" className='rounded-[50%]' />
                                ) : (
                                    <img src={Profile} alt="Profile" width="88" height="88" className='rounded-[50%]' />
                                )}
                            </Link>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className='flex gap-4'>

                                    <Link to="/register">
                                        <Button type="primary" className='w-[129px] h-[64px] rounded-[10px] text-base font-bold'>
                                            Sign up
                                        </Button></Link>

                                    <Link to="/auth-layout"><Button size='large' className='w-[138px] h-[60px] text-base font-bold'>Login</Button></Link>
                                </div>
                            </>
                        )}



                    </div>


                </div>
            </div>
        </header>
    );
};

export default index;