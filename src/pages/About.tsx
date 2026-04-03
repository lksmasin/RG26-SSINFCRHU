import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto py-16 px-6">
      <header className="mb-12">
        <h1 className="font-serif text-5xl font-bold text-neutral-900 dark:text-white mb-6">Informace</h1>
        <p className="text-xl text-neutral-500 dark:text-neutral-400 leading-relaxed">
          Tento web slouží jako centrální úložiště studijních materiálů pro přípravu k závěrečným zkouškám.
        </p>
      </header>

      <div className="space-y-12">
        <section className="editorial-card p-8 bg-neutral-100 dark:bg-neutral-900 border-none ring-1 ring-neutral-200 dark:ring-neutral-800">
          <h2 className="font-serif text-2xl font-bold mb-4">Projekt</h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6">
            Aplikaci vytvořil <strong>lukymas_</strong> pro studenty oboru Reprodukční grafik na SŠ INFCR Humpolec. Cílem je usnadnit přístup k vypracovaným tématům a odborným nástrojům.
          </p>
          
          <div className="flex flex-col gap-4">
            <p className="text-sm font-medium uppercase tracking-widest text-neutral-400">Kontakt pro hlášení chyb</p>
            <a 
              href="https://instagram.com/lukymas_" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all w-fit"
            >
              <span className="font-bold text-neutral-900 dark:text-white text-base">Instagram: @lukymas_</span>
            </a>
            <p className="text-sm text-neutral-500 italic">
              V případě nalezení nesrovnalostí nebo chyb v textu mě prosím kontaktujte přímo prostřednictvím zpráv na Instagramu.
            </p>
          </div>
        </section>

        <section className="prose prose-zinc dark:prose-invert">
          <h3>Aktualizace 2026</h3>
          <p>
            Obsah je průběžně aktualizován tak, aby odpovídal aktuálním požadavkům kladeným na absolventy oboru ve školním roce 2025/2026.
          </p>
        </section>
      </div>
    </div>
  );
};
