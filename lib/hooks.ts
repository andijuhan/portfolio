import { UseActiveSectionContext } from '@/context/activeSectionContext';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import type { SectionName } from './types';

export const useSectionInView = (sectionName: SectionName, threshold = 0.5) => {
   const { ref, inView } = useInView({
      threshold,
   });
   const { setActiveSection, timeOfLastClick } = UseActiveSectionContext();

   useEffect(() => {
      if (inView && Date.now() - timeOfLastClick > 1000) {
         setActiveSection(sectionName);
      }
   }, [inView, setActiveSection, timeOfLastClick, sectionName]);

   return {
      ref,
   };
};
