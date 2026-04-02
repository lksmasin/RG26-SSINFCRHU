---
Předmět: Technologie
Ročník: 1. ročník
Téma: Reprodukce textu a obrazu
Číslo: 1
Stav: 🟢 Hotovo
Štítky: [reprodukce, tisk, polygrafie, CMYK]
---
# 🖨️ Reprodukce textu a obrazu

> [!ABSTRACT] Stručný přehled
> Tiskem se rozumí přenos obrazu a textu podle předlohy pomocí tiskové formy a tiskové barvy na tiskový materiál. Tento proces využívá různé techniky a principy barevné reprodukce ([[06 Technologická příprava zakázky#Barevnost|CMYK]]).

---

## **Definice tisku**
- tiskem se rozumí přenos obrazu a textu podle předlohy
- tisk se provádí pomocí tiskové formy a tiskové barvy
- tisk se provádí na tiskový materiál

## Tisková forma
- matrice obsahující tisknoucí a netisknoucí místa
- přenáší barvu na potiskovaný materiál
- pro různé techniky existují odlišné tiskové formy

## Tisková barva
- barva určená výhradně k potisku
- směs pigmentů a dalších přísad pro lepší fixaci barvy na potiskovaný materiál
- pro různé tiskové techniky se používají různé barvy

## Tisková technika
- proces, ve kt. se realizuje tisk podle předlohy v daném počtu a barevnosti
- historickým vývojem se ustálilo několik základních tiskových technik, kt. se liší principem tisku a tiskovou formou
- tisknoucí místo je součást tiskové formy, na kt. se váže barva přenášená na potiskovaný materiál, opakem je netisknoucí místo

## Dělení tiskových technik
- Dle použití tiskové formy
  - Konvenční: tiskové techniky používající tiskovou formu
  - Digitální: předloha je vytvářena digitálně - pomocí PC
- Dle způsobu přenosu barev
  - Přímé techniky: potiskovaný materiál příchází do přímého kontaktu s tiskovou formou
  - nepřímé techniky: tiskovou barvu přenášíme pomocí pomocí přenosového prvku (např. ofsetový válec, tampón) a až po té na potiskovaný materiál

---

## Tisk z plochy (litografie, ofset)
- tisknoucí i netisknoucí místa jsou ve stejné výšce
- barva se správně uchytí na potiskovaný materiál pomocí povrchového napětí materiálů

### Druhy tisku z plochy
- **Litografie (kamenotisk)**
- přímý přenos barvy
- tisková forma je kamenná deska z vápence
- kresba na kámen se provádí mastnou litografickou tuší nebo jinými mastnými barvami
- hotovou kresbu přetíráme roztokem arabské gumy
- **[[01 Reprodukce textu a obrazu#Ofset|Ofset]]**
- nepřímý přenos barvy
- tisková forma je tenká kovová nebo polyesterová deska
- ofsetové tiskové formy jsou ohebné

### **Proč CMY…K?**
- vzájemným překrytím všech barev by měla vzniknout barva černá
- v praxi to tak ale není, z důvodu znečištění tiskových barev
- výsledná překrytá barva je spíše do hněda, tisk ztrácí kontrast
- v praxi se to řeší přidáním černé barvy (BLAC**K**)
- spousta tiskovin obsahuje černý text – místo míchání tří barev použijeme 1 a proto je tisk levnější
- černou barvu můžeme v některých odstínech zmenšit množství tiskových barev -> levnější tisk, kratší doba schnutí

---

## **Tiskový rastr**
- tiskové stroje nejsou schopny vytisknout veškeré odstíny a tóny barev
- obraz se rozloží na síť malých plošek (tiskové body)
- tyto plochy musí být menší než rozlišovací schopnost oka, pak jsou vnímány jako celá plocha
- tiskový rastr je vypočítán v procesu [[Digitální tisk#Co to je?|RIP]] (Raster Image Processor)

### **Hustota tiskového rastru**
- uvádí počet tiskových bodů v určité ploše tisku
- hodnota se nejčastěji udává v **lpi** – lines per inch
- volba hustoty závisí na:
  - **způsob tisku** (technické limity)
  - **potiskovaný materiál** (savost, hrubost papíru)
  - **pozorovací vzdálenost** (např. billboard vs. kniha)

---

## **Výstup a formát PDF**
- data k tisku není vhodné předávat v otevřených formátech (.indd, .ai…)
- výhody formátu PDF:
  - snadné zobrazení na všech platformách
  - omezená kontrola a oprava dat
  - malá velikost souborů
  - fonty jsou vložené přímo do dokumentu
- před archovou montáží dochází ke kontrole **preflight** (fonty, barvy, rozlišení)

### **Standardy PDF/X**
- mezinárodní standard PDF/X pro jednoznačnou výměnu dat
- zjednodušené PDF, které zakazuje rizikové prvky (např. interaktivní prvky)
- cíle: maximální spolehlivost, bezpečnost a zjednodušení předávání dat

---
## 🔗 Související témata
- [[Výroba papíru|📜 Výroba papíru]]
- [[Ofsetové barvy|🎨 Ofsetové barvy]]
- [[03 Polygrafické výrobky|📦 Polygrafické výrobky]]
- [[Domů|Zpět na hlavní přehled]]
