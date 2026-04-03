import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Info, AlertCircle, CheckCircle, XCircle, FileText, Headphones, BrainCircuit, CheckSquare, Layers, Video, MonitorPlay } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import type { Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { subjects } from '../data/subjects';
import { AudioPlayer } from '../components/AudioPlayer';

export const TopicDetail: React.FC = () => {
  const { subjectId, topicId } = useParams<{ subjectId: string; topicId: string }>();

  const subject = subjects.find((s) => s.id === subjectId);
  const topic = subject?.years.flatMap((y) => y.topics).find((t) => t.id === topicId);

  if (!subject || !topic) {
    return <div className="p-12 text-center text-neutral-500 font-serif italic">Téma nenalezeno.</div>;
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
  const hasVideo = isValidUrl(topic.videoUrl);
  const hasPresentation = isValidUrl(topic.presentationUrl);

  const hasTools = hasAudio || hasQuiz || hasFlashcards || hasVideo || hasPresentation;

  return (
    <div className="w-full max-w-7xl mx-auto pb-20">
      
      {/* Header and Back Link */}
      <div className="mb-10 lg:mb-14">
        <Link 
          to={`/subjects/${subject.id}`} 
          className="inline-flex items-center text-xs sm:text-sm font-bold uppercase tracking-widest text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors mb-8 lg:mb-12"
        >
          <ChevronLeft className="w-4 h-4 mr-1" /> {subject.name}
        </Link>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight mb-4 lg:mb-6">
          {topic.title}
        </h1>
        <p className="font-sans text-base sm:text-lg lg:text-xl text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-4xl">
          {topic.description}
        </p>
      </div>

      <div className="flex flex-col-reverse xl:flex-row gap-12 lg:gap-16">
        
        {/* Left Column: Content */}
        <div className={`w-full ${hasTools ? 'xl:w-[65%]' : 'max-w-4xl mx-auto'}`}>
          <div className="prose prose-zinc dark:prose-invert">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              components={MarkdownComponents}
            >
              {sanitizeContent(topic.content)}
            </ReactMarkdown>
          </div>
        </div>

        {/* Right Column: Stacked Tools */}
        {hasTools && (
          <aside className="w-full xl:w-[35%]">
            <div className="xl:sticky xl:top-24 flex flex-col gap-8">
              
              {/* AI Podcast Section */}
              {hasAudio && (
                <div className="editorial-card bg-neutral-100/50 dark:bg-neutral-900/50 p-6 sm:p-8 border-none ring-1 ring-neutral-200 dark:ring-neutral-800 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-xl flex items-center justify-center shrink-0">
                      <Headphones className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-neutral-900 dark:text-white">AI Podcast</h3>
                      <p className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest">Poslech k tématu</p>
                    </div>
                  </div>
                  <AudioPlayer src={topic.audioUrl!} title={topic.title} />
                </div>
              )}

              {/* Quiz Section */}
              {hasQuiz && (
                <div className="editorial-card bg-neutral-100/50 dark:bg-neutral-900/50 p-6 sm:p-8 border-none ring-1 ring-neutral-200 dark:ring-neutral-800 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center shrink-0">
                      <CheckSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-neutral-900 dark:text-white">Kvízy</h3>
                      <p className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest">Ověření znalostí</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 mt-2">
                    {isValidUrl(topic.quizEasyUrl) && isValidUrl(topic.quizHardUrl) ? (
                      <>
                        <a href={topic.quizEasyUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-3 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-all shadow-md">
                          <BrainCircuit className="w-4 h-4" /> Kvíz Klasický (Lehký)
                        </a>
                        <a href={topic.quizHardUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-3 bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold rounded-xl transition-all shadow-md">
                          <BrainCircuit className="w-4 h-4" /> Kvíz Těžký
                        </a>
                      </>
                    ) : (
                      <a href={topic.quizUrl || topic.quizEasyUrl || topic.quizHardUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-3 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-all shadow-md">
                        <BrainCircuit className="w-4 h-4" /> Spustit Kvíz v NotebookLM
                      </a>
                    )}
                  </div>
                </div>
              )}

              {/* Flashcards Section */}
              {hasFlashcards && (
                <div className="editorial-card bg-neutral-100/50 dark:bg-neutral-900/50 p-6 sm:p-8 border-none ring-1 ring-neutral-200 dark:ring-neutral-800 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-xl flex items-center justify-center shrink-0">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-neutral-900 dark:text-white">Flashcards</h3>
                      <p className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest">Opakování pojmů</p>
                    </div>
                  </div>
                  <a href={topic.flashcardsUrl} target="_blank" rel="noopener noreferrer" className="mt-2 flex items-center justify-center gap-2 w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-all shadow-md">
                    <BrainCircuit className="w-4 h-4" /> Otevřít Kartičky v NotebookLM
                  </a>
                </div>
              )}

              {/* Video Section */}
              {hasVideo && (
                <div className="editorial-card bg-neutral-100/50 dark:bg-neutral-900/50 p-6 sm:p-8 border-none ring-1 ring-neutral-200 dark:ring-neutral-800 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 rounded-xl flex items-center justify-center shrink-0">
                      <Video className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-neutral-900 dark:text-white">Video výklad</h3>
                      <p className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest">Shrnutí tématu</p>
                    </div>
                  </div>
                  <a href={topic.videoUrl} target="_blank" rel="noopener noreferrer" className="mt-2 flex items-center justify-center gap-2 w-full py-3 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold rounded-xl transition-all shadow-md">
                    <Video className="w-4 h-4" /> Pustit Video v NotebookLM
                  </a>
                </div>
              )}

              {/* Presentation Section */}
              {hasPresentation && (
                <div className="editorial-card bg-neutral-100/50 dark:bg-neutral-900/50 p-6 sm:p-8 border-none ring-1 ring-neutral-200 dark:ring-neutral-800 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-xl flex items-center justify-center shrink-0">
                      <MonitorPlay className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-neutral-900 dark:text-white">Prezentace</h3>
                      <p className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest">Studijní materiály</p>
                    </div>
                  </div>
                  <a href={topic.presentationUrl} target="_blank" rel="noopener noreferrer" className="mt-2 flex items-center justify-center gap-2 w-full py-3 bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold rounded-xl transition-all shadow-md">
                    <MonitorPlay className="w-4 h-4" /> Otevřít Prezentaci v NotebookLM
                  </a>
                </div>
              )}

            </div>
          </aside>
        )}

      </div>
    </div>
  );
};
