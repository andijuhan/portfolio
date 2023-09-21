const Footer = () => {
   return (
      <footer className='mb-10 px-4 text-center text-gray-500 '>
         <small className='mb-2 text-xs block'>
            &copy; {new Date().getFullYear()} Juhandi. All rights reserved
         </small>
         <p className='text-xs'>
            <span className='font-semibold'>About this website:</span> built
            with React & Nextjs, Typescript, Tailwind CSS, & Framer motion.
         </p>
      </footer>
   );
};

export default Footer;
