# Java ST-1 — Study Website

Java ST-1 syllabus ko detail me samjhane wali study website — Hinglish notes + code examples, phase-wise built. Pure HTML/CSS/JS static site, koi build step nahi.

## Modules

| Module | Page | Topics |
|---|---|---|
| 1 | `intro.html` | Java Basics — JVM/JDK/JRE, variables, data types |
| 2 | `control-flow.html` | I/O, Comments & Control Flow (if-else, switch, loops) |
| 3 | `methods.html` | Methods & Parameter Passing |
| 4 | `arrays-strings.html` | Arrays & Strings |
| 5 | `oop.html` | Classes, Objects, Constructors & `this` |
| 6 | `static.html` | Static Members & Blocks |

Home page: `index.html` — saare modules ka navigation.

## Quick Start

```bash
git clone https://github.com/ashudhanda/java-st1.git
cd java-st1
```

Browser me `index.html` kholo, ya locally serve karo:

```bash
# Python
python -m http.server 8000

# ya Node
npx serve .
```

## Project Structure

```
java-st1/
├── index.html            # Home — module navigation
├── intro.html            # Module 1: Java Basics
├── control-flow.html     # Module 2: I/O & Control Flow
├── methods.html          # Module 3: Methods
├── arrays-strings.html   # Module 4: Arrays & Strings
├── oop.html              # Module 5: OOP basics
├── static.html           # Module 6: Static
├── css/                  # Stylesheets
└── js/                   # Page scripts
```

## Tech

- **HTML/CSS/JS** — no frameworks, no build tools
- Hinglish explanations + runnable Java code examples
- Offline-friendly once cloned

## License

MIT — see [LICENSE](LICENSE).
