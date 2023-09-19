'use client';
import { experiencesData } from '@/lib/data';
import SectionHeading from './sectionHeading';
import { useSectionInView } from '@/lib/hooks';
import {
   VerticalTimeline,
   VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import React from 'react';

const Experience = () => {
   const { ref } = useSectionInView('Experience');
   return (
      <section
         className='mb-28 sm:mb-40 max-w-[60rem] scroll-mt-28'
         ref={ref}
         id='experience'
      >
         <SectionHeading>my experience</SectionHeading>
         <VerticalTimeline lineColor=''>
            {/* lineColor bawaan liblary error, jadi dibuat kosong, digantikan buat variabel --line-color di global.css */}
            {experiencesData.map((experienceItem, index) => (
               <React.Fragment key={index}>
                  <VerticalTimelineElement
                     contentStyle={{
                        background: '#f3f4f6',
                        boxShadow: 'none',
                        border: '1px solid rgba(0, 0, 0, 0.05',
                        textAlign: 'left',
                        padding: '1.3rem 2rem',
                     }}
                     contentArrowStyle={{
                        borderRight: '0.4rem solid #9ca3af',
                     }}
                     date={experienceItem.date}
                     icon={experienceItem.icon}
                     iconStyle={{
                        background: 'white',
                        fontSize: '1.5rem',
                        boxShadow: 'none',
                        border: '2px solid #818cf8',
                     }}
                  >
                     <h3 className='font-semibold text-lg capitalize'>
                        {experienceItem.title}
                     </h3>
                     <p className='font-normal !text-base !mt-0'>
                        {experienceItem.location}
                     </p>
                     <p className='!mt-1 !font-normal !text-base text-gray-700'>
                        {experienceItem.description}
                     </p>
                  </VerticalTimelineElement>
               </React.Fragment>
            ))}
         </VerticalTimeline>
      </section>
   );
};

export default Experience;
