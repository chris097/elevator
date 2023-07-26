import React, { useState } from 'react';
import Image from 'next/image';
import faq from '@/public/image/faqImg.png';
import PlusIcon from '@/public/svg/PlusIcon';
import MinusIcon from '@/public/svg/MinusIcon';
import Reveal from '../utils/Reveal';

const faqs = [
  { tag: 1, title: "What to double down on accuracy, efficiency, and time management", description: "Laoreet conubia parturient lacinia pulvinar senectus vel posuere proin nec montes dapibus, elementum blandit sem et massa ornare habitasse cursus." },
  { tag: 2, title: "What to double down on accuracy, efficiency, and time management", description: "Laoreet conubia parturient lacinia pulvinar senectus vel posuere proin nec montes dapibus, elementum blandit sem et massa ornare habitasse cursus." },
  { tag: 3, title: "What to double down on accuracy, efficiency, and time management", description: "Laoreet conubia parturient lacinia pulvinar senectus vel posuere proin nec montes dapibus, elementum blandit sem et massa ornare habitasse cursus." },
  { tag: 4, title: "What to double down on accuracy, efficiency, and time management", description: "Laoreet conubia parturient lacinia pulvinar senectus vel posuere proin nec montes dapibus, elementum blandit sem et massa ornare habitasse cursus." },
  { tag: 5, title: "What to double down on accuracy, efficiency, and time management", description: "Laoreet conubia parturient lacinia pulvinar senectus vel posuere proin nec montes dapibus, elementum blandit sem et massa ornare habitasse cursus." },
  { tag: 6, title: "What to double down on accuracy, efficiency, and time management", description: "Laoreet conubia parturient lacinia pulvinar senectus vel posuere proin nec montes dapibus, elementum blandit sem et massa ornare habitasse cursus." },
  { tag: 7, title: "What to double down on accuracy, efficiency, and time management", description: "Laoreet conubia parturient lacinia pulvinar senectus vel posuere proin nec montes dapibus, elementum blandit sem et massa ornare habitasse cursus." },
];

const represents = [
  {title: "We represent", description: "Laoreet conubia parturient lacinia pulvinar senectus vel posuere proin nec montes dapibus, elementum blandit sem et massa ornare habitasse cursus."},
  {title: "We distribute", description: "Laoreet conubia parturient lacinia pulvinar senectus vel posuere proin nec montes dapibus, elementum blandit sem et massa ornare habitasse cursus."},
  {title: "We’re associated", description: "Laoreet conubia parturient lacinia pulvinar senectus vel posuere proin nec montes dapibus, elementum blandit sem et massa ornare habitasse cursus."}
]

const Faq = () => {

  const [showFaq, setShowFaq] = useState(false);
  const [activeTag, setActiveTag] = useState(0);

  return (
    <div className='pt-20 bg-white'>
      <Reveal>
        <div className='text-center w-[90%] leading-loose mx-auto'><span className='lg:text-[32px] text-2xl font-bold'>WE MAY HAVE THE <span className='text-primarypink leading-loose'>SOLUTION</span> TO </span> <br /> <span className='lg:text-[64px] sm:text-4xl text-2xl font-bold'>YOUR <span className='text-primarypink'>ELEVATOR</span> NEEDS.</span></div>
      </Reveal>
      <div className='mt-14 lg:w-full w-[90%] mx-auto'>
        <div className='flex gap-10'>
          <Image className='w-2/5 lg:block hidden object-cover bg-no-repeat' src={faq} alt='faq image' />
          <div className='lg:w-1/2 w-full'>
            {faqs.map((faq, index) => (
              <React.Fragment key={index}>
                <div onClick={() => {
                  setShowFaq(!showFaq)
                  setActiveTag(faq.tag)
                }} className="border-t last:border-b w-full h-[87px] cursor-pointer items-center flex justify-between">
                  <p className={`lg:text-xl text-base font-semibold w-[80%] ${activeTag === index + 1 && showFaq === true ? "text-primarypink" : "text-black"}`}>{faq.title}</p>
                  <span>{activeTag === index + 1 && showFaq === true ? <MinusIcon /> : <PlusIcon />}</span>
                </div>
                {(showFaq && activeTag === index + 1) && <p className="lg:text-base text-sm pb-6">{faq.description}</p>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      <div className='grid lg:grid-cols-3 grid-cols-1 text-white'>
          <Reveal>
            <div className='bg-black text-white h-[301px]'>
              <div className='flex flex-col justify-center items-center h-full'>
                <h2 className='lg:text-[36px] sm:text-[28px] text-2xl font-bold uppercase'>We represent</h2>
                <p className='text-center px-10 mt-4 text-base'>Laoreet conubia parturient lacinia pulvinar senectus vel posuere proin nec montes dapibus, elementum blandit sem et massa ornare habitasse cursus.</p>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className='bg-primarypink text-white h-[301px]'>
              <div className='flex flex-col justify-center items-center h-full'>
                <h2 className='lg:text-[36px] sm:text-[28px] text-2xl font-bold uppercase'>We distribute</h2>
                <p className='text-center px-10 mt-4 text-base'>Laoreet conubia parturient lacinia pulvinar senectus vel posuere proin nec montes dapibus, elementum blandit sem et massa ornare habitasse cursus.</p>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className='bg-black text-white h-[301px]'>
              <div className='flex flex-col justify-center items-center h-full'>
                <h2 className='lg:text-[36px] sm:text-[28px] text-2xl font-bold uppercase'>We’re associated</h2>
                <p className='text-center px-10 mt-4 text-base'>Laoreet conubia parturient lacinia pulvinar senectus vel posuere proin nec montes dapibus, elementum blandit sem et massa ornare habitasse cursus.</p>
              </div>
            </div>
          </Reveal>
      </div>
    </div>
  );
};

export default Faq