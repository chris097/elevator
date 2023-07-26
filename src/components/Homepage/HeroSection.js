import React from 'react';
import Image from 'next/image';
import hero from '@/public/image/hero.png';
import Reveal from '../utils/Reveal';

const HeroSection = () => {
    return (
        <div className='w-full'>   
            <div>
                <div className='w-full h-full z-30 bg-black absolute left-0 opacity-50' />
            <Image className='w-full absolute z-20 h-full object-fill left-0' src={hero} alt="elevator hero section" /> 
            </div>
            <div className='relative text-white z-40 flex flex-col w-[90%] justify-center mx-auto h-full'>
                <Reveal>
                    <div className='lg:mt-32 pt-10 pb-20 lg:py-0'>
                    <p className='lg:text-xl text-sm font-semibold'>WELCOME TO ELEVATOR</p>
                    <h1 className='lg:w-[60%] w-full lg:text-[72px] sm:text-[38px] text-[28px] mt-8 font-bold lg:leading-[90px] leading-normal'>WE’RE PROVIDING INDUSTRY LEADING SOLUTION</h1>
                    <p className='lg:w-[40%] sm:w-[70%] w-full sm:text-lg text-base mt-3'>
                        Laoreet conubia parturient lacinia pulvinar senectus vel posuere proin nec montes dapibus, elementum blandit sem et massa ornare habitasse cursus.
                    </p>
                </div>
                </Reveal>
            </div>
        </div>
    );
};

export default HeroSection;