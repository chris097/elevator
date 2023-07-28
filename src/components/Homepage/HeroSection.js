import React from 'react';
import Image from 'next/image';
import hero from '@/public/image/hero.png';
import Reveal from '../utils/Reveal';
import PhoneIcon from '@/public/svg/PhoneIcon';

const bannerImgs = [
    { img: hero },
    { img: hero },
    { img: hero }
];

const HeroSection = () => {
    return (
        <div className='w-full font-tillitium relative h-screen'>
            <div>
                <div className='w-full h-full z-30 bg-black absolute left-0 opacity-60' />
                <Reveal>
                    <Image className='w-full absolute z-20 h-full object-fill left-0' src={hero} alt="elevator hero section" />
                </Reveal>
            </div>
            <div className='relative text-white z-40 flex flex-col w-[90%] justify-center mx-auto h-full'>
                <div className='pb-24 lg:py-0'>
                    <Reveal><p className='lg:text-xl text-sm font-semibold'>WELCOME YOU TO ELEVATOR</p></Reveal>
                    <Reveal>
                        <h1 className='lg:w-[65%] w-full lg:text-[80px] sm:text-[38px] text-[28px] mt-6 font-bold leading-tight'>WE’RE PROVIDING INDUSTRY LEADING SOLUTION</h1>
                    </Reveal>
                </div>
                <div className='text-white flex items-center mt-14 gap-20'>
                    <button className='w-52 h-14 text-xl text-white bg-primarypink'>Get Started</button>
                    <div className='flex items-center gap-3'>
                        <div className='bg-white rounded-full flex justify-center items-center w-14 h-14'><PhoneIcon fillColor="#FF6600" width="18px" height="15.5px" /></div>
                        <div>
                            <p className='text-[#6E777D] text-base font-semibold font-roboto'>Call Us Now</p>
                            <p className='text-xl font-semibold font-roboto'>+2347015362583</p>
                        </div>
                    </div>
            </div>
                </div>
            <div className='text-black w-3/6 absolute bottom-0 z-50 h-16 right-0 bg-white'>
                <div className='flex px-14 justify-between font-roboto-slab text-[13px] font-semibold h-full items-center'>
                    <div className='cursor-pointer border-b border-primaryblack'>DESIGN AND BUILD</div>
                    <div className='cursor-pointer'>ELEVATOR REMODELING</div>
                    <div className='cursor-pointer'>ELEVATOR INSTALLATION</div>
                    </div>
                </div>
        </div>
    );
};

export default HeroSection;