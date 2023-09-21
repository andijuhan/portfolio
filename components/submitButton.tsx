import { experimental_useFormStatus as useFormStatus } from 'react-dom';
import { FaPaperPlane } from 'react-icons/fa';

const SubmitButton = () => {
   const { pending } = useFormStatus();
   return (
      <button
         type='submit'
         className='group h-[3rem] w-[8rem] bg-gray-900 text-white flex justify-center items-center gap-2 rounded-full font-medium focus:scale-110 hover:bg-gray-950 hover:scale-110 active:scale-110 transition-all disabled:scale-100 disabled:bg-opacity-60'
         disabled={pending}
      >
         {pending ? (
            <div className='h-5 w-5 rounded-full animate-spin border-2 border-white'></div>
         ) : (
            <>
               Submit{' '}
               <FaPaperPlane
                  className='opacity-70 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all'
                  size={15}
               />
            </>
         )}
      </button>
   );
};

export default SubmitButton;
