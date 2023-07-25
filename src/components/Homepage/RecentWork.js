import React from 'react';
import Image from 'next/image';
import recent1 from "@/public/image/recent1.png"
import recent2 from "@/public/image/recent2.png"
import recent3 from "@/public/image/recent3.png"
import Reveal from '../utils/Reveal';

const RecentWork = () => {
    return (
        <div className='bg-white overflow-x-hidden'>
            <div className='w-[90%] mx-auto pt-24'>
                <Reveal><p className='lg:text-[52px] text-[32px] font-semibold'>OUR RECENT WORK</p></Reveal>
                <div className='flex lg:justify-between gap-6 mt-10 lg:w-full w-[1200px]'>
                    <div className='lg:w-full w-[300px] lg:h-[289px] h-[200px]'>
                        <Image className='w-full h-full' src={recent1} alt='elevator recent pic' />
                    </div>
                    <div className='lg:h-[289px] h-[200px] lg:w-full w-[300px]'>
                        <Image className='w-full h-full' src={recent2} alt='elevator recent pic' />
                    </div>
                    <div className='lg:h-[289px] h-[200px] lg:w-full w-[300px]'>
                        <Image className='w-full h-full' src={recent3} alt='elevator recent pic' />
                    </div>
                </div>
                <div className='flex justify-end w-full py-8'>
                    <div className='flex gap-8 items-center'>
                        <div className='bg-[#444444] w-7 h-7 lg:w-10 lg:h-10 rounded-full flex justify-center items-center'>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.9996 4.99997H3.40643L6.7078 1.71268C6.89618 1.52453 7.00201 1.26935 7.00201 1.00326C7.00201 0.737182 6.89618 0.481998 6.7078 0.29385C6.51942 0.105701 6.26392 0 5.99751 0C5.73109 0 5.47559 0.105701 5.28721 0.29385L0.285132 5.28973C0.194054 5.38476 0.122659 5.49681 0.0750447 5.61946C-0.0250149 5.86272 -0.0250149 6.13557 0.0750447 6.37883C0.122659 6.50148 0.194054 6.61354 0.285132 6.70856L5.28721 11.7044C5.38021 11.7981 5.49086 11.8724 5.61277 11.9232C5.73468 11.9739 5.86544 12 5.99751 12C6.12957 12 6.26033 11.9739 6.38224 11.9232C6.50415 11.8724 6.6148 11.7981 6.7078 11.7044C6.80157 11.6116 6.87599 11.501 6.92678 11.3793C6.97757 11.2575 7.00372 11.1269 7.00372 10.995C7.00372 10.8631 6.97757 10.7325 6.92678 10.6108C6.87599 10.489 6.80157 10.3785 6.7078 10.2856L3.40643 6.99832H10.9996C11.2649 6.99832 11.5194 6.89305 11.707 6.70567C11.8946 6.51829 12 6.26415 12 5.99915C12 5.73415 11.8946 5.48001 11.707 5.29262C11.5194 5.10524 11.2649 4.99997 10.9996 4.99997Z" fill="white" />
                            </svg>
                        </div>
                        <div className='bg-black w-7 h-7 lg:w-10 lg:h-10 rounded-full flex justify-center items-center'>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.925 5.61946C11.8773 5.49681 11.8059 5.38476 11.7149 5.28973L6.71279 0.29385C6.61951 0.200688 6.50878 0.126788 6.3869 0.0763693C6.26503 0.0259505 6.13441 0 6.00249 0C5.73608 0 5.48058 0.105701 5.2922 0.29385C5.19892 0.387011 5.12493 0.49761 5.07445 0.619332C5.02397 0.741054 4.99799 0.871514 4.99799 1.00326C4.99799 1.26935 5.10382 1.52453 5.2922 1.71268L8.59357 4.99997H1.00042C0.735089 4.99997 0.48063 5.10524 0.293015 5.29262C0.105401 5.48001 0 5.73415 0 5.99915C0 6.26415 0.105401 6.51829 0.293015 6.70567C0.48063 6.89305 0.735089 6.99832 1.00042 6.99832H8.59357L5.2922 10.2856C5.19843 10.3785 5.12401 10.489 5.07322 10.6108C5.02243 10.7325 4.99628 10.8631 4.99628 10.995C4.99628 11.1269 5.02243 11.2575 5.07322 11.3793C5.12401 11.501 5.19843 11.6116 5.2922 11.7044C5.3852 11.7981 5.49585 11.8724 5.61776 11.9232C5.73967 11.9739 5.87043 12 6.00249 12C6.13456 12 6.26532 11.9739 6.38723 11.9232C6.50914 11.8724 6.61979 11.7981 6.71279 11.7044L11.7149 6.70856C11.8059 6.61354 11.8773 6.50149 11.925 6.37883C12.025 6.13557 12.025 5.86272 11.925 5.61946Z" fill="white" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecentWork