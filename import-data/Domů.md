# 📔 Přehled poznámek – Reprodukční grafik 26

---

## 🏛️ Hlavní předměty

> [!abstract] [[Technologie.base|⚙️ Technologie]]
> **Poslední poznámky:**
> ```dataview
> LIST
> FROM "sesity/Technologie"
> WHERE Předmět = "Technologie" AND !contains(file.name, ".base")
> SORT file.mtime DESC
> LIMIT 3
> ```

---

> [!example] [[Písmo a odborné kreslení.base|🎨 Písmo a odborné kreslení]]
> **Poslední poznámky:**
> ```dataview
> LIST
> FROM "sesity/Písmo a odborné kreslení"
> WHERE Předmět = "Písmo a odborné kreslení" AND !contains(file.name, ".base")
> SORT file.mtime DESC
> LIMIT 3
> ```

---

> [!info] [[Materiály.base|📦 Materiály]]
> **Poslední poznámky:**
> ```dataview
> LIST
> FROM "sesity/Materiály"
> WHERE Předmět = "Materiály" AND !contains(file.name, ".base")
> SORT file.mtime DESC
> LIMIT 3
> ```

---

> [!success] [[Polygrafická výroba.base|🏭 Polygrafická výroba]]
> **Poslední poznámky:**
> ```dataview
> LIST
> FROM "sesity/Polygraficka výroba"
> WHERE Předmět = "Polygrafická výroba" AND !contains(file.name, ".base")
> SORT file.mtime DESC
> LIMIT 3
> ```

---

## 🕒 Nedávno upravené poznámky
```dataview
TABLE Ročník, Číslo, Téma, file.mday AS "Upraveno"
FROM "sesity"
WHERE Předmět AND !contains(file.name, ".base")
SORT file.mtime DESC
LIMIT 5
```

---

## 📊 Statistiky
```dataview
TABLE count(file.name) AS "Počet poznámek"
FROM "sesity"
WHERE Předmět AND !contains(file.name, ".base")
GROUP BY Předmět
```
