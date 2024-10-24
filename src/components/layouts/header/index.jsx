import React, { useState, useEffect } from 'react';
import { Button, Drawer } from "antd";
import { Link, useLocation } from 'react-router-dom';
import { FaBell, FaBars } from "react-icons/fa";
import { BiMenuAltRight } from "react-icons/bi";
import Profile from "../../../assets/profile/ProfileImgNov.png";
import AssisAi from "../../../assets/icons/assistai.jpg";
import "./style.scss";

const Index = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [registerData, setRegisterData] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [profileImage, setProfileImage] = useState(null);

    // Locationni olish uchun
    const location = useLocation();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    useEffect(() => {
        const RegisterData = localStorage.getItem('RegisterData');
        if (RegisterData) {
            setRegisterData(true);
        }
    }, []);

    useEffect(() => {
        const savedImage = localStorage.getItem('profileImage');
        if (savedImage) {
            setProfileImage(savedImage);
        }
    }, []);

    const showDrawer = () => {
        setIsDrawerOpen(true);
    };

    const closeDrawer = () => {
        setIsDrawerOpen(false);
    };

    // Home sahifasi uchun header fonini o'zgartirish
    const headerBgColor = location.pathname === '/' ? 'bg-[#1A9CF1] border-[#1A9CF1]' : 'bg-white';

    return (
        <header className={`${headerBgColor} md:bg-white`}>
            <div className="container mx-auto max-w-[414px] md:max-w-[1440px]">

                <div className='flex justify-center gap-x-80 py-4 px-5 items-center'>

                    <div className=' flex justify-start'>
                        <Link to="/">
                            <img src={AssisAi} alt="Logo" width={80} height={20} className='rounded-[30%]' />
                        </Link>
                    </div>

                    {/* Burger Icon for small screens */}
                    <div className='md:hidden'>
                        <BiMenuAltRight size={38} onClick={showDrawer} color={location.pathname === '/' ? 'white' : 'black'} />
                    </div>

                    {/* Links and User Section */}
                    <div className='hidden md:flex gap-30 items-center'>
                        <ul className='flex gap-10 items-center'>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/product">Product</Link></li>
                            <li><Link to="/pricing">Pricing</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/help">Help</Link></li>
                        </ul>

                        {(isLoggedIn || registerData) ? (
                            <div className='flex items-center gap-[71px] ml-32'>
                                <Link to="/"><FaBell size={39} color='#BDBDBD' /></Link>
                                <Link to="/ProfileSetting">
                                    {profileImage ? (
                                        <img src={profileImage} alt="Profile" width="88" height="88" className='rounded-[50%]' />
                                    ) : (
                                        <img src={Profile} alt="Profile" width="88" height="88" className='rounded-[50%]' />
                                    )}
                                </Link>
                            </div>
                        ) : (
                            <div className='flex gap-4'>
                                <Link to="/register">
                                    <Button type="primary" className='w-[120px] h-[48px] rounded-[10px] text-base font-bold'>
                                        Sign up
                                    </Button>
                                </Link>
                                <Link to="/auth-layout">
                                    <Button size='large' className='w-[120px] h-[48px] text-base font-bold'>Login</Button>
                                </Link>
                            </div>
                        )}

                    </div>

                    {/* Drawer for small screens */}
                    <Drawer
                        title="Menu"
                        placement="right"
                        onClose={closeDrawer}
                        open={isDrawerOpen}
                    >
                        <ul className='flex flex-col gap-6'>
                            <li><Link to="/" onClick={closeDrawer}>Home</Link></li>
                            <li><Link to="/product" onClick={closeDrawer}>Product</Link></li>
                            <li><Link to="/pricing" onClick={closeDrawer}>Pricing</Link></li>
                            <li><Link to="/about" onClick={closeDrawer}>About</Link></li>
                            <li><Link to="/contact" onClick={closeDrawer}>Contact</Link></li>
                            <li><Link to="/help" onClick={closeDrawer}>Help</Link></li>

                            {(isLoggedIn || registerData) ? (
                                <div className='flex flex-col gap-4'>
                                    <Link to="/"><FaBell size={30} color='#BDBDBD' /></Link>
                                    <Link to="/ProfileSetting">
                                        {profileImage ? (
                                            <img src={profileImage} alt="Profile" width="50" height="50" className='rounded-[50%]' />
                                        ) : (
                                            <img src={Profile} alt="Profile" width="50" height="50" className='rounded-[50%]' />
                                        )}
                                    </Link>
                                </div>
                            ) : (
                                <div className='flex flex-col gap-4'>
                                    <Link to="/register">
                                        <Button type="primary" className='w-[120px] h-[48px] rounded-[10px] text-base font-bold'>
                                            Sign up
                                        </Button>
                                    </Link>
                                    <Link to="/auth-layout">
                                        <Button size='large' className='w-[120px] h-[48px] text-base font-bold'>Login</Button>
                                    </Link>
                                </div>
                            )}
                        </ul>
                    </Drawer>
                </div>
            </div>
        </header>
    );
};

export default Index;
