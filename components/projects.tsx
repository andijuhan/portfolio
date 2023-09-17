import React from 'react';
import SectionHeading from './sectionHeading';
import { projectsData } from '@/lib/data';
import ProjectCard from './projectCard';

const Projects = () => {
   return (
      <section className='max-w-[45rem] mb-28 sm:mb-40'>
         <SectionHeading>my projects</SectionHeading>
         <div className='flex flex-col gap-4'>
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
