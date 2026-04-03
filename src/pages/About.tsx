import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto py-16 px-6">
      <header className="mb-12">
        <h1 className="font-serif text-5xl font-bold text-neutral-900 dark:text-white mb-6">Informace</h1>
        <p className="text-xl text-neutral-500 dark:text-neutral-400 leading-relaxed">
          Tento web slouží jako centrální digitální knihovna vypracovaných materiálů pro přípravu k závěrečným zkouškám.
        </p>
      </header>

      <div className="space-y-12">
        <section className="editorial-card p-8 bg-neutral-100 dark:bg-neutral-900 border-none ring-1 ring-neutral-200 dark:ring-neutral-800">
          <h2 className="font-serif text-2xl font-bold mb-4">O projektu</h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
            Platformu vytvořil <strong>lukymas_</strong> speciálně pro potřeby studentů oboru Reprodukční grafik na SŠ INFCR Humpolec. Cílem je sjednotit roztříštěné podklady a nabídnout moderní způsob studia prostřednictvím textů, audio podcastů a interaktivních nástrojů.
          </p>
          
          <div className="flex flex-col gap-4">
            <p className="text-sm font-bold uppercase tracking-widest text-neutral-400">Zpětná vazba a opravy</p>
            <a 
              href="https://instagram.com/lukymas_" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all w-fit group"
            >
              <span className="font-bold text-neutral-900 dark:text-white text-base underline decoration-neutral-200 dark:decoration-neutral-800 underline-offset-4 group-hover:decoration-accent transition-all">Instagram: @lukymas_</span>
            </a>
            <p className="text-sm text-neutral-500 italic leading-relaxed">
              Pokud v materiálech narazíte na faktickou chybu, chybějící pasáž nebo máte návrh na vylepšení, kontaktujte mě prosím prostřednictvím zpráv na Instagramu.
            </p>
          </div>
        </section>

        <section className="prose prose-zinc dark:prose-invert">
          <h3>Aktuálnost materiálů</h3>
          <p>
            Obsah poznámek je přizpůsoben požadavkům pro školní rok <strong>2026</strong>. Vzhledem k tomu, že se osnovy a důraz na konkrétní témata mohou v čase měnit, doporučujeme vždy ověřit soulad s aktuálními požadavky vyučujících.
          </p>
        </section>
      </div>
    </div>
  );
};
