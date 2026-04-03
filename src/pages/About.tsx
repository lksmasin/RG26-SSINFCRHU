import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto py-16 px-6">
      <header className="mb-12">
        <h1 className="font-serif text-5xl font-bold text-neutral-900 dark:text-white mb-6">Informace</h1>
        <p className="text-xl text-neutral-500 dark:text-neutral-400 leading-relaxed">
          Tenhle web vznikl proto, aby se nám všem líp učilo na závěrečky a nehledali jsme ty papíry po všech čertech.
        </p>
      </header>

      <div className="space-y-12">
        <section className="editorial-card p-8 bg-neutral-100 dark:bg-neutral-900 border-none ring-1 ring-neutral-200 dark:ring-neutral-800">
          <h2 className="font-serif text-2xl font-bold mb-4">Kdo to spáchal?</h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6">
            Vytvořil to <strong>lukymas_</strong> speciálně pro studenty oboru Reprodukční grafik na SŠ INFCR Humpolec.
          </p>
          
          <div className="flex flex-col gap-4">
            <p className="text-sm font-medium uppercase tracking-widest text-neutral-400">Našel jsi chybu?</p>
            <a 
              href="https://instagram.com/lukymas_" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all w-fit"
            >
              <span className="font-bold">Instagram: @lukymas_</span>
            </a>
            <p className="text-sm text-neutral-500 italic">
              Pokud v poznámkách něco chybí, nebo tam mám faktickou botu, napiš mi na Instagram a já to opravím.
            </p>
          </div>
        </section>

        <section className="prose prose-zinc dark:prose-invert">
          <h3>Proč verze 2026?</h3>
          <p>
            Poznámky a otázky k závěrečným zkouškám se můžou každý rok trochu měnit podle toho, co zrovna učitelé berou za důležité. Tohle je aktuální verze pro školní rok 2025/2026.
          </p>
        </section>
      </div>
    </div>
  );
};
