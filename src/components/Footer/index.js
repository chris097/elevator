import React from 'react';
import Logo from '@/public/svg/Logo';
import PhoneIcon from '@/public/svg/PhoneIcon';
import EmailIcon from '@/public/svg/EmailIcon';
import TwitterIcon from '@/public/svg/TwitterIcon';
import LinkedIcon from '@/public/svg/LinkedIcon';
import DiscordIcon from '@/public/svg/DiscordIcon';
import FacebookIcon from '@/public/svg/FacebookIcon';

const Footer = () => {
  return (
      <div className='bg-black lg:h-[600px] h-auto lg:mt-52 mt-32 overflow-x-hidden'>
          <div className='lg:flex block justify-between text-white w-[90%] mx-auto pt-14'>
              <div>
                    <Logo />
                  <div className='mt-6'>
                      <p className='text-xl font-semibold'>Customers care service</p>
                      <div className='flex gap-2 mt-4 items-center'> 
                          <PhoneIcon />
                          <span className='text-lg'>+2340715362583</span>
                      </div>
                      <div className='flex gap-2 mt-4 items-center'>
                          <EmailIcon />
                          <span className='text-lg'>elevator@gmail.com</span>
                      </div>
                  </div>
                  <div className='mt-10'>
                      <p className='text-xl font-semibold'>For Emergency Only</p>
                      <div className='flex gap-2 mt-4 items-center'> 
                          <PhoneIcon />
                          <span className='text-lg'>+2340715362583</span>
                      </div>
                      <div className='flex gap-2 mt-4 items-center'>
                          <EmailIcon />
                          <span className='text-lg'>elevator@gmail.com</span>
                      </div>
                  </div>
              </div>
              <div className='lg:mt-0 mt-7'>
                  <p className='text-2xl font-semibold'>Useful Links</p>
                  <div className='mt-6'>
                      <div className='mt-4 text-lg'>About Us</div>
                      <div className='mt-4 text-lg'>Contact Us</div>
                      <div className='mt-4 text-lg'>Our Service</div>
                      <div className='mt-4 text-lg'>About Us</div>
                  </div>
              </div>
              <div className='lg:mt-0 mt-7'>
                  <p className='text-2xl font-semibold'>Other Links</p>
                  <div className='mt-6'>
                      <div className='mt-4 text-lg'>Policy & Privacy</div>
                      <div className='mt-4 text-lg'>Terms & Conditions</div>
                  </div>
              </div>
              <div className='lg:mt-0 mt-7'>
                  <p className='text-2xl font-semibold'>Social Links</p>
                  <div className='mt-6 flex gap-3 items-center'>
                      <TwitterIcon />
                      <LinkedIcon />
                      <DiscordIcon />
                      <FacebookIcon />
                  </div>
                  <p className='lg:text-xl text-base mt-7 font-semibold text-white lg:whitespace-nowrap'>SUBSCRIBE TO OUR NEWSLETTER FOR LATEST</p>
                  <div className='mt-3'>
                      <input className='bg-[#171717] outline-none text-[#959CA0] lg:w-[300.79px] w-[205px] px-5 py-3' placeholder='Email Address' type="text" />
                      <button type="submit" className='bg-primarypink text-white lg:w-[138px] w-[102px] py-3'>SUBSCRIBE</button>
                  </div>
              </div>
          </div>
          <div className='border-t-[0.5px] w-[90%] mx-auto mt-14 border-white' />
          <p className='text-[#6E777D] my-10 text-center flex items-center lg:text-base text-sm justify-center gap-1'><span className='text-xl'>&copy;</span> Copyright 2023 Elevator. All Rights Reserved.</p>
    </div>
  )
}

export default Footer;