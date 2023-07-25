import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const Reveal = ({ children }) => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const mainContainer = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainContainer.start("visible")
        }
    }, [isInView]);

  return (
      <div ref={ref} className='relative overflow-hidden'>
          <motion.div
              variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: {opacity: 1, y: 0}
              }}
              initial="hidden"
              animate={mainContainer}
              transition={{duration: 0.3, delay: 0.25}}
          >{children}</motion.div>
      </div>
  )
}

export default Reveal;