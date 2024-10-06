import React, { useState, useEffect } from 'react';
import "./style.scss"
import { Button } from "antd";
import { Link } from 'react-router-dom';
import { FaBell } from "react-icons/fa";
import Profile from "../../../assets/profile/ProfileImgNov.png"
const index = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // LocalStorage-dan tokenni olish
        const token = localStorage.getItem('token');

        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    return (
        <header>
            <div className="container mx-auto max-w-[1440px]">
                <div className='flex justify-between py-[50px] px-5 gap-x-[151px] items-center '>
                    <h1 className='text-2xl font-normal'>Web designer virtual assistant</h1>

                    <div className='flex gap-[54px]'>
                        <ul className='flex gap-10 items-center'>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/product">Product</Link></li>
                            <li><Link to="/pricing">Pricing</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/help">Help</Link></li>

                        </ul>

                        {isLoggedIn ? (
                            <>
                                <div className='flex items-center gap-[70px] ml-2'>
                                    <Link href="/"><FaBell size={39} color='#BDBDBD' /></Link>
                                    <Link href="./ProfileSetting"><img src={Profile} alt="#" /></Link>
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