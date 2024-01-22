import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import devjobs from '@/public/devjob.png';
import mdxblog from '@/public/mdxblog.png';
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
         'After graduating from bootcamp, I started building numerous projects using Next.js and other stacks.',
      icon: React.createElement(FaReact),
      date: '2022 - present',
   },
] as const;

export const projectsData = [
   {
      title: 'DevJobs',
      description:
         'Job vacancy website for software developers with a filtering feature to search for relevant positions.',
      tags: ['TypeScript', 'Next.js', 'Postgresql', 'Tailwind', 'Prisma'],
      imageUrl: devjobs,
      link: '',
   },
   {
      title: 'MDXBlog',
      description:
         'Personal programming blog utilizing MDX files for content management. Features include keyword search, search engine optimization, post filtering by tags, infinity scroll pagination, and dark mode.',
      tags: ['TypeScript', 'Next.js', 'Tailwind', 'Zustand'],
      imageUrl: mdxblog,
      link: 'http://blog.juhancoding.dev/',
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
