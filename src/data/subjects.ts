import type { Subject } from '../types';

export const subjects: Subject[] = [
  {
    "id": "technologie",
    "name": "Technologie",
    "years": [
      {
        "id": 1,
        "label": "1. ročník",
        "topics": [
          {
            "id": "reprodukce-textu-a-obrazu",
            "title": "Reprodukce textu a obrazu",
            "description": "Tiskem se rozumí přenos obrazu a textu podle předlohy pomocí tiskové formy a tiskové barvy na tiskový materiál. Tento proces využívá různé techniky...",
            "content": "# 🖨️ Reprodukce textu a obrazu\n\n> [ABSTRACT] Stručný přehled\n> Tiskem se rozumí přenos obrazu a textu podle předlohy pomocí tiskové formy a tiskové barvy na tiskový materiál. Tento proces využívá různé techniky a principy barevné reprodukce ([[06 Technologická příprava zakázky#Barevnost|CMYK]]).\n\n---\n\n## **Definice tisku**\n- tiskem se rozumí přenos obrazu a textu podle předlohy\n- tisk se provádí pomocí tiskové formy a tiskové barvy\n- tisk se provádí na tiskový materiál\n\n## Tisková forma\n- matrice obsahující tisknoucí a netisknoucí místa\n- přenáší barvu na potiskovaný materiál\n- pro různé techniky existují odlišné tiskové formy\n\n## Tisková barva\n- barva určená výhradně k potisku\n- směs pigmentů a dalších přísad pro lepší fixaci barvy na potiskovaný materiál\n- pro různé tiskové techniky se používají různé barvy\n\n## Tisková technika\n- proces, ve kt. se realizuje tisk podle předlohy v daném počtu a barevnosti\n- historickým vývojem se ustálilo několik základních tiskových technik, kt. se liší principem tisku a tiskovou formou\n- tisknoucí místo je součást tiskové formy, na kt. se váže barva přenášená na potiskovaný materiál, opakem je netisknoucí místo\n\n## Dělení tiskových technik\n- Dle použití tiskové formy\n  - Konvenční: tiskové techniky používající tiskovou formu\n  - Digitální: předloha je vytvářena digitálně - pomocí PC\n- Dle způsobu přenosu barev\n  - Přímé techniky: potiskovaný materiál příchází do přímého kontaktu s tiskovou formou\n  - nepřímé techniky: tiskovou barvu přenášíme pomocí pomocí přenosového prvku (např. ofsetový válec, tampón) a až po té na potiskovaný materiál\n\n---\n\n## Tisk z plochy (litografie, ofset)\n- tisknoucí i netisknoucí místa jsou ve stejné výšce\n- barva se správně uchytí na potiskovaný materiál pomocí povrchového napětí materiálů\n\n### Druhy tisku z plochy\n- **Litografie (kamenotisk)**\n- přímý přenos barvy\n- tisková forma je kamenná deska z vápence\n- kresba na kámen se provádí mastnou litografickou tuší nebo jinými mastnými barvami\n- hotovou kresbu přetíráme roztokem arabské gumy\n- **[[01 Reprodukce textu a obrazu#Ofset|Ofset]]**\n- nepřímý přenos barvy\n- tisková forma je tenká kovová nebo polyesterová deska\n- ofsetové tiskové formy jsou ohebné\n\n### **Proč CMY…K?**\n- vzájemným překrytím všech barev by měla vzniknout barva černá\n- v praxi to tak ale není, z důvodu znečištění tiskových barev\n- výsledná překrytá barva je spíše do hněda, tisk ztrácí kontrast\n- v praxi se to řeší přidáním černé barvy (BLAC**K**)\n- spousta tiskovin obsahuje černý text – místo míchání tří barev použijeme 1 a proto je tisk levnější\n- černou barvu můžeme v některých odstínech zmenšit množství tiskových barev -> levnější tisk, kratší doba schnutí\n\n---\n\n## **Tiskový rastr**\n- tiskové stroje nejsou schopny vytisknout veškeré odstíny a tóny barev\n- obraz se rozloží na síť malých plošek (tiskové body)\n- tyto plochy musí být menší než rozlišovací schopnost oka, pak jsou vnímány jako celá plocha\n- tiskový rastr je vypočítán v procesu [[Digitální tisk#Co to je?|RIP]] (Raster Image Processor)\n\n### **Hustota tiskového rastru**\n- uvádí počet tiskových bodů v určité ploše tisku\n- hodnota se nejčastěji udává v **lpi** – lines per inch\n- volba hustoty závisí na:\n  - **způsob tisku** (technické limity)\n  - **potiskovaný materiál** (savost, hrubost papíru)\n  - **pozorovací vzdálenost** (např. billboard vs. kniha)\n\n---\n\n## **Výstup a formát PDF**\n- data k tisku není vhodné předávat v otevřených formátech (.indd, .ai…)\n- výhody formátu PDF:\n  - snadné zobrazení na všech platformách\n  - omezená kontrola a oprava dat\n  - malá velikost souborů\n  - fonty jsou vložené přímo do dokumentu\n- před archovou montáží dochází ke kontrole **preflight** (fonty, barvy, rozlišení)\n\n### **Standardy PDF/X**\n- mezinárodní standard PDF/X pro jednoznačnou výměnu dat\n- zjednodušené PDF, které zakazuje rizikové prvky (např. interaktivní prvky)\n- cíle: maximální spolehlivost, bezpečnost a zjednodušení předávání dat\n\n---\n## 🔗 Související témata\n- [[Výroba papíru|📜 Výroba papíru]]\n- [[Ofsetové barvy|🎨 Ofsetové barvy]]\n- [[03 Polygrafické výrobky|📦 Polygrafické výrobky]]\n- [[Domů|Zpět na hlavní přehled]]",
            "audioUrl": "/audio/TEC - Reprodukce textu a obrazu.m4a",
            "notebookLmUrl": "https://notebooklm.google.com/",
            "quizEasyUrl": "https://notebooklm.google.com/notebook/78f6e331-b64e-4e33-bdec-13a8240caeb9?artifactId=b30c4a22-754f-447a-a9d4-8564107a4ea1",
            "quizHardUrl": "https://notebooklm.google.com/notebook/78f6e331-b64e-4e33-bdec-13a8240caeb9?artifactId=15d0617c-e4f0-442f-89a0-178c5bae4841",
            "flashcardsUrl": "https://notebooklm.google.com/notebook/78f6e331-b64e-4e33-bdec-13a8240caeb9?artifactId=27e5beac-e236-4c5a-981a-ef82f6ebca3e"
          },
          {
            "id": "organizace-polygraficke-vyroby",
            "title": "Organizace polygrafické výroby",
            "description": "Proces výroby tiskovin se dělí na tři základní části: **prepress** (příprava), **press** (tisk) a **postpress** (dokončování). Zahrnuje jak obchodn...",
            "content": "# 🖨️ Organizace polygrafické výroby\n\n> [ABSTRACT] Stručný přehled\n> Proces výroby tiskovin se dělí na tři základní části: **prepress** (příprava), **press** (tisk) a **postpress** (dokončování). Zahrnuje jak obchodní, tak výrobní činnosti.\n\n---\n\n## 💼 Obchodní činnost\nJde primárně o komunikaci zákazníka s tiskárnou.\n\n### Specifikace zakázky\nZákazník popíše zakázku:\n- **Designová představa**\n- **Termín**\n- **Množství**\n- **Materiál**\n- **Rozměry**\n\n### Proces objednávky\n1. **Cenová nabídka:** Vypracuje tiskárna na základě poptávky.\n2. **Objednávka:** Pokud zákazník souhlasí s cenou, vystaví objednávku.\n3. **Smlouva:** Na základě objednávky se uzavře smlouva obsahující označení zboží, množství, cenu za kus, dodací lhůtu a zúčastněné strany.\n\n---\n\n## ⚙️ Výrobní činnost\nÚkolem je vyrobit výrobek podle přání zákazníka v co nejlepší kvalitě za co nejmenší cenu.\n\n### Příprava výroby\n- Vypracování přesného postupu výroby.\n- **Technologie zakázky:** Kontrola podkladů, volba nejlepšího postupu výroby (tisková technika, …).\n- Příprava podkladů veškerých materiálů (archy, kotouče, tiskové barvy, ...).\n\n### Zajištění materiálů a řízení\n- Kontrola a objednání chybějícího materiálu.\n- **Řízení výroby:** Zajištění nestandardních dokončovacích prací (UV lakování, laminování, …).\n\n### Příprava tiskových podkladů (Prepress)\n- Grafické studio zpracovává podklady (rukopisy, obrazové předlohy, loga, barvy, fonty, …).\n- **Zhotovení tiskové formy:** Dle typu tisku (ofset, flexotisk, knihtisk).\n- **Nátisk:** Zhotovení zkušebního výtisku pro domácí nebo autorskou korekturu a schválení vzorového archu zákazníkem.\n\n---\n\n## 🚚 Tisk a dokončení\n\n### Vlastní tisk (Press)\n\n### Dokončující výroba (Postpress)\nFinální úprava tiskovin:\n- Řezání, skládání, šití, lepení, laminování, děrování, …\n\n### Expedice\nVýstupní kontrola, vystavení dodacího listu, zabalení, doprava a fakturace.\n\n---\n## 🔗 Související témata\n- [[01 Reprodukce textu a obrazu|🖨️ Základy reprodukce]]\n- [[03 Polygrafické výrobky|📦 Polygrafické výrobky]]\n- [[Domů|Zpět na hlavní přehled]]",
            "audioUrl": "/audio/TEC - Organizace polygrafické výroby.m4a",
            "notebookLmUrl": "https://notebooklm.google.com/",
            "quizUrl": "https://notebooklm.google.com/notebook/b0c46a45-dbe6-4b11-9d60-5ea55ea77898?artifactId=fa6c3e62-2c15-46ca-9ed2-bae947278eb3",
            "flashcardsUrl": "PLACEHOLDER-organizace-polygraficke-vyroby-karticky"
          },
          {
            "id": "polygraficke-vyrobky",
            "title": "Polygrafické výrobky",
            "description": "Polygrafie se zabývá výrobou tiskovin, nejčastěji na papír. Výrobky dělíme na vydavatelský tisk (periodika a akcidence), potisk obalů a reklamní pr...",
            "content": "# 📦 Polygrafické výrobky\n\n> [ABSTRACT] Stručný přehled\n> Polygrafie se zabývá výrobou tiskovin, nejčastěji na papír. Výrobky dělíme na vydavatelský tisk (periodika a akcidence), potisk obalů a reklamní produkci (signmaking).\n\n---\n\n## 📰 Vydavatelský tisk - Periodika\nTiskoviny vydávané v pravidelných intervalech.\n- **Noviny:** Recyklovaný papír (60–80 g/m²), skládané.\n- **Časopisy:** Lakovaný/křídový papír (90–150 g/m²), nejčastěji vazba [[Sazba knihy#Měkké vazby|V1]] (sešitová).\n- **Zpracování:** Lakování, laminování, řezání, skládání.\n\n---\n\n## 📄 Vydavatelský tisk - [[Akcidenční tiskoviny|Akcidenční tiskoviny]]\nObčasné tiskoviny pro nárazovou potřebu.\n- **Příklady:** Leták, vizitka, katalog, plakát…\n- **Materiály:** Nejrůznější druhy papírů (natírané, lesklé, matné, fotopapíry, speciální textury).\n\n---\n\n## 🥡 Potisk obalů\nKlíčová oblast využívající téměř všechny tiskové techniky.\n- **[[01 Reprodukce textu a obrazu#Ofset|Ofset]]:** Papírové obaly (krabičky, tašky).\n- **[[01 Reprodukce textu a obrazu#Flexotisk|Flexotisk]]:** Plastové fólie (sáčky, pytlíky, etikety).\n- **Potravinářské obaly:** Nutnost zabránit migraci barev do obsahu.\n- **Zpracování:** Lepení, skládání, lakování, ražba.\n\n---\n\n## 🛑 Reklamní produkce (Signmaking)\nVýroba reklamních prvků, často označovaná jako velkoformátový tisk.\n- **Billboard / Megaboard:** Velké plochy na budovách či lešeních.\n- **Citylight:** Prosvětlené vitríny.\n- **Banner:** Zavěsitelná potištěná plachtovina.\n- **Roll-Up:** Samonavíjecí systém.\n- **Polepy:** Dopravní prostředky, okna, výlohy, vlajky.\n- **Technologie:** Dříve [[01 Reprodukce textu a obrazu#3. Průtlačný tisk (Sítotisk)|sítotisk]], dnes převládá [[Digitální tisk|digitální tisk]].\n\n---\n\n## ☀️ Speciální tisk\n\n### Řezací plotr\n- Vyřezávání tvarů do materiálů (samolepicí fólie, fólie na textil) pomocí nože dle digitálních dat.\n\n### [[03 Polygrafické výrobky#UV tisk|UV tisk]]\n- Využívá UV světlo k vytvrzení barev.\n- Vhodné pro pevné ploché předměty (USB disky, puky, krabičky).\n- Nabízí možnost parciálního lakování.\n\n---\n## 🔗 Související témata\n- [[01 Reprodukce textu a obrazu|🖨️ Základy reprodukce]]\n- [[02 Organizace polygrafické výroby|🖨️ Organizace výroby]]\n- [[Domů|Zpět na hlavní přehled]]",
            "audioUrl": "/audio/Tec - Polygraficke vyrobky.m4a",
            "notebookLmUrl": "https://notebooklm.google.com/",
            "quizUrl": "https://notebooklm.google.com/notebook/917ee95a-3431-4511-a44b-6360ccf27f18?artifactId=994ec2d0-f1c5-41da-993f-54eeb591130f",
            "flashcardsUrl": "https://notebooklm.google.com/notebook/917ee95a-3431-4511-a44b-6360ccf27f18?artifactId=0defcbaa-77c5-4578-9943-5596e82ed746"
          },
          {
            "id": "design-dokumentu",
            "title": "Design dokumentů",
            "description": "**Grafický design** je vizuální komunikace v rovnováze. Skládá se ze základních prvků (čára, tvar, textura) a využívá kompoziční pravidla pro efekt...",
            "content": "# 📐 Design dokumentů\n\n> [ABSTRACT] Stručný přehled\n> **Grafický design** je vizuální komunikace v rovnováze. Skládá se ze základních prvků (čára, tvar, textura) a využívá kompoziční pravidla pro efektivní oslovení lidí.\n\n---\n\n## 🧱 Základní prvky designu\n\n1. **Čára:** Nejjednodušší prvek vymezený dvěma body.\n2. **Tvar:** Ohraničená oblast. Geometrické vs. organické tvary.\n3. **Textura:** Barevná výplň, přechod (gradient) nebo vzorek (pattern).\n\n---\n\n## 📐 Kompozice dokumentů\n\n### Třetinová kompozice (Zlatý řez)\n* **Primární zóna:** Nejdůležitější informace (zacílení).\n* **Sekundární zóna:** Doplňující info (datum, čas, cena).\n* **Zápatí:** Kontakty, loga sponzorů.\n* **Záhlaví:** Oslovení / úvod.\n\n### Kompoziční pravidla\n- **Nadpis:** Opticky kratší druhý řádek.\n- **Fotografie:** Postavy hledí dovnitř formátu.\n- **Zarovnání:** Využití mřížky.\n\n---\n\n## ⬜ Prázdné místo (White space)\nSlouží k vizuálnímu oddělení a zlepšení přehlednosti.\n\n### Typografické zásady:\n- **Ochranná zóna:** Okraje (margins) brání nevzhlednému textu u hran.\n- **Proklad (Leading):** Výška řádku (1.3× pro delší texty, 1.5× pro kratší).\n- **Sloupcová sazba:** Lepší čitelnost užších bloků.\n- **Nadpisy:** Větší mezera před nadpisem než za ním.\n\n\n---\n## 🔗 Související témata\n- [[Pojmy|🎨 Typografické pojmy]]\n- [[06 Technologická příprava zakázky|📁 Příprava zakázky]]\n- [[Domů|Zpět na hlavní přehled]]",
            "audioUrl": "",
            "notebookLmUrl": "https://notebooklm.google.com/",
            "quizUrl": "https://notebooklm.google.com/notebook/cdf177bf-8ab6-4e85-9a48-9dce2984ff70?artifactId=88f60db1-e711-4250-8fbb-c132f0f90773",
            "flashcardsUrl": ""
          },
          {
            "id": "formaty-papiru",
            "title": "Formáty papíru",
            "description": "Velikosti papíru jsou standardizovány normou **ČSN EN ISO 216** s poměrem stran **1 : √2**. Základní řady jsou A (čisté), B (větší pro tisk) a C (o...",
            "content": "# 📄 Formáty papíru\n\n> [ABSTRACT] Stručný přehled\n> Velikosti papíru jsou standardizovány normou **ČSN EN ISO 216** s poměrem stran **1 : √2**. Základní řady jsou A (čisté), B (větší pro tisk) a C (obálky).\n\n---\n\n## 📏 Formátové řady\n\n### Řada A (Základní)\n| Formát | Rozměry (mm) | Poznámka |\n| :--- | :--- | :--- |\n| **A0** | 841 × 1189 | Plocha 1 m² |\n| **A4** | 210 × 297 | Kancelářský papír |\n| **A6** | 105 × 148 | Pohlednice |\n\n### Řada B (Zvětšená)\nVětší než řada A, umožňuje tisk se [[05 Formáty papíru#✂️ Impozice (Vyřazování)|spadávkou]] a ořezovými značkami. Častá u ofsetového tisku (B1, B2).\n\n### Řada C (Obálky)\n**C4** pojme A4, **C5** pojme přeloženou A4 (nebo A5), **DL** pojme A4 na třetiny.\n\n---\n\n## 📐 Speciální formáty\n* **SRA3 (320 × 450 mm):** Produkční digitální tiskárny.\n* **Vizitka:** 90 × 50 mm (CZ) / 85 × 55 mm (Euro).\n* **Fotografie:** 9 × 13 cm / 10 × 15 cm.\n\n---\n\n## ✂️ Impozice (Vyřazování)\nUmisťování tiskoviny na tiskový arch (TA) pro maximální využití plochy.\n\n> [INFO] Klíčové pojmy\n> * **[[05 Formáty papíru#✂️ Impozice (Vyřazování)|Spadávka]] (Bleed):** Přesah (2–3 mm) pro bezokrajový tisk.\n> * **Netisknutelná oblast:** Okraj stroje (5–8 mm).\n\n### Příklad výpočtu:\n* **Úkol:** 212 ks oznámení A6 na SRA3 ([[05 Formáty papíru#✂️ Impozice (Vyřazování)|spadávka]] 2 mm, okraje 8 mm).\n* **Efektivní užitek:** 6 kusů na jeden arch SRA3.\n* **Výsledek:** Nutno 36 tiskových archů.\n\n\n---\n## 🔗 Související témata\n- [[Výroba papíru|📜 Výroba papíru]]\n- [[06 Technologická příprava zakázky|📁 Příprava zakázky]]\n- [[Domů|Zpět na hlavní přehled]]",
            "audioUrl": "",
            "notebookLmUrl": "https://notebooklm.google.com/",
            "quizUrl": "https://notebooklm.google.com/notebook/c78491e3-b343-45e4-b4fe-34006f27fd0e?artifactId=8864a06d-32bf-4373-a54c-e34175af2b2f",
            "flashcardsUrl": "https://notebooklm.google.com/notebook/c78491e3-b343-45e4-b4fe-34006f27fd0e?artifactId=a2995a82-90b9-4664-b2c8-cba4ac5103d6"
          },
          {
            "id": "technologicka-priprava-zakazky",
            "title": "Technologická příprava zakázky",
            "description": "Kvalita tiskových dat významně ovlivňuje výsledný tisk. Reprodukční grafik musí zajistit co nejkvalitnější podklady v závislosti na typu tiskoviny.",
            "content": "# 📁 Technologická příprava zakázky\n\n> [ABSTRACT] Stručný přehled\n> Kvalita tiskových dat významně ovlivňuje výsledný tisk. Reprodukční grafik musí zajistit co nejkvalitnější podklady v závislosti na typu tiskoviny. Důkladná příprava dat před každým tiskem je v polygrafii klíčová.\n\n---\n\n## 🏛️ Úvod do přípravy zakázky\n- v polygrafii provádíme před každým tiskem důkladnou přípravu dat\n- výrobní podklady významným způsobem ovlivňují výslednou kvalitu tisku\n- u tisku se jedná o textové a obrazové podklady\n\n## ⚙️ Předtisková příprava\n- první fáze výrobního procesu tiskoviny\n- předtisková příprava je úzce svázána s procesem tisku\n- v přípravě tisku vycházíme z principu a zákonitostí tisku\n\n## 📸 Obrazové podklady\n- z nekvalitních předloh nelze „vykouzlit“ kvalitní reprodukci\n- snahou reprodukčního grafika je získat podklady v co nejlepší kvalitě\n- kritéria požadavků se mění dle výsledné realizace – jiné požadavky při tisku novin, barevného katalogu nebo billboardu\n- obrazové podklady jsou buď v digitální nebo fyzické podobě\n- pokud zákazník obrazové předlohy nemá, je vhodné je ve spolupráci s fotografem nafotit\n\n### Fyzické předlohy\n- tyto předlohy je potřeba pro další použití zdigitalizovat\n- nejčastěji pomocí skenování – fotografie, diapozitivy…\n- fyzickou předlohou může být i produkt, kt. chce zákazník nafotit\n- předlohy musí být čisté a nepoškozené\n- při skenování hlídáme případné poznámky na zadní straně, aby se nepřenesly do digitální verze\n- všechny předlohy řádně označujeme\n\n### Předlohy v digitální podobě\n- nejčastěji se jedná o digitální fotografie z digitálních fotoaparátů, případně externě naskenované obrázky\n- nejvhodnější předlohou je fotografie v původní podobě, tzn. bez jakýchkoliv úprav a bez opětovného ukládání\n- nesprávné úpravy fotografií snižují možnosti dalších úprav\n- vhodnými grafickými formáty jsou TIFF nebo JPEG s co nejmenším stupněm komprese, případně RAW\n- v digitální podobě můžeme pracovat také s logem nebo jinou vektorovou grafikou\n- patřičné grafické formáty pro vektorovou grafiku – AI, PDF nebo EPS\n\n## 📐 Rozlišení\n- základním kritériem posouzení vhodnosti obrázku k tisku je rozlišení\n- požadované rozlišení se nejčastěji udává v počtu bodů na palec – dpi, případně v počtu pixelů na palec – ppi\n- zda je rozlišení dostatečné, zjistíme nejlépe v Adobe Photoshop – Obraz – velikost obrazu\n- hodnota rozlišení je nepřímo úměrná velikosti obrázku v délkových rozměrech\n- čím větší rozlišení potřebujeme, tím menší budou délkové rozměry\n- zvětšování fotografie je omezeno počtem obrazových bodů\n\n## 🎨 Úprava fotografií\n- fotografie upravujeme podle toho jakou grafiku připravujeme\n- v zásadě máme dva možné výstupy:\n  - tisk\n  - digitální publikování\n- u fotografií upravujeme tři parametry:\n  - rozlišení\n  - barevný profil\n  - rozměr fotografie\n- pokud připravujeme tiskovinu upravujeme fotografie následovně:\n  - rozlišení 300 dpi\n  - rozměr – delší strana 2 000 pixelů\n  - barevný profil – FOGRA39\n- fotografie pro digitální publikování upravíme takto:\n  - rozlišení 72 dpi\n  - rozměr dle média – Instagramový příspěvek, instagramový příběh (story), facebook – příspěvek, úvodní fotografie… pokud připravujeme pro web nejčastěji fotografii ořízneme na poměr 16:9 a nastavíme rozměr na 1920 x 1080 px\n  - barevný profil – sRGB\n- tyto úpravy provádíme pomocí Adobe Photoshop\n\n## 🌈 Barevnost\n- u fotografií dále musíme řešit nastavení bílého bodu a zkreslení barevnosti\n- abychom zajistili správnou barevnost u tisku převádíme fotografie do barevných profilů (CMYK)\n- existuje mnoho profilů, které vychází ze CMYKU\n- tyto profily se liší podle místa kde se tiskne (Evropa, USA, Japonsko…)\n- v Evropě se používá barevný profil FOGRA39\n\n## ✂️ Archová montáž\n- slouží ke správnému a efektivnímu tisku\n- rozřazujeme jednotlivé tiskoviny na tiskový arch\n- archová montáž se odvíjí od tiskové techniky\n- např. \n  - digitální tisk - ořezové značky, zvlášť rub a líc\n  - ofsetový tisk - ořezové + soutiskové značky, rub i líc na jedné straně\n  - řezací plotr - řezací linka, přizpůsobujeme velikost digitálně\n  - sítotisk - připravujeme zvlášť pro každou tisknutou barvu\n- dále záleží na velikosti TA\n- **Důležité pojmy v archové montáži:**\n  - **Spadávka** = část, kterou odřízneme při dokončovacím zpracování, tím dosáhneme bezokrajového tisku\n  - **Tiskovina** = finální produkt po tisku a dokončovacím zpracování\n  - **Tiskový arch** = potiskovaný materiál konkrétního formátu, na který provádíme tisk\n  - **Barevný proužek** = nalezneme na okraji TA, slouží ke kontrole barev, kontrola se provádí barevníkem\n\n## 🔄 Princip reprodukce barev\n- princip barevného tisku vychází z vnímání barev lidským okem\n- barevný vjem vzniká v našem mozku důsledkem rozkladu světla\n\n## 🧪 Míchání barev při tisku\n- při tisku se využívá subtraktivní (odčítací) míšení\n- (druhý typ je aditivní (sčítací), kt. využívá systém RGB)\n- barvy jsou tvořeny pomocí tří základních složek:\n  - azurová (CYAN)\n  - purpurová (MAGENTA)\n  - žlutá (YELLOW)\n- tento systém funguje od existujícího bílého světla (papír)\n- každá z tiskových barev pohlcuje červenou, zelenou či modrou složku bílého světla a ostatní odráží\n- tiskové barvy (C M Y) tedy umožňují řídit, kt. složka bílého světla bude z tiskoviny odražena do oka pozorovatele\n\n## 🖤 Proč CMY…K?\n- vzájemným překrytím všech barev by měla vzniknout barva černá\n- v praxi to tak ale není, z důvodu znečištění tiskových barev\n- výsledná překrytá barva je spíše do hněda\n- důsledkem je, že tisk ztrácí kontrast\n- v praxi se tento problém řeší přidáním černé barvy (BLACK)\n- dalším důvodem přidávání černé je, že spousta tiskovin obsahuje černý text – místo míchání tří barev použijeme 1 a proto je tisk levnější\n- černou barvu můžeme v některých odstínech zmenšit množství tiskových barev -> levnější tisk, kratší doba schnutí\n\n## 🕸️ Tiskový rastr\n- tiskové stroje nejsou schopny vytisknout veškeré odstíny a tóny barev\n- v praxi se to vyřeší optickým klamem a vytvářením nepravých tónů\n- obraz se rozloží na síť malých plošek (puntíků)\n- tyto plochy musí být menší než je rozlišovací schopnost lidského oka, pak jsou vnímány jako celá plocha\n- těmto puntíkům se říká tiskové body\n- tiskové body dohromady tvoří tiskový rastr\n- tiskový rastr je vypočítán v procesu, kt. se nazývá RIP – převedení tiskových dat do formátu, kt. rozumí tiskárna\n\n## 📊 Hustota tiskového rastru\n- uvádí počet tiskových bodů v určité ploše tisku\n- hodnota hustoty rastru se nejčastěji udává v počtu jednotek na jednotku délky – např. lpi – lines per inch (počet linek na palec)\n- volba hustoty závisí na několika faktorech:\n  - způsob tisku – každá tisková technika má své limity\n  - na potiskovaném materiálu – rozhoduje např. savost, nebo hrubost papíru\n  - na pozorovací vzdálenosti tiskoviny – banner u dálnice nemusí mít jemný rastr\n\n## 📤 Výstup\n- výstupem při přípravě tiskoviny jsou data připravená k osvitu tiskové formy nebo přímo k tisku (digitální tisk)\n\n## 📄 Formát PDF\n- data k tisku není vhodné předávat v otevřených formátech (soubory .indd, .ai…)\n- pokud dodáváme data v otevřeném formátu musíme dodat i veškeré obrazové podklady a fonty\n- další nevýhodou je, že soubor umožňuje editaci – možnost nechtěné změny obsahu\n- v současné době se jako uzavřený formát nejčastěji používá Adobe PDF\n\n### Výhody formátu PDF\n- snadné zobrazení na všech platformách\n- omezená kontrola a oprava dat (správa barev…)\n- malá velikost souborů\n- podpora všech formátu písem – fonty jsou vložené přímo do dokumentu\n- před archovou montáží dochází ke kontrole nazývané **preflight**\n  - tato kontrola umožňuje odhalit problémy s tiskovými daty\n    - zpracovatelnost souboru\n    - vložená písem\n    - definice barev\n    - rozlišení fotografií\n\n## 🔒 Standardy PDF/X\n- problém v předtiskové přípravě je univerzálnost a flexibilita souborů PDF\n- z tohoto důvodu byl vytvořen mezinárodní standard PDF/X\n- PDF/X umožňuje jednoznačnou výměnu dat\n- je to vlastně zjednodušené PDF, kt. neumožňuje a zakazuje některé prvky formátu PDF (např. interaktivní prvky)\n- cíl zavedení PDF/X:\n  - maximální spolehlivost\n  - bezpečnost\n  - zjednodušení předávání tiskových dat\n\n---\n## 🔗 Související odkazy\n- [[Domů|Zpět na hlavní přehled]]",
            "audioUrl": "/audio/Tec - technologicka priprava zakazky.m4a",
            "notebookLmUrl": "https://notebooklm.google.com/",
            "quizEasyUrl": "https://notebooklm.google.com/notebook/166ae6ba-f885-4294-94fd-afeb6c3559b1?artifactId=a98a88ea-3c9d-41d2-ac87-4f079518ccc9",
            "quizHardUrl": "https://notebooklm.google.com/notebook/166ae6ba-f885-4294-94fd-afeb6c3559b1?artifactId=86956bf8-e130-4667-8f09-949c423823ff",
            "flashcardsUrl": "https://notebooklm.google.com/notebook/166ae6ba-f885-4294-94fd-afeb6c3559b1?artifactId=96cd1a88-5639-43ac-9c19-0b2fba0d1e76"
          }
        ]
      },
      {
        "id": 2,
        "label": "2. ročník",
        "topics": [
          {
            "id": "akcidencni-tiskoviny",
            "title": "Akcidenční tiskoviny",
            "description": "**Akcidenční tiskoviny (AT)** jsou občasné nepravidelné tiskoviny určené pro jednorázovou výrobu. Tato oblast vyžaduje specifickou grafickou úpravu...",
            "content": "# 📄 Akcidenční sazba a obrazové části tiskovin\n\n> [ABSTRACT] Stručný přehled\n> **[[Akcidenční tiskoviny|Akcidenční tiskoviny]] (AT)** jsou občasné nepravidelné tiskoviny určené pro jednorázovou výrobu. Tato oblast vyžaduje specifickou grafickou úpravu, práci s kompozicí a pochopení principů rastrování pro věrnou reprodukci obrazu.\n\n---\n\n## 📂 Druhy AT\n- **osobní:** pozvánka na narozeninovou oslavu, svatební oznámení…\n- **firemní:** vizitka, novoročenka, hlavičkový papír…\n- **hospodářské:** formuláře, smlouvy…\n- **reklamní:** plakát, leták, inzerát…\n\n---\n\n## 🎨 Grafická úprava AT\nVolba typografie, designu a barevnosti se musí přizpůsobit typu a účelu tiskoviny:\n- **Kosmetické firmy:** patkové fonty, černá/bílá barevnost.\n- **Hračkárny:** komiksové fonty, pestré barvy, světlé odstíny.\n- **Pohřební služby:** kaligrafické fonty, kombinace černé se zlatými/stříbrnými detaily.\n- **Řeznictví:** červená barva, kostkované motivy.\n\n### Postup při zhotovování AT\n1. **Rukopis a technologický list:** Informace o druhu papíru, barevnosti atd.\n2. **Náčrtek:** Pomůcka pro vytvoření digitálního návrhu.\n3. **Náhled (Layout):** Přesné digitální zpracování (InDesign, PDF). Obsahuje poznámky pro grafiky i tiskaře.\n\n### Kompozice\nSlouží ke správnému rozvržení obsahu do zón pro srozumitelné předání informací.\n\n---\n\n## 📸 Práce s obrazem\n\n### Ilustrace\n- **Estetické:** Slouží k úpravě vzhledu.\n- **Funkční:** Zvýrazňují určitý obsah.\n- **Formáty:** Ideálně vektorové (.ai, .eps, .svg, .pdf).\n\n### Rastrová grafika\n- Upravujeme ve Photoshopu nebo Lightroomu.\n- **Standardy pro tisk:** Rozlišení 300 [[06 Technologická příprava zakázky#Rozlišení|dpi]], barevný profil [[06 Technologická příprava zakázky#Barevnost|FOGRA39]].\n- **Formáty:** .raw, .psd, .tiff, .jpeg.\n\n### Export a uložení\n- **Otevřená data (.indd):** Nutno sbalit i s linkovanou grafikou a fonty.\n- **Uzavřená data (PDF/X):**\n  - **PDF/X1a:** Nejvhodnější pro standardní tisk.\n  - **PDF/X4:** Lepší práce s průhledností.\n\n---\n\n## ⚙️ Principy rastrování\nZákladní proces umožňující reprodukci polotónů (barevných přechodů) u tiskových technik, které tisknou pouze plnou barvu ([[01 Reprodukce textu a obrazu#Ofset|ofset]], flexo, sítotisk).\n\n- **Princip:** Optický klam využívající omezenou rozlišovací schopnost oka.\n- **Tmavé tóny:** Větší nebo hustší body.\n- **Světlé tóny:** Menší nebo řidší body.\n\n### Typy rastrů\n- **AM rastr (Amplitudově modulovaný):** Mění se **velikost** bodů. Udává se v **LPI** (hustota rastru).\n- **FM rastr (Frekvenčně modulovaný):** Mění se **počet** (frekvence) stejně velkých bodů. Umožňuje jemnější detaily.\n\n### Tvary rastrového bodu\n- **Kruhový:** Nejobvyklejší.\n- **Čtvercový:** Stabilní tmavé tóny.\n- **Eliptický:** Vhodný pro pleťové tóny.\n\n---\n## 🔗 Související témata\n- [[03 Polygrafické výrobky|📦 Polygrafické výrobky]]\n- [[04 Design dokumentů|📐 Design dokumentů]]\n- [[Domů|Zpět na hlavní přehled]]",
            "audioUrl": "",
            "notebookLmUrl": "https://notebooklm.google.com/",
            "quizUrl": "https://notebooklm.google.com/notebook/78cef2b4-9c6a-4ceb-bbb4-d6b25dcdcb24?artifactId=5a871595-6208-477d-87de-b08042f34fda",
            "flashcardsUrl": "https://notebooklm.google.com/notebook/78cef2b4-9c6a-4ceb-bbb4-d6b25dcdcb24?artifactId=5a871595-6208-477d-87de-b08042f34fda"
          },
          {
            "id": "graficka-uprava-novin",
            "title": "Grafická úprava novin",
            "description": "Sazba novin je specifická oblast zaměřená na rychlou čitelnost a přehlednost velkého množství informací. Využívá jasnou strukturu, vizuální hierarc...",
            "content": "# 📰 Grafická úprava novin\n\n> [ABSTRACT] Stručný přehled\n> Sazba novin je specifická oblast zaměřená na rychlou čitelnost a přehlednost velkého množství informací. Využívá jasnou strukturu, vizuální hierarchii a standardizované grafické prvky.\n\n---\n\n## 🏛️ Struktura a rozvržení\n\n- **Titulky (hlavní nadpisy):** Výrazný text (řez, velikost) pro upoutání pozornosti a orientaci.\n- **Podtitulky a upoutávky:** Kratší texty shrnující článek, zvýrazněné odsazením nebo řezem.\n- **Rubriky:** Tematické souhrny článků (sport, ekonomika atd.) pro lepší přehlednost.\n- **Články:** Základní jednotka obsahu (zprávy, reportáže, rozhovory, komentáře).\n\n---\n\n## ⚙️ Grafické úpravy a pravidla\n\n- **Typografie:** Konzistentní a čitelné písmo, jednotné zvýraznění.\n- **Sazba:** Zarovnání do bloku, rozdělení do sloupců.\n- **Proklad (řádkování):** Jednotný, ideálně cca 1,2 em pro dobrou čitelnost.\n- **Vizuální hierarchie:** Umístění obsahu dle důležitosti (horní polovina stránky je nejvýznamnější).\n\n### Grafické prvky v novinách\n- **Rámeček (Box):** Zdůraznění důležitého textu nebo obrázku.\n- **Dateline:** Řádek s místem a datem, často odlišen kurzívou; ukončuje článek.\n- **Infografika:** Vizualizace dat pomocí grafů a diagramů.\n- **Popisek:** Vysvětlující text pod fotografií nebo ilustrací.\n\n---\n## 🔗 Související témata\n- [[Akcidenční tiskoviny|📄 Akcidenční tiskoviny]]\n- [[03 Polygrafické výrobky|📦 Polygrafické výrobky]]\n- [[Domů|Zpět na hlavní přehled]]",
            "audioUrl": "",
            "notebookLmUrl": "https://notebooklm.google.com/",
            "quizUrl": "https://notebooklm.google.com/notebook/a140e43c-965a-46fc-b704-281b73612a98?artifactId=0feb7cba-4904-4b3f-b2bf-e037d492f27d",
            "flashcardsUrl": "https://notebooklm.google.com/notebook/a140e43c-965a-46fc-b704-281b73612a98?artifactId=1c928ce4-bdd7-4360-96a9-aa44ca3cfce1"
          },
          {
            "id": "graficky-design",
            "title": "Grafický design",
            "description": "**Grafický design** je způsob vizuální komunikace sloužící k oslovení lidí. Najdeme ho všude, kde působí člověk – od obalů produktů přes webové str...",
            "content": "# 📐 Grafický design\n\n> [ABSTRACT] Stručný přehled\n> **Grafický design** je způsob vizuální komunikace sloužící k oslovení lidí. Najdeme ho všude, kde působí člověk – od obalů produktů přes webové stránky až po značení v prostoru.\n\n---\n\n## 🧱 Základní prvky grafického designu\n\n### Čára\n- Nejjednodušší prvek vymezený dvěma body.\n- Může být tenká, tlustá, vlnkovitá nebo zubatá.\n\n### Tvar\n- Jakákoliv oblast s rozpoznatelnými hranami.\n- **Geometrické:** Čtverce, kruhy, trojúhelníky (běžné tvary).\n- **Organické:** Volnější, přírodní formy.\n- Tvary jsou klíčovou součástí vizuální komunikace (např. dopravní značky).\n\n### Textura\n- Povrchová vlastnost objektu (vizuální nebo hmatová).\n- Pomáhá vytvářet dojem hloubky a realismu.\n\n---\n\n## 👁️ Vizuální gramotnost\nSchopnost interpretovat a vytvářet vizuální zprávy. Grafik musí rozumět tomu, jak lidé vnímají tvary a symboly (např. rozpoznávání dopravních značek nebo symbolů).\n\n---\n## 🔗 Související témata\n- [[04 Design dokumentů|📐 Design dokumentů (1. ročník)]]\n- [[Pojmy|🎨 Typografické pojmy]]\n- [[Domů|Zpět na hlavní přehled]]",
            "audioUrl": "PLACEHOLDER-graficky-design-audio",
            "notebookLmUrl": "https://notebooklm.google.com/",
            "quizUrl": "PLACEHOLDER-graficky-design-kviz",
            "flashcardsUrl": "PLACEHOLDER-graficky-design-karticky"
          },
          {
            "id": "natisk-a-nahled",
            "title": "Nátisk a náhled",
            "description": "Nátisk a náhled jsou kontrolní procesy v závěrečné fázi předtiskové přípravy. Slouží k odhalení chyb v obsahu, rozměrech a barevnosti ještě před zh...",
            "content": "# 🖨️ Nátisk a náhled\n\n> [ABSTRACT] Stručný přehled\n> Nátisk a náhled jsou kontrolní procesy v závěrečné fázi předtiskové přípravy. Slouží k odhalení chyb v obsahu, rozměrech a barevnosti ještě před zhotovením tiskové formy.\n\n---\n\n## 🎯 Účel nátisku\n- **Odhalení chyb při vyřazení:** Kontrola rozměrů a správného umístění ořezových značek.\n- **Korektura:** Kontrola gramatických a obsahových chyb (data, jména, místa).\n- **Kontrola barevnosti:** Ověření věrnosti barev před nákladovým tiskem.\n\n---\n\n## 📂 Typy nátisku\n\n### Digitální nátisk\n- Provádí se na profesionálních digitálních tiskárnách se specializovaným softwarem.\n- Velkoformátové tiskárny jsou vhodné pro kontrolu archové montáže.\n- Dnes jedna z nejpoužívanějších variant.\n\n### Certifikovaný nátisk\n- Nátisk s ověřenou a garantovanou přesností barevnosti.\n- Odchylka se musí pohybovat v rámci stanovené normy **ISO**.\n- K měření slouží kontrolní proužky a v Evropě nejčastěji profil **FOGRA**.\n\n### Fotochemický nátisk\n- Využíval produkční kopírovací podklady, laminování světlocitlivou fólií a speciální tonery.\n- Dnes je na ústupu kvůli digitalizaci tiskových dat.\n\n### Nátiskový stroj\n- Zjednodušená jednotka pro ruční tisk několika kusů.\n- Používá stejnou tiskovou formu jako produkční stroj, což zaručuje věrnost rastru, ale barevnost nemusí být 100%.\n\n---\n\n## 🖥️ Náhled\nNáhled slouží k vizuální kontrole na monitoru bez fyzického tisku.\n- **Požadavek:** Kvalitní, pravidelně kalibrovaný monitor.\n- **Využití:** Hlavně kontrola obsahových chyb.\n- **Omezení:** Je nutné počítat s rozdíly v barevnosti oproti finálnímu tisku.\n\n---\n## 🔗 Související témata\n- [[02 Organizace polygrafické výroby|🖨️ Organizace výroby]]\n- [[06 Technologická příprava zakázky|📁 Příprava zakázky]]\n- [[Domů|Zpět na hlavní přehled]]",
            "audioUrl": "PLACEHOLDER-natisk-a-nahled-audio",
            "notebookLmUrl": "https://notebooklm.google.com/",
            "quizUrl": "PLACEHOLDER-natisk-a-nahled-kviz",
            "flashcardsUrl": "PLACEHOLDER-natisk-a-nahled-karticky"
          },
          {
            "id": "sazba-knihy",
            "title": "Sazba knihy",
            "description": "Sazba knihy vyžaduje precizní práci s textem, obrazem a geometrií stránky. Klíčem je jednoduchá struktura dokumentu, správné formátování pomocí sty...",
            "content": "# 📖 Sazba knihy\n\n> [ABSTRACT] Stručný přehled\n> Sazba knihy vyžaduje precizní práci s textem, obrazem a geometrií stránky. Klíčem je jednoduchá struktura dokumentu, správné formátování pomocí stylů a volba vhodné knižní vazby.\n\n---\n\n## ⚙️ Technické základy sazby\n- **Práce s rámečky:** Stránková montáž (např. v InDesignu) využívá řetězené rámečky pro přetékání textu a vrstvy pro lepší organizaci.\n- **Vazby na soubory:** Importované obrázky jsou linkované; při přesunu originálu je nutná aktualizace vazby.\n\n---\n\n## 📝 Příprava a formátování textu\n- **Korektura:** Text musí projít revizí gramatiky, pravopisu a stylistiky.\n- **Styly:** Nezbytné je používat **odstavcové a znakové styly** pro nadpisy, podnadpisy a hlavní text.\n- **Písmo:** Pro čitelnost se preferují patková písma. Velikost 12–14 b. pro děti, 8–11 b. pro dospělé.\n\n---\n\n## 📐 [[Sazba knihy#📐 Zrcadlo sazby (Geometrie stránky)|Zrcadlo sazby]] (Geometrie stránky)\n- **Formát:** Nastavujeme čistý formát tiskoviny a protilehlé stránky (dvoustránky).\n- **Okraje:** Definují sazební obrazec (prostor pro text) a ochrannou zónu.\n- **[[05 Formáty papíru#✂️ Impozice (Vyřazování)|Spadávka]]:** 2–5 mm pro bezokrajové prvky.\n\n---\n\n## 🏛️ Části knihy\n- **Obálka a přebal:** Ochrana a vizuální upoutávka.\n- **Předsádka:** Spojuje knižní blok s deskami (pravá = bílá, nepravá = 1. strana bloku).\n- **Patitul:** Název a autor (před titulním listem).\n- **Hlavní titul:** Autor, dílo, rok vydání, ilustrace.\n- **Vydavatelský záznam (anotace):** Tiráž, copyright, spolupracovníci (překladatel, grafik).\n- **Textová část:** Jednotné názvy kapitol, začátky kapitol na nové stránce.\n\n---\n\n## 🛠️ Knižní vazby\n\n### Měkké vazby\n- **[[Sazba knihy#Měkké vazby|V1]] (sešitová):** Dvoustránky spojené sponkami (počet stran dělitelný 4).\n- **[[Sazba knihy#Měkké vazby|V2]] (lepená):** Listy vlepované do měkkých desek (učebnice, levné knihy).\n\n### Tuhé vazby\n- **V7:** Sešité složky, obálka potažená papírem, hřbet plátnem.\n- **[[Sazba knihy#Tuhé vazby|V8]]:** Kvalitní vazba, šitý blok, desky s laminací nebo kůží.\n\n---\n## 🔗 Související témata\n- [[Typografie|🎨 Typografie]]\n- [[Základní pravidla sazby|📏 Základní pravidla sazby]]\n- [[Výroba papíru|📜 Výroba papíru]]\n- [[Domů|Zpět na hlavní přehled]]",
            "audioUrl": "PLACEHOLDER-sazba-knihy-audio",
            "notebookLmUrl": "https://notebooklm.google.com/",
            "quizUrl": "PLACEHOLDER-sazba-knihy-kviz",
            "flashcardsUrl": "PLACEHOLDER-sazba-knihy-karticky"
          },
          {
            "id": "typografie",
            "title": "Typografie",
            "description": "Typografie zajišťuje dobrou čitelnost, orientaci a estetiku tiskoviny. Dodržování typografických pravidel je nezbytné pro profesionální výstup.",
            "content": "# 🎨 Typografie tiskovin\n\n> [ABSTRACT] Stručný přehled\n> Typografie zajišťuje dobrou čitelnost, orientaci a estetiku tiskoviny. Dodržování typografických pravidel je nezbytné pro profesionální výstup.\n\n---\n\n## 📏 Základní pojmy\n- **[[Typografie#📏 Základní pojmy|Čtverčík]] (EM):** Čtverec o hraně velikosti písma. Základní horizontální i vertikální míra.\n- **Půlčtverčík (EN):** Polovina čtverčíku.\n- **Využití:** Odsazení prvního řádku odstavce, mezery za odstavcem, mezislovní mezery (základ 1/3 EM).\n\n---\n\n## 📂 Druhy písma\n- **Patkové (Serif):** Krátké čárky (patky) na účaří usnadňují čtení dlouhých textů (knihy, noviny). Př: *Times New Roman*.\n- **Bezpatkové (Sans Serif):** Moderní, vhodné pro digitální grafiku, weby a krátké texty. Př: *Arial, Roboto*.\n- **Estetická písma:** Ručně psaná, zdobená; pro vizuální efekt.\n\n---\n\n## ⚙️ Pravidla sazby a odstavců\n\n### Typy sazby\n- **Hladká sazba:** Jednotná velikost a řez písma v celém textu.\n- **Pořadová sazba:** Uspořádání do seznamů (arabské/římské číslice, odrážky).\n\n### Úprava odstavců\n- **Zarovnání na praporek:** Jedna strana zarovnaná (vlevo/vpravo/na střed). Vhodné pro letáky a články.\n- **Zarovnání do bloku:** Obě strany zarovnané. Využívá proměnlivé mezery, vhodné pro knihy a časopisy.\n- **Oddělení:** Odsazení prvního řádku nebo mezera za odstavcem.\n\n---\n\n## 🖋️ Klíčová typografická pravidla\n\n### Interpunkce\n- Tečka, čárka, otazník: hned za slovo, následuje mezera.\n- **Výjimky:** Čas (10:45), sportovní výsledky (2:0), desetinná čárka (0,5).\n\n### Mezery a spojky\n- **Pevná mezera:** Jednohláskové předložky a spojky (v, s, z, u, o, k, i, a) nesmí zůstat na konci řádku.\n- **Telefonní čísla:** Mezery po třech číslicích (+420 777 888 555).\n- **Datum:** Mezery v českém formátu (3. 2. 2025). Mezinárodní bez mezer (2025-02-03).\n\n### Znaménka\n- **Spojovník (-):** Bez mezer (česko-anglický, modro-zelený).\n- **Pomlčka (–):** S mezerami pro oddělení věty.\n- **Závorky:** Bez mezer uvnitř (text v závorce).\n- **Zkratky:** Bez mezer (tj., atd., aj.).\n\n### Dělení slov\n- Rozdělování podle slabik pomocí spojovníku. Na konci řádku musí zůstat minimálně 3 znaky.\n\n---\n## 🔗 Související témata\n- [[Pojmy|🎨 Typografické pojmy (3. ročník)]]\n- [[Základní pravidla sazby|📏 Základní pravidla sazby]]\n- [[Sazba knihy|📖 Sazba knihy]]\n- [[Domů|Zpět na hlavní přehled]]",
            "audioUrl": "PLACEHOLDER-typografie-audio",
            "notebookLmUrl": "https://notebooklm.google.com/",
            "quizUrl": "PLACEHOLDER-typografie-kviz",
            "flashcardsUrl": "PLACEHOLDER-typografie-karticky"
          },
          {
            "id": "zakladni-pravidla-sazby",
            "title": "Základní pravidla sazby",
            "description": "Sazba a zlom dokumentu se řídí pravidly, která zajišťují technickou správnost a estetiku tiskoviny. Práce probíhá v rámečcích a vrstvách s důrazem ...",
            "content": "# 📏 Základní pravidla sazby\n\n> [ABSTRACT] Stručný přehled\n> Sazba a zlom dokumentu se řídí pravidly, která zajišťují technickou správnost a estetiku tiskoviny. Práce probíhá v rámečcích a vrstvách s důrazem na správný import grafiky a geometrii stránky.\n\n---\n\n## ⌨️ Typy a jednotky sazby\n- **Hladká sazba:** Sazba textu v jedné velikosti a řezu, uspořádaná do odstavců s pravidelným prokladem.\n- **[[Typografie#📏 Základní pojmy|Čtverčík]] (EM):** Základní jednotka sazby (hrana čtverce = velikost písma).\n  - Mezislovní mezera: cca 1/3 EM.\n  - Proklad: např. 1,2x až 1,5x EM.\n\n---\n\n## 🎨 Typy sazby (Zarovnání)\n...\n---\n\n## ⚙️ Sazba a Zlom (Stránková montáž)\n- **Rámečky:** Všechny prvky (text, obrázky) musí být v rámečcích (InDesign). Snažíme se o co nejjednodušší strukturu.\n- **Řetězení:** Propojení rámečků pro plynulé přetékání dlouhého textu.\n- **Vrstvy:** Oddělení textu, obrázků a grafiky pro přehlednost.\n- **Import:** Fotografie nevkládáme přes schránku (CTRL+V), ale přes **[[Základní pravidla sazby#⚙️ Sazba a Zlom (Stránková montáž)|Import/Umístit]]**. Tím zachováme rozlišení a barevný profil. CTRL+V je přípustné jen pro jednoduché vektory.\n- **Vazby:** Import vytvoří link na originální soubor. Smazání nebo přesun originálu vazbu přeruší.\n\n---\n\n## 📐 Geometrie stránky\n...\n- **Dvoustránky:** Používáme pro tiskoviny s více než 4 stranami.\n- **[[05 Formáty papíru#✂️ Impozice (Vyřazování)|Spadávka]] (2–5 mm):** Nutná pro prvky sahající až k okraji papíru.\n- **Bezpečná vzdálenost:** Objekty (včetně čísel stran) by měly být minimálně 3 mm od okraje či lomu.\n...\n---\n## 🔗 Související témata\n...",
            "audioUrl": "PLACEHOLDER-zakladni-pravidla-sazby-audio",
            "notebookLmUrl": "https://notebooklm.google.com/",
            "quizUrl": "PLACEHOLDER-zakladni-pravidla-sazby-kviz",
            "flashcardsUrl": "PLACEHOLDER-zakladni-pravidla-sazby-karticky"
          },
          {
            "id": "casopisy",
            "title": "Časopisy",
            "description": "Časopisy jsou periodické tiskoviny určené specifickým skupinám čtenářů. Vyznačují se náročnější grafickou úpravou, kvalitnějším papírem a specifick...",
            "content": "# 📰 Časopisy\n\n> [ABSTRACT] Stručný přehled\n> Časopisy jsou periodické tiskoviny určené specifickým skupinám čtenářů. Vyznačují se náročnější grafickou úpravou, kvalitnějším papírem a specifickým knihařským zpracováním.\n\n---\n\n## 📂 Rozdělení a parametry\n\n### Obsahové rozdělení\n- Zpravodajské, odborné, módní, kulturní, hobby, dětské.\n\n### Používané vazby\n- **[[Sazba knihy#Měkké vazby|V1]]:** Klasické sešitové časopisy.\n- **[[Sazba knihy#Měkké vazby|V2]]:** Luxusnější časopisy, katalogy, příručky.\n\n---\n\n## ⚙️ Výrobní proces\n\n### Knihařské (dokončovací) zpracování\n- **Řezání:** Zpracování na čistý formát.\n- **Skládání:** Skládání do jednotlivých složek.\n- **Speciální úpravy:** Laminování obálky, UV lakování, ražba.\n\n### Příprava a sazba\n- Nastavení zrcadla sazby a typografie.\n- Úprava fotografií pro tisk ([[06 Technologická příprava zakázky#Rozlišení|DPI]], barevné korekce).\n- Kontrola a korektura (nátisk a náhled).\n\n---\n\n## 🎨 Grafická úprava obálky\n- **Výběr písma:** Musí odpovídat obsahu (móda = tenký patkový, IT = moderní bezpatkový).\n- **Výběr barev:** Standardně profil FOGRA39, harmonické nebo kontrastní kombinace.\n- **Rozvržení:** Dominantní logotyp v zóně pozornosti, hlavní titulek (zpráva), výrazné fotografie.\n- **Korektura:** Kontrola gramatiky a barevnosti (nátisk) před tiskem.\n\n---\n\n## 🖊️ Grafická úprava vnitřku\n- **Text:** Sazba do sloupců, zarovnání do bloku.\n- **Typografie:** Odsazení odstavců (čtverčík), důraz na čitelnost, časté užití patkového písma.\n- **Fotografie:** Musí doplňovat text (reportážní, portréty atd.).\n\n---\n## 🔗 Související témata\n- [[Akcidenční tiskoviny|📄 Akcidenční tiskoviny]]\n- [[03 Polygrafické výrobky|📦 Polygrafické výrobky]]\n- [[Domů|Zpět na hlavní přehled]]",
            "audioUrl": "PLACEHOLDER-casopisy-audio",
            "notebookLmUrl": "https://notebooklm.google.com/",
            "quizUrl": "PLACEHOLDER-casopisy-kviz",
            "flashcardsUrl": "PLACEHOLDER-casopisy-karticky"
          }
        ]
      },
      {
        "id": 3,
        "label": "3. ročník",
        "topics": [
          {
            "id": "digitalni-tisk",
            "title": "Digitální tisk",
            "description": "Digitální tisk je moderní technika umožňující přímý převod dat na materiál bez nutnosti tiskové formy. Klíčovým procesem je **RIP** (převod dat na ...",
            "content": "# 🖨️ Digitální tisk\n\n> [ABSTRACT] Stručný přehled\n> Digitální tisk je moderní technika umožňující přímý převod dat na materiál bez nutnosti tiskové formy. Klíčovým procesem je **[[Kontrola tisku#🖥️ RIP a elektronický bod|RIP]]** (převod dat na rastr). Tato technologie vyniká rychlostí, personalizací a efektivitou u malých nákladů.\n\n---\n\n## 📂 Druhy digitálního tisku\n\n### Tonerový tisk (Elektrofotografie)\n- Používá se v laserových tiskárnách (např. Konica Minolta).\n- **Princip:** Fotoválec se nabije, laser „vypálí“ obraz (vybití míst dopadu světla), toner (prášek) přilne k nabitým místům a teplem se zafixuje na materiál.\n\n### Inkoustový tisk (Inkjet)\n- Od domácích po velkoformátové stroje.\n- **Princip:** Tisková hlava vystřeluje mikrokapky inkoustu.\n- **Typy inkoustů:**\n  - Vodou ředitelné (papír).\n  - UV inkousty (vytvrzované UV lampou).\n  - Latexové (ekologické, venkovní reklama).\n\n---\n\n## ⚙️ Výhody a nevýhody\n\n### Výhody\n- **Rychlost:** Žádná příprava tiskové formy.\n- **Personalizace (VDP):** Každý výtisk může mít jiný obsah (jména, kódy).\n- **Efektivita:** Ekonomické pro malé náklady (0–500 ks).\n- **Materiály:** Široký výběr potiskovaných podkladů.\n\n### Nevýhody\n- Vyšší cena za kus u velkých nákladů.\n- Omezená trvanlivost inkoustů.\n- Nižší barevná stálost oproti ofsetu.\n\n---\n\n## 🏛️ Hlavní využití v polygrafii\n\n- **Akcidenční tiskoviny:** Vizitky, letáky, plakáty s variabilními daty.\n- **Reklamní tisk:** Velkoformátové bannery, rollupy.\n- **Vydavatelský tisk:**\n  - **Print-on-Demand (POD):** Tisk knih až po objednání zákazníkem.\n  - Časopisy v malých nákladech s vysokou kvalitou.\n- **Obalový design:** Tisk prototypů a personalizovaných obalů.\n- **Speciální materiály:** Textil, dřevo, sklo, kov ([[03 Polygrafické výrobky#UV tisk|UV tisk]]), řezané samolepky.\n\n---\n## 🔗 Související témata\n- [[01 Reprodukce textu a obrazu|🖨️ Základy reprodukce]]\n- [[Ofsetové barvy|🎨 Ofsetové barvy]]\n- [[Domů|Zpět na hlavní přehled]]",
            "audioUrl": "PLACEHOLDER-digitalni-tisk-audio",
            "notebookLmUrl": "https://notebooklm.google.com/",
            "quizUrl": "PLACEHOLDER-digitalni-tisk-kviz",
            "flashcardsUrl": "PLACEHOLDER-digitalni-tisk-karticky"
          },
          {
            "id": "formaty-papiru",
            "title": "Formáty papíru",
            "description": "Systém velikostí papíru je standardizován normou **ČSN EN ISO 216**. Tento systém usnadňuje práci v tiskárnách a snižuje náklady díky efektivnímu v...",
            "content": "# 📄 Formáty papíru\n\n> [ABSTRACT] Stručný přehled\n> Systém velikostí papíru je standardizován normou **ČSN EN ISO 216**. Tento systém usnadňuje práci v tiskárnách a snižuje náklady díky efektivnímu využití archů.\n\n---\n\n## 📏 Standardizace a řady\nNorma ISO 216 platí po celém světě (s malými výjimkami) a zaručuje konzistentní rozměry.\n\n### Základní řady\n- **Řada A:** Základní formáty pro běžné použití.\n- **Řada B a SRA:** Větší formáty umožňující bezokrajový tisk (se spadávkou).\n  - **B:** Typické pro ofsetový tisk.\n  - **SRA:** Typické pro digitální tisk.\n- **Řada C:** Formáty určené pro obálky.\n\n### Princip poměru stran\nPoměr stran všech formátů je **1 : √2**. To umožňuje skládání papíru na polovinu při zachování stejného poměru stran.\n\n---\n\n## 📐 Rozdělení formátů v praxi\n- **Čistý:** Výsledný oříznutý formát tiskoviny.\n- **Hrubý (R):** Velikost formátu včetně spadávky (přesahu na ořez).\n- **Superhrubý (SR):** Označení pro celé tiskové archy (TA).\n\n---\n\n## 📂 Velikosti základních formátů\n\n| Název formátu | Šířka (mm) | Výška (mm) |\n| :--- | :--- | :--- |\n| **A4** | 210 | 297 |\n| **A3** | 297 | 420 |\n| **A5** | 148 | 210 |\n| **DL** | 210 | 99 |\n| **B2** | 500 | 707 |\n| **Vizitka česká** | 90 | 50 |\n| **Vizitka evropská** | 85 | 55 |\n\n---\n## 🔗 Související témata\n- [[05 Formáty papíru|📄 Základy formátů (1. ročník)]]\n- [[Výroba papíru|📜 Výroba papíru]]\n- [[Domů|Zpět na hlavní přehled]]",
            "audioUrl": "PLACEHOLDER-formaty-papiru-audio",
            "notebookLmUrl": "https://notebooklm.google.com/",
            "quizUrl": "PLACEHOLDER-formaty-papiru-kviz",
            "flashcardsUrl": "PLACEHOLDER-formaty-papiru-karticky"
          },
          {
            "id": "kontrola-tisku",
            "title": "Kontrola tisku",
            "description": "Kontrola tisku zajišťuje shodu mezi návrhem a výsledkem. Využívá měřicí přístroje (denzitometr), kontrolní prvky (měrný proužek) a systémy správy b...",
            "content": "# 🔍 Kontrola tisku\n\n> [ABSTRACT] Stručný přehled\n> Kontrola tisku zajišťuje shodu mezi návrhem a výsledkem. Využívá měřicí přístroje ([[Kontrola tisku#🏛️ Měřicí přístroje|denzitometr]]), kontrolní prvky (měrný proužek) a systémy správy barev (**CMS**).\n\n---\n\n## 📏 Měrný proužek a parametry\nKvalita se měří na políčkách měrného proužku pomocí **[[Kontrola tisku#🏛️ Měřicí přístroje|denzitometru]]**.\n\n### Zkoumané parametry:\n- **Sytost a správnost barev:** Kontrola pod kalibrovaným denním světlem.\n- **Oboustranný tisk:** Lícování přední a zadní strany archu.\n- **Tiskový kontrast:** Čitelnost, zejména u textů.\n- **Soutisk:** Přesné překrytí barev (využití knihovny PANTONE).\n\n---\n\n...\n\n## 🖥️ [[Digitální tisk#Co to je?|RIP]] a elektronický bod\n- **[[Digitální tisk#Co to je?|RIP]] (Raster Image Processor):** Převod dat na tiskový rastr.\n  - Parametry: Tvar bodu, hustota (**LPI**), typ rastrování (**AM/FM**).\n- **Elektronický bod:** Nejmenší jednotka obrazu (pixel).\n- **Rozlišení:** Počet bodů na délku (např. **[[06 Technologická příprava zakázky#Rozlišení|DPI]]**) určuje výslednou kvalitu.\n\n---\n\n## 🎨 Color Management (CMS)\nCílem CMS je barevná shoda napříč zařízeními.\n\n### [[Kontrola tisku#ICC profil|ICC profil]]\n- Datový soubor popisující barevné možnosti konkrétního zařízení.\n- Umožňuje převod mezi barevnými prostory (např. z RGB monitoru do tiskového [[06 Technologická příprava zakázky#Barevnost|CMYKu]]).\n\n### Barevné modely (prostory)\nBarvy jsou definovány nezávisle na zařízení na základě vnímání lidským okem.\n...\n---\n## 🔗 Související témata\n...",
            "audioUrl": "PLACEHOLDER-kontrola-tisku-audio",
            "notebookLmUrl": "https://notebooklm.google.com/",
            "quizUrl": "PLACEHOLDER-kontrola-tisku-kviz",
            "flashcardsUrl": "PLACEHOLDER-kontrola-tisku-karticky"
          },
          {
            "id": "skener",
            "title": "Skener",
            "description": "Skener je vstupní hardwarové zařízení pro digitalizaci obrazových předloh. Proces využívá osvit předlohy a následné zachycení odraženého nebo prošl...",
            "content": "# 📷 Skener\n\n> [ABSTRACT] Stručný přehled\n> Skener je vstupní hardwarové zařízení pro digitalizaci obrazových předloh. Proces využívá osvit předlohy a následné zachycení odraženého nebo prošlého světla senzorem.\n\n---\n\n## ⚙️ Princip skenování\n1. **Nasvícení:** Předloha je na ploše osvětlena zdrojem (např. LED).\n2. **Odraz/Průchod:** Světlo se odrazí (odrazová předloha) nebo projde (průhledná předloha) a je zachyceno optickým snímačem.\n3. **Převod:** Informace jsou převedeny A/D převodníkem na digitální data.\n4. **Uložení:** Data jsou uložena do souboru.\n\n---\n\n## 📂 Typy předloh a parametry\n\n### Typy předloh\n- **Odrazová:** Běžná (papír).\n- **Průhledná:** Pozitiv, negativ (filmy).\n\n### Základní parametry\n- **Procento reprodukce:** Nastavení při zvětšování pro zachování správného rozlišení.\n- **Barevný režim:**\n  - **Duplex:** Dvě barvy (černá + doplňková pro tónování).\n  - **Stupně šedi:** 256 odstínů černé.\n  - **Čtyřbarvotisk:** Plný CMYK.\n\n---\n\n## 🛠️ Typy skenerů\n\n- **Ruční:** Malá kvalita, nepřesné ovládání, dnes jen specifické užití.\n- **Stolní (Plochý):** Předloha leží na skle, pod ním projíždí rameno. Vhodné pro tenké předlohy.\n- **Bubnový:** Předloha nalepená na rotujícím válci, snímání paprskem. Nejvyšší kvalita.\n- **Filmový:** Specializovaný na digitalizaci filmů a diapozitivů.\n\n---\n## 🔗 Související témata\n- [[06 Technologická příprava zakázky|📁 Příprava zakázky]]\n- [[01 Reprodukce textu a obrazu|🖨️ Základy reprodukce]]\n- [[Domů|Zpět na hlavní přehled]]",
            "audioUrl": "PLACEHOLDER-skener-audio",
            "notebookLmUrl": "https://notebooklm.google.com/",
            "quizUrl": "PLACEHOLDER-skener-kviz",
            "flashcardsUrl": "PLACEHOLDER-skener-karticky"
          }
        ]
      },
      {
        "id": 4,
        "label": "4. ročník",
        "topics": []
      }
    ]
  },
  {
    "id": "materialy",
    "name": "Materiály",
    "years": [
      {
        "id": 1,
        "label": "1. ročník",
        "topics": []
      },
      {
        "id": 2,
        "label": "2. ročník",
        "topics": []
      },
      {
        "id": 3,
        "label": "3. ročník",
        "topics": [
          {
            "id": "ofsetove-barvy",
            "title": "Ofsetové barvy",
            "description": "Vysoce pigmentované, pastózní barvy s malým obsahem pojiv. Musí umožnit dokonalé vybarvení i při velmi tenkém filmu a nesmí zasychat na válcích.",
            "content": "# 🎨 Ofsetové barvy\n\n> [ABSTRACT] Stručný přehled\n> Vysoce pigmentované, pastózní barvy s malým obsahem pojiv. Musí umožnit dokonalé vybarvení i při velmi tenkém filmu a nesmí zasychat na válcích.\n\n---\n\n## 🧪 Vlastnosti ofsetových barev\n- **Pastózní konzistence.**\n- **Nízká tloušťka filmu.**\n- **Vysoká pigmentace.**\n\n---\n\n## 🖨️ Typy ofsetového tisku\n\n### Archový tisk\n- Vyšší viskozita barev.\n\n### Kotoučový tisk\n- Obsahuje více pigmentů a minerálních olejů.\n- **Heatsetové barvy:** Zasychají horkým vzduchem nebo IR zářením.\n- **Coldsetové barvy:** Zasychají za pokojové teploty (novinový tisk).\n\n---\n\n## 📂 Další rozdělení a zpracování\n\n### Speciální úpravy\n- **Bigování:** Vytváření rýhy pro snazší skládání u silnějších materiálů (letáky, krabičky).\n\n### Rozdělení dle využití\n- Knižní barvy, novinové barvy, barvy pro časopisy.\n- Barvy pro tisk obalů a etiket.\n- Ofset bez vlhčení (obsahují speciální oleje).\n\n\n---\n## 🔗 Související témata\n- [[01 Reprodukce textu a obrazu|🖨️ Základy reprodukce]]\n- [[Výroba papíru|📜 Výroba papíru]]\n- [[03 Polygrafické výrobky|📦 Polygrafické výrobky]]\n- [[Domů|Zpět na hlavní přehled]]",
            "audioUrl": "PLACEHOLDER-ofsetove-barvy-audio",
            "notebookLmUrl": "https://notebooklm.google.com/",
            "quizUrl": "PLACEHOLDER-ofsetove-barvy-kviz",
            "flashcardsUrl": "PLACEHOLDER-ofsetove-barvy-karticky"
          },
          {
            "id": "vyroba-papiru",
            "title": "Výroba papíru",
            "description": "Papír se vyrábí z papíroviny – vodné suspenze rostlinných vláken (buničina, dřevina), plnidel, klížidel a barviv.",
            "content": "# 📜 Výroba papíru\n\n> [ABSTRACT] Stručný přehled\n> Papír se vyrábí z papíroviny – vodné suspenze rostlinných vláken (buničina, dřevina), plnidel, klížidel a barviv.\n\n---\n\n## 🧪 Složení papíroviny\n- **Voda:** Pro ředění a transport.\n- **Rostlinná vlákna:** Základní surovina (nejčastěji dřevo).\n  - **Dřevina:** Mechanicky získaná vlákna.\n  - **Buničina:** Chemicky získaná vlákna (vyšší kvalita).\n- **Plnidla:** Zlepšují tiskové vlastnosti, vyplňují mezery mezi vlákny.\n- **Klížidla:** Zajišťují odolnost proti vodě a propíjení barev.\n- **Barviva:** Pro dosažení požadovaného odstínu.\n\n---\n\n## ⚙️ Papírenský stroj\nProces probíhá ve čtyřech hlavních fázích:\n\n1. **Sítová část:** Nátok naředěné vláknoviny na síto.\n2. **Lisová část:** Odsávání vody tlakem.\n3. **Sušící část:** Odstranění zbylé vlhkosti teplem.\n4. **Hladící stolice a navíječ:** Uhlazení povrchu a navinutí na role.\n\n\n---\n## 🔗 Související témata\n- [[05 Formáty papíru|📄 Formáty papíru]]\n- [[01 Reprodukce textu a obrazu|🖨️ Základy reprodukce]]\n- [[Ofsetové barvy|🎨 Ofsetové barvy]]\n- [[Domů|Zpět na hlavní přehled]]",
            "audioUrl": "PLACEHOLDER-vyroba-papiru-audio",
            "notebookLmUrl": "https://notebooklm.google.com/",
            "quizUrl": "PLACEHOLDER-vyroba-papiru-kviz",
            "flashcardsUrl": "PLACEHOLDER-vyroba-papiru-karticky"
          }
        ]
      },
      {
        "id": 4,
        "label": "4. ročník",
        "topics": []
      }
    ]
  },
  {
    "id": "pismo-a-odborne-kresleni",
    "name": "Písmo a odborné kreslení",
    "years": [
      {
        "id": 1,
        "label": "1. ročník",
        "topics": []
      },
      {
        "id": 2,
        "label": "2. ročník",
        "topics": []
      },
      {
        "id": 3,
        "label": "3. ročník",
        "topics": [
          {
            "id": "pojmy",
            "title": "Pojmy",
            "description": "Přehled základních termínů z oblasti písma, klasifikace typografických znaků a anatomie písmen.",
            "content": "# 🎨 Typografické pojmy\n\n> [ABSTRACT] Stručný přehled\n> Přehled základních termínů z oblasti písma, klasifikace typografických znaků a anatomie písmen.\n\n---\n\n## 🏛️ Klasifikace a hierarchie\n\n### Klasifikační skupina\n- Rozdělení typografických písem a znaků do 11 skupin (např. kaligrafická, antikva).\n\n### Písmová rodina\n- Konkrétní druh písma ve všech dostupných řezech a velikostech.\n\n### Řez písma\n- Různé styly v rámci jednoho fontu (Bold, Italic, Light...).\n\n---\n\n## 📐 Anatomie a typy písma\n\n- **Serif (Patka):** Ukončení tahů jednotlivých písmen (serifová písma).\n- **Antikva:** Jedno z nejstarších tiskových písem (serifové).\n- **Grotesk:** Bezpatkové písmo, používané v novinách a knihách.\n- **Kapitálky:** Velká písmena zmenšená na výšku malých (x-height).\n- **Verzálky:** Velká písmena abecedy.\n\n---\n\n## 🖊️ Osa stínování\nUrčuje dynamiku a sklon písma:\n1. **Šikmá osa:** Typická pro klasickou kurzívu.\n2. **Statická osa:** Rovné, svislé písmo.\n\nMění zaoblení písmen, šířku oblouků a celkový vizuální dojem fontu.\n\n\n---\n## 🔗 Související témata\n- [[04 Design dokumentů|📐 Design dokumentů]]\n- [[Domů|Zpět na hlavní přehled]]",
            "audioUrl": "PLACEHOLDER-pojmy-audio",
            "notebookLmUrl": "https://notebooklm.google.com/",
            "quizUrl": "PLACEHOLDER-pojmy-kviz",
            "flashcardsUrl": "PLACEHOLDER-pojmy-karticky"
          }
        ]
      },
      {
        "id": 4,
        "label": "4. ročník",
        "topics": []
      }
    ]
  },
  {
    "id": "polygraficka-vyroba",
    "name": "Polygrafická výroba",
    "years": [
      {
        "id": 1,
        "label": "1. ročník",
        "topics": []
      },
      {
        "id": 2,
        "label": "2. ročník",
        "topics": []
      },
      {
        "id": 3,
        "label": "3. ročník",
        "topics": []
      },
      {
        "id": 4,
        "label": "4. ročník",
        "topics": []
      }
    ]
  }
];
