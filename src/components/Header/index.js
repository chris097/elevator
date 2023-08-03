import React, { useState } from 'react';
import EmailIcon from '@/public/svg/EmailIcon';
import PhoneIcon from '@/public/svg/PhoneIcon';
import ClockIcon from '@/public/svg/ClockIcon';
import Logo from '@/public/svg/Logo';
import Link from 'next/link';
import Navbar from '../modal/Navbar';


const Header = () => {

    const [showMenu, setShowMenu] = useState(false);

    const handleClick = () => {
        setShowMenu(true);
    }

    return (
        <div>
            {showMenu && <Navbar setShowMenu={setShowMenu} />}
            <div className='bg-white text-primaryblack font-roboto-slab' >
                <div className='w-[90%] mx-auto flex justify-between items-center h-[52px]'>
                    <div className='flex lg:gap-10 h-44 gap-6'>
                        <div className='flex items-center gap-1'>
                            <PhoneIcon fillColor="#FF6600" width="16px" height="14px" />
                            <span className='text-xs font-semibold'>+23470153683</span>
                        </div>
                        <div className='flex items-center gap-1'>
                            <EmailIcon fillColor="#FF6600" width="16px" height="16px" />
                            <span className='text-xs font-semibold'>elevator@gmail.com</span>
                        </div>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <ClockIcon />
                        <span className='text-xs font-semibold'>Mon - Sat 9:00AM - 6:00PM, Sunday - Closed</span>
                    </div>
                </div>
            </div>
            <div className='bg-black h-[74px] items-center'>
                <div className='w-[90%] mx-auto text-white flex justify-between items-center h-full'>
                    <div className='flex items-center gap-16'>
                        <Logo />
                    </div>
                        <div className='flex items-center font-roboto whitespace-nowrap text-base gap-16'>
                            <Link href="/" className='cursor-pointer'>Home</Link>
                            <Link href="/about-us" className='cursor-pointer'>About Us</Link>
                            <Link href="/our-service" className='cursor-pointer'>Our Service</Link>
                            <Link href="/contact-us" className='cursor-pointer'>Contact US</Link>
                            {/* <Link href="/" className='cursor-pointer'>Home</Link> */}
                        </div>
                    {/* <div className='lg:hidden md:hidden block' onClick={handleClick}>Navbar</div> */}
                </div>
            </div>
        </div>
    );
};

export default Header;