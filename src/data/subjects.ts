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
            "content": "# 🖨️ Reprodukce textu a obrazu\n\n>  Stručný přehled\n> Tiskem se rozumí přenos obrazu a textu podle předlohy pomocí tiskové formy a tiskové barvy na tiskový materiál. Tento proces využívá různé techniky a principy barevné reprodukce ([[06 Technologická příprava zakázky#Barevnost|CMYK]]).\n\n---\n\n## **Definice tisku**\n- tiskem se rozumí přenos obrazu a textu podle předlohy\n- tisk se provádí pomocí tiskové formy a tiskové barvy\n- tisk se provádí na tiskový materiál\n\n## Tisková forma\n- matrice obsahující tisknoucí a netisknoucí místa\n- přenáší barvu na potiskovaný materiál\n- pro různé techniky existují odlišné tiskové formy\n\n## Tisková barva\n- barva určená výhradně k potisku\n- směs pigmentů a dalších přísad pro lepší fixaci barvy na potiskovaný materiál\n- pro různé tiskové techniky se používají různé barvy\n\n## Tisková technika\n- proces, ve kt. se realizuje tisk podle předlohy v daném počtu a barevnosti\n- historickým vývojem se ustálilo několik základních tiskových technik, kt. se liší principem tisku a tiskovou formou\n- tisknoucí místo je součást tiskové formy, na kt. se váže barva přenášená na potiskovaný materiál, opakem je netisknoucí místo\n\n## Dělení tiskových technik\n- Dle použití tiskové formy\n  - Konvenční: tiskové techniky používající tiskovou formu\n  - Digitální: předloha je vytvářena digitálně - pomocí PC\n- Dle způsobu přenosu barev\n  - Přímé techniky: potiskovaný materiál příchází do přímého kontaktu s tiskovou formou\n  - nepřímé techniky: tiskovou barvu přenášíme pomocí pomocí přenosového prvku (např. ofsetový válec, tampón) a až po té na potiskovaný materiál\n\n---\n\n## Tisk z plochy (litografie, ofset)\n- tisknoucí i netisknoucí místa jsou ve stejné výšce\n- barva se správně uchytí na potiskovaný materiál pomocí povrchového napětí materiálů\n\n### Druhy tisku z plochy\n- **Litografie (kamenotisk)**\n- přímý přenos barvy\n- tisková forma je kamenná deska z vápence\n- kresba na kámen se provádí mastnou litografickou tuší nebo jinými mastnými barvami\n- hotovou kresbu přetíráme roztokem arabské gumy\n- **[[01 Reprodukce textu a obrazu#Ofset|Ofset]]**\n- nepřímý přenos barvy\n- tisková forma je tenká kovová nebo polyesterová deska\n- ofsetové tiskové formy jsou ohebné\n\n### **Proč CMY…K?**\n- vzájemným překrytím všech barev by měla vzniknout barva černá\n- v praxi to tak ale není, z důvodu znečištění tiskových barev\n- výsledná překrytá barva je spíše do hněda, tisk ztrácí kontrast\n- v praxi se to řeší přidáním černé barvy (BLAC**K**)\n- spousta tiskovin obsahuje černý text – místo míchání tří barev použijeme 1 a proto je tisk levnější\n- černou barvu můžeme v některých odstínech zmenšit množství tiskových barev -> levnější tisk, kratší doba schnutí\n\n---\n\n## **Tiskový rastr**\n- tiskové stroje nejsou schopny vytisknout veškeré odstíny a tóny barev\n- obraz se rozloží na síť malých plošek (tiskové body)\n- tyto plochy musí být menší než rozlišovací schopnost oka, pak jsou vnímány jako celá plocha\n- tiskový rastr je vypočítán v procesu [[Digitální tisk#Co to je?|RIP]] (Raster Image Processor)\n\n### **Hustota tiskového rastru**\n- uvádí počet tiskových bodů v určité ploše tisku\n- hodnota se nejčastěji udává v **lpi** – lines per inch\n- volba hustoty závisí na:\n  - **způsob tisku** (technické limity)\n  - **potiskovaný materiál** (savost, hrubost papíru)\n  - **pozorovací vzdálenost** (např. billboard vs. kniha)\n\n---\n\n## **Výstup a formát PDF**\n- data k tisku není vhodné předávat v otevřených formátech (.indd, .ai…)\n- výhody formátu PDF:\n  - snadné zobrazení na všech platformách\n  - omezená kontrola a oprava dat\n  - malá velikost souborů\n  - fonty jsou vložené přímo do dokumentu\n- před archovou montáží dochází ke kontrole **preflight** (fonty, barvy, rozlišení)\n\n### **Standardy PDF/X**\n- mezinárodní standard PDF/X pro jednoznačnou výměnu dat\n- zjednodušené PDF, které zakazuje rizikové prvky (např. interaktivní prvky)\n- cíle: maximální spolehlivost, bezpečnost a zjednodušení předávání dat\n\n---\n## 🔗 Související témata\n- [[Výroba papíru|📜 Výroba papíru]]\n- [[Ofsetové barvy|🎨 Ofsetové barvy]]\n- [[03 Polygrafické výrobky|📦 Polygrafické výrobky]]\n- [[Domů|Zpět na hlavní přehled]]",
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
            "content": "# 🖨️ Organizace polygrafické výroby\n\n>  Stručný přehled\n> Proces výroby tiskovin se dělí na tři základní části: **prepress** (příprava), **press** (tisk) a **postpress** (dokončování). Zahrnuje jak obchodní, tak výrobní činnosti.\n\n---\n\n## 💼 Obchodní činnost\nJde primárně o komunikaci zákazníka s tiskárnou.\n\n### Specifikace zakázky\nZákazník popíše zakázku:\n- **Designová představa**\n- **Termín**\n- **Množství**\n- **Materiál**\n- **Rozměry**\n\n### Proces objednávky\n1. **Cenová nabídka:** Vypracuje tiskárna na základě poptávky.\n2. **Objednávka:** Pokud zákazník souhlasí s cenou, vystaví objednávku.\n3. **Smlouva:** Na základě objednávky se uzavře smlouva obsahující označení zboží, množství, cenu za kus, dodací lhůtu a zúčastněné strany.\n\n---\n\n## ⚙️ Výrobní činnost\nÚkolem je vyrobit výrobek podle přání zákazníka v co nejlepší kvalitě za co nejmenší cenu.\n\n### Příprava výroby\n- Vypracování přesného postupu výroby.\n- **Technologie zakázky:** Kontrola podkladů, volba nejlepšího postupu výroby (tisková technika, …).\n- Příprava podkladů veškerých materiálů (archy, kotouče, tiskové barvy, ...).\n\n### Zajištění materiálů a řízení\n- Kontrola a objednání chybějícího materiálu.\n- **Řízení výroby:** Zajištění nestandardních dokončovacích prací (UV lakování, laminování, …).\n\n### Příprava tiskových podkladů (Prepress)\n- Grafické studio zpracovává podklady (rukopisy, obrazové předlohy, loga, barvy, fonty, …).\n- **Zhotovení tiskové formy:** Dle typu tisku (ofset, flexotisk, knihtisk).\n- **Nátisk:** Zhotovení zkušebního výtisku pro domácí nebo autorskou korekturu a schválení vzorového archu zákazníkem.\n\n---\n\n## 🚚 Tisk a dokončení\n\n### Vlastní tisk (Press)\n\n### Dokončující výroba (Postpress)\nFinální úprava tiskovin:\n- Řezání, skládání, šití, lepení, laminování, děrování, …\n\n### Expedice\nVýstupní kontrola, vystavení dodacího listu, zabalení, doprava a fakturace.\n\n---\n## 🔗 Související témata\n- [[01 Reprodukce textu a obrazu|🖨️ Základy reprodukce]]\n- [[03 Polygrafické výrobky|📦 Polygrafické výrobky]]\n- [[Domů|Zpět na hlavní přehled]]",
            "audioUrl": "/audio/TEC - Organizace polygrafické výroby.m4a",
            "notebookLmUrl": "https://notebooklm.google.com/",
            "quizUrl": "https://notebooklm.google.com/notebook/b0c46a45-dbe6-4b11-9d60-5ea55ea77898?artifactId=fa6c3e62-2c15-46ca-9ed2-bae947278eb3",
            "flashcardsUrl": "PLACEHOLDER-organizace-polygraficke-vyroby-karticky"
          },
          {
            "id": "polygraficke-vyrobky",
            "title": "Polygrafické výrobky",
            "description": "Polygrafie se zabývá výrobu tiskovin, nejčastěji na papír. Výrobky dělíme na vydavatelský tisk (periodika a akcidence), potisk obalů a reklamní pr...",
            "content": "# 📦 Polygrafické výrobky\n\n>  Stručný přehled\n> Polygrafie se zabývá výrobou tiskovin, nejčastěji na papír. Výrobky dělíme na vydavatelský tisk (periodika a akcidence), potisk obalů a reklamní produkci (signmaking).\n\n---\n\n## 📰 Vydavatelský tisk - Periodika\nTiskoviny vydávané v pravidelných intervalech.\n- **Noviny:** Recyklovaný papír (60–80 g/m²), skládané.\n- **Časopisy:** Lakovaný/křídový papír (90–150 g/m²), nejčastěji vazba [[Sazba knihy#Měkké vazby|V1]] (sešitová).\n- **Zpracování:** Lakování, laminování, řezání, skládání.\n\n---\n\n## 📄 Vydavatelský tisk - [[Akcidenční tiskoviny|Akcidenční tiskoviny]]\nObčasné tiskoviny pro nárazovou potřebu.\n- **Příklady:** Leták, vizitka, katalog, plakát…\n- **Materiály:** Nejrůznější druhy papírů (natírané, lesklé, matné, fotopapíry, speciální textury).\n\n---\n\n## 🥡 Potisk obalů\nKlíčová oblast využívající téměř všechny tiskové techniky.\n- **[[01 Reprodukce textu a obrazu#Ofset|Ofset]]:** Papírové obaly (krabičky, tašky).\n- **[[01 Reprodukce textu a obrazu#Flexotisk|Flexotisk]]:** Plastové fólie (sáčky, pytlíky, etikety).\n- **Potravinářské obaly:** Nutnost zabránit migraci barev do obsahu.\n- **Zpracování:** Lepení, skládání, lakování, ražba.\n\n---\n\n## 🛑 Reklamní produkce (Signmaking)\nVýroba reklamních prvků, často označovaná jako velkoformátový tisk.\n- **Billboard / Megaboard:** Velké plochy na budovách či lešeních.\n- **Citylight:** Prosvětlené vitríny.\n- **Banner:** Zavěsitelná potištěná plachtovina.\n- **Roll-Up:** Samonavíjecí systém.\n- **Polepy:** Dopravní prostředky, okna, výlohy, vlajky.\n- **Technologie:** Dříve [[01 Reprodukce textu a obrazu#3. Průtlačný tisk (Sítotisk)|sítotisk]], dnes převládá [[Digitální tisk|digitální tisk]].\n\n---\n\n## ☀️ Speciální tisk\n\n### Řezací plotr\n- Vyřezávání tvarů do materiálů (samolepicí fólie, fólie na textil) pomocí nože dle digitálních dat.\n\n### [[03 Polygrafické výrobky#UV tisk|UV tisk]]\n- Využívá UV světlo k vytvrzení barev.\n- Vhodné pro pevné ploché předměty (USB disky, puky, krabičky).\n- Nabízí možnost parciálního lakování.\n\n---\n## 🔗 Související témata\n- [[01 Reprodukce textu a obrazu|🖨️ Základy reprodukce]]\n- [[02 Organizace polygrafické výroby|🖨️ Organizace výroby]]\n- [[Domů|Zpět na hlavní přehled]]",
            "audioUrl": "/audio/Tec - Polygraficke vyrobky.m4a",
            "notebookLmUrl": "https://notebooklm.google.com/",
            "quizUrl": "https://notebooklm.google.com/notebook/917ee95a-3431-4511-a44b-6360ccf27f18?artifactId=994ec2d0-f1c5-41da-993f-54eeb591130f",
            "flashcardsUrl": "https://notebooklm.google.com/notebook/917ee95a-3431-4511-a44b-6360ccf27f18?artifactId=0defcbaa-77c5-4578-9943-5596e82ed746"
          },
          {
            "id": "design-dokumentu",
            "title": "Design dokumentů",
            "description": "**Grafický design** je vizuální komunikace v rovnováze. Skládá se ze základních prvků (čára, tvar, textura) a využívá kompoziční pravidla pro efekt...",
            "content": "# 📐 Design dokumentů\n\n>  Stručný přehled\n> **Grafický design** je vizuální komunikace v rovnováze. Skládá se ze základních prvků (čára, tvar, textura) a využívá kompoziční pravidla pro efektivní oslovení lidí.\n\n---\n\n## 🧱 Základní prvky designu\n\n1. **Čára:** Nejjednodušší prvek vymezený dvěma body.\n2. **Tvar:** Ohraničená oblast. Geometrické vs. organické tvary.\n3. **Textura:** Barevná výplň, přechod (gradient) nebo vzorek (pattern).\n\n---\n\n## 📐 Kompozice dokumentů\n\n### Třetinová kompozice (Zlatý řez)\n* **Primární zóna:** Nejdůležitější informace (zacílení).\n* **Sekundární zóna:** Doplňující info (datum, čas, cena).\n* **Zápatí:** Kontakty, loga sponzorů.\n* **Záhlaví:** Oslovení / úvod.\n\n### Kompoziční pravidla\n- **Nadpis:** Opticky kratší druhý řádek.\n- **Fotografie:** Postavy hledí dovnitř formátu.\n- **Zarovnání:** Využití mřížky.\n\n---\n\n## ⬜ Prázdné místo (White space)\nSlouží k vizuálnímu oddělení a zlepšení přehlednosti.\n\n### Typografické zásady:\n- **Ochranná zóna:** Okraje (margins) brání nevzhlednému textu u hran.\n- **Proklad (Leading):** Výška řádku (1.3× pro delší texty, 1.5× pro kratší).\n- **Sloupcová sazba:** Lepší čitelnost užších bloků.\n- **Nadpisy:** Větší mezera před nadpisem než za ním.\n\n\n---\n## 🔗 Související témata\n- [[Pojmy|🎨 Typografické pojmy]]\n- [[06 Technologická příprava zakázky|📁 Příprava zakázky]]\n- [[Domů|Zpět na hlavní přehled]]",
            "audioUrl": "PLACEHOLDER-design-dokumentu-audio",
            "notebookLmUrl": "https://notebooklm.google.com/",
            "quizUrl": "https://notebooklm.google.com/notebook/cdf177bf-8ab6-4e85-9a48-9dce2984ff70?artifactId=88f60db1-e711-4250-8fbb-c132f0f90773",
            "flashcardsUrl": "PLACEHOLDER-design-dokumentu-karticky"
          },
          {
            "id": "formaty-papiru",
            "title": "Formáty papíru",
            "description": "Velikosti papíru jsou standardizovány normou **ČSN EN ISO 216** s poměrem stran **1 : √2**. Základní řady jsou A (čisté), B (větší pro tisk) a C (o...",
            "content": "# 📄 Formáty papíru\n\n>  Stručný přehled\n> Velikosti papíru jsou standardizovány normou **ČSN EN ISO 216** s poměrem stran **1 : √2**. Základní řady jsou A (čisté), B (větší pro tisk) a C (obálky).\n\n---\n\n## 📏 Formátové řady\n\n### Řada A (Základní)\n| Formát | Rozměry (mm) | Poznámka |\n| :--- | :--- | :--- |\n| **A0** | 841 × 1189 | Plocha 1 m² |\n| **A4** | 210 × 297 | Kancelářský papír |\n| **A6** | 105 × 148 | Pohlednice |\n\n### Řada B (Zvětšená)\nVětší než řada A, umožňuje tisk se [[05 Formáty papíru#✂️ Impozice (Vyřazování)|spadávkou]] a ořezovými značkami. Častá u ofsetového tisku (B1, B2).\n\n### Řada C (Obálky)\n**C4** pojme A4, **C5** pojme přeloženou A4 (nebo A5), **DL** pojme A4 na třetiny.\n\n---\n\n## 📐 Speciální formáty\n* **SRA3 (320 × 450 mm):** Produkční digitální tiskárny.\n* **Vizitka:** 90 × 50 mm (CZ) / 85 × 55 mm (Euro).\n* **Fotografie:** 9 × 13 cm / 10 × 15 cm.\n\n---\n\n## ✂️ Impozice (Vyřazování)\nUmisťování tiskoviny na tiskový arch (TA) pro maximální využití plochy.\n\n> [INFO] Klíčové pojmy\n> * **[[05 Formáty papíru#✂️ Impozice (Vyřazování)|Spadávka]] (Bleed):** Přesah (2–3 mm) pro bezokrajový tisk.\n> * **Netisknutelná oblast:** Okraj stroje (5–8 mm).\n\n### Příklad výpočtu:\n* **Úkol:** 212 ks oznámení A6 na SRA3 ([[05 Formáty papíru#✂️ Impozice (Vyřazování)|spadávka]] 2 mm, okraje 8 mm).\n* **Efektivní užitek:** 6 kusů na jeden arch SRA3.\n* **Výsledek:** Nutno 36 tiskových archů.\n\n\n---\n## 🔗 Související témata\n- [[Výroba papíru|📜 Výroba papíru]]\n- [[06 Technologická příprava zakázky|📁 Příprava zakázky]]\n- [[Domů|Zpět na hlavní přehled]]",
            "audioUrl": "PLACEHOLDER-formaty-papiru-audio",
            "notebookLmUrl": "https://notebooklm.google.com/",
            "quizUrl": "https://notebooklm.google.com/notebook/c78491e3-b343-45e4-b4fe-34006f27fd0e?artifactId=8864a06d-32bf-4373-a54c-e34175af2b2f",
            "flashcardsUrl": "https://notebooklm.google.com/notebook/c78491e3-b343-45e4-b4fe-34006f27fd0e?artifactId=a2995a82-90b9-4664-b2c8-cba4ac5103d6"
          },
          {
            "id": "technologicka-priprava-zakazky",
            "title": "Technologická příprava zakázky",
            "description": "Kvalita tiskových dat významně ovlivňuje výsledný tisk. Reprodukční grafik musí zajistit co nejkvalitnější podklady v závislosti na typu tiskoviny.",
            "content": "# 📁 Technologická příprava zakázky\n\n>  Stručný přehled\n> Kvalita tiskových dat významně ovlivňuje výsledný tisk. Reprodukční grafik musí zajistit co nejkvalitnější podklady v závislosti na typu tiskoviny. Důkladná příprava dat před každým tiskem je v polygrafii klíčová.\n\n---\n\n## 🏛️ Úvod do přípravy zakázky\n- v polygrafii provádíme před každým tiskem důkladnou přípravu dat\n- výrobní podklady významným způsobem ovlivňují výslednou kvalitu tisku\n- u tisku se jedná o textové a obrazové podklady\n\n## ⚙️ Předtisková příprava\n- první fáze výrobního procesu tiskoviny\n- předtisková příprava je úzce svázána s procesem tisku\n- v přípravě tisku vycházíme z principu a zákonitostí tisku\n\n## 📸 Obrazové podklady\n- z nekvalitních předloh nelze „vykouzlit“ kvalitní reprodukci\n- snahou reprodukčního grafika je získat podklady v co nejlepší kvalitě\n- kritéria požadavků se mění dle výsledné realizace – jiné požadavky při tisku novin, barevného katalogu nebo billboardu\n- obrazové podklady jsou buď v digitální nebo fyzické podobě\n- pokud zákazník obrazové předlohy nemá, je vhodné je ve spolupráci s fotografem nafotit\n\n### Fyzické předlohy\n- tyto předlohy je potřeba pro další použití zdigitalizovat\n- nejčastěji pomocí skenování – fotografie, diapozitivy…\n- fyzickou předlohou může být i produkt, kt. chce zákazník nafotit\n- předlohy musí být čisté a nepoškozené\n- při skenování hlídáme případné poznámky na zadní straně, aby se nepřenesly do digitální verze\n- všechny předlohy řádně označujeme\n\n### Předlohy v digitální podobě\n- nejčastěji se jedná o digitální fotografie z digitálních fotoaparátů, případně externě naskenované obrázky\n- nejvhodnější předlohou je fotografie v původní podobě, tzn. bez jakýchkoliv úprav a bez opětovného ukládání\n- nesprávné úpravy fotografií snižují možnosti dalších úprav\n- vhodnými grafickými formáty jsou TIFF nebo JPEG s co nejmenším stupněm komprese, případně RAW\n- v digitální podobě můžeme pracovat také s logem nebo jinou vektorovou grafikou\n- patřičné grafické formáty pro vektorovou grafiku – AI, PDF nebo EPS\n\n## 📐 Rozlišení\n- základním kritériem posouzení vhodnosti obrázku k tisku je rozlišení\n- požadované rozlišení se nejčastěji udává v počtu bodů na palec – dpi, případně v počtu pixelů na palec – ppi\n- zda je rozlišení dostatečné, zjistíme nejlépe v Adobe Photoshop – Obraz – velikost obrazu\n- hodnota rozlišení je nepřímo úměrná velikosti obrázku v délkových rozměrech\n- čím větší rozlišení potřebujeme, tím menší budou délkové rozměry\n- zvětšování fotografie je omezeno počtem obrazových bodů\n\n## 🎨 Úprava fotografií\n- fotografie upravujeme podle toho jakou grafiku připravujeme\n- v zásadě máme dva možné výstupy:\n  - tisk\n  - digitální publikování\n- u fotografií upravujeme tři parametry:\n  - rozlišení\n  - barevný profil\n  - rozměr fotografie\n- pokud připravujeme tiskovinu upravujeme fotografie následovně:\n  - rozlišení 300 dpi\n  - rozměr – delší strana 2 000 pixelů\n  - barevný profil – FOGRA39\n- fotografie pro digitální publikování upravíme takto:\n  - rozlišení 72 dpi\n  - rozměr dle média – Instagramový příspěvek, instagramový příběh (story), facebook – příspěvek, úvodní fotografie… pokud připravujeme pro web nejčastěji fotografii ořízneme na poměr 16:9 a nastavíme rozměr na 1920 x 1080 px\n  - barevný profil – sRGB\n- tyto úpravy provádíme pomocí Adobe Photoshop\n\n## 🌈 Barevnost\n- u fotografií dále musíme řešit nastavení bílého bodu a zkreslení barevnosti\n- abychom zajistili správnou barevnost u tisku převádíme fotografie do barevných profilů (CMYK)\n- existuje mnoho profilů, které vychází ze CMYKU\n- tyto profily se liší podle místa kde se tiskne (Evropa, USA, Japonsko…)\n- v Evropě se používá barevný profil FOGRA39\n\n## ✂️ Archová montáž\n- slouží ke správnému a efektivnímu tisku\n- rozřazujeme jednotlivé tiskoviny na tiskový arch\n- archová montáž se odvíjí od tiskové techniky\n- např. \n  - digitální tisk - ořezové značky, zvlášť rub a líc\n  - ofsetový tisk - ořezové + soutiskové značky, rub i líc na jedné straně\n  - řezací plotr - řezací linka, přizpůsobujeme velikost digitálně\n  - sítotisk - připravujeme zvlášť pro každou tisknutou barvu\n- dále záleží na velikosti TA\n- **Důležité pojmy v archové montáži:**\n  - **Spadávka** = část, kterou odřízneme při dokončovacím zpracování, tím dosáhneme bezokrajového tisku\n  - **Tiskovina** = finální produkt po tisku a dokončovacím zpracování\n  - **Tiskový arch** = potiskovaný materiál konkrétního formátu, na který provádíme tisk\n  - **Barevný proužek** = nalezneme na okraji TA, slouží ke kontrole barev, kontrola se provádí barevníkem\n\n## 🔄 Princip reprodukce barev\n- princip barevného tisku vychází z vnímání barev lidským okem\n- barevný vjem vzniká v našem mozku důsledkem rozkladu světla\n\n## 🧪 Míchání barev při tisku\n- při tisku se využívá subtraktivní (odčítací) míšení\n- (druhý typ je aditivní (sčítací), kt. využívá systém RGB)\n- barvy jsou tvořeny pomocí tří základních složek:\n  - azurová (CYAN)\n  - purpurová (MAGENTA)\n  - žlutá (YELLOW)\n- tento systém funguje od existujícího bílého světla (papír)\n- každá z tiskových barev pohlcuje červenou, zelenou či modrou složku bílého světla a ostatní odráží\n- tiskové barvy (C M Y) tedy umožňují řídit, kt. složka bílého světla bude z tiskoviny odražena do oka pozorovatele\n\n## 🖤 Proč CMY…K?\n- vzájemným překrytím všech barev by měla vzniknout barva černá\n- v praxi to tak ale není, z důvodu znečištění tiskových barev\n- výsledná překrytá barva je spíše do hněda\n- důsledkem je, že tisk ztrácí kontrast\n- v praxi se tento problém řeší přidáním černé barvy (BLACK)\n- dalším důvodem přidávání černé je, že spousta tiskovin obsahuje černý text – místo míchání tří barev použijeme 1 a proto je tisk levnější\n- černou barvu můžeme v některých odstínech zmenšit množství tiskových barev -> levnější tisk, kratší doba schnutí\n\n## 🕸️ Tiskový rastr\n- tiskové stroje nejsou schopny vytisknout veškeré odstíny a tóny barev\n- v praxi se to vyřeší optickým klamem a vytvářením nepravých tónů\n- obraz se rozloží na síť malých plošek (puntíků)\n- tyto plochy musí být menší než je rozlišovací schopnost lidského oka, pak jsou vnímány jako celá plocha\n- těmto puntíkům se říká tiskové body\n- tiskové body dohromady tvoří tiskový rastr\n- tiskový rastr je vypočítán v procesu, kt. se nazývá RIP – převedení tiskových dat do formátu, kt. rozumí tiskárna\n\n## 📊 Hustota tiskového rastru\n- uvádí počet tiskových bodů v určité ploše tisku\n- hodnota hustoty rastru se nejčastěji udává v počtu jednotek na jednotku délky – např. lpi – lines per inch (počet linek na palec)\n- volba hustoty závisí na několika faktorech:\n  - způsob tisku – každá tisková technika má své limity\n  - na potiskovaném materiálu – rozhoduje např. savost, nebo hrubost papíru\n  - na pozorovací vzdálenosti tiskoviny – banner u dálnice nemusí mít jemný rastr\n\n## 📤 Výstup\n- výstupem při přípravě tiskoviny jsou data připravená k osvitu tiskové formy nebo přímo k tisku (digitální tisk)\n\n## 📄 Formát PDF\n- data k tisku není vhodné předávat v otevřených formátech (soubory .indd, .ai…)\n- pokud dodáváme data v otevřeném formátu musíme dodat i veškeré obrazové podklady a fonty\n- další nevýhodou je, že soubor umožňuje editaci – možnost nechtěné změny obsahu\n- v současné době se jako uzavřený formát nejčastěji používá Adobe PDF\n\n### Výhody formátu PDF\n- snadné zobrazení na všech platformách\n- omezená kontrola a oprava dat (správa barev…)\n- malá velikost souborů\n- podpora všech formátu písem – fonty jsou vložené přímo do dokumentu\n- před archovou montáží dochází ke kontrole nazývané **preflight**\n  - tato kontrola umožňuje odhalit problémy s tiskovými daty\n    - zpracovatelnost souboru\n    - vložená písem\n    - definice barev\n    - rozlišení fotografií\n\n## 🔒 Standardy PDF/X\n- problém v předtiskové přípravě je univerzálnost a flexibilita souborů PDF\n- z tohoto důvodu byl vytvořen mezinárodní standard PDF/X\n- PDF/X umožňuje jednoznačnou výměnu dat\n- je to vlastně zjednodušené PDF, kt. neumožňuje a zakazuje některé prvky formátu PDF (např. interaktivní prvky)\n- cíl zavedení PDF/X:\n  - maximální spolehlivost\n  - bezpečnost\n  - zjednodušení předávání tiskových dat\n\n---\n## 🔗 Související odkazy\n- [[Domů|Zpět na hlavní přehled]]",
            "audioUrl": "/audio/Tec - technologicka priprava zakazky.m4a",
            "notebookLmUrl": "https://notebooklm.google.com/",
            "quizEasyUrl": "https://notebooklm.google.com/notebook/166ae6ba-f885-4294-94fd-afeb6c3559b1?artifactId=a98a88ea-3c9d-41d2-ac87-4f079518ccc9",
            "quizHardUrl": "https://notebooklm.google.com/notebook/166ae6ba-f885-4294-94fd-afeb6c3559b1?artifactId=86956bf8-e130-4667-8f09-949c423823ff",
            "flashcardsUrl": "https://notebooklm.google.com/notebook/166ae6ba-f885-4294-94fd-afeb6c3559b1?artifactId=96cd1a88-5639-43ac-9c19-0b2fba0d1e76"
          },
          {
            "id": "opakovani-1-rocniku",
            "title": "Opakování 1. ročníku",
            "description": "Souhrnný test, kartičky a podcast pro všechna témata za 1. ročník.",
            "content": "# 📝 Opakování 1. ročníku\n\nTato sekce slouží k ucelenému opakování všech témat probraných v 1. ročníku. V pravém panelu najdeš souhrnný podcast, kvíz a sadu kartiček.",
            "audioUrl": "/audio/Tec - 1. rocnik opakovani.m4a",
            "quizUrl": "https://notebooklm.google.com/notebook/f8794423-63cd-48cf-b554-d627e0e6e8cd?artifactId=11ee7e19-2938-42a1-af93-dd7ce6ea5e10",
            "flashcardsUrl": "https://notebooklm.google.com/notebook/f8794423-63cd-48cf-b554-d627e0e6e8cd?artifactId=e183ebcf-4dfc-4103-a832-7d482e6177ec",
            "videoUrl": "https://notebooklm.google.com/notebook/f8794423-63cd-48cf-b554-d627e0e6e8cd?artifactId=67bed5f0-3342-4510-ac9c-93e65f6cb1db",
            "presentationUrl": "https://notebooklm.google.com/notebook/f8794423-63cd-48cf-b554-d627e0e6e8cd?artifactId=cee1fd47-5a71-4bf2-a3f0-c6444bec4fbb"
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
            "content": "# 📄 Akcidenční sazba a obrazové části tiskovin\n\n>  Stručný přehled\n> **[[Akcidenční tiskoviny|Akcidenční tiskoviny]] (AT)** jsou občasné nepravidelné tiskoviny určené pro jednorázovou výrobu. Tato oblast vyžaduje specifickou grafickou úpravu, práci s kompozicí a pochopení principů rastrování pro věrnou reprodukci obrazu.\n\n---\n\n## 📂 Druhy AT\n- **osobní:** pozvánka na narozeninovou oslavu, svatební oznámení…\n- **firemní:** vizitka, novoročenka, hlavičkový papír…\n- **hospodářské:** formuláře, smlouvy…\n- **reklamní:** plakát, leták, inzerát…\n\n---\n\n## 🎨 Grafická úprava AT\nVolba typografie, designu a barevnosti se musí přizpůsobit typu a účelu tiskoviny:\n- **Kosmetické firmy:** patkové fonty, černá/bílá barevnost.\n- **Hračkárny:** komiksové fonty, pestré barvy, světlé odstíny.\n- **Pohřební služby:** kaligrafické fonty, kombinace černé se zlatými/stříbrnými detaily.\n- **Řeznictví:** červená barva, kostkovaned motivy.\n\n### Postup při zhotovování AT\n1. **Rukopis a technologický list:** Informace o druhu papíru, barevnosti atd.\n2. **Náčrtek:** Pomůcka pro vytvoření digitálního návrhu.\n3. **Náhled (Layout):** Přesné digitální zpracování (InDesign, PDF). Obsahuje poznámky pro grafiky i tiskaře.\n\n### Kompozice\nSlouží ke správnému rozvržení obsahu do zón pro srozumitelné předání informací.\n\n---\n\n## 📸 Práce s obrazem\n\n### Ilustrace\n- **Estetické:** Slouží k úpravě vzhledu.\n- **Funkční:** Zvýrazňují určitý obsah.\n- **Formáty:** Ideálně vektorové (.ai, .eps, .svg, .pdf).\n\n### Rastrová grafika\n- Upravujeme ve Photoshopu nebo Lightroomu.\n- **Standardy pro tisk:** Rozlišení 300 [[06 Technologická příprava zakázky#Rozlišení|dpi]], barevný profil [[06 Technologická příprava zakázky#Barevnost|FOGRA39]].\n- **Formáty:** .raw, .psd, .tiff, .jpeg.\n\n### Export a uložení\n- **Otevřená data (.indd):** Nutno sbalit i s linkovanou grafikou a fonty.\n- **Uzavřená data (PDF/X):**\n  - **PDF/X1a:** Nejvhodnější pro standardní tisk, zplošťuje průhlednosti.\n  - **PDF/X4:** Moderní standard, zachovává průhlednosti a vrstvy.\n\n---\n## 🔗 Související témata\n- [[01 Reprodukce textu a obrazu|🖨️ Základy reprodukce]]\n- [[03 Polygrafické výrobky|📦 Polygrafické výrobky]]\n- [[Domů|Zpět na hlavní přehled]]",
            "audioUrl": "PLACEHOLDER-akcidencni-tiskoviny-audio",
            "notebookLmUrl": "https://notebooklm.google.com/",
            "quizUrl": "https://notebooklm.google.com/notebook/78cef2b4-9c6a-4ceb-bbb4-d6b25dcdcb24?artifactId=5a871595-6208-477d-87de-b08042f34fda",
            "flashcardsUrl": "https://notebooklm.google.com/notebook/78cef2b4-9c6a-4ceb-bbb4-d6b25dcdcb24?artifactId=5a871595-6208-477d-87de-b08042f34fda"
          },
          {
            "id": "graficka-uprava-novin",
            "title": "Grafická úprava novin",
            "description": "Sazba novin je specifická oblast zaměřená na rychlou čitelnost a přehlednost velkého množství informací. Využívá jasnou strukturu, vizuální hierarc...",
            "content": "# 📰 Grafická úprava novin\n\n>  Stručný přehled\n> Sazba novin je specifická oblast zaměřená na rychlou čitelnost a přehlednost velkého množství informací. Využívá jasnou strukturu, vizuální hierarchii a standardizované grafické prvky.\n\n---\n\n## 🏛️ Struktura a rozvržení\n\n- **Titulky (hlavní nadpisy):** Výrazný text (řez, velikost) pro upoutání pozornosti a orientaci.\n- **Podtitulky a upoutávky:** Kratší texty shrnující článek, zvýrazněné odsazením nebo řezem.\n- **Rubriky:** Tematické souhrny článků (sport, ekonomika atd.) pro lepší přehlednost.\n- **Články:** Základní jednotka obsahu (zprávy, reportáže, rozhovory, komentáře).\n\n---\n\n## ⚙️ Grafické úpravy a pravidla\n\n- **Typografie:** Konzistentní a čitelné písmo, jednotné zvýraznění.\n- **Sazba:** Zarovnání do bloku, rozdělení do sloupců.\n- **Proklad (řádkování):** Jednotný, ideálně cca 1,2 em pro dobrou čitelnost.\n- **Vizuální hierarchie:** Umístění obsahu dle důležitosti (horní polovina stránky je nejvýznamnější).\n\n### Grafické prvky v novinách\n- **Rámeček (Box):** Zdůraznění důležitého textu nebo obrázku.\n- **Dateline:** Řádek s místem a datem, často odlišen kurzívou; ukončuje článek.\n- **Infografika:** Vizualizace dat pomocí grafů a diagramů.\n- **Popisek:** Vysvětlující text pod fotografií nebo ilustrací.\n\n---\n## 🔗 Související témata\n- [[Akcidenční tiskoviny|📄 Akcidenční tiskoviny]]\n- [[03 Polygrafické výrobky|📦 Polygrafické výrobky]]\n- [[Domů|Zpět na hlavní přehled]]",
            "audioUrl": "PLACEHOLDER-graficka-uprava-novin-audio",
            "notebookLmUrl": "https://notebooklm.google.com/",
            "quizUrl": "https://notebooklm.google.com/notebook/a140e43c-965a-46fc-b704-281b73612a98?artifactId=0feb7cba-4904-4b3f-b2bf-e037d492f27d",
            "flashcardsUrl": "https://notebooklm.google.com/notebook/a140e43c-965a-46fc-b704-281b73612a98?artifactId=1c928ce4-bdd7-4360-96a9-aa44ca3cfce1"
          },
          {
            "id": "graficky-design",
            "title": "Grafický design",
            "description": "Grafický design je forma vizuální komunikace. Jeho cílem je předávat informace a zprávy pomocí kombinace obrazu, typografie a volného prostoru.",
            "content": "# 🎨 Grafický design\n\n>  Stručný přehled\n> Grafický design je forma vizuální komunikace. Jeho cílem je předávat informace a zprávy pomocí kombinace obrazu, typografie a volného prostoru.\n\n---\n\n## 🧱 Základní stavební kameny\n\n- **Čára:** Spojuje dva body, určuje směr, tvoří obrysy a odděluje prostor.\n- **Tvar:** Vyjadřuje emoce a řád. Rozlišujeme tvary geometrické (stabilita) a organické (přirozenost).\n- **Textura:** Vizuální nebo hmatová vlastnost povrchu (iluze hloubky a materiálu).\n\n---\n\n## ⚙️ Klíčové pojmy v designu\n\n### Vizuální gramotnost\nSchopnost mozku správně interpretovat vizuální symboly a zprávy.\n\n### White Space (Prázdné místo)\nNepotištěná plocha, která dodává designu vzdušnost, čitelnost a vizuální rovnováhu.\n\n### Kompozice\nUspořádání prvků na stránce. Mezi základní pravidla patří **pravidlo třetin** (zjednodušený zlatý řez).\n\n---\n## 🔗 Související témata\n- [[04 Design dokumentů|📐 Design dokumentů]]\n- [[Pojmy|🎨 Typografické pojmy]]\n- [[Domů|Zpět na hlavní přehled]]",
            "audioUrl": "/audio/Tec - graficky design.m4a",
            "notebookLmUrl": "https://notebooklm.google.com/",
            "quizUrl": "https://notebooklm.google.com/notebook/730b6bdf-8fce-488a-8f8e-8133c198aa80?artifactId=1de2c3c4-66e3-4ef1-b1f2-484b7d7d8a65",
            "flashcardsUrl": "https://notebooklm.google.com/notebook/730b6bdf-8fce-488a-8f8e-8133c198aa80?artifactId=da3530af-663e-4f7b-8b50-f944f131290f"
          },
          {
            "id": "natisk-a-nahled",
            "title": "Nátisk a náhled",
            "description": "Nátisk a náhled jsou klíčové kontrolní mechanismy v prepress fázi. Slouží k ověření obsahu a barevnosti před zahájením produkčního tisku.",
            "content": "# 🖼️ Nátisk a náhled\n\n>  Stručný přehled\n> Nátisk a náhled jsou klíčové kontrolní mechanismy v prepress fázi. Slouží k ověření obsahu a barevnosti před zahájením produkčního tisku.\n\n---\n\n## 🔎 Typy kontrol\n\n### 1. Nátisk (Hardproof)\nFyzický zkušební výtisk zakázky.\n- **Certifikovaný nátisk:** Garantuje barevnou přesnost dle normy ISO. Musí obsahovat měřitelný kontrolní klín (např. Ugra/Fogra).\n- **Maketový nátisk:** Slouží ke kontrole vyřazení stránek a celkového rozvržení.\n\n### 2. Náhled (Softproof)\nElektronická kontrola na monitoru.\n- Vyžaduje HW kalibrovaný monitor a správně nastavený systém správy barev (**CMS**).\n\n---\n\n## ⚙️ Důležité pojmy\n\n- **Autorská korektura:** Kontrola a schválení dat zákazníkem.\n- **ICC profil:** Soubor popisující barevné vlastnosti konkrétního zařízení.\n- **FOGRA:** Institut definující standardy pro ofsetový tisk.\n\n---\n## 🔗 Související témata\n- [[06 Technologická příprava zakázky|📁 Příprava zakázky]]\n- [[Kontrola tisku|🔍 Kontrola tisku]]\n- [[Domů|Zpět na hlavní přehled]]",
            "audioUrl": "/audio/Tec - Nátisk a náhled.m4a",
            "notebookLmUrl": "https://notebooklm.google.com/",
            "quizUrl": "https://notebooklm.google.com/notebook/30b02c18-d264-4db1-a714-9594f73e9db6?artifactId=c75d4357-4c8c-4608-8753-ee13376f2766",
            "flashcardsUrl": "https://notebooklm.google.com/notebook/30b02c18-d264-4db1-a714-9594f73e9db6?artifactId=c056b92b-4ce2-409d-972d-0618df5acb28"
          },
          {
            "id": "sazba-knihy",
            "title": "Sazba knihy",
            "description": "Sazba knihy vyžaduje dodržování přísných typografických pravidel a pochopení knižní anatomie. Hlavním nástrojem je v současnosti Adobe InDesign.",
            "content": "# 📚 Sazba knihy\n\n>  Stručný přehled\n> Sazba knihy vyžaduje dodržování přísných typografických pravidel a pochopení knižní anatomie. Hlavním nástrojem je v současnosti Adobe InDesign.\n\n---\n\n## 🏛️ Anatomie knihy\n\n- **Přebal:** Ochranný a dekorační obal přes tuhé desky.\n- **Předsádka:** Pevnější dvojlist spojující knižní blok s deskami.\n- **Patitul:** Zkrácený název knihy (před hlavním titulem).\n- **Tiráž:** Technické údaje o vydání knihy (rok, tiskárna, autoři).\n\n---\n\n## ⚙️ Technická pravidla\n\n- **Zrcadlo sazby:** Přesné vymezení plochy pro text a okrajů.\n- **Odstavcové styly:** Nezbytné pro konzistentní formátování celé knihy.\n- **Zlomy stran:** Nutnost hlídat správné napojení kapitol a eliminovat typografické chyby (vdovy, sirotci).\n\n---\n\n## 📂 Knižní vazby\n\n- **V1:** Sešitová měkká vazba (skobičky).\n- **V8:** Klasická tuhá vazba (vlepený knižní blok do desek).\n\n---\n## 🔗 Související témata\n- [[Typografie|🖊️ Typografie]]\n- [[Základní pravidla sazby|📐 Pravidla sazby]]\n- [[Domů|Zpět na hlavní přehled]]",
            "audioUrl": "/audio/Tec - Sazba knihy.m4a",
            "notebookLmUrl": "https://notebooklm.google.com/",
            "quizUrl": "https://notebooklm.google.com/notebook/39f4206b-5ef2-4417-8326-116e94ac7a5d?artifactId=a62728ac-ef85-4ab6-98bb-e61a8c6f1116",
            "flashcardsUrl": "https://notebooklm.google.com/notebook/39f4206b-5ef2-4417-8326-116e94ac7a5d?artifactId=cbf7e4c0-a5ec-4294-aea8-abc3486cabd9"
          },
          {
            "id": "typografie",
            "title": "Typografie",
            "description": "Typografie je umění a technika uspořádání písma. Zabývá se čitelností, estetikou a správným použitím grafických znaků v textu.",
            "content": "# 🖊️ Typografie\n\n>  Stručný přehled\n> Typografie je umění a technika uspořádání písma. Zabývá se čitelností, estetikou a správným použitím grafických znaků v textu.\n\n---\n\n## 🏛️ Základní dělení písma\n\n- **Patkové (Serif):** Tahy zakončené patkami (např. Times New Roman). Ideální pro dlouhé tištěné texty.\n- **Bezpatkové (Sans-serif):** Tahy bez patek (např. Helvetica). Moderní, vhodné pro nadpisy a obrazovky.\n\n---\n\n## ⚙️ Technické pojmy\n\n- **Čtverčík (em):** Relativní měrná jednotka (čtverec o straně velikosti písma).\n- **Verzálky:** Velká písmena.\n- **Minusky:** Malá písmena.\n- **Kapitálky:** Velká písmena zmenšená na výšku malých.\n\n---\n\n## 📏 Pravidla psaní\n\n- **Spojovník (-):** Spojuje slova, bez mezer.\n- **Pomlčka (–):** Naznačuje přestávku, s mezerami.\n- **Pevná mezera:** Brání osamocení jednohlásek na konci řádku.\n\n---\n## 🔗 Související témata\n- [[Pojmy|🎨 Typografické pojmy]]\n- [[Sazba knihy|📚 Sazba knihy]]\n- [[Domů|Zpět na hlavní přehled]]",
            "audioUrl": "/audio/Tec - typografie.m4a",
            "notebookLmUrl": "https://notebooklm.google.com/",
            "quizUrl": "https://notebooklm.google.com/notebook/b0ce2a53-e0fe-4e09-a023-a58afc0676c0?artifactId=18e69ceb-6d83-4adb-9e3a-e374be6a5100",
            "flashcardsUrl": "https://notebooklm.google.com/notebook/b0ce2a53-e0fe-4e09-a023-a58afc0676c0?artifactId=b93d1316-95c9-437e-b1d4-e535ed91d65a"
          },
          {
            "id": "zakladni-pravidla-sazby",
            "title": "Základní pravidla sazby",
            "description": "Profesionální sazba v InDesignu vyžaduje pochopení práce s rámečky, vazbami a geometrickými přesahy stránky.",
            "content": "# 📐 Základní pravidla sazby v InDesignu\n\n>  Stručný přehled\n> Profesionální sazba v InDesignu vyžaduje pochopení práce s rámečky, vazbami a geometrickými přesahy stránky.\n\n---\n\n## 🏛️ Práce v InDesignu\n\n- **Rámečky:** Všechny objekty mustí být v kontejnerech (textové, grafické).\n- **Řetězení:** Propojení rámečků pro plynulé přetékání textu.\n- **Vazby (Links):** Obrázky jsou externě nalinkovány pro zachování tiskové kvality.\n\n---\n\n## ⚙️ Geometrie stránky\n\n- **Spadávka (Bleed):** Přesah grafiky (cca 3 mm) pro bezpečný ořez.\n- **Ochranná zóna:** Vzdálenost textu od okraje archu.\n- **Vzorové stránky (Parent):** Šablony pro opakující se prvky (číslování, záhlaví).\n\n---\n\n## 🖊️ Typy sazby\n\n- **Hladká sazba:** Jednotný text bez ozdob.\n- **Smíšená sazba:** Text s obrázky, tabulkami a zvýrazněním.\n\n---\n## 🔗 Související témata\n- [[Typografie|🖊️ Typografie]]\n- [[06 Technologická příprava zakázky|📁 Příprava zakázky]]\n- [[Domů|Zpět na hlavní přehled]]",
            "audioUrl": "PLACEHOLDER-zakladni-pravidla-sazby-audio",
            "notebookLmUrl": "https://notebooklm.google.com/",
            "quizEasyUrl": "https://notebooklm.google.com/notebook/31f477b8-0e09-4c5a-b891-40dfee46d439?artifactId=341bbc1c-56c1-4c03-89b0-4eaa1f5fe846",
            "quizHardUrl": "https://notebooklm.google.com/notebook/31f477b8-0e09-4c5a-b891-40dfee46d439?artifactId=66a712f4-722b-46ec-af2a-0472b55d3a2e",
            "flashcardsUrl": "https://notebooklm.google.com/notebook/31f477b8-0e09-4c5a-b891-40dfee46d439?artifactId=e1ea2c66-7f4b-4c00-b3a7-82f571af10e8"
          },
          {
            "id": "casopisy",
            "title": "Časopisy",
            "description": "Časopisy jsou periodické tiskoviny určené specifickým skupinám čtenářů. Vyznačují se náročnější grafickou úpravou, kvalitnějším papírem a specifick...",
            "content": "# 📰 Časopisy\n\n>  Stručný přehled\n> Časopisy jsou periodické tiskoviny určené specifickým skupinám čtenářů. Vyznačují se náročnější grafickou úpravou, kvalitnějším papírem a specifickým knihařským zpracováním.\n\n---\n\n## 📂 Rozdělení a parametry\n\n### Obsahové rozdělení\n- Zpravodajské, odborné, módní, kulturní, hobby, dětské.\n\n### Používané vazby\n- **[[Sazba knihy#Měkké vazby|V1]]:** Klasické sešitové časopisy.\n- **[[Sazba knihy#Měkké vazby|V2]]:** Luxusnější časopisy, katalogy, příručky.\n\n---\n\n## ⚙️ Výrobní proces\n\n### Knihařské (dokončovací) zpracování\n- **Řezání:** Zpracování na čistý formát.\n- **Skládání:** Skládání do jednotlivých složek.\n- **Speciální úpravy:** Laminování obálky, UV lakování, ražba.\n\n### Příprava a sazba\n- Nastavení zrcadla sazby a typografie.\n- Úprava fotografií pro tisk ([[06 Technologická příprava zakázky#Rozlišení|DPI]], barevné korekce).\n- Kontrola a korektura (nátisk a náhled).\n\n---\n\n## 🎨 Grafická úprava obálky\n- **Výběr písma:** Musí odpovídat obsahu (móda = tenký patkový, IT = moderní bezpatkový).\n- **Výběr barev:** Standardně profil FOGRA39, harmonické nebo kontrastní kombinace.\n- **Rozvržení:** Dominantní logotyp v zóně pozornosti, hlavní titulek (zpráva), výrazné fotografie.\n- **Korektura:** Kontrola gramatiky a barevnosti (nátisk) před tiskem.\n\n---\n\n## 🖊️ Grafická úprava vnitřku\n- **Text:** Sazba do sloupců, zarovnání do bloku.\n- **Typografie:** Odsazení odstavců (čtverčík), důraz na čitelnost, časté užití patkového písma.\n- **Fotografie:** Musí doplňovat text (reportážní, portréty atd.).\n\n---\n## 🔗 Související témata\n- [[Akcidenční tiskoviny|📄 Akcidenční tiskoviny]]\n- [[03 Polygrafické výrobky|📦 Polygrafické výrobky]]\n- [[Domů|Zpět na hlavní přehled]]",
            "audioUrl": "PLACEHOLDER-casopisy-audio",
            "notebookLmUrl": "https://notebooklm.google.com/",
            "quizHardUrl": "https://notebooklm.google.com/notebook/1145c978-eb1b-4ae5-8a88-8f2460324352?artifactId=0a96b9d1-f360-4033-8a40-0e0df6d39daf",
            "quizEasyUrl": "https://notebooklm.google.com/notebook/1145c978-eb1b-4ae5-8a88-8f2460324352?artifactId=77e4927d-296e-4e38-9e25-38a29cdb36f6",
            "flashcardsUrl": "https://notebooklm.google.com/notebook/1145c978-eb1b-4ae5-8a88-8f2460324352?artifactId=02fcd48b-862d-4b75-9a54-e2df79009bc0"
          },
          {
            "id": "opakovani-2-rocniku",
            "title": "Opakování 2. ročníku",
            "description": "Souhrnný test, kartičky a podcast pro všechna témata za 2. ročník.",
            "content": "# 📝 Opakování 2. ročníku\n\nTato sekce slouží k ucelenému opakování všech témat probraných ve 2. ročníku. V pravém panelu najdeš souhrnný podcast, kvíz a sadu kartiček.",
            "audioUrl": "/audio/Tec - 2. rocnik - opakovani.m4a",
            "quizUrl": "https://notebooklm.google.com/notebook/ede81c83-987d-4f65-bc08-296b16ebb63c?artifactId=142059e7-d377-4787-a782-af7a53c0ff80",
            "flashcardsUrl": "https://notebooklm.google.com/notebook/ede81c83-987d-4f65-bc08-296b16ebb63c?artifactId=bda7e4f0-ce09-4dab-a472-edd2c17deb2f",
            "videoUrl": "https://notebooklm.google.com/notebook/ede81c83-987d-4f65-bc08-296b16ebb63c?artifactId=a332917c-6f8d-4ded-b3f0-875f137bac73",
            "presentationUrl": "https://notebooklm.google.com/notebook/ede81c83-987d-4f65-bc08-296b16ebb63c?artifactId=371375d4-e081-4a4a-bc59-b731389ae0e4"
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
            "content": "# 🖨️ Digitální tisk\n\n>  Stručný přehled\n> Digitální tisk je moderní technika umožňující přímý převod dat na materiál bez nutnosti tiskové formy. Klíčovým procesem je **[[Kontrola tisku#🖥️ RIP a elektronický bod|RIP]]** (převod dat na rastr). Tato technologie vyniká rychlostí, personalizací a efektivitou u malých nákladů.\n\n---\n\n## 📂 Druhy digitálního tisku\n\n### Tonerový tisk (Elektrofotografie)\n- Používá se v laserových tiskárnách (např. Konica Minolta).\n- **Princip:** Fotoválec se nabije, laser „vypálí“ obraz (vybití míst dopadu světla), toner (prášek) přilne k nabitým místům a teplem se zafixuje na materiál.\n\n### Inkoustový tisk (Inkjet)\n- Od domácích po velkoformátové stroje.\n- **Princip:** Tisková hlava vystřeluje mikrokapky inkoustu.\n- **Typy inkoustů:**\n  - Vodou ředitelné (papír).\n  - UV inkousty (vytvrzované UV lampou).\n  - Latexové (ekologické, venkovní reklama).\n\n---\n\n## ⚙️ Výhody a nevýhody\n\n### Výhody\n- **Rychlost:** Žádná příprava tiskové formy.\n- **Personalizace (VDP):** Každý výtisk může mít jiný obsah (jména, kódy).\n- **Efektivita:** Ekonomické pro malé náklady (0–500 ks).\n- **Materiály:** Široký výběr potiskovaných podkladů.\n\n### Nevýhody\n- Vyšší cena za kus u velkých nákladů.\n- Omezená trvanlivost inkoustů.\n- Nižší barevná stálost oproti ofsetu.\n\n---\n\n## 🏛️ Hlavní využití v polygrafii\n\n- **Akcidenční tiskoviny:** Vizitky, letáky, plakáty s variabilními daty.\n- **Reklamní tisk:** Velkoformátové bannery, rollupy.\n- **Vydavatelský tisk:**\n  - **Print-on-Demand (POD):** Tisk knih až po objednání zákazníkem.\n  - Časopisy v malých nákladech s vysokou kvalitou.\n- **Obalový design:** Tisk prototypů a personalizovaných obalů.\n- **Speciální materiály:** Textil, dřevo, sklo, kov ([[03 Polygrafické výrobky#UV tisk|UV tisk]]), řezané samolepky.\n\n---\n## 🔗 Související témata\n- [[01 Reprodukce textu a obrazu|🖨️ Základy reprodukce]]\n- [[Ofsetové barvy|🎨 Ofsetové barvy]]\n- [[Domů|Zpět na hlavní přehled]]",
            "audioUrl": "PLACEHOLDER-digitalni-tisk-audio",
            "notebookLmUrl": "https://notebooklm.google.com/",
            "quizUrl": "https://notebooklm.google.com/notebook/2a319f55-5717-4586-a1b4-3538bac9bce6?artifactId=8a7e528f-24f3-4343-b73b-f6e9671417be",
            "flashcardsUrl": "https://notebooklm.google.com/notebook/2a319f55-5717-4586-a1b4-3538bac9bce6?artifactId=1b3a37a5-8da8-42ed-b43e-277f84cadbdf"
          },
          {
            "id": "formaty-papiru-3",
            "title": "Formáty papíru",
            "description": "Systém velikostí papíru je standardizován normou **ČSN EN ISO 216**. Tento systém usnadňuje práci v tiskárnách a snižuje náklady díky efektivnímu v...",
            "content": "# 📄 Formáty papíru\n\n>  Stručný přehled\n> Systém velikostí papíru je standardizován normou **ČSN EN ISO 216**. Tento systém usnadňuje práci v tiskárnách a snižuje náklady díky efektivnímu využití archů.\n\n---\n\n## 📏 Standardizace a řady\nNorma ISO 216 platí po celém světě (s malými výjimkami) a zaručuje konzistentní rozměry.\n\n### Základní řady\n- **Řada A:** Základní formáty pro běžné použití.\n- **Řada B a SRA:** Větší formáty umožňující bezokrajový tisk (se spadávkou).\n  - **B:** Typické pro ofsetový tisk.\n  - **SRA:** Typické pro digitální tisk.\n- **Řada C:** Formáty určené pro obálky.\n\n### Princip poměru stran\nPoměr stran všech formátů je **1 : √2**. To umožňuje skládání papíru na polovinu při zachování stejného poměru stran.\n\n---\n\n## 📐 Rozdělení formátů v praxi\n- **Čistý:** Výsledný oříznutý formát tiskoviny.\n- **Hrubý (R):** Velikost formátu včetně spadávky (přesahu na ořez).\n- **Superhrubý (SR):** Označení pro celé tiskové archy (TA).\n\n---\n\n## 📂 Velikosti základních formátů\n\n| Název formátu | Šířka (mm) | Výška (mm) |\n| :--- | :--- | :--- |\n| **A4** | 210 | 297 |\n| **A3** | 297 | 420 |\n| **A5** | 148 | 210 |\n| **DL** | 210 | 99 |\n| **B2** | 500 | 707 |\n| **Vizitka česká** | 90 | 50 |\n| **Vizitka evropská** | 85 | 55 |\n\n---\n## 🔗 Související témata\n- [[05 Formáty papíru|📄 Základy formátů (1. ročník)]]\n- [[Výroba papíru|📜 Výroba papíru]]\n- [[Domů|Zpět na hlavní přehled]]",
            "audioUrl": "PLACEHOLDER-formaty-papiru-audio",
            "notebookLmUrl": "https://notebooklm.google.com/",
            "quizUrl": "https://notebooklm.google.com/notebook/15b8e438-5d4a-4e9d-bd82-62f8e5cee7bc?artifactId=7473041b-7eb7-4dac-8e3a-c3143226b99c",
            "flashcardsUrl": "https://notebooklm.google.com/notebook/15b8e438-5d4a-4e9d-bd82-62f8e5cee7bc?artifactId=2a1bed00-846b-49ea-b8dd-871924ce32ea"
          },
          {
            "id": "kontrola-tisku",
            "title": "Kontrola tisku",
            "description": "Kontrola tisku zajišťuje shodu mezi návrhem a výsledkem. Využívá měřicí přístroje (denzitometr), kontrolní prvky (měrný proužek) a systémy správy b...",
            "content": "# 🔍 Kontrola tisku\n\n>  Stručný přehled\n> Kontrola tisku zajišťuje shodu mezi návrhem a výsledkem. Využívá měřicí přístroje ([[Kontrola tisku#🏛️ Měřicí přístroje|denzitometr]]), kontrolní prvky (měrný proužek) a systémy správy barev (**CMS**).\n\n---\n\n## 📏 Měrný proužek a parametry\nKvalita se měří na políčkách měrného proužku pomocí **[[Kontrola tisku#🏛️ Měřicí přístroje|denzitometru]]**.\n\n### Zkoumané parametry:\n- **Sytost a správnost barev:** Kontrola pod kalibrovaným denním světlem.\n- **Oboustranný tisk:** Lícování přední a zadní strany archu.\n- **Tiskový kontrast:** Čitelnost, zejména u textů.\n- **Soutisk:** Přesné překrytí barev (využití knihovny PANTONE).\n\n---\n\n## 🖥️ [[Digitální tisk#Co to je?|RIP]] a elektronický bod\n- **[[Digitální tisk#Co to je?|RIP]] (Raster Image Processor):** Převod dat na tiskový rastr.\n  - Parametry: Tvar bodu, hustota (**LPI**), typ rastrování (**AM/FM**).\n- **Elektronický bod:** Nejmenší jednotka obrazu (pixel).\n- **Rozlišení:** Počet bodů na délku (např. **[[06 Technologická příprava zakázky#Rozlišení|DPI]]**) určuje výslednou kvalitu.\n\n---\n\n## 🎨 Color Management (CMS)\nCílem CMS je barevná shoda napříč zařízeními.\n\n### [[Kontrola tisku#ICC profil|ICC profil]]\n- Datový soubor popisující barevné možnosti konkrétního zařízení.\n- Umožňuje převod mezi barevnými prostory (např. z RGB monitoru do tiskového [[06 Technologická příprava zakázky#Barevnost|CMYKu]]).\n\n### Barevné modely (prostory)\nBarvy jsou definovány nezávisle na zařízení na základě vnímání lidským okem.\n\n---\n## 🔗 Související témata\n- [[06 Technologická příprava zakázky|📁 Příprava zakázky]]\n- [[01 Reprodukce textu a obrazu|🖨️ Základy reprodukce]]\n- [[Domů|Zpět na hlavní přehled]]",
            "audioUrl": "PLACEHOLDER-kontrola-tisku-audio",
            "notebookLmUrl": "https://notebooklm.google.com/",
            "quizUrl": "https://notebooklm.google.com/notebook/2bba4988-c5d5-44e8-a21b-6ffc0c580589?artifactId=a19bebe6-21f5-43fb-9c44-49e2a5bcc0c0",
            "flashcardsUrl": "https://notebooklm.google.com/notebook/2bba4988-c5d5-44e8-a21b-6ffc0c580589?artifactId=e8fa79eb-0030-4ed4-9bc5-2a231eac837a"
          },
          {
            "id": "skener",
            "title": "Skener",
            "description": "Skener je vstupní hardwarové zařízení pro digitalizaci obrazových předloh. Proces využívá osvit předlohy a následné zachycení odraženého nebo prošl...",
            "content": "# 📷 Skener\n\n>  Stručný přehled\n> Skener je vstupní hardwarové zařízení pro digitalizaci obrazových předloh. Proces využívá osvit předlohy a následné zachycení odraženého nebo prošlého světla senzorem.\n\n---\n\n## ⚙️ Princip skenování\n1. **Nasvícení:** Předloha je na ploše osvětlena zdrojem (např. LED).\n2. **Odraz/Průchod:** Světlo se odrazí (odrazová předloha) nebo projde (průhledná předloha) a je zachyceno optickým snímačem.\n3. **Převod:** Informace jsou převedeny A/D převodníkem na digitální data.\n4. **Uložení:** Data jsou uložena do souboru.\n\n---\n\n## 📂 Typy předloh a parametry\n\n### Typy předloh\n- **Odrazová:** Běžná (papír).\n- **Průhledná:** Pozitiv, negativ (filmy).\n\n### Základní parametry\n- **Procento reprodukce:** Nastavení při zvětšování pro zachování správného rozlišení.\n- **Barevný režim:**\n  - **Duplex:** Dvě barvy (černá + doplňková pro tónování).\n  - **Stupně šedi:** 256 odstínů černé.\n  - **Čtyřbarvotisk:** Plný CMYK.\n\n---\n\n## 🛠️ Typy skenerů\n\n- **Ruční:** Malá kvalita, nepřesné ovládání, dnes jen specifické užití.\n- **Stolní (Plochý):** Předloha leží na skle, pod ním projíždí rameno. Vhodné pro tenké předlohy.\n- **Bubnový:** Předloha nalepená na rotujícím válci, snímání paprskem. Nejvyšší kvalita.\n- **Filmový:** Specializovaný na digitalizaci filmů a diapozitivů.\n\n---\n## 🔗 Související témata\n- [[06 Technologická příprava zakázky|📁 Příprava zakázky]]\n- [[01 Reprodukce textu a obrazu|🖨️ Základy reprodukce]]\n- [[Domů|Zpět na hlavní přehled]]",
            "audioUrl": "PLACEHOLDER-skener-audio",
            "notebookLmUrl": "https://notebooklm.google.com/",
            "quizUrl": "https://notebooklm.google.com/notebook/78efb2b7-b8f6-4c9b-9cbf-5c1b7c0b4bc8?artifactId=66c9128d-2e90-4f92-8846-1d4fffc39b79",
            "flashcardsUrl": "https://notebooklm.google.com/notebook/78efb2b7-b8f6-4c9b-9cbf-5c1b7c0b4bc8?artifactId=9729fa60-26ca-4c0a-a102-fd077424396b"
          },
          {
            "id": "opakovani-3-rocniku",
            "title": "Opakování 3. ročníku",
            "description": "Souhrnný test, kartičky a podcast pro všechna témata za 3. ročník.",
            "content": "# 📝 Opakování 3. ročníku\n\nTato sekce slouží k ucelenému opakování všech témat probraných ve 3. ročníku. V pravém panelu najdeš souhrnný podcast, kvíz a sadu kartiček.",
            "audioUrl": "/audio/Tec - 3. rocnik - opakovani.m4a",
            "quizUrl": "https://notebooklm.google.com/notebook/4a4b3bbb-5192-4835-8be9-da59a9f42a2c?artifactId=df10cf3b-71e2-4850-9dbc-c91c1b018c16",
            "flashcardsUrl": "https://notebooklm.google.com/notebook/4a4b3bbb-5192-4835-8be9-da59a9f42a2c?artifactId=d0e5cf88-eef2-4a0d-aad9-6105d7e47514",
            "videoUrl": "https://notebooklm.google.com/notebook/4a4b3bbb-5192-4835-8be9-da59a9f42a2c?artifactId=4adc8523-eb48-47d7-8b83-4926d0a477ce",
            "presentationUrl": "https://notebooklm.google.com/notebook/4a4b3bbb-5192-4835-8be9-da59a9f42a2c?artifactId=3e4d8cdf-4726-4dc5-b629-4a0c84ae7aea"
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
            "content": "# 🎨 Ofsetové barvy\n\n>  Stručný přehled\n> Vysoce pigmentované, pastózní barvy s malým obsahem pojiv. Musí umožnit dokonalé vybarvení i při velmi tenkém filmu a nesmí zasychat na válcích.\n\n---\n\n## 🧪 Vlastnosti ofsetových barev\n- **Pastózní konzistence.**\n- **Nízká tloušťka filmu.**\n- **Vysoká pigmentace.**\n\n---\n\n## 🖨️ Typy ofsetového tisku\n\n### Archový tisk\n- Vyšší viskozita barev.\n\n### Kotoučový tisk\n- Obsahuje více pigmentů a minerálních olejů.\n- **Heatsetové barvy:** Zasychají horkým vzduchem nebo IR zářením.\n- **Coldsetové barvy:** Zasychají za pokojové teploty (novinový tisk).\n\n---\n\n## 📂 Další rozdělení a zpracování\n\n### Speciální úpravy\n- **Bigování:** Vytváření rýhy pro snazší skládání u silnějších materiálů (letáky, krabičky).\n\n### Rozdělení dle využití\n- Knižní barvy, novinové barvy, barvy pro časopisy.\n- Barvy pro tisk obalů a etiket.\n- Ofset bez vlhčení (obsahují speciální oleje).\n\n\n---\n## 🔗 Související témata\n- [[01 Reprodukce textu a obrazu|🖨️ Základy reprodukce]]\n- [[Výroba papíru|📜 Výroba papíru]]\n- [[03 Polygrafické výrobky|📦 Polygrafické výrobky]]\n- [[Domů|Zpět na hlavní přehled]]",
            "audioUrl": "PLACEHOLDER-ofsetove-barvy-audio",
            "notebookLmUrl": "https://notebooklm.google.com/",
            "quizUrl": "PLACEHOLDER-ofsetove-barvy-kviz",
            "flashcardsUrl": "PLACEHOLDER-ofsetove-barvy-karticky"
          },
          {
            "id": "vyroba-papiru",
            "title": "Výroba papíru",
            "description": "Papír se vyrábí z papíroviny – vodné suspenze rostlinných vláken (buničina, dřevina), plnidel, klížidel a barviv.",
            "content": "# 📜 Výroba papíru\n\n>  Stručný přehled\n> Papír se vyrábí z papíroviny – vodné suspenze rostlinných vláken (buničina, dřevina), plnidel, klížidel a barviv.\n\n---\n\n## 🧪 Složení papíroviny\n- **Voda:** Pro ředění a transport.\n- **Rostlinná vlákna:** Základní surovina (nejčastěji dřevo).\n  - **Dřevina:** Mechanicky získaná vlákna.\n  - **Buničina:** Chemicky získaná vlákna (vyšší kvalita).\n- **Plnidla:** Zlepšují tiskové vlastnosti, vyplňují mezery mezi vlákny.\n- **Klížidla:** Zajišťují odolnost proti vodě a propíjení barev.\n- **Barviva:** Pro dosažení požadovaného odstínu.\n\n---\n\n## ⚙️ Papírenský stroj\nProces probíhá ve čtyřech hlavních fázích:\n\n1. **Sítová část:** Nátok naředěné vláknoviny na síto.\n2. **Lisová část:** Odsávání vody tlakem.\n3. **Sušící část:** Odstranění zbylé vlhkosti teplem.\n4. **Hladící stolice a navíječ:** Uhlazení povrchu a navinutí na role.\n\n\n---\n## 🔗 Související témata\n- [[05 Formáty papíru|📄 Formáty papíru]]\n- [[01 Reprodukce textu a obrazu|🖨️ Základy reprodukce]]\n- [[Ofsetové barvy|🎨 Ofsetové barvy]]\n- [[Domů|Zpět na hlavní přehled]]",
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
            "title": "Typografické pojmy",
            "description": "Základní terminologie v oblasti písma a typografie. Pochopení anatomie písem a jejich klasifikace je nezbytné pro každého grafika.",
            "content": "# 🎨 Typografické pojmy\n\n>  Stručný přehled\n> Základní terminologie v oblasti písma a typografie. Pochopení anatomie písem a jejich klasifikace je nezbytné pro každého grafika.\n\n---\n\n## 🏛️ Anatomie písma\nKaždý znak má svou vnitřní strukturu a parametry.\n- **Účaří (Baseline):** Pomyslná linka, na které písmo „stojí“.\n- **Střední výška (x-height):** Výška malých písmen bez horních a dolních dotahů.\n- **Horní a dolní dotahy:** Části písmen vyčnívající nad nebo pod střední výšku.\n\n---\n\n## ⚙️ Parametry textu\n- **Kerning:** Vyrovnání mezer mezi konkrétními dvojicemi písmen.\n- **Tracking (Prostrkání):** Rovnoměrná úprava mezer mezi všemi znaky v bloku textu.\n- **Proklad (Leading):** Svislá mezera mezi řádky.\n\n---\n\n## 🖊️ Klasifikace písem\n\n### Dle konstrukce\n1. **Dynamická osa:** Nakloněná, vychází z psaní rukou.\n2. **Statická osa:** Rovné, svislé písmo.\n\nMění zaoblení písmen, šířku oblouků a celkový vizuální dojem fontu.\n\n\n---\n## 🔗 Související témata\n- [[04 Design dokumentů|📐 Design dokumentů]]\n- [[Domů|Zpět na hlavní přehled]]",
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
