'use client';
import { motion } from 'framer-motion';

const SectionDivider = () => {
   return (
      <motion.div
         className='bg-gray-200 my-24 h-16 w-1 rounded-full hidden sm:block'
         initial={{ scaleY: 0 }}
         animate={{ scaleY: 1 }}
         transition={{ delay: 0.125 }}
      ></motion.div>
   );
};

export default SectionDivider;
