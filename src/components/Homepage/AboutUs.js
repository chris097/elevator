import React from 'react';
import faqImg from '@/public/image/faqImg.png';
import Image from 'next/image';
import Reveal from '../utils/Reveal';

const abouts = [
    {description:  "Reliable & Experienced Team"},
    {description:  "Reliable & Experienced Team"},
    {description:  "Reliable & Experienced Team"},
    {description:  "Reliable & Experienced Team"},
    {description:  "Reliable & Experienced Team"},
    {description:  "Reliable & Experienced Team"},
]

const AboutUs = () => {
    return (
        <div className='w-[90%] mx-auto pt-32'>
            <div className='flex'>
                <div className='flex-1'>
                    <Image className='w-full h-full' src={faqImg} />
                </div>
                <div className=' bg-primaryyellow w-[606px] lg:py-20 py-10 lg:px-10 px-5'>
                    <Reveal>
                         <p className='text-primarypink lg:text-xl text-base font-semibold uppercase'>ABOUT US</p>
                    <p className='lg:text-[38px] text-2xl font-semibold lg:mt-10 mt-6'>WE ARE QUALIFIED IN EVERY WORKING DEPARTMENTS</p>
                   </Reveal>
                    <p className='lg:text-[24px] text-base text-[#6E777D] mt-4 mb-7'>Laoreet conubia parturient lacinia pulvinar senectus vel posuere proin nec montes dapibus, elementum blandit sem et massa ornare habitasse cursus erat nascetur, a sed placerat sagittis euismod.</p>
                    {abouts.map((about, index) => (
                        <div key={index} className='flex gap-2 items-center lg:mt-6 mt-4'>
                        <svg className='w-[14px] h-[14px] lg:w-[21px] lg:h-[21px]' viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0C8.02219 0 6.08879 0.615814 4.4443 1.76957C2.79981 2.92332 1.51809 4.5632 0.761209 6.48182C0.00433284 8.40044 -0.1937 10.5116 0.192152 12.5484C0.578004 14.5852 1.53041 16.4562 2.92894 17.9246C4.32746 19.3931 6.10929 20.3931 8.0491 20.7982C9.98891 21.2034 11.9996 20.9955 13.8268 20.2007C15.6541 19.406 17.2159 18.0602 18.3147 16.3335C19.4135 14.6068 20 12.5767 20 10.5C20 9.12112 19.7413 7.75574 19.2388 6.48182C18.7362 5.2079 17.9997 4.05039 17.0711 3.07538C16.1425 2.10036 15.0401 1.32694 13.8268 0.799265C12.6136 0.271591 11.3132 0 10 0ZM15.676 8.64885L9.676 14.4238C9.48604 14.6067 9.23615 14.7056 8.97848 14.6997C8.7208 14.6938 8.47524 14.5837 8.293 14.3923L5.293 11.2423C5.19749 11.1455 5.12131 11.0296 5.0689 10.9015C5.01649 10.7734 4.98891 10.6356 4.98775 10.4962C4.9866 10.3568 5.0119 10.2185 5.06218 10.0895C5.11246 9.96045 5.18672 9.84322 5.28061 9.74463C5.3745 9.64605 5.48615 9.56808 5.60905 9.51528C5.73195 9.46249 5.86363 9.43592 5.9964 9.43713C6.12918 9.43835 6.2604 9.46731 6.38241 9.52234C6.50441 9.57737 6.61476 9.65736 6.707 9.75765L9.03 12.1968L14.324 7.10115C14.5195 6.9129 14.7781 6.81389 15.0431 6.8259C15.3081 6.83791 15.5577 6.95996 15.737 7.1652C15.9163 7.37044 16.0106 7.64205 15.9991 7.92029C15.9877 8.19853 15.8715 8.4606 15.676 8.64885Z" fill="#FF6600" fill-opacity="0.95" />
                        </svg>
                            <span className='text-[#6E777D] lg:text-xl text-sm'>{about.description}</span>
                    </div>
                    ))}
                    <button className='bg-black w-2/4 lg:h-16 h-10 rounded-sm lg:text-xl text-base font-semibold mt-16 text-white'>Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;