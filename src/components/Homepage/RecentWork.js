import React from 'react';
import Image from 'next/image';
import recent1 from "@/public/image/recent1.png"
import recent2 from "@/public/image/recent2.png"
import recent3 from "@/public/image/recent3.png"
import Reveal from '../utils/Reveal';

const RecentWork = () => {
    return (
        <div className='overflow-x-hidden'>
            <div className='pt-32'>
                <Reveal>
                    <div className='flex justify-between items-center w-[90%] mx-auto'>
                        <div>
                            <p className='font-tillitium uppercase text-primarypink text-lg font-semibold'>Latest Projects</p>
                            <p className='lg:text-[40px] font-tillitium text-primaryblack text-[32px] font-bold'>OUR RECENT WORK</p>
                        </div>
                        <button className='bg-primarypink text-white uppercase px-6 py-3 rounded text-sm font-medium'>View Projects</button>
                    </div>
                </Reveal>
                <Reveal>
                    <div className='flex lg:justify-between gap-4 mt-16 w-[1500px]'>
                    <div className='w-[550px] h-[434px]'>
                        <Image className='w-full h-full' src={recent1} alt='elevator recent pic' />
                    </div>
                    <div className='h-[434px] w-[550px]'>
                        <Image className='w-full h-full' src={recent2} alt='elevator recent pic' />
                    </div>
                    <div className='h-[434px] w-[550px]'>
                        <Image className='w-full h-full' src={recent3} alt='elevator recent pic' />
                    </div>
                </div>
                </Reveal>
                <div className='flex justify-center w-full py-8'>
                    <div className='flex gap-4 items-center mt-2'>
                        <span className='bg-primaryblack w-3 h-3 rounded-full' />
                        <span className='bg-white w-3 h-3 rounded-full' />
                        <span className='bg-white w-3 h-3 rounded-full' />
                        <span className='bg-white w-3 h-3 rounded-full' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecentWork