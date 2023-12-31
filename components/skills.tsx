'use client';
import { useSectionInView } from '@/lib/hooks';
import SectionHeading from './sectionHeading';
import { skillsData } from '@/lib/data';
import { motion, Variants } from 'framer-motion';

const fadeAnimationVarians: Variants = {
   initial: {
      opacity: 0,
      y: 100,
   },
   animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
         delay: 0.05 * index,
      },
   }),
};

const Skills = () => {
   const { ref } = useSectionInView('Skills', 1);

   return (
      <section
         className='mb-28 sm:mb-40 max-w-[53rem] scroll-mt-28 text-center'
         id='skills'
         ref={ref}
      >
         <SectionHeading>my skills</SectionHeading>
         <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
            {skillsData.map((skill, index) => (
               <motion.li
                  className='bg-white border rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 dark:border-none'
                  key={index}
                  variants={fadeAnimationVarians}
                  initial='initial'
                  whileInView='animate'
                  viewport={{
                     once: true,
                  }}
                  custom={index}
               >
                  {skill}
               </motion.li>
            ))}
         </ul>
      </section>
   );
};

export default Skills;
