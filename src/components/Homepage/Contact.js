import React from 'react';
import Reveal from '../utils/Reveal';
import PhonewithTime from '@/public/svg/PhonewithTime';
import Phone from '@/public/svg/Phone';
import LocationIcon from '@/public/svg/LocationIcon';

const Contact = () => {
  return (
    <div className='grid grid-cols-3 text-white py-24'>
      <Reveal>
        <div className='bg-black w-full text-white h-[256px] flex'>
          <div>
            <div className='w-6 h-full bg-primarypink' />
          </div>
          <div className='flex justify-center items-center w-full gap-4'>
            <PhonewithTime />
            <div className='font-tillitium text-white'>
              <p className='text-sm font-semibold'>WE ARE OPEN MONDAY-FRIDAY</p>
            <p className='text-2xl font-semibold mt-1'>7:00 am - 9:00 pm</p>
            </div>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className='bg-primarypink w-full text-white h-[256px] flex'>
          <div className='flex justify-center items-center w-full gap-4'>
            <Phone />
            <div className='font-tillitium text-white'>
              <p className='text-sm font-semibold'>HAVE A QUESTION?</p>
            <p className='text-2xl font-semibold mt-1'>+23470153625</p>
            </div>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className='bg-black w-full text-white h-[256px] flex'>
          <div className='flex justify-center items-center w-full gap-4'>
            <LocationIcon />
            <div className='font-tillitium text-white'>
              <p className='text-sm font-semibold'>NEED AN ELEVATOR? OUR ADDRESS</p>
            <p className='text-2xl font-semibold mt-1'>22 Madi Ave, New York</p>
            </div>
          </div>
          <div>
            <div className='w-6 h-full bg-primarypink' />
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default Contact