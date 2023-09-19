'use client';
import type { SectionName } from '@/lib/types';
import React, { useState, createContext, useContext } from 'react';

type ActiveSectionContextProviderProps = {
   children: React.ReactNode;
};

type ActiveSection = {
   activeSection: SectionName;
   setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
   timeOfLastClick: number;
   setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext = createContext<ActiveSection | null>(null);

const ActiveSectionContextProvider = ({
   children,
}: ActiveSectionContextProviderProps) => {
   const [activeSection, setActiveSection] = useState<SectionName>('Home');
   const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0);
   //jika timeOfLastClick === waktu sekarang maka disable API react-intersection-observer
   //artinya jika tombol menu di klik, API react-intersection-observer tidak akan dijalankan

   return (
      <ActiveSectionContext.Provider
         value={{
            activeSection,
            setActiveSection,
            timeOfLastClick,
            setTimeOfLastClick,
         }}
      >
         {children}
      </ActiveSectionContext.Provider>
   );
};

export default ActiveSectionContextProvider;

export const UseActiveSectionContext = () => {
   const context = useContext(ActiveSectionContext);

   if (context === null) {
      throw new Error(
         'UseActiveSectionContext must be use within an ActiveSectionContextProvider'
      );
   }

   return context;
};
