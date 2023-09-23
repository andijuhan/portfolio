'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { useSectionInView } from '@/lib/hooks';
import { UseActiveSectionContext } from '@/context/activeSectionContext';

const Intro = () => {
   const { ref } = useSectionInView('Home', 1);
   const { setActiveSection, setTimeOfLastClick } = UseActiveSectionContext();

   return (
      <section
         className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-28'
         id='home'
         ref={ref}
      >
         <div className='flex flex-col justify-center items-center'>
            <div className='relative'>
               <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: 'tween', duration: 0.2 }}
               >
                  <Image
                     src='/juhandi.jpg'
                     alt='Ricardo portrait'
                     width='192'
                     height='192'
                     quality='95'
                     priority={true}
                     className='h-24 w-24 object-cover rounded-full border-[0.35rem] border-white shadow-xl'
                  />
               </motion.div>
               <motion.span
                  className='absolute text-4xl bottom-0 right-0'
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                     type: 'spring',
                     stiffness: 125,
                     delay: 0.1,
                     duration: 0.7,
                  }}
               >
                  👋
               </motion.span>
            </div>

            <motion.h1
               className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
               initial={{ opacity: 0, y: 100 }}
               animate={{ opacity: 1, y: 0 }}
            >
               <span className='font-bold'>Hello, I&apos;m Juhandi.</span>{' '}
               I&apos;m a{' '}
               <span className='font-bold'>full-stack developer</span> with{' '}
               <span className='font-bold'>5 years</span> of experience.
               <br />I enjoy building{' '}
               <span className='italic'>sites & apps</span>. My focus is{' '}
               <span className='underline'>React (Next.js)</span>.
            </motion.h1>

            <motion.div
               className='flex flex-col justify-center items-center sm:flex-row gap-4 px-2 text-lg font-medium'
               initial={{ opacity: 0, y: 100 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.1 }}
            >
               <Link
                  onClick={() => {
                     setActiveSection('Contact');
                     setTimeOfLastClick(Date.now());
                  }}
                  href='#contact'
                  className='group bg-gray-900 dark:bg-gray-950 text-white px-7 py-3 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'
               >
                  Contact me here
                  <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' />
               </Link>
               <a
                  href='/CV.pdf'
                  className='group bg-white dark:text-gray-950 px-7 py-3 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition border border-black/10'
                  download={true}
               >
                  Download CV
                  <HiDownload className='opacity-70 group-hover:translate-y-1 transition' />
               </a>
               <div className='flex gap-4'>
                  <a
                     className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full border border-black/10 hover:scale-110 hover:text-gray-950 w-min'
                     href='https://www.linkedin.com/in/juhandi-b3070726b'
                     target='_blank'
                  >
                     <BsLinkedin size={25} />
                  </a>
                  <a
                     className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full border border-black/10 hover:scale-110 hover:text-gray-950 w-min'
                     href='https://github.com/andijuhan'
                     target='_blank'
                  >
                     <BsGithub size={25} />
                  </a>
               </div>
            </motion.div>
         </div>
      </section>
   );
};

export default Intro;
