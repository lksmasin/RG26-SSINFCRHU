import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Info, AlertCircle, CheckCircle, XCircle, FileText, Headphones, BrainCircuit, ExternalLink, CheckSquare, Layers } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import type { Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { subjects } from '../data/subjects';
import { AudioPlayer } from '../components/AudioPlayer';

export const TopicDetail: React.FC = () => {
  const { subjectId, topicId } = useParams<{ subjectId: string; topicId: string }>();
  const [activeSidebarTab, setActiveSidebarTab] = useState<'podcast' | 'quiz' | 'flashcards'>('podcast');

  const subject = subjects.find((s) => s.id === subjectId);
  const topic = subject?.years.flatMap((y) => y.topics).find((t) => t.id === topicId);

  if (!subject || !topic) {
    return <div className="p-12 text-center text-neutral-500 font-serif italic">Téma nenalezeno.</div>;
  }

  // Ensure default tab is valid
  if (activeSidebarTab === 'podcast' && !topic.audioUrl) {
    setActiveSidebarTab('quiz');
  }

  const sanitizeContent = (content: string) => {
    return content.replace(/\[\[.*?\|(.*?)\]\]/g, '$1').replace(/\[\[(.*?)\]\]/g, '$1');
  };

  const MarkdownComponents: Components = {
    blockquote: ({ children }) => {
      const childrenArray = React.Children.toArray(children);
      const firstChild = childrenArray[0];

      if (React.isValidElement(firstChild) && firstChild.type === 'p') {
        const pChildren = React.Children.toArray((firstChild.props as any).children);
        const firstTextNode = pChildren[0];
        
        if (typeof firstTextNode === 'string') {
          const match = firstTextNode.match(/^\s*\[(\w+)\]\s*([^\n]*)/);
          
          if (match) {
            const [, type, title] = match;
            const typeLower = type.toLowerCase();
            
            const icons = {
              abstract: FileText,
              info: Info,
              warning: AlertCircle,
              success: CheckCircle,
              error: XCircle,
            };
            
            const Icon = icons[typeLower as keyof typeof icons] || Info;
            
            const remainingText = firstTextNode.replace(/^\s*\[\w+\]\s*[^\n]*/, '').replace(/^\s*\n/, '');
            const newPChildren = [remainingText, ...pChildren.slice(1)];
            
            return (
              <div className={`callout callout-${typeLower}`}>
                <div className="callout-title">
                  <Icon className="w-5 h-5" />
                  <span>{title.trim() || type}</span>
                </div>
                <div className="callout-content">
                  <p>{newPChildren}</p>
                  {childrenArray.slice(1)}
                </div>
              </div>
            );
          }
        }
      }
      return <blockquote>{children}</blockquote>;
    }
  };

  const isValidUrl = (url?: string) => !!url && url.trim() !== '' && !url.startsWith('PLACEHOLDER');

  const hasAudio = isValidUrl(topic.audioUrl);
  const hasQuiz = isValidUrl(topic.quizUrl) || isValidUrl(topic.quizEasyUrl) || isValidUrl(topic.quizHardUrl);
  const hasFlashcards = isValidUrl(topic.flashcardsUrl);

  const hasTools = hasAudio || hasQuiz || hasFlashcards;

  // Automatically select the first available tool for the sidebar
  if (
    (activeSidebarTab === 'podcast' && !hasAudio) ||
    (activeSidebarTab === 'quiz' && !hasQuiz) ||
    (activeSidebarTab === 'flashcards' && !hasFlashcards)
  ) {
    if (hasAudio) setActiveSidebarTab('podcast');
    else if (hasQuiz) setActiveSidebarTab('quiz');
    else if (hasFlashcards) setActiveSidebarTab('flashcards');
  }

  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col xl:flex-row gap-12 lg:gap-16 pb-20">
      
      {/* Left Column: Content */}
      <div className={`w-full ${hasTools ? 'xl:w-[65%]' : 'max-w-4xl mx-auto'}`}>
        <Link 
          to={`/subjects/${subject.id}`} 
          className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors mb-12"
        >
          <ChevronLeft className="w-4 h-4 mr-1" /> {subject.name}
        </Link>

        <header className="mb-14">
          <h1 className="font-serif text-5xl md:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight mb-6">
            {topic.title}
          </h1>
          <p className="font-sans text-xl text-neutral-500 dark:text-neutral-400 leading-relaxed">
            {topic.description}
          </p>
        </header>

        <div className="prose prose-zinc dark:prose-invert">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            components={MarkdownComponents}
          >
            {sanitizeContent(topic.content)}
          </ReactMarkdown>
        </div>
      </div>

      {/* Right Column: Interactive Sidebar (Sticky) */}
      {hasTools && (
        <aside className="w-full xl:w-[35%]">
          <div className="sticky top-24 editorial-card bg-neutral-100/50 dark:bg-neutral-900/50 p-6 sm:p-8 border-none ring-1 ring-neutral-200 dark:ring-neutral-800 flex flex-col gap-6">
            
            <div className="flex gap-2 mb-2 border-b border-neutral-200 dark:border-neutral-800 pb-4 overflow-x-auto no-scrollbar">
              {hasAudio && (
                <button
                  onClick={() => setActiveSidebarTab('podcast')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${activeSidebarTab === 'podcast' ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900' : 'text-neutral-500 hover:bg-neutral-200 dark:hover:bg-neutral-800'}`}
                >
                  <Headphones className="w-4 h-4" /> AI Podcast
                </button>
              )}
              {hasQuiz && (
                <button
                  onClick={() => setActiveSidebarTab('quiz')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${activeSidebarTab === 'quiz' ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900' : 'text-neutral-500 hover:bg-neutral-200 dark:hover:bg-neutral-800'}`}
                >
                  <CheckSquare className="w-4 h-4" /> Kvíz
                </button>
              )}
              {hasFlashcards && (
                <button
                  onClick={() => setActiveSidebarTab('flashcards')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${activeSidebarTab === 'flashcards' ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900' : 'text-neutral-500 hover:bg-neutral-200 dark:hover:bg-neutral-800'}`}
                >
                  <Layers className="w-4 h-4" /> Flashcards
                </button>
              )}
            </div>

            <div className="w-full">
              {activeSidebarTab === 'podcast' && hasAudio && (
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <h3 className="font-serif text-2xl font-bold text-neutral-900 dark:text-white">Poslechněte si výklad</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">Přehrajte si AI vygenerovaný podcast, který shrnuje to nejdůležitější z tohoto tématu.</p>
                  </div>
                  <AudioPlayer src={topic.audioUrl!} title={topic.title} />
                </div>
              )}

              {activeSidebarTab === 'quiz' && hasQuiz && (
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <h3 className="font-serif text-2xl font-bold text-neutral-900 dark:text-white">Ověřte své znalosti</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      Otestujte své znalosti z tohoto tématu pomocí inteligentních kvízů v aplikaci Google NotebookLM.
                    </p>
                  </div>
                  
                  {isValidUrl(topic.quizEasyUrl) && isValidUrl(topic.quizHardUrl) ? (
                    <div className="flex flex-col gap-3 mt-2">
                      <a 
                        href={topic.quizEasyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md"
                      >
                        <BrainCircuit className="w-5 h-5" /> Kvíz Klasický (Lehký) <ExternalLink className="w-4 h-4 ml-1 opacity-70" />
                      </a>
                      <a 
                        href={topic.quizHardUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md"
                      >
                        <BrainCircuit className="w-5 h-5" /> Kvíz Těžký <ExternalLink className="w-4 h-4 ml-1 opacity-70" />
                      </a>
                    </div>
                  ) : (
                    <a 
                      href={topic.quizUrl || topic.quizEasyUrl || topic.quizHardUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 flex items-center justify-center gap-2 w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md"
                    >
                      <BrainCircuit className="w-5 h-5" /> Spustit Kvíz v NotebookLM <ExternalLink className="w-4 h-4 ml-1 opacity-70" />
                    </a>
                  )}
                </div>
              )}

              {activeSidebarTab === 'flashcards' && hasFlashcards && (
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <h3 className="font-serif text-2xl font-bold text-neutral-900 dark:text-white">Opakování pojmů</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      Naučte se klíčové pojmy efektivně. Otevřete si sadu interaktivních kartiček (Flashcards) v Google NotebookLM.
                    </p>
                  </div>
                  <a 
                    href={topic.flashcardsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex items-center justify-center gap-2 w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md"
                  >
                    <BrainCircuit className="w-5 h-5" /> Otevřít Flashcards v NotebookLM <ExternalLink className="w-4 h-4 ml-1 opacity-70" />
                  </a>
                </div>
              )}
            </div>

          </div>
        </aside>
      )}

    </div>
  );
};
