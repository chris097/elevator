import React from 'react';
import EmailIcon from '@/public/svg/EmailIcon';
import PhoneIcon from '@/public/svg/PhoneIcon';
import ClockIcon from '@/public/svg/ClockIcon';
import Logo from '@/public/svg/Logo';
import Link from 'next/link';


const Header = () => {
    return (
        <div>
            <div className='bg-white'>
                <div className='w-[90%] mx-auto md:flex hidden justify-between items-center h-[52px]'>
                    <div className='flex gap-10'>
                        <div className='flex items-center gap-2'>
                            <PhoneIcon />
                            <span>+23470153683</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <EmailIcon />
                            <span>elevator@gmail.com</span>
                        </div>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <ClockIcon />
                        <span>Mon - Sat 9:00AM - 6:00PM, Sunday - Closed</span>
                    </div>
                </div>
            </div>
            <div className='bg-black h-[74px] items-center'>
                <div className='w-[90%] mx-auto text-white flex justify-between items-center h-full'>
                    <div className='flex items-center gap-28'>
                        <Logo />
                        <div className='lg:flex items-center gap-16 hidden'>
                            <Link href="/" className='cursor-pointer'>Home</Link>
                            <Link href="/about-us" className='cursor-pointer'>About Us</Link>
                            <Link href="/our-service" className='cursor-pointer'>Our Service</Link>
                            <Link href="/contact-us" className='cursor-pointer'>Contact US</Link>
                            <Link href="/" className='cursor-pointer'>Home</Link>
                        </div>
                    </div>
                    <div>Navbar</div>
                </div>
            </div>
        </div>
    );
};

export default Header;