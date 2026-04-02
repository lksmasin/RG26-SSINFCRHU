# Obsidian Vault Overview: Reprodukční grafik 26

This is an Obsidian vault dedicated to educational notes for the "Reprodukční grafik" (Reproduction Graphic Designer) field. It is structured to organize study materials by subject and school year, using Dataview for dynamic navigation and indexing.

## Directory Overview

- **`.obsidian/`**: Configuration and plugins (Dataview, Minimal Settings).
- **`sesity/`**: The core directory for all notes, organized by subject.
  - **`Materiály/`**: Notes regarding printing materials.
  - **`Písmo a odborné kreslení/`**: Notes on typography and technical drawing.
  - **`Polygraficka výroba/`**: Notes on polygraphic production.
  - **`Technologie/`**: Extensive notes on printing and reproduction technology, subdivided into school years (1., 2., 3. ročník).
- **`Domů.md`**: The main dashboard of the vault, featuring visual "Subject Cards" and dynamic lists of recently updated notes.
- **`sesity/Sablona.md`**: The standardized template for creating new study notes.

## Key Files & Logic

### Note Template (`sesity/Sablona.md`)
All study notes should follow the established structure:
- **YAML Frontmatter**: Includes `Předmět`, `Ročník`, `Téma`, `Číslo`, `Stav` (🔴/🟡/🟢), and `Štítky`.
- **Title**: `# [Emoji] [Téma]`
- **Abstract**: `> [!ABSTRACT] Stručný přehled` callout for quick summaries.
- **Sections**: Uses `##` and `###` headers with `---` separators.
- **Related Links**: A dedicated `## 🔗 Související témata` section at the end.

### Subject Bases (`.base` files)
Files like `Technologie.base` are configured for the **Database Folder** plugin (or similar property-based views). They define:
- Metadata properties (`Stav`, `Ročník`, `Téma`, etc.).
- Table views that filter notes by folder and sort them by school year and number.

### Dashboard (`Domů.md`)
Utilizes **Dataview** queries to:
- List the 3 most recent notes for each subject card.
- Show a global table of the 5 most recently modified notes.
- Display total note counts per subject.

## Usage Guidelines

1. **Creating Notes**: Always use the `sesity/Sablona.md` to ensure metadata is correctly filled. This metadata is critical for the dashboard and subject tables to function.
2. **Metadata Hygiene**: Ensure `Předmět` matches exactly with the values expected by the Dataview queries in `Domů.md` (e.g., "Technologie", "Materiály").
3. **Linking**: Use contextual wikilinks for technical terms. Prefer linking to the specific heading where a term is defined (e.g., `[[06 Technologická příprava zakázky#Rozlišení|DPI]]`).
4. **Organization**: Store new notes in the appropriate `sesity/[Subject]/[Year]. ročník/` folder.
