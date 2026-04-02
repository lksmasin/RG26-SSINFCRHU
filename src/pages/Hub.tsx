import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, BookOpen, Headphones, BrainCircuit } from 'lucide-react';
import { subjects } from '../data/subjects';

export const Hub: React.FC = () => {
  const totalTopics = subjects.reduce((acc, s) => acc + s.years.reduce((accY, y) => accY + y.topics.length, 0), 0);

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col gap-10 py-6">
      
      {/* Header Section */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-4">
        <div className="space-y-4 max-w-2xl">
          <p className="font-sans font-bold text-accent tracking-widest uppercase text-sm">Vítejte zpět</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-neutral-900 dark:text-white leading-tight">
            Studijní Hub <br/> <span className="italic text-neutral-400 dark:text-neutral-500 font-normal">pro Reprodukční grafiky.</span>
          </h1>
          <p className="font-sans text-xl text-neutral-600 dark:text-neutral-400 mt-2">
            Kompletní poznámky, podcasty a napojení na Google NotebookLM.
          </p>
        </div>
      </header>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Main CTA - Big Card */}
        <Link to="/subjects" className="md:col-span-2 editorial-card p-8 sm:p-10 flex flex-col justify-between group hover:shadow-md border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-900">
          <div>
            <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center text-white mb-6">
              <BookOpen className="w-6 h-6" />
            </div>
            <h2 className="font-serif text-3xl font-bold text-neutral-900 dark:text-white mb-3 group-hover:text-accent transition-colors">
              Začít studovat
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-md">
              Prozkoumejte všechny odborné předměty rozdělené do ročníků. Celkem k dispozici {totalTopics} vypracovaných témat.
            </p>
          </div>
          <div className="mt-12 flex items-center gap-2 font-bold text-accent uppercase tracking-widest text-sm">
            Otevřít předměty <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </div>
        </Link>

        {/* Tools Card */}
        <a href="http://polygrafie.lukymas.eu.org/" target="_blank" rel="noopener noreferrer" className="editorial-card p-8 flex flex-col justify-between group hover:shadow-md bg-neutral-900 dark:bg-neutral-100">
          <div>
            <h2 className="font-sans text-xl font-bold text-white dark:text-neutral-900 mb-2">
              Polygrafické nástroje
            </h2>
            <p className="text-neutral-400 dark:text-neutral-500">
              Kalkulačky a výpočetní utility pro každodenní praxi grafika.
            </p>
          </div>
          <div className="mt-8 flex items-center justify-end text-neutral-500 dark:text-neutral-400 group-hover:text-white dark:group-hover:text-neutral-900 transition-colors">
            <ExternalLink className="w-8 h-8" />
          </div>
        </a>

        {/* Features Small Cards */}
        <div className="editorial-card md:col-span-1 p-6 flex flex-col items-start gap-4">
          <div className="p-3 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-xl">
            <Headphones className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-lg text-neutral-900 dark:text-white">AI Podcasty</h3>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">Poslouchejte probíraná témata přímo v prohlížeči pomocí integrovaného přehrávače.</p>
        </div>

        <div className="editorial-card md:col-span-2 p-6 flex flex-col items-start gap-4">
          <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl">
            <BrainCircuit className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-lg text-neutral-900 dark:text-white">Google NotebookLM</h3>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            Ke každému tématu je připojen odkaz do vaší znalostní báze v NotebookLM, kde si můžete generovat pokročilé kvízy, flashcards a chatovat se svými poznámkami.
          </p>
        </div>

      </div>
    </div>
  );
};
