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
        <div className='text-center'><span className='lg:text-[32px] text-2xl font-bold'>WE MAY HAVE THE <span className='text-primarypink'>SOLUTION</span> TO </span> <br /> <span className='lg:text-[64px] text-[40px] font-bold'>YOUR <span className='text-primarypink'>ELEVATOR</span> NEEDS.</span></div>
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
                  <p className={`lg:text-xl text-base font-semibold ${activeTag === index+1 && showFaq === true ? "text-primarypink" : "text-black"}`}>{faq.title}</p>
                  <span>{activeTag === index+1 && showFaq === true ? <MinusIcon /> : <PlusIcon />}</span>
                </div>
                {(showFaq && activeTag === index+1) && <p className="lg:text-base text-sm pb-6">{faq.description}</p>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      <div className='grid lg:grid-cols-3 grid-cols-1 text-white'>
        {represents.map((reps, index) => (
         <div key={index} className='bg-black even:bg-primarypink h-[301px]'>
          <div className='flex flex-col justify-center items-center h-full'>
              <h2 className='text-[36px] font-bold uppercase'>{reps.title}</h2>
              <p className='text-center px-10 mt-4 text-base'>{reps.description}</p>
          </div>
        </div>
       ))}
      </div>
    </div>
  );
};

export default Faq