'use server';
import { validateString } from '@/lib/utils';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
   const senderEmail = formData.get('email')?.toString() || '';
   const message = formData.get('message')?.toString() || '';

   if (!validateString(senderEmail, 200)) {
      return {
         error: 'Invalid sender email',
      };
   }

   if (!validateString(message, 10000)) {
      return {
         error: 'Invalid sender message',
      };
   }

   resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'andijuhandi.4@gmail.com',
      reply_to: senderEmail,
      subject: 'Message from contact form',
      text: message,
   });
};
