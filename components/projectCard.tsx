import { projectsData } from '@/lib/data';
import Image from 'next/image';

type ProjectCardProps = (typeof projectsData)[number];

const ProjectCard = ({
   title,
   description,
   tags,
   imageUrl,
}: ProjectCardProps) => {
   return (
      <section className='relative bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 sm:h-[20rem]'>
         <div className='py-4 px5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full'>
            <h3 className='text-2xl font-semibold'>{title}</h3>
            <p className='mt-2 leading-relaxed text-gray-700'>{description}</p>
            <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
               {tags.map((tag, index) => (
                  <li
                     className='bg-black/[0.7] text-[0.7rem] py-1 px-3 tracking-wider text-white rounded-full'
                     key={index}
                  >
                     {tag}
                  </li>
               ))}
            </ul>
         </div>

         <Image
            className='absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl'
            src={imageUrl}
            alt={title}
            quality={90}
         />
      </section>
   );
};

export default ProjectCard;
