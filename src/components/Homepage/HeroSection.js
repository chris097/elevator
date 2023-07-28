import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import hero from '@/public/image/hero.png';
import Reveal from '../utils/Reveal';
import PhoneIcon from '@/public/svg/PhoneIcon';

const tabs = [
    { tab: 1, name: "DESIGN AND BUILD" },
    { tab: 2, name: "ELEVATOR REMODELING" },
    { tab: 3, name: "ELEVATOR INSTALLATION" },
];

const HeroSection = () => {

    const [activeIndex, setActiveIndex] = useState(1);

    const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === tabs.length ? 1 : prevIndex + 1));
    };
    
     useEffect(() => {
    // Automatically change slide every 3 seconds
    const slideInterval = setInterval(nextSlide, 4000);

    // Clear interval when the component is unmounted
    return () => clearInterval(slideInterval);
  }, [activeIndex]);


    return (
        <div className='w-full font-tillitium relative h-screen'>
            {tabs[0].tab === activeIndex && <> <div>
                <div className='overlay z-30 opacity-50' />
                <Image className="w-full absolute z-20 h-screen object-fill left-0" src={hero} alt="elevator hero section" />
            </div>
                <div className='relative text-white z-40 flex flex-col w-[90%] justify-center mx-auto h-full'>
                    <div className='pb-24 lg:py-0'>
                        <Reveal><p className='lg:text-xl text-sm font-semibold font-roboto'>WELCOME YOU TO ELEVATOR</p></Reveal>
                        <Reveal>
                            <h1 className='lg:w-[65%] w-full lg:text-[80px] sm:text-[38px] text-[28px] mt-4 font-bold leading-tight'>WE’RE PROVIDING INDUSTRY LEADING SOLUTION</h1>
                        </Reveal>
                    </div>
                    <Reveal>
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
                    </Reveal>
                </div> </>}
            {tabs[1].tab === activeIndex && <> <div>
                <div className='overlay z-30 opacity-50' />
                <Image className='w-full absolute z-20 h-screen object-fill left-0' src={hero} alt="elevator hero section" />
            </div>
                <div className='relative text-white z-40 flex flex-col w-[90%] justify-center mx-auto h-full'>
                    <div className='pb-24 lg:py-0'>
                        <Reveal><p className='lg:text-xl text-sm font-semibold font-roboto'>WELCOME YOU TO ELEVATOR</p></Reveal>
                        <Reveal>
                            <h1 className='lg:w-[65%] w-full lg:text-[80px] sm:text-[38px] text-[28px] mt-4 font-bold leading-tight'>WE’RE PROVIDING INDUSTRY LEADING SOLUTION</h1>
                        </Reveal>
                    </div>
                    <Reveal>
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
                    </Reveal>
                </div> </>}
            {tabs[2].tab === activeIndex && <> <div>
                <div className='overlay z-30 opacity-50' />
                <Image className='w-full absolute z-20 h-screen object-fill left-0' src={hero} alt="elevator hero section" />
            </div>
                <div className='relative text-white z-40 flex flex-col w-[90%] justify-center mx-auto h-full'>
                    <div className='pb-24 lg:py-0'>
                        <Reveal><p className='lg:text-xl text-sm font-semibold font-roboto'>WELCOME YOU TO ELEVATOR</p></Reveal>
                        <Reveal>
                            <h1 className='lg:w-[65%] w-full lg:text-[80px] sm:text-[38px] text-[28px] mt-4 font-bold leading-tight'>WE’RE PROVIDING INDUSTRY LEADING SOLUTION</h1>
                        </Reveal>
                    </div>
                    <Reveal>
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
                    </Reveal>
                </div> </>}
            <div className='text-black w-3/6 absolute bottom-0 z-50 h-16 right-0 bg-white'>
                <div className='flex px-14 justify-between font-roboto-slab text-[13px] font-semibold h-full items-center'>
                    {tabs.map((tab, index) => (
                        <div onClick={() => setActiveIndex(tab.tab)} key={index} className={`cursor-pointer ${tab.tab === activeIndex && "border-primaryblack border-b"}`}>{tab.name}</div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HeroSection;