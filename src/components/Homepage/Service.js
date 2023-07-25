import React from 'react';
import Image from 'next/image';
import service1 from '@/public/image/service1.png';
import service2 from '@/public/image/service2.png';
import service3 from '@/public/image/service3.png';

const services = [
    {url: service1, title: "Sustainable System", description: "Laoreet conubia parturient lacinia pulvinar senectus vel posuere proin nec montes dapibus, elementum blandit sem et massa ornare habitasse cursus."},
    {url: service2, title: "Property Maintenance", description: "Laoreet conubia parturient lacinia pulvinar senectus vel posuere proin nec montes dapibus, elementum blandit sem et massa ornare habitasse cursus."},
    {url: service3, title: "Virtual design & build", description: "Laoreet conubia parturient lacinia pulvinar senectus vel posuere proin nec montes dapibus, elementum blandit sem et massa ornare habitasse cursus."},
]

const Service = () => {
  return (
      <div className='py-24 mx-auto w-[90%]'>
          <p className='text-[48px] font-semibold'>QUALITY SERVICING OPPORTUNITY</p>
          <div className='grid lg:grid-cols-3 grid-col-1 gap-5 mt-14'>
              {services.map((service, index) => (
                  <div key={index} className='flex-1 bg-primaryyellow shadow-sm rounded-md'>
                  <div className='relative h-[360px]'>
                     <Image className='w-full h-full' src={service.url} alt='elevator service pics' />
                          <div className='absolute bottom-0 z-50 text-white right-0 bg-primarypink text-2xl font-bold px-5 py-3'>0{index+1}</div>
                  </div>
                  <div className='px-6 py-5'>
                          <p className='text-[28px] font-bold text-primaryblack'>{service.title}</p>
                          <p className='text-lg text-secondaryblack'>{service.description}</p>
                      <button className='w-full h-[64px] bg-black text-white rounded text-xl my-6'>Learn More</button>
                  </div>
              </div>
              ))}
          </div>
    </div>
  )
}

export default Service