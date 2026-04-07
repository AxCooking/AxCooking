# AxCooking

Rezept-Webseite von [AxCooking](https://www.axcooking.com) — einfache und köstliche Rezepte zum Nachkochen.

## Technologie

- Single-Page-Application als eine `index.html`
- Gehostet auf GitHub Pages unter `www.axcooking.com`
- Daten gespeichert als JSON im Repository (`data/recipes.json`, `data/stats.json`, `data/likes.json`, `data/comments.json`)
- Rezeptbilder in `images/`
- Statische SEO-Seiten in `recipes/` (Schema.org JSON-LD)
- Excel-Import (XLSX.js) für Rezeptverwaltung

## Struktur

```
index.html          — Komplette Webseite
data/
  recipes.json      — Alle Rezeptdaten
  stats.json        — Klickzahlen
  likes.json        — Likes
  comments.json     — Kommentare
images/             — Rezeptbilder (800×450px, optimiert)
recipes/            — Statische SEO-Seiten pro Rezept
sitemap.xml         — Sitemap für Google
robots.txt          — Crawler-Anweisungen
CNAME               — Custom Domain (www.axcooking.com)
```
