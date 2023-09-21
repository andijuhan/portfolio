'use client';
import { FaPaperPlane } from 'react-icons/fa';
import SectionHeading from './sectionHeading';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import { sendEmail } from '@/actions';

const Contact = () => {
   const { ref } = useSectionInView('Contact');

   return (
      <motion.section
         id='contact'
         ref={ref}
         className='mb-28 sm:mb-40 max-w-[60rem] scroll-mt-28 w-[min(100%, 38rem)]'
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         viewport={{ once: true }}
         transition={{
            duration: 1,
         }}
      >
         <SectionHeading>contact me</SectionHeading>
         <p className='text-gray-700 text-center'>
            Please contact me directly at{' '}
            <a className='underline' href='mailto:example@gmail.com'>
               example@gmail.com
            </a>{' '}
            or through this form.
         </p>

         <form
            className='mt-10 flex flex-col gap-2'
            action={async (formData) => {
               await sendEmail(formData);
            }}
         >
            <input
               className='h-14 rounded-lg border border-black/10 p-4 outline-black/10'
               type='email'
               name='email'
               required
               maxLength={200}
               placeholder='Your email'
            />
            <textarea
               placeholder='Your message'
               name='message'
               required
               maxLength={10000}
               className='h-52 my-3 rounded-lg border-black/10 p-4 outline-black/10'
            />
            <button
               type='submit'
               className='group h-[3rem] w-[8rem] bg-gray-900 text-white flex justify-center items-center gap-2 rounded-full font-medium focus:scale-110 hover:bg-gray-950 hover:scale-110 active:scale-110 transition-all'
            >
               Submit{' '}
               <FaPaperPlane
                  className='opacity-70 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all'
                  size={15}
               />
            </button>
         </form>
      </motion.section>
   );
};

export default Contact;
