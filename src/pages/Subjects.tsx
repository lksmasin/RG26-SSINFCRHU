import React from 'react';
import { Link } from 'react-router-dom';
import { subjects } from '../data/subjects';
import { BookOpen } from 'lucide-react';

export const Subjects: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <header className="mb-16">
        <h1 className="font-serif text-5xl font-bold text-neutral-900 dark:text-white">Co se budem učit?</h1>
        <p className="font-sans text-neutral-500 dark:text-neutral-400 mt-4 text-lg">Vyber si předmět a mrkni na vypracovaný témata.</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {subjects.map((subject) => {
          const topicCount = subject.years.reduce((acc, y) => acc + y.topics.length, 0);
          const isDone = subject.id === 'technologie';
          
          return (
            <Link
              key={subject.id}
              to={`/subjects/${subject.id}`}
              className="editorial-card p-8 group hover:shadow-md border-neutral-300 dark:border-neutral-700 relative overflow-hidden"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="w-12 h-12 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-2xl flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest ${isDone ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400' : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-400 dark:text-neutral-500'}`}>
                    {isDone ? 'Dokončeno' : 'Nedokončeno'}
                  </span>
                  <div className="text-right">
                    <span className="font-sans font-bold text-2xl text-neutral-900 dark:text-white">{topicCount}</span>
                    <p className="text-xs font-bold uppercase tracking-widest text-neutral-400">Témat</p>
                  </div>
                </div>
              </div>
              <h2 className="font-serif text-2xl font-bold text-neutral-900 dark:text-white group-hover:text-accent transition-colors">
                {subject.name}
              </h2>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
