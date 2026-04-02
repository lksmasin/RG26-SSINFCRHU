import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Sidebar } from './components/Sidebar';
import { Hub } from './pages/Hub';
import { Subjects } from './pages/Subjects';
import { SubjectDetail } from './pages/SubjectDetail';
import { TopicDetail } from './pages/TopicDetail';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex h-screen bg-[var(--color-bg-light)] dark:bg-[var(--color-bg-dark)] overflow-hidden">
          <Sidebar />
          <main className="flex-1 overflow-y-auto no-scrollbar relative w-full h-full">
            <div className="max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-12 py-10 min-h-full flex flex-col">
              <div className="flex-1">
                <Routes>
                  <Route path="/" element={<Hub />} />
                  <Route path="/subjects" element={<Subjects />} />
                  <Route path="/subjects/:subjectId" element={<SubjectDetail />} />
                  <Route path="/subjects/:subjectId/topics/:topicId" element={<TopicDetail />} />
                </Routes>
              </div>
              <footer className="mt-20 py-6 border-t border-neutral-200 dark:border-neutral-800 text-center">
                <p className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">
                  © {new Date().getFullYear()} SŠ INFCR Humpolec • Reprodukční grafik
                </p>
              </footer>
            </div>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
