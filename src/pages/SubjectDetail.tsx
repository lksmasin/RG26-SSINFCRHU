import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { subjects } from '../data/subjects';

export const SubjectDetail: React.FC = () => {
  const { subjectId } = useParams<{ subjectId: string }>();
  const subject = subjects.find((s) => s.id === subjectId);

  if (!subject) {
    return <div className="p-12 text-center text-neutral-500">Předmět nenalezen.</div>;
  }

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <Link to="/subjects" className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors mb-12">
        <ChevronLeft className="w-4 h-4 mr-1" /> Zpět na předměty
      </Link>

      <header className="mb-20">
        <p className="font-sans font-bold text-accent tracking-widest uppercase text-sm mb-4">Osnova předmětu</p>
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-neutral-900 dark:text-white leading-tight">
          {subject.name}
        </h1>
      </header>

      <div className="space-y-24">
        {subject.years.map((year) => {
          if (year.topics.length === 0) return null;
          return (
            <section key={year.id} className="relative">
              <div className="absolute -left-4 md:-left-12 top-0 bottom-0 w-px bg-neutral-200 dark:bg-neutral-800 hidden md:block" />
              
              <div className="relative">
                <div className="md:absolute -left-[54px] top-2 w-6 h-6 rounded-full bg-accent border-4 border-white dark:border-[#0f0f11] hidden md:block" />
                <h2 className="font-serif text-3xl font-bold text-neutral-900 dark:text-white mb-10 inline-block">
                  {year.label}
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pl-0">
                {year.topics.map((topic) => {
                  const isValidUrl = (url?: string) => !!url && url.trim() !== '' && !url.startsWith('PLACEHOLDER');
                  const hasAudio = isValidUrl(topic.audioUrl);
                  const hasQuiz = isValidUrl(topic.quizUrl) || isValidUrl(topic.quizEasyUrl) || isValidUrl(topic.quizHardUrl);
                  const hasFlashcards = isValidUrl(topic.flashcardsUrl);

                  return (
                  <Link
                    key={topic.id}
                    to={`/subjects/${subject.id}/topics/${topic.id}`}
                    className="editorial-card p-6 md:p-8 group hover:border-accent dark:hover:border-accent hover:shadow-lg transition-all"
                  >
                    <h3 className="font-serif text-2xl font-bold text-neutral-900 dark:text-white mb-4 group-hover:text-accent transition-colors">
                      {topic.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm md:text-base">
                      {topic.description}
                    </p>
                    <div className="mt-8 flex flex-wrap items-center gap-3 text-[10px] font-bold uppercase tracking-widest">
                      {hasAudio && <span className="px-2.5 py-1 rounded-md bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400">Podcast</span>}
                      {hasQuiz && <span className="px-2.5 py-1 rounded-md bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">Kvíz</span>}
                      {hasFlashcards && <span className="px-2.5 py-1 rounded-md bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">Flashcards</span>}
                    </div>
                  </Link>
                  );
                })}
              </div>
            </section>
          );
        })}

        {subject.years.every(y => y.topics.length === 0) && (
          <div className="editorial-card p-12 text-center border-dashed">
            <p className="text-neutral-500 font-serif italic text-lg">Zatím žádná témata pro tento předmět.</p>
          </div>
        )}
      </div>
    </div>
  );
};
