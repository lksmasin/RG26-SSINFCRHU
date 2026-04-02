import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, RotateCcw, RotateCw } from 'lucide-react';

interface AudioPlayerProps {
  src: string;
  title: string;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ src, title }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const skip = (amount: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime += amount;
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const total = audioRef.current.duration;
      setCurrentTime(current);
      setProgress((current / total) * 100 || 0);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (progressBarRef.current && audioRef.current) {
      const rect = progressBarRef.current.getBoundingClientRect();
      const pos = (e.clientX - rect.left) / rect.width;
      audioRef.current.currentTime = pos * audioRef.current.duration;
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "00:00";
    const m = Math.floor(time / 60);
    const s = Math.floor(time % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Reset player when src changes
  useEffect(() => {
    setIsPlaying(false);
    setProgress(0);
    setCurrentTime(0);
    setDuration(0);
  }, [src]);

  const audioSrc = src.startsWith('/') ? `${import.meta.env.BASE_URL}${src.slice(1)}` : src;

  return (
    <div className="w-full p-6 rounded-[2rem] border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#18181b] shadow-sm flex flex-col gap-5">
      <audio 
        ref={audioRef} 
        src={audioSrc} 
        onEnded={() => setIsPlaying(false)} 
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        className="hidden" 
      />
      
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1 min-w-0 pr-2">
          <p className="text-[10px] font-bold uppercase tracking-widest text-accent mb-1">AI Podcast</p>
          <p className="font-serif font-bold text-lg text-neutral-900 dark:text-white truncate">{title}</p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button 
            onClick={() => skip(-5)}
            className="p-2 rounded-full text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            title="Zpět o 5s"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
          
          <button
            onClick={togglePlay}
            className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-md"
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 translate-x-0.5" />}
          </button>

          <button 
            onClick={() => skip(5)}
            className="p-2 rounded-full text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            title="Vpřed o 5s"
          >
            <RotateCw className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div 
          ref={progressBarRef}
          onClick={handleProgressClick}
          className="w-full h-2 bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden cursor-pointer relative group"
        >
          <div className="absolute inset-0 bg-neutral-200 dark:bg-neutral-700 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div 
            className="h-full bg-accent transition-all duration-100 relative z-10" 
            style={{ width: `${progress}%` }} 
          />
        </div>
        <div className="flex items-center justify-between text-xs font-medium text-neutral-400 font-mono tracking-wide">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>
    </div>
  );
};
