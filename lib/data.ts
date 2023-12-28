import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import corpcommentImg from '@/public/corpcomment.png';
import rmtdevImg from '@/public/rmtdev.png';
import wordanalyticsImg from '@/public/wordanalytics.png';

export const links = [
   {
      name: 'Home',
      hash: '#home',
   },
   {
      name: 'About',
      hash: '#about',
   },
   {
      name: 'Projects',
      hash: '#projects',
   },
   {
      name: 'Skills',
      hash: '#skills',
   },
   {
      name: 'Experience',
      hash: '#experience',
   },
   {
      name: 'Contact',
      hash: '#contact',
   },
] as const;

export const experiencesData = [
   {
      title: 'Graduated From College',
      location: 'Kuningan',
      description:
         'I graduated after 4 years of studying with a degree in Computer Science',
      icon: React.createElement(LuGraduationCap),
      date: '2017',
   },
   {
      title: 'Blogger',
      location: 'Kuningan',
      description:
         'I worked as a blogger for 4 years. I build websites and monetize with Adsense.',
      icon: React.createElement(CgWorkAlt),
      date: '2017 - 2021',
   },
   {
      title: 'Graduated Bootcamp',
      location: 'Kuningan',
      description:
         'I decided to pursue my passion for programming. I enrolled in a coding bootcamp and learned full-stack web development',
      icon: React.createElement(FaReact),
      date: '2022 - present',
   },
] as const;

export const projectsData = [
   {
      title: 'CorpComment',
      description:
         'I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.',
      tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
      imageUrl: corpcommentImg,
   },
   {
      title: 'rmtDev',
      description:
         'Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.',
      tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
      imageUrl: rmtdevImg,
   },
   {
      title: 'Word Analytics',
      description:
         'A public web app for quick analytics on text. It shows word count, character count and social media post limits.',
      tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
      imageUrl: wordanalyticsImg,
   },
] as const;

export const skillsData = [
   'HTML',
   'CSS',
   'Tailwind',
   'Framer Motion',
   'JavaScript',
   'TypeScript',
   'React',
   'Next.js',
   'Node.js',
   'Git',
   'Prisma',
   'MongoDB',
   'Mysql',
   'Express',
] as const;
