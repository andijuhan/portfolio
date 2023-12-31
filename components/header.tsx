'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { links } from '@/lib/data';
import Link from 'next/link';
import { UseActiveSectionContext } from '@/context/activeSectionContext';

const Header = () => {
   const { activeSection, setActiveSection, setTimeOfLastClick } =
      UseActiveSectionContext();

   return (
      <header className='z-[999] relative'>
         <motion.div
            className='fixed top-0 left-1/2 h-[4.5rem] w-full border border-black/[0.05] bg-white dark:bg-gray-950 bg-opacity-80 dark:bg-opacity-70 backdrop-blur-[0.5rem] shadow-lg shadow-black/[0.05] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full'
            initial={{ y: -100, x: '-50%', opacity: 0 }}
            animate={{ y: 0, x: '-50%', opacity: 1 }}
         ></motion.div>

         <nav className='fixed flex top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0'>
            <ul className='flex w-[22rem] flex-wrap justify-center items-center gap-1 text-[0.9rem] font-medium text-gray-900 dark:text-gray-300 sm:w-[initial] sm:flex-nowrap sm:gap-5'>
               {links.map((link, index) => (
                  <motion.li
                     className='h-[80%] sm:h-3/4 flex items-center justify-center relative'
                     key={index}
                     initial={{ y: -100, opacity: 0 }}
                     animate={{ y: 0, opacity: 1 }}
                  >
                     <Link
                        className={`flex w-full items-center justify-center px-3 py-3 transition ${
                           activeSection === link.name
                              ? 'text-gray-50 hover:text-white'
                              : 'hover:text-black dark:hover:text-gray-50'
                        }`}
                        href={link.hash}
                        onClick={() => {
                           setActiveSection(link.name);
                           setTimeOfLastClick(Date.now());
                        }}
                     >
                        {link.name}

                        {link.name === activeSection && (
                           <motion.span
                              className='absolute bg-indigo-500 dark:bg-indigo-900 rounded-full inset-0 -z-10'
                              layoutId='activeSection'
                              transition={{
                                 type: 'spring',
                                 stiffness: 380,
                                 damping: 30,
                              }}
                           ></motion.span>
                        )}
                     </Link>
                  </motion.li>
               ))}
            </ul>
         </nav>
      </header>
   );
};

export default Header;
