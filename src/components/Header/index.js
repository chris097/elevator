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
            <div className='bg-white'>
                <div className='w-[90%] mx-auto md:flex hidden justify-between items-center h-[52px]'>
                    <div className='flex lg:gap-10 gap-6'>
                        <div className='flex items-center gap-1'>
                            <PhoneIcon />
                            <span className='text-xs font-bold'>+23470153683</span>
                        </div>
                        <div className='flex items-center gap-1'>
                            <EmailIcon />
                            <span className='text-xs font-bold'>elevator@gmail.com</span>
                        </div>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <ClockIcon />
                        <span className='text-xs font-bold'>Mon - Sat 9:00AM - 6:00PM, Sunday - Closed</span>
                    </div>
                </div>
            </div>
            <div className='bg-black h-[74px] items-center'>
                <div className='w-[90%] mx-auto text-white flex justify-between items-center h-full'>
                    <div className='flex items-center gap-28'>
                        <Logo />
                        <div className='lg:flex items-center whitespace-nowrap gap-16 hidden'>
                            <Link href="/" className='cursor-pointer'>Home</Link>
                            <Link href="/about-us" className='cursor-pointer'>About Us</Link>
                            <Link href="/our-service" className='cursor-pointer'>Our Service</Link>
                            <Link href="/contact-us" className='cursor-pointer'>Contact US</Link>
                            {/* <Link href="/" className='cursor-pointer'>Home</Link> */}
                        </div>
                    </div>
                    <div onClick={handleClick}>Navbar</div>
                </div>
            </div>
        </div>
    );
};

export default Header;