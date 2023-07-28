import React from 'react'
import Reveal from '../utils/Reveal';

const Clients = () => {
  return (
      <div className='pt-32 w-[80%] mx-auto'>
          <Reveal>
              <p className='text-primarypink font-semibold text-lg font-tillitium text-center'>Clients</p>
          </Reveal>
          <Reveal>
              <p className='text-primaryblack text-[32px] font-tillitium text-center font-bold'>Our Clients</p>
          </Reveal>
          <Reveal>
              <div className='grid grid-cols-6 gap-10 mt-14'>
                  <div>Logo</div>
                  <div>Logo</div>
                  <div>Logo</div>
                  <div>Logo</div>
                  <div>Logo</div>
                  <div>Logo</div>
                  <div>Logo</div>
                  <div>Logo</div>
                  <div>Logo</div>
                  <div>Logo</div>
                  <div>Logo</div>
              </div>
          </Reveal>
    </div>
  )
}

export default Clients;