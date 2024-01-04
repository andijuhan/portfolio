'use client';
import { projectsData } from '@/lib/data';
import Image from 'next/image';
import { useScroll, motion, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { BiLinkExternal } from 'react-icons/bi';
import { BsGithub, BsArrowUpRight } from 'react-icons/bs';
import Link from 'next/link';

type ProjectCardProps = (typeof projectsData)[number];

const ProjectCard = ({
   title,
   description,
   tags,
   imageUrl,
}: ProjectCardProps) => {
   const ref = useRef<HTMLDivElement>(null);

   const { scrollYProgress } = useScroll({
      target: ref,
      offset: ['0 1', '1.3 1'],
   });

   const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
   const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

   return (
      <motion.div
         ref={ref}
         style={{ scale: scaleProgress, opacity: opacityProgress }}
         className='group mb-3 sm:mb-8 last:mb-0'
      >
         <section className='relative flex flex-col-reverse gap-4 bg-white dark:bg-white/10 max-w-[42rem] border shadow-sm border-black/5 rounded overflow-hidden sm:pr-8 sm:h-[22rem] transition sm:group-even:pl-8'>
            <div className='py-4 px-5 p-2 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full pb-8 sm:group-even:ml-[18rem]'>
               <h3 className='text-2xl mb-4 font-semibold'>{title}</h3>
               <div className='flex gap-4 text-[2rem] text-gray-700'>
                  <Link
                     href={'#'}
                     className='flex items-center gap-2 text-sm px-2 py-1 border dark:border-gray-700 rounded-full hover:border-gray-500 dark:text-white/70'
                  >
                     Demo
                     <BsArrowUpRight />
                  </Link>
                  <Link
                     href={'#'}
                     className='flex items-center gap-2 text-sm px-2 py-1 border dark:border-gray-700 rounded-full hover:border-gray-500 dark:text-white/70'
                  >
                     Github
                     <BsArrowUpRight />
                  </Link>
               </div>
               <p className='mt-4 leading-relaxed text-gray-700 dark:text-white/70 line-clamp-3'>
                  {description}
               </p>

               <ul className='flex flex-wrap mt-8 gap-2 sm:mt-auto font-medium'>
                  {tags.map((tag, index) => (
                     <li
                        className='bg-gray-700 text-[0.7rem] py-1 px-3 tracking-wider text-white dark:text-white/70 rounded-lg'
                        key={index}
                     >
                        {tag}
                     </li>
                  ))}
               </ul>
            </div>

            <Image
               className='sm:absolute border dark:border-gray-800 top-8 sm:-right-40 h-[15rem] sm:h-[initial] object-cover object-top sm:w-[28.25rem] rounded-t sm:shadow-lg dark:sm:shadow-black/70 sm:group-even:-left-40 sm:group-hover:-translate-x-3 sm:group-hover:translate-y-3 sm:group-hover:-rotate-2 sm:group-hover:scale-[1.1] sm:group-even:group-hover:translate-x-3 sm:group-even:group-hover:translate-y-3 sm:group-even:group-hover:rotate-2 transition'
               src={imageUrl}
               alt={title}
               quality={90}
            />
         </section>
      </motion.div>
   );
};

export default ProjectCard;
