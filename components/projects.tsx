'use client';
import React from 'react';
import SectionHeading from './sectionHeading';
import { projectsData } from '@/lib/data';
import ProjectCard from './projectCard';
import { useSectionInView } from '@/lib/hooks';

const Projects = () => {
   const { ref } = useSectionInView('Projects', 0.6);

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
