'use client';
import SectionHeading from './sectionHeading';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import { sendEmail } from '@/actions/sendEmail';
import { useRef } from 'react';
import toast from 'react-hot-toast';
import SubmitButton from './submitButton';

const Contact = () => {
   const { ref } = useSectionInView('Contact');

   const emailInputRef = useRef<HTMLInputElement | null>(null);
   const messageInputRef = useRef<HTMLTextAreaElement | null>(null);

   const resetForm = () => {
      if (emailInputRef.current && messageInputRef.current) {
         emailInputRef.current.value = '';
         messageInputRef.current.value = '';
      }
   };

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
               andijuhandi.4@gmail.com
            </a>{' '}
            or through this form.
         </p>

         <form
            className='mt-10 flex flex-col gap-2'
            action={async (formData) => {
               const { data, error } = await sendEmail(formData);

               if (error) {
                  toast.error(error);
                  return;
               }

               toast.success('Email sent successfully!');
               resetForm();
            }}
         >
            <input
               className='h-14 rounded-lg border border-black/10 p-4 outline-black/10'
               type='email'
               name='email'
               required
               maxLength={200}
               placeholder='Your email'
               ref={emailInputRef}
            />
            <textarea
               placeholder='Your message'
               name='message'
               required
               maxLength={10000}
               className='h-52 my-3 rounded-lg border-black/10 p-4 outline-black/10'
               ref={messageInputRef}
            />
            {/* button submit harus dibuat server komponen untuk mendapatkan hook useFormStatus */}
            <SubmitButton />
         </form>
      </motion.section>
   );
};

export default Contact;
