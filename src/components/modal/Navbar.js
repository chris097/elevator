import React from 'react'

const Navbar = ({setShowMenu}) => {
  return (
      <div className="fixed flex top-0 left-0 inset-0 bg-black/90 overflow-y-hidden items-center flex-col z-50">
          <div className='relative text-white z-50 h-screen py-5'>
              <div onClick={() => setShowMenu(false)} className='flex w-screen justify-end pr-6'>X</div>
              <div className='flex justify-center items-center flex-col mt-5'>
                  <div className='text-[28px] mt-4 font-light cursor-pointer'>Home</div>
                  <div className='text-[28px] font-light mt-10 cursor-pointer'>About Us</div>
                  <div className='text-[28px] font-light mt-10 cursor-pointer'>Contact Us</div>
                  <div className='text-[28px] font-light mt-10 cursor-pointer'>Our Service</div>
              </div>
          </div>
    </div>
  )
}

export default Navbar;