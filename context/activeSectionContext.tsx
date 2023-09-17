'use client';
import React, { useState, createContext, useContext } from 'react';
import { links } from '@/lib/data';

type SectionName = (typeof links)[number]['name'];

interface IActiveSectionContextProviderProps {
   children: React.ReactNode;
}

interface IActiveSection {
   activeSection: SectionName;
   setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
}

export const ActiveSectionContext = createContext<IActiveSection | null>(null);

const ActiveSectionContextProvider = ({
   children,
}: IActiveSectionContextProviderProps) => {
   const [activeSection, setActiveSection] = useState<SectionName>('Home');

   return (
      <ActiveSectionContext.Provider
         value={{ activeSection, setActiveSection }}
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
