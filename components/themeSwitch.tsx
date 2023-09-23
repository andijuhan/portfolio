'use client';
import { UseThemeContext } from '@/context/themeContext';
import { BsMoon, BsSun } from 'react-icons/bs';

const ThemeSwitch = () => {
   const { theme, toggleTheme } = UseThemeContext();

   return (
      <button
         className='fixed bg-white dark:bg-gray-950 dark:text-white w-[3rem] h-[3rem] bottom-5 right-5 bg-opacity-80 backdrop-blur-[0.5rem] border border-white dark:border-gray-900 border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all'
         onClick={toggleTheme}
      >
         {theme === 'light' ? <BsSun /> : <BsMoon />}
      </button>
   );
};

export default ThemeSwitch;
