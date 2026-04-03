import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, BookOpen, PenTool } from 'lucide-react';

export const Hub: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center min-h-[60vh] gap-12 py-10">
      
      {/* Chill Header */}
      <header className="text-center space-y-4">
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-neutral-900 dark:text-white leading-tight">
          Zdar grafiku! 👋
        </h1>
        <p className="font-sans text-xl text-neutral-500 dark:text-neutral-400 max-w-lg mx-auto">
          Všechno co potřebuješ k učení na jednom místě. <br/> Žádný zbytečný kecy, prostě jen maturitní otázky a nástroje.
        </p>
      </header>

      {/* Simple Two-Button Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full px-4">
        
        {/* Notes Button */}
        <Link 
          to="/subjects" 
          className="editorial-card p-10 flex flex-col items-center text-center group hover:border-accent dark:hover:border-accent hover:shadow-xl transition-all bg-neutral-100 dark:bg-neutral-900"
        >
          <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-accent/20">
            <BookOpen className="w-8 h-8" />
          </div>
          <h2 className="font-serif text-3xl font-bold text-neutral-900 dark:text-white mb-3">
            Poznámky
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400">
            Kvízy, podcasty a všechny ty papíry do školy přehledně.
          </p>
          <div className="mt-8 flex items-center gap-2 font-bold text-accent uppercase tracking-widest text-sm">
            Jít na to <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </div>
        </Link>

        {/* Tools Button */}
        <a 
          href="http://polygrafie.lukymas.eu.org/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="editorial-card p-10 flex flex-col items-center text-center group hover:border-neutral-400 dark:hover:border-neutral-600 hover:shadow-xl transition-all bg-neutral-900 dark:bg-neutral-100"
        >
          <div className="w-16 h-16 bg-neutral-800 dark:bg-neutral-200 rounded-2xl flex items-center justify-center text-neutral-200 dark:text-neutral-800 mb-6 group-hover:scale-110 transition-transform shadow-lg">
            <PenTool className="w-8 h-8" />
          </div>
          <h2 className="font-serif text-3xl font-bold text-white dark:text-neutral-900 mb-3">
            Nástroje
          </h2>
          <p className="text-neutral-400 dark:text-neutral-500">
            Kalkulačky a polygrafický vychytávky, co se ti hodí v praxi.
          </p>
          <div className="mt-8 flex items-center gap-2 font-bold text-neutral-400 dark:text-neutral-500 group-hover:text-white dark:group-hover:text-black transition-colors uppercase tracking-widest text-sm">
            Otevřít appku <ExternalLink className="w-4 h-4" />
          </div>
        </a>

      </div>
    </div>
  );
};
