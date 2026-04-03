import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, BookOpen, PenTool } from 'lucide-react';

export const Hub: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center min-h-[60vh] gap-12 py-10 lg:py-20">
      
      {/* Editorial Header */}
      <header className="text-center space-y-6">
        <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-bold text-[10px] uppercase tracking-[0.2em] mb-4">
          Verze 2026
        </div>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-neutral-900 dark:text-white leading-tight">
          Studijní Hub
        </h1>
        <p className="font-sans text-lg md:text-xl text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          Poznámky z oboru Reprodukční grafik ze Střední školy informatiky a cestovního ruchu Humpolec, 2026.
        </p>
      </header>

      {/* Two Main Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full px-4">
        
        {/* Notes Card */}
        <Link 
          to="/subjects" 
          className="editorial-card p-10 flex flex-col justify-between aspect-square md:aspect-auto md:min-h-[320px] group hover:border-accent dark:hover:border-accent hover:shadow-2xl transition-all duration-500 bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800"
        >
          <div className="w-14 h-14 bg-neutral-100 dark:bg-neutral-800 rounded-2xl flex items-center justify-center text-neutral-900 dark:text-white group-hover:bg-accent group-hover:text-white transition-colors duration-500 shadow-sm">
            <BookOpen className="w-7 h-7" />
          </div>
          <div>
            <h2 className="font-serif text-4xl font-bold text-neutral-900 dark:text-white mb-4">
              Poznámky
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 text-base leading-relaxed">
              Všechny vypracované okruhy k závěrečným zkouškám přehledně na jednom místě.
            </p>
          </div>
          <div className="mt-8 flex items-center gap-2 font-bold text-accent uppercase tracking-widest text-[10px]">
            Otevřít předměty <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </div>
        </Link>

        {/* Tools Card */}
        <a 
          href="http://polygrafie.lukymas.eu.org/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="editorial-card p-10 flex flex-col justify-between aspect-square md:aspect-auto md:min-h-[320px] group hover:border-accent dark:hover:border-accent hover:shadow-2xl transition-all duration-500 bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800"
        >
          <div className="w-14 h-14 bg-neutral-100 dark:bg-neutral-800 rounded-2xl flex items-center justify-center text-neutral-900 dark:text-white group-hover:bg-accent group-hover:text-white transition-colors duration-500 shadow-sm">
            <PenTool className="w-7 h-7" />
          </div>
          <div>
            <h2 className="font-serif text-4xl font-bold text-neutral-900 dark:text-white mb-4">
              Nástroje
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 text-base leading-relaxed">
              Externí aplikace s kalkulačkami a polygrafickými utility pro každodenní praxi.
            </p>
          </div>
          <div className="mt-8 flex items-center gap-2 font-bold text-accent uppercase tracking-widest text-[10px]">
            Otevřít aplikaci <ExternalLink className="w-4 h-4" />
          </div>
        </a>

      </div>
    </div>
  );
};
