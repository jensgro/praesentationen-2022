# Präsentationsübersicht - Stand 2022
Eine Sammlung älterer und noch aktueller Präsentation. Alle sind auf Basis von [Reveal.js](https://revealjs.com/) erstellt worden.
Meine ursprüngliche Implementierung habe ich jetzt auf Basis von [11ty](https://11ty.dev) modernisiert.
Alles auf Basis der Methodik von [Jérôme Coupé](https://github.com/jeromecoupe), die er [in einem Artikel](https://www.webstoemp.com/blog/eleventy-projects-structure/) zusammengefasst hat.

## Die Präsentationen

Die diversen Präsentationen stehen für sich. Sie teilen sich aber gemeinsame Assets und haben zusätzlich noch spezielle Assets.

Ich nutze hier die Eigenart von 11ty aus, von sich aus jede Markdown-Datei in ein eigenes Verzeichnis auszugeben. Die Assets werden dann über Gulp-Prozesse kopiert. Deshalb wird neben dem normalen Watcher auch immer ein kurzer Gulp-Prozess benötigt. 

## Die Skripte

Neben den Skripten, die für die Arbeit an Präsentationen durch Watcher von Interesse sein können, soll jede Präsentation ein eigenes Skript bekommen. So können einzelne Präsentationen zielgerichtet erstellt werden.

**`npm start`**

11ty wird mit Watchern auf Sass und Änderungen an HTML und den Templates auf localhost:8080 gestartet.

**`npm run build`**

Das Ergebnis dieses Tasks kann live gehen. Bei einem Hoster wie Netlify sollte dieser Task getriggert werden.

**`npm run clean`**

Die statische Ausgabe des Projektes wird gelöscht.

**`npm run theme`**
Das jeweils aktive Theme wird ausgegeben und verteilt.
