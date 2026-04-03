import React from 'react';
import { NavLink } from 'react-router-dom';
import { BookOpen, Home, Sun, Moon, PenTool } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Sidebar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const links = [
    { to: '/', icon: Home, label: 'Přehled' },
    { to: '/subjects', icon: BookOpen, label: 'Předměty' },
  ];

  return (
    <aside className="fixed bottom-0 left-0 right-0 h-[72px] lg:h-screen lg:w-64 lg:sticky lg:top-0 flex flex-row lg:flex-col justify-between items-center lg:items-stretch px-4 sm:px-8 lg:p-6 border-t lg:border-t-0 lg:border-r border-neutral-200 dark:border-neutral-800 bg-[var(--color-surface-light)] dark:bg-[var(--color-surface-dark)] z-50">
      
      <div className="flex flex-row lg:flex-col gap-2 sm:gap-6 lg:gap-8 w-full lg:w-auto h-full lg:h-auto items-center lg:items-stretch justify-between lg:justify-start">
        
        {/* Logo - hidden on mobile */}
        <div className="hidden lg:flex items-center justify-start gap-3 px-2 mt-2 mb-4">
          <div className="w-10 h-10 bg-accent text-white rounded-xl flex items-center justify-center font-serif font-bold text-lg shadow-sm">
            R
          </div>
          <div>
            <h1 className="font-serif font-bold text-lg leading-tight">Reprodukční<br/>grafik 2026</h1>
            <p className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold mt-1">Studijní Hub</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-row lg:flex-col gap-2 sm:gap-4 lg:gap-2 flex-1 lg:flex-none justify-center lg:justify-start h-full lg:h-auto items-center lg:items-stretch">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `
                flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-1 lg:gap-3 p-2 lg:p-3 lg:px-4 rounded-xl font-medium transition-all w-20 sm:w-24 lg:w-auto
                ${isActive 
                  ? 'text-accent lg:bg-neutral-100 lg:dark:bg-neutral-900 lg:text-neutral-900 lg:dark:text-white' 
                  : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white lg:hover:bg-neutral-50 lg:dark:hover:bg-neutral-900/50'}
              `}
            >
              <link.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-5 lg:h-5 shrink-0" />
              <span className="text-[10px] sm:text-xs lg:text-base lg:block font-bold lg:font-medium">{link.label}</span>
            </NavLink>
          ))}

          <div className="hidden lg:block my-4 border-t border-neutral-200 dark:border-neutral-800" />

          <a
            href="http://polygrafie.lukymas.eu.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-1 lg:gap-3 p-2 lg:p-3 lg:px-4 rounded-xl font-medium text-neutral-500 hover:text-neutral-900 dark:hover:text-white lg:hover:bg-neutral-50 lg:dark:hover:bg-neutral-900/50 transition-all group w-20 sm:w-24 lg:w-auto"
            title="Polygrafické nástroje"
          >
            <PenTool className="w-5 h-5 sm:w-6 sm:h-6 lg:w-5 lg:h-5 shrink-0 group-hover:rotate-12 transition-transform" />
            <span className="text-[10px] sm:text-xs lg:text-base lg:block font-bold lg:font-medium text-center leading-tight">Nástroje</span>
          </a>
        </nav>

        {/* Footer / Theme Toggle */}
        <div className="flex items-center justify-center px-2 shrink-0 border-l border-neutral-200 dark:border-neutral-800 pl-4 lg:border-none lg:pl-0">
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center lg:justify-start gap-3 p-3 lg:px-4 lg:py-3 w-full rounded-xl font-medium text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-900 hover:text-neutral-900 dark:hover:text-white transition-all"
            title={theme === 'light' ? 'Tmavý režim' : 'Světlý režim'}
          >
            {theme === 'light' ? <Moon className="w-6 h-6 lg:w-5 lg:h-5 shrink-0" /> : <Sun className="w-6 h-6 lg:w-5 lg:h-5 shrink-0" />}
            <span className="hidden lg:block">{theme === 'light' ? 'Tmavý režim' : 'Světlý režim'}</span>
          </button>
        </div>

      </div>
    </aside>
  );
};
