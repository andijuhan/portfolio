'use client';
import React, { useEffect } from 'react';
import SectionHeading from './sectionHeading';
import { projectsData } from '@/lib/data';
import ProjectCard from './projectCard';
import { useInView } from 'react-intersection-observer';
import { UseActiveSectionContext } from '@/context/activeSectionContext';

const Projects = () => {
   const { ref, inView } = useInView({
      threshold: 0.75,
   });
   const { setActiveSection } = UseActiveSectionContext();

   useEffect(() => {
      if (inView) {
         setActiveSection('Projects');
      }
   }, [inView, setActiveSection]);

   return (
      <section
         className='max-w-[45rem] mb-28 sm:mb-40 scroll-mt-28'
         id='projects'
         ref={ref}
      >
         <SectionHeading>my projects</SectionHeading>
         <div>
            {projectsData.map((project, index) => (
               <React.Fragment key={index}>
                  <ProjectCard {...project} />
               </React.Fragment>
            ))}
         </div>
      </section>
   );
};

export default Projects;
