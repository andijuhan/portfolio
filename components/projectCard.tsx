'use client';
import { projectsData } from '@/lib/data';
import Image from 'next/image';
import { useScroll, motion, useTransform } from 'framer-motion';
import { useRef } from 'react';

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
         <section className='relative flex flex-col-reverse gap-4 bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8'>
            <div className='py-4 px-5 p-2 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full pb-8 sm:group-even:ml-[18rem]'>
               <h3 className='text-2xl font-semibold'>{title}</h3>
               <p className='mt-4 sm:mt-2 leading-relaxed text-gray-700'>
                  {description}
               </p>
               <ul className='flex flex-wrap mt-8 gap-2 sm:mt-auto'>
                  {tags.map((tag, index) => (
                     <li
                        className='bg-[#6366f1] text-[0.7rem] py-1 px-3 tracking-wider text-white rounded-full'
                        key={index}
                     >
                        {tag}
                     </li>
                  ))}
               </ul>
            </div>

            <Image
               className='sm:absolute top-8 sm:-right-40 h-[17rem] sm:h-[initial] object-cover object-top sm:w-[28.25rem] rounded-t-lg sm:shadow-2xl sm:group-even:-left-40 sm:group-hover:-translate-x-3 sm:group-hover:translate-y-3 sm:group-hover:-rotate-2 sm:group-hover:scale-[1.1] sm:group-even:group-hover:translate-x-3 sm:group-even:group-hover:translate-y-3 sm:group-even:group-hover:rotate-2 transition'
               src={imageUrl}
               alt={title}
               quality={90}
            />
         </section>
      </motion.div>
   );
};

export default ProjectCard;
