export interface Topic {
  id: string;
  title: string;
  description: string;
  content: string;
  audioUrl?: string;
  notebookLmUrl?: string;
  quizUrl?: string;
  quizEasyUrl?: string;
  quizHardUrl?: string;
  flashcardsUrl?: string;
  videoUrl?: string;
  presentationUrl?: string;
}

export interface Year {
  id: number;
  label: string;
  topics: Topic[];
}

export interface Subject {
  id: string;
  name: string;
  years: Year[];
}
