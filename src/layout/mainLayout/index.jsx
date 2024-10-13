import { useState, useEffect, useRef } from "react";
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import ProfileIcon from "../../assets/profile/bexruz.svg"
import { BsGrid } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { MainCard } from '@/components/ui';
import { Input, Button, InputGroup, InputLeftElement, Stack, Select, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { SearchIcon, SmallAddIcon, ChevronDownIcon } from '@chakra-ui/icons'

const Layout = () => {

    // const [isOpen, setIsOpen] = useState({
    //     organizations: false,
    //     files: false,
    //     lastViewed: false,
    // });

    // const toggleAccordion = (key) => {
    //     setIsOpen((prev) => ({
    //         ...prev,
    //         [key]: !prev[key],
    //     }));
    // };






    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef();
    const loginRef = useRef();

    // Function to open and close the menu on hover
    const handleMouseEnter = () => setIsOpen(true);
    const handleMouseLeave = () => setIsOpen(false);

    // Function to close the menu when clicked outside
    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    const handleClickLogin = (event) => {
        if (loginRef.current && !loginRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="container mx-auto max-[1440px]">
            <div className="flex bg-[#FFFFFF]">

                <div className=" pr-[26px] ">

                    <div className="flex items-center mt-5">
                        <h1 className="text-lg font-semibold mr-4">Web designer virtual assistant</h1>
                        <span className="text-gray-500">🔔</span>
                    </div>

                    <div className=' mt-[20px]'>

                        <div className='w-[283px] h-[564px] pt-[35px] rounded-[10px] border border-[#2091F9]  bg-gradient-to-tr from-teal-300 to-blue-500'>

                            <div className='flex justify-center items-center mt-[40px]'>
                                <div className='w-[165px] h-[100px]'>
                                    <h1 className='text-center text-[20px] font-bold text-[#FFFFFF]'>STANDARD</h1>
                                    <p className='text-[15px] font-bold text-[#FFFFFF] text-center mt-[17px]'>Organize across all
                                        apps by hand</p>
                                </div>
                            </div>

                            <div className='flex justify-center items-center gap-[10px] mt-4 '>
                                <h1 className='text-[58px] font-extrabold text-white'>10</h1>
                                <div>
                                    <h1 className='text-[24px] font-bold text-white '>$</h1>
                                    <p className='text-base font-bold text-white'>Per Month</p>

                                </div>
                            </div>

                            <div className='flex justify-center items-center'>
                                <div className="w-[277px] h-[364px]  border-blue-300">

                                    <ul className='mb-[17px]'>
                                        <li className="flex items-center mt-3 ml-4 ">
                                            <svg className="w-[28px] h-[28px] text-white mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                            </svg>
                                            <span className='text-[14px] font-medium text-white'>Unlimited product updates
                                            </span>
                                        </li>

                                        <li className="flex items-center mt-3 ml-4 ">
                                            <svg className="w-[28px] h-[28px] text-white mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                            </svg>
                                            <span className='text-[14px] font-medium text-white'>Every feature in Figmaland
                                            </span>
                                        </li>

                                        <li className="flex items-center mt-3 ml-4 ">
                                            <svg className="w-[28px] h-[28px] text-white mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                            </svg>
                                            <span className='text-[14px] font-medium text-white'>1GB  Cloud storage
                                            </span>
                                        </li>

                                        <li className="flex items-center mt-3 ml-4 ">
                                            <svg className="w-[28px] h-[28px] text-white mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                            </svg>
                                            <span className='text-[14px] font-medium text-white'>Email and community <br />
                                                support
                                            </span>
                                        </li>

                                    </ul>

                                    <div className="flex justify-center mt-4">
                                        <button className="w-[200px] h-[64px] bg-white text-[#2091F9] font-bold rounded-[10px] hover:bg-slate-100">
                                            Order Now
                                        </button>
                                    </div>
                                </div>


                            </div>

                            <div>

                            </div>

                        </div>


                    </div>
                </div>

                <div className="flex-1 ">

                    <div className="flex  justify-between items-center mt-[25px] pl-[14px] pr-10 py-[10px] gap-x-20 border-b-8 border-l-2">
                       
                        <Stack direction="row" spacing={4} ref={loginRef}>
                                <Button
                                leftIcon={<img src={ProfileIcon} alt="#" />}
                                    rightIcon={<ChevronDownIcon boxSize={4} />}
                                    h="31px"
                                    w="119px"
                                    fontSize='10px'
                                    fontWeight={600}
                                    bg="white"
                                    color="black"
                                    onFocus={() => setIsOpen(true)}  // Focusda menyuni ochish
                                    onBlur={() => setIsOpen(false)}  // Fokusni yo'qotganda menyuni yopish
                                >
                                  BehruzPRO
                                </Button>

                                {isOpen && (
                                    <div className="absolute bg-[#ffff] z-10 border rounded mt-8 p-2">
                                        <ul>
                                            <li className="hover:bg-indigo-500 hover:text-white p-2 rounded cursor-pointer">
                                                <a href="#">create new</a>
                                            </li>
                                            <li className="hover:bg-indigo-500 hover:text-white p-2 rounded cursor-pointer">
                                                <a href="#">create new 2</a>
                                            </li>
                                            <li className="hover:bg-indigo-500 hover:text-white p-2 rounded cursor-pointer">
                                                <a href="#">create new 3</a>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </Stack>


                        <div>
                            <ul className='flex gap-10 items-center'>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/product">Product</Link></li>
                                <li><Link to="/pricing">Pricing</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>


                        <div className='flex gap-8 items-center rounded-lg'>
                            <InputGroup bg='#F4F4F4' borderRadius={8}>
                                <InputLeftElement pointerEvents='none' pb={2}>
                                    <SearchIcon boxSize={3} />
                                </InputLeftElement>
                                <Input type='text' placeholder='Search for anything' fontSize={9} w='192px' height='32px' className=' font-semibold ' focusBorderColor="transparent" />
                            </InputGroup>

                            <Stack direction="row" spacing={4} ref={menuRef}>
                                <Button
                                    leftIcon={<SmallAddIcon boxSize={4} />}
                                    rightIcon={<ChevronDownIcon boxSize={4} />}
                                    h="32px"
                                    w="114px"
                                    fontSize='9px'
                                    bg="#0C98FF"
                                    color="white"
                                    _hover={{ bg: "#007ACC" }}
                                    onFocus={() => setIsOpen(true)}  // Focusda menyuni ochish
                                    onBlur={() => setIsOpen(false)}  // Fokusni yo'qotganda menyuni yopish
                                >
                                    Create new
                                </Button>

                                {isOpen && (
                                    <div className="absolute bg-[#ffff] z-10 border rounded mt-8 p-2">
                                        <ul>
                                            <li className="hover:bg-indigo-500 hover:text-white p-2 rounded cursor-pointer">
                                                <a href="#">create new</a>
                                            </li>
                                            <li className="hover:bg-indigo-500 hover:text-white p-2 rounded cursor-pointer">
                                                <a href="#">create new 2</a>
                                            </li>
                                            <li className="hover:bg-indigo-500 hover:text-white p-2 rounded cursor-pointer">
                                                <a href="#">create new 3</a>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </Stack>
                        </div>


                    </div>


                    <div className="flex justify-between items-center bg-white pb-10 pl-[37px] pr-8 pt-4 border-l-2">

                        <button className="border rounded-1 w-[99px] h-[25px] text-[8px] text-[#826E6E] bg-[#F9F9F9]">
                            Recently viewed
                        </button>

                       
                        <div className="flex items-center text-gray-600">
                            <h1>All</h1>
                             <Select placeholder='organizations' fontSize='9px' fontWeight={600} border='none' _hover={{ border: "none" }} focusBorderColor="transparent">
                                <option value='option1'>Option 1</option>
                                <option value='option2'>Option 2</option>
                                <option value='option3'>Option 3</option>
                            </Select>

                            <Select placeholder='All files'  fontSize='9px' fontWeight={600} border='none' _hover={{border:'none'}} focusBorderColor="transparent">
                                <option value='option1'>Option 1</option>
                                <option value='option2'>Option 2</option>
                                <option value='option3'>Option 3</option>
                            </Select>

                            <Select placeholder='Last viewed'  fontSize='9px' fontWeight={600} border='none' _hover={{border:'none'}} focusBorderColor="transparent">
                                <option value='option1'>Option 1</option>
                                <option value='option2'>Option 2</option>
                                <option value='option3'>Option 3</option>
                            </Select>

                            <div className="flex items-center space-x-2">
                                <button className="w-6 h-6 flex items-center justify-center  rounded">
                                    <BsGrid />
                                </button>
                                <button className="w-6 h-6 flex items-center justify-center  rounded">
                                    <FiMenu />
                                </button>
                            </div>
                        </div>
                    </div>


                    <div className="grid grid-cols-3 grid-rows-3 gap-[23px] pl-[37px] pr-8  border-l-2">
                        <div><MainCard /></div>
                        <div><MainCard /></div>
                        <div><MainCard /></div>
                        <div><MainCard /></div>
                        <div><MainCard /></div>
                        <div><MainCard /></div>






                    </div>
                </div>
            </div>
        </div>

        // <div><Outlet/></div>

    );
};

export default Layout;
