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
    <aside className="w-20 lg:w-64 h-screen sticky top-0 flex flex-col justify-between p-4 lg:p-6 border-r border-neutral-200 dark:border-neutral-800 bg-[var(--color-surface-light)] dark:bg-[var(--color-surface-dark)] z-50">
      <div className="flex flex-col gap-8">
        {/* Logo */}
        <div className="flex items-center justify-center lg:justify-start gap-3 px-2 mt-2 mb-4">
          <div className="w-10 h-10 bg-accent text-white rounded-xl flex items-center justify-center font-serif font-bold text-lg shadow-sm">
            R
          </div>
          <div className="hidden lg:block">
            <h1 className="font-serif font-bold text-lg leading-tight">Reprodukční<br/>grafik 2026</h1>
            <p className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold mt-1">Studijní Hub</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-2">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `
                flex items-center gap-3 p-3 lg:px-4 lg:py-3 rounded-xl font-medium transition-all
                ${isActive 
                  ? 'bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-white' 
                  : 'text-neutral-500 hover:bg-neutral-50 dark:hover:bg-neutral-900/50 hover:text-neutral-900 dark:hover:text-white'}
              `}
            >
              <link.icon className="w-5 h-5 shrink-0" />
              <span className="hidden lg:block">{link.label}</span>
            </NavLink>
          ))}

          <div className="my-4 border-t border-neutral-200 dark:border-neutral-800" />

          <a
            href="http://polygrafie.lukymas.eu.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 lg:px-4 lg:py-3 rounded-xl font-medium text-neutral-500 hover:bg-neutral-50 dark:hover:bg-neutral-900/50 hover:text-neutral-900 dark:hover:text-white transition-all group"
          >
            <PenTool className="w-5 h-5 shrink-0 group-hover:rotate-12 transition-transform" />
            <span className="hidden lg:block">Polygrafické nástroje</span>
          </a>
        </nav>
      </div>

      {/* Footer / Theme Toggle */}
      <div className="flex justify-center lg:justify-start px-2">
        <button
          onClick={toggleTheme}
          className="flex items-center gap-3 p-3 lg:px-4 lg:py-3 w-full rounded-xl font-medium text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-900 hover:text-neutral-900 dark:hover:text-white transition-all"
        >
          {theme === 'light' ? <Moon className="w-5 h-5 shrink-0" /> : <Sun className="w-5 h-5 shrink-0" />}
          <span className="hidden lg:block">{theme === 'light' ? 'Tmavý režim' : 'Světlý režim'}</span>
        </button>
      </div>
    </aside>
  );
};
